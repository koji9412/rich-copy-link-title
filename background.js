chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const title = document.title,
          url = location.href,
          htmlLink = `<a href="${url}">${title}</a>`,
          blob = new Blob([htmlLink], { type: "text/html" }),
          data = [new ClipboardItem({ "text/html": blob })];
        navigator.clipboard.write(data).catch(() => {});
      },
    });
  } catch {
    return;
  }
});
