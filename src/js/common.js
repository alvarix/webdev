window.addEventListener("load", () => 
  setExternalLinks()
);

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


