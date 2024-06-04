/**
 * Returns a list of students
 *  @returns {{id: number, firstName: String, location:string}[]} 
 */


export default function getListStudents(){
    const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
      ];

      return students;
}