function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue){
      break;
    } else {
      array[i] = changeValue;
    }

  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if( array[i] === skipValue) {
      continue;
    } else {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn) {
  if (!findFn(array)) {
    return null;
  }
}

function findFn(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'c') {
      return array[i]
    }
    if (array[i] === 'moose') {
      return array[i]
    }
  }
  return false
}
