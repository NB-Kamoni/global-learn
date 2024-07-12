import React, { useEffect, useState } from "react";
import Sidebar from '../sidebar/Sidebar';
import './Courses.css';


function CourseTable(){
  const [courses, setCourses] = useState([])
    
  useEffect(() => {
    fetch("http://127.0.0.1:5555/courses")
        .then((r) => r.json())
        .then(data => setCourses(data))
        .catch(error => console.error('Error fetching courses:', error));
    }, [])

    if (!courses.length) {
        return <div>Loading...</div>;
    }
  return (
   <div className="table">
     <table className="table table-hover">
       <thead>
        <tr className="table-primary">
         <th scope="col">#</th>
         <th scope="col">Name</th>
         <th scope="col">Description</th>
         <th scope="col">Course code</th>
         <th scope="col">Duration(Years)</th>
         <th scope="col">Instructor</th>
        </tr>
       </thead>
       {courses.map(course =>(
       <tbody>
          <tr>
           <th scope="row">{course.course_id}</th>
           <td>{course.name}</td>
           <td>{course.description}</td>
           <td>{course.course_code}</td>
           <td>{course.duration_years}</td>
           <td>{course.teacher_id}</td>
          </tr>
        </tbody>
        ))}
     </table> 
    </div>
    )
}

export default CourseTable;