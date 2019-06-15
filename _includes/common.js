
/* --- Interface functions --- */

function downloadAsset(asset) {
  document.location = asset;
  setStatus("Download started.");
}
  
function couldNotDownloadAsset(text) {
  console.log("Could not download asset from release.");
  setStatus("Failed to download file" + (text ? ": " + text : "."));
}

function setStatus(text) {
  var status = document.getElementById("status");
  status.innerText = text;
}

/* --- Initialization --- */

function parseRepository(referrer) {
  var split_url = referrer.split("//", 2)[1].split("/", 3);
  var domain = split_url[0];
  var user = split_url[1];
  var repository = split_url[2];
  if (domain == "github.com") {
    return new GithubRepository(user, repository);
  } else if (domain.endsWith(".github.io")) {
    repository = user;
    if (repository == undefined) {
      repository = domain;
    }
    user = domain.slice(0, domain.length - 10);
    return new GithubRepository(user, repository);
  } else {
    console.error("TODO: what to do when the repository can not be determined?")
    couldNotDownloadAsset("Repository could not be determied.");
  }
  return null;
}

function startDownload() {
  var path = document.location.pathname.split("/").slice(1);
  /* We have these cases:
   * https://niccokunzmann.github.io/file.txt
   * https://niccokunzmann.github.io/download_latest/file.txt
   * https://niccokunzmann.github.io/ORG/REPO/file.txt
   * https://niccokunzmann.github.io/download_latest/ORG/REPO/file.txt
   */
  var repository;
  if (path.length >= 3) {
    repository = new GithubRepository(path[path.length - 3], path[path.length - 2])
  } else if (document.referrer) {
    repository = parseRepository(document.referrer);
  } else {
    couldNotDownloadAsset();
    return;
  }
  repository.startDownload();
}

/* --- helper functions --- */

// onSuccess and onError are called with the XMLHttpRequest as first argument
function httpRequest(url, onSuccess, onError) {
  var httpreq = new XMLHttpRequest();
  var repository = this;
  httpreq.open("GET", url, true);
  httpreq.onload = function(e) {
    if (httpreq.readyState === 4) {
      if (httpreq.status === 200) {
        onSuccess(httpreq);
      } else {
        onError(httpreq);
      }
    }
  }
  if (onError) {
    httpreq.onerror = function(e) {
      onError(httpreq);
    }
  } else {
    httpreq.onerror = onError = function() {
      console.error(httpreq.statusText);
    }
  }
  httpreq.send(null);
}
