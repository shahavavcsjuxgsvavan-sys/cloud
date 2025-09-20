
  function updateFavicon(newFavicon) {
    // Eski faviconni topamiz
    const oldFavicon = document.querySelector("link[rel='icon']");
    if (oldFavicon) {
      oldFavicon.remove();
    }

    // Yangi favicon elementi yaratamiz
    const newFaviconElement = document.createElement("link");
    newFaviconElement.rel = "icon";
    newFaviconElement.type = "image/png";
    newFaviconElement.href = newFavicon;

    // Uni head ichiga qo‘shamiz
    document.head.appendChild(newFaviconElement);
  }

  // Faviconni yangilaymiz
  updateFavicon("https://i.ibb.co/7JtHCyxZ/Picsart-25-05-19-16-35-05-121.png");
