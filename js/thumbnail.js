// Отобразить фотографии других пользователей.

// Адрес изображения url подставьте как атрибут src изображения.
// Описание изображения description подставьте в атрибут alt изображения.
// Количество лайков likes выведите в блок .picture__likes.
// Количество комментариев comments выведите в блок .picture__comments.
// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

// Подключите модуль в проект.

//     <a href="#" class="picture">
//       <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
//       <p class="picture__info">
//         <span class="picture__comments"></span>
//         <span class="picture__likes"></span>
//       </p>
//     </a>
// {
//   id: getRandomInRange(1, 25),
//   url: `photos/${getRandomInRange(1, 25)}.jpg`,
//   description: descriptionProfile[randomDescription],
//   likes: getRandomInRange(minLikes, maxLikes),
//   comments: createComents()
// }
import {createNewProfile} from './createArray.js';
// Ищем шаблон
const POST_AMOUNT = 25;
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const documentFragment = document.createDocumentFragment();
const photos = createNewProfile(POST_AMOUNT);

photos.forEach((photo) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = photo.url;
  picture.querySelector('.picture__img').alt = photo.description;
  picture.querySelector('.picture__likes').textContent = photo.likes;
  picture.querySelector('.picture__comments').textContent = photo.comments.length;
  documentFragment.appendChild(picture);
});

pictures.appendChild(documentFragment);

export {photos};

