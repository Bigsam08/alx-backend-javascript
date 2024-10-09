function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((student) => student.location === city);
}
export default getStudentsByLocation;
