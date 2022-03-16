var urlThing = ""

function getURL() {
  chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    console.log(tab.url);
    urlThing = String(tab.url)
});
readURL()
}
chrome.tabs.onUpdated.addListener(function() {
  getURL();
})

function readURL() {
  if (urlThing.includes(".pdf")) {
    console.log("pdf")
  }
}

var bookmarkedPages = [{"url": "pageNum"}]


function savePage(pageNumber) {
        if (urlThing.includes(".pdf")) {
            bookmarkedPages.push({"url": urlThing, "pageNum": pageNumber})
            chrome.storage.local.set({bookmarks: bookmarkedPages}, function() {
                console.log("bookmarked: " + String(bookmarkedPages))
            })
        } else {
            console.log("not a pdf")
        }
}