
function GithubRepository(user, repository) {
  this.user = user;
  this.repository = repository;
  this.githubRepository = user + "/" + repository;
}


GithubRepository.prototype.getAssetName = function() {
  var split_path = document.location.pathname.split("/");
  return split_path[split_path.length - 1];
}

GithubRepository.prototype.redirectToReleaseFile = function(release) {
  console.log(release);
  var assetName = this.getAssetName();
  console.log("Looking for asset: " + assetName)
  var downloaded = false;
  var names = [];
  for (var i = 0; i < release.assets.length; i+=1) {
    var asset = release.assets[i];
    names.push(asset.name);
    if (asset.name == assetName) {
      downloadAsset(asset.browser_download_url);
      downloaded = true;
    }
  }
  if (!downloaded) {
    couldNotDownloadAsset("File " + assetName + " not found. Should be one of " + names.join(", ") + ".");
  }
}

GithubRepository.prototype.startDownload = function () {
  var url = "https://api.github.com/repos/" + this.githubRepository + "/releases/latest";
  var repository = this;
  httpRequest(url, function(httpreq) {
    repository.redirectToReleaseFile(JSON.parse(httpreq.responseText));
  }, function () {
    couldNotDownloadAsset("Invalid repository name.")
  });
}


