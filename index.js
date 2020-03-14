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
  if (!findFn(array, value)) {
    return null;
  }
}

function findFn(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'c' || array[i] ==='moose') {
      return array[i]
    }
  }
}
