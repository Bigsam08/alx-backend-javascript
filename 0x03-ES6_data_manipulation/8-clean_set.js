export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || startString.length === 0) return result;
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      result += `${element.substring(startString.length)}-`;
    }
  });
  return result.endsWith('-') ? result.slice(0, -1) : result;
}
