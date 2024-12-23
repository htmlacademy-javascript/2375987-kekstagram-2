import {
  pictures
} from './createThumbnail.js';
import {
  isEscapeKey
} from './util.js';

const pictureBig = document.querySelector('.big-picture');
const pictureBigImg = pictureBig.querySelector('.big-picture__img').querySelector('img');
const countLikes = pictureBig.querySelector('.likes-count');
const showLikes = pictureBig.querySelector('.social__comment-shown-count');
const totalLikes = pictureBig.querySelector('.social__comment-total-count');
const commentList = pictureBig.querySelector('.social_comments');
const commentItem = pictureBig.querySelector('.social__comment');
const caption = pictureBig.querySelector('.social__caption');
const pictureBigcloseButton = document.querySelector('#picture-cancel');
const body = document.body;
pictureBig.classList.remove('hidden');

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
  const photoCurrent = pictures.find((photo) => photo.id === Number(pictureId));
  const commentsFragment = document.createDocumentFragment();

  pictureBigImg.src = photoCurrent.url;
  countLikes.textContent = photoCurrent.likes;

  // Очищаем предыдущие комментарии
  commentList.innerHTML = '';

  // Добавление новых комментариев
  photoCurrent.comments.forEach((comment) => {
    const commentSocial = commentItem.cloneNode(true); // Клонируем элемент шаблона
    commentSocial.querySelector('.social__picture').src = comment.avatar; // Устанавливаем аватар
    commentSocial.querySelector('.social__picture').alt = comment.name; // Устанавливаем alt
    commentSocial.querySelector('.social__text').textContent = comment.message; // Устанавливаем текст комментария
    commentsFragment.appendChild(commentSocial); // Добавляем комментарий во фрагмент
  });

  // Вставляем все комментарии в список
  commentList.appendChild(commentsFragment);

  // Обновляем счетчики комментариев
  showLikes.textContent = photoCurrent.comments.length;
  totalLikes.textContent = photoCurrent.comments.length; //  показывать общее количество комментариев

  // Показываем большую фотографию
  pictureBig.classList.remove('hidden');
  body.classList.add('modal-open');
};

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closePictureBig();
  }
});

export {
  openPicture
};
