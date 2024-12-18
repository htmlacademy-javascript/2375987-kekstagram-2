
import {createNewProfile} from './createArray.js';
// Ищем шаблон
const POST_AMOUNT = 25;
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const documentFragment = document.createDocumentFragment();
const photosMiniatures = createNewProfile(POST_AMOUNT);

photosMiniatures.forEach(({id, url, description, comments, likes}) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.dataset.pictureId = id;
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;
  documentFragment.appendChild(picture);
});

pictures.appendChild(documentFragment);

export {photosMiniatures};

