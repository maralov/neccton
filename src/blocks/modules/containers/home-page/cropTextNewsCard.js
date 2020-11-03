
const cropElementText = (elem, sizeText) => {
  const cropElement = document.querySelectorAll(elem),
    size = sizeText,
    endCharacter = '...';
  
  if (!cropElement) return

  cropElement.forEach(el => {
    let text = el.innerHTML;
    if (el.innerHTML.length > size) {
      text = text.substr(0, size);
      el.innerHTML = text + endCharacter;
    }
  });
}

cropElementText('.news-card .news-card__title', 45)
cropElementText('.news-card .news-card__description', 130)
cropElementText('.page-banner .page-banner__description', 95)
