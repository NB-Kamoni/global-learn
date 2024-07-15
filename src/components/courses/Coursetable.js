import React, { useEffect, useState } from "react";
import './Courses.css';
import { MdDelete } from "react-icons/md";



function CourseTable({onDelete}){
  const [courses, setCourses] = useState([])
    
  useEffect(() => {
    fetch("http://127.0.0.1:5555/courses")
        .then((r) => r.json())
        .then(data => setCourses(data))
        .catch(error => console.error('Error fetching courses:', error));
    }, [])

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:5555/courses/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete course');
      }
      onDelete(id);
    })
    .catch(error => {
      console.error('Error deleting course:', error);
    });
  };


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
           {/* <button onClick={() => handleDelete(course.id)}>Delete</button> */}
           <div className='delete'>
             <MdDelete onClick={() => handleDelete(course.course_id)}/>
           </div>
          </tr>
        </tbody>
        ))}
     </table> 
    </div>
    )
}

export default CourseTable;