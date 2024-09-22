const checkString = function (myString, myLength) {
  // проверяю символы и длину
  if (myString.length <= myLength) {
    return true;
  } else {
    return false;
  }
};
checkString('Добрыйдень', 20);

// «Нормализовать» полученную строку, для чего:
// let stringNew = ' ';
const checkPallindrome = function (stringNew) {
  // убрать с помощью метода replaceAll() все пробелы,
  // привести строку к верхнему (метод toUpperCase()) или к нижнему (метод toLowerCase()) регистру,
  stringNew = stringNew.replaceAll(' ', '').toUpperCase();
  // записать полученную строку в новую переменную.
  let stringEmpty = ' ';
  // делаю обратный цикл, переворачиваю слово
  for (let i = stringNew - 1; i >= 0; i--) {
    stringEmpty += stringNew.at(i);
  }
  return stringEmpty === stringEmpty;
};

checkPallindrome('Нигин');
console.log(checkPallindrome('Нигин'));
