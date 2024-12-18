// Заведите модуль, который будет отвечать за отрисовку окна с полноразмерным изображением.
// Окно должно открываться при клике на миниатюру. Данные для окна (изображение, комментарии, лайки и так далее) берите из того же объекта, который использовался для отрисовки соответствующей миниатюры.
// Для отображения окна нужно удалять класс hidden у элемента .big-picture и каждый раз заполнять его данными о конкретной фотографии:
// Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.
// Количество лайков likes подставьте как текстовое содержание элемента .likes-count.
// Количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count.
// Общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count.
// Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:
// <li class="social__comment">
//   <img
//     class="social__picture"
//     src="{{аватар}}"
//     alt="{{имя комментатора}}"
//     width="35" height="35">
//   <p class="social__text">{{текст комментария}}</p>
// </li>
// Описание фотографии description вставьте строкой в блок .social__caption.
// После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.
// После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.
// Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
// Подключите модуль в проект.
import { photosMiniatures} from './createThumbnail.js';
import {isEscapeKey} from './util.js';
const pictureBig = document.querySelector('.big-picture');
const pictureBigImg = pictureBig.querySelector('.big-picture__img').querySelector('.img');
const countLikes = pictureBig.querySelector('.likes-count');
// const showLikes = pictureBig.querySelector('.social__comment-shown-count');
// const totalLikes = pictureBig.querySelector('.social__comment-total-count');
const commentList = pictureBig.querySelector('.social_comments');
const commentItem = pictureBig.querySelector('.social__comment');
const caption = pictureBig.querySelector('.social__caption');
const pictureBigcloseButton = document.querySelector('#picture-cancel');
const body = document.body;
pictureBig.classList.remove('hidden');
// создаю функцию где убираю класс хидден, чтоб показать фотку
// const openPicturevBig = () => {
//   pictureBig.classList.remove('hidden');
//   body.classList.add('modal-open');
// };

// / создаю функцию где добавляю класс хидден, чтоб показать фотку
const hidePictureBig = () => {
  pictureBig.classList.add('hidden');
  body.classList.remove('modal-open');
};
// функция закрытия, которая вызывает функцию
const closePictureBig = () => {
  hidePictureBig();
};

// ставлю отработчик на кнопку крестик, чтоб при клике закрывалось
pictureBigcloseButton.addEventListener('click', () => {
  closePictureBig();
});

// делаю функцию чтоб заполнять данные о конкретной фотографии:

const openPicture = (pictureId) => {
  // find() — это метод массива, который возвращает первый элемент, удовлетворяющий условию, указанному в переданной функции.
  // (photo) => photo.id === Number(pictureId) — это стрелочная функция, которая проверяет, совпадает ли id текущего объекта photo с pictureId, преобразованным в число.
  const photoCurrent = photosMiniatures.find((photo) => photo.id === Number(pictureId));
  // document.createDocumentFragment() создает пустой фрагмент документа.  Зачем ? для того, чтобы хранить DOM-элементы
  const commentsFragment = document.createDocumentFragment();

  pictureBigImg.src = photoCurrent.url;
  countLikes.textContent = photoCurrent.likes;
  // очищает содержимое элемента, который отображает список комментариев. Это необходимо, чтобы удалить старые комментарии перед тем, как добавить новые, связанные с выбранной фотографией
  commentList.innerHTML = '';

  // Добавление новых комментариев
  photoCurrent.comments.forEach((comment) => {
    const commentSocial = commentItem.cloneNode(true); // Клонируем элемент шаблона
    commentSocial.querySelector('.social__picture').src = comment.avatar; // Устанавливаем аватар
    commentSocial.querySelector('.social__picture').alt = comment.name; // Устанавливаем alt
    commentSocial.querySelector('.social__text').textContent = comment.message; // Устанавливаем текст комментария

    // Добавляем клонированный элемент в список комментариев
    commentList.appendChild(commentSocial);
  });
  commentList.appendChild(commentsFragment);
  caption.textContent = photoCurrent.description;
  // удаляю класс
  pictureBig.classList.remove('hidden');
  // добавляю класс
  body.classList.add('modal-open');
};

export {openPicture};
