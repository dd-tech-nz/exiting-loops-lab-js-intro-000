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
  for (let i = 0; i < array.length; i++) {
    var answer = findFn(array[i])
  }
  return answer
}

function findFn(array) {
    if (!array.indexOf('c')) {
      return null
    }
}
