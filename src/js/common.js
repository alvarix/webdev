window.addEventListener("load", () => {
  setExternalLinks();
  addClassToAnchorsInHeaders('effect');
});


/**
 * Adds `target="_blank"` to all external links on the page.
 */
const setExternalLinks = () => {
  const anchorLinks = document.querySelectorAll("a");

  anchorLinks.forEach((link) => {
    const isExternal = 
      link.host !== window.location.host && 
      (link.protocol === "http:" || link.protocol === "https:");
      
    if (isExternal) {
      link.setAttribute("target", "_blank");
      link.className = "ext-link";
    }
  });
};

const addClassToAnchorsInHeaders = (addClassName) => {
  const headers = document.querySelectorAll('h2, h3');
  headers.forEach(header => {
    // Check if there are anchors inside the header
    const anchors = header.querySelectorAll('a');
    if (!anchors.length) {
      console.warn(`No anchors found inside header:`, header);
      return;
    }
    // Add the class to each anchor
    anchors.forEach(anchor => {
      anchor.classList.add(addClassName);
      anchor.style.textDecoration='none'
    });
  });
};
