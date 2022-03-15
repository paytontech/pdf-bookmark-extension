function getURL() {
  chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    console.log(tab.url);
    return tab;
});
readURL()
}
chrome.tabs.onUpdated.addListener(function() {
  getURL();
})

function readURL() {
  if (getURL.url.contains(".pdf")) {
    console.log("pdf")
  }
}

