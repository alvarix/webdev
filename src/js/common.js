export {
  setExternalLinks,
  addClassToAnchorsInHeaders,
  toggleElBlur,
}


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
      link.classList.add("ext-link");
    }
  });
};

const addClassToAnchorsInHeaders = (addClassName) => {
  const headers = document.querySelectorAll('h2, h3');
  headers.forEach(header => {
    // Check if there are anchors inside the header
    const anchors = header.querySelectorAll('a');
    if (!anchors.length) {
      return;
    }
    // Add the class to each anchor
    anchors.forEach(anchor => {
      anchor.classList.add(addClassName);
      anchor.style.textDecoration='none'
    });
  });
};


const toggleElBlur = (element) => {
  const el = document.querySelector(element);
  el.style.display='block';

  if (el) {
    el.style.filter='blur(10px)';
    setTimeout(() => {
      el.style.filter='blur(0px)';
    }, "200");
  }
}

