function getListsStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.map((student) => student.id);
}

export default getListsStudentIds;
