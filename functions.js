const checkString = function (myString, myLength) {
  if (myString.length <= myLength) {
    return true;
  } else {
    return false;
  }
};
checkString('Добрыйдень', 20);


const checkPallindrome = function (stringNew) {
  stringNew = stringNew.replaceAll(' ', '').toUpperCase();
  let stringEmpty = ' ';
  for (let i = stringNew - 1; i >= 0; i--) {
    stringEmpty += stringNew.at(i);
  }
  return stringEmpty === stringEmpty;
};

checkPallindrome('Нигин');
