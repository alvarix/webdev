 const getPageName = () => {
  return Astro.params?.slug || Astro.url.pathname.split('/').filter(Boolean).pop();
};
