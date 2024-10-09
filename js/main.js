// description, строка — описание фотографии
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

// рандомайзер числа из массива
const randomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// генерирую число
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createProfile = () => {
  const randomDescription = randomInteger(0, descriptionProfile.length - 1);
  const randomMessage = randomInteger(0, messageProfile.length - 1);
  const randomName = randomInteger(0, nameProfile.length - 1);

  return {
    id: getRandomInRange(1, 25),
    url: `photos/${getRandomInRange(1,25)}.jpg`,
    description: descriptionProfile[randomDescription],
    likes: getRandomInRange(15, 200),

    comments: [{
      idComments: getRandomInRange(10, 80),
      avatar: `img/avatar-${getRandomInRange(1,6)}.svg.`,
      message: messageProfile[randomMessage],
      name: nameProfile[randomName],
    }]
  };
};
const countNumber = 25;
const newProfile = Array.from({length: countNumber}, createProfile);
