export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + array[array.indexOf(value)]);
  }

  return newArray;
}
