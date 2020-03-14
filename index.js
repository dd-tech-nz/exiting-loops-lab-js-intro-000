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
  findFn(array)
}

function findFn(aray) {
    const c = Math.floor(Math.random() * 100);
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== c) {
        return null
      }
    }
}
