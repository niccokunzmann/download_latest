
/* --- Interface functions --- */

function downloadAsset(asset) {
  document.location = asset;
}
  
function couldNotDownloadAsset() {
  console.log("Could not download asset from release.")
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
  }
  return null;
}

function downloadFrom(website) {
  if (website) {
    var repository = parseRepository(website);
    repository.startDownload();
  } else {
    couldNotDownloadAsset();
  }
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
