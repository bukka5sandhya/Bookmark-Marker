// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkFormEle = document.getElementById("bookmarkForm");
let siteNameInputEle = document.getElementById("siteNameInput");
let siteUrlInputEle = document.getElementById("siteUrlInput");
let submitBtnEle = document.getElementById("submitBtn");
let bookmarksListEle = document.getElementById("bookmarksList");
let siteNameErrMsgEle = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEle = document.getElementById("siteUrlErrMsg");

function addBookMark() {
    let siteName = siteNameInputEle.value;
    let siteUrl = siteUrlInputEle.value;
    let listEle = document.createElement("li");
    bookmarksListEle.appendChild(listEle);

    let bookmarkName = document.createElement("p");
    let bookmarkUrl = document.createElement("a");
    bookmarkName.textContent = siteName;
    bookmarkUrl.textContent = siteUrl;
    bookmarkUrl.href = siteUrl;
    bookmarkUrl.setAttribute("target", "_blank");
    bookmarksListEle.classList.toggle("d-none");
    listEle.appendChild(bookmarkName);
    listEle.appendChild(bookmarkUrl);


}