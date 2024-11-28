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

// Ищем шаблон
const puctureTemplate = document.querySelector('#picture').content.querySelector('.picture');
// Ищем контейнер куда будет вставляться шаблон
const picturesContainer = document.querySelector('.pictures');

const pictureImg = document.querySelector('.picture__img');
const pictureComments = document.querySelector('.picture__comments');
const pictureLikes = document.querySelector('.picture__likes');

