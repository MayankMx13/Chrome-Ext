document.getElementById("titleButton").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];
    document.getElementById("tabTitle").textContent =
      "Current Tab Title: " + currentTab.title;
  });
});
