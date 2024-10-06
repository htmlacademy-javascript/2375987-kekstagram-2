

// id случайные от 1 до 15
const idProfile = [];
const idTotal = 25;
for(let i = 1; i <= idTotal; i++) {
  idProfile.push(i);
}

// вставила в массив картинки
const avatarProfile = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

// описание к аватару
const descriptionProfile = [
  'Отдыхаю',
  'Каникулы!',
  'В баре',
  'Люблю поесть',
  'Мое хобби',
  'Отпуск',
  'На работе',
  'На даче',
  'Классно',
];

// количество лайков,
const likesProfile = [];
const likesTotal = 200;
for (let j = 15; j <= likesTotal; j++){
  likesProfile.push(j);
}

// комментарии к фото
const messageProfile = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const nameProfile = [
  'Люба',
  'Саша',
  'Тория',
  'Паша',
  'Олег',
  'Марина',
  'Сережа',
];
// Рандомайзер случайного числа,
const randomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// создаю функцию, где мы будем создавать объект
const createProfile = () => {
  const randomId = randomInteger (0, idProfile.length - 1);
  const randomAvatar = randomInteger (0, avatarProfile.length - 1);
  const randomDescription = randomInteger (0, descriptionProfile.length - 1);
  const randomLikes = randomInteger (0, likesProfile.length - 1);
  const randomMessage = randomInteger (0, messageProfile.length - 1);
  const randomName = randomInteger (0, nameProfile.length - 1);

  // возвращаем объект, в котором  обращения к индексам массива
  return {
    id: idProfile[randomId],
    avatar: avatarProfile[randomAvatar],
    description: descriptionProfile[randomDescription],
    likes: likesProfile[randomLikes],
    message:messageProfile[randomMessage],
    name: nameProfile[randomName],
  };
};
const quantityCount = 25;
const newProfile = Array.from({length:quantityCount}, createProfile);
console.log(newProfile);

