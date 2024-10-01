export default function iterateThroughObject(reportWithIterator) {
  let nxt = reportWithIterator.next();
  let empty = '';

  while (!nxt.done) {
    empty += `${nxt.value} | `;
    nxt = reportWithIterator.next();
  }
  return empty.slice(0, empty.length - 3);
}
