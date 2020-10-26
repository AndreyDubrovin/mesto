# Проект 4: Место

**Проектная** работа № 4. В данном проекте используются:
1. Flex.
2. Grid.
3. БЭМ.

Внешний вид сайта соответствует макету в **Figma**

Ссылка на проект:
1. [Место](https://andreydubrovin.github.io/mesto/)


function openAndClosePopup () {
  if (popup.classList.contains ('popup_opened')) {
    popup.classList.toggle('popup_opened');
  } else {
    popup.classList.toggle('popup_opened');
    formPopupName.setAttribute('value', nameOfAuthor.textContent);
    formPopupSignature.setAttribute('value', signatureOfAuthor.textContent);
  }
}
