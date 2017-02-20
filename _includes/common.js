
function downloadAsset(asset) {
  document.location = asset;
}
  
function couldNotDownloadAsset() {
  console.log("Could not download asset from release.")
}

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