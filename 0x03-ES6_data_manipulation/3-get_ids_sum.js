export default function getStudentIdsSum(studentList) {
  return studentList.reduce((preValue, currentValue) => preValue + currentValue.id, 0);
}
