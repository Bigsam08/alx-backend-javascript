export default function groceriesList() {
  const items = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Bananas', 5],
  ];

  const groceryMap = new Map();
  for (const item of items) {
    groceryMap.set(item[0], item[1]);
  }
  return groceryMap;
}
