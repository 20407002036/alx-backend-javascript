/**
 * Gets the ids of students if the args is of type array
 * @author Solomon Kaniaru
 * @returns list of ids
 */

import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));
