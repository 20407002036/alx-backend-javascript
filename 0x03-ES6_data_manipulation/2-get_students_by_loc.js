/**
 * Gets stud by ocation
 * 
 * @author Solomon
 * @returns list of studs from same location
 */

export default function getStudentsByLocation(students, city) 
{
    if (students instanceof Array){
       return students.filter((student) => student.location === city);
    }
}