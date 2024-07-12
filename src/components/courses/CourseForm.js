import React, {useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function CourseForm() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm();
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const onSubmit = async (data) => {
        try {
          await axios.post(
            "https://global-learn-backend.onrender.com/courses",
            data
          );
          setSubmitSuccess(true);
          reset();
        } catch (error) {
          console.error("Error:", error);
        }
      };

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Add New Course</h2>
          <div class="mb-3">
            <label htmlFor="name" class="form-label">Course Name</label>
            <input type="text" class="form-control" 
            id="name"
            {...register("name", { required: "Name is required" })}/>
            {errors.name && (
            <span style={{ color: "red", marginTop: "4px", display: "block" }}>
              {errors.name.message}
            </span>
          )}
          </div>
          <div class="mb-3">
            <label htmlFor="description" class="form-label">Description</label>
            <input type="text" class="form-control" 
            id="description"
            {...register("description", { required: "Description is required" })}/>
          </div>
          <div class="mb-3">
            <label htmlFor="course_code" class="form-label">Course Code</label>
            <input type="text" class="form-control" 
            id="code"
            {...register("code", { required: "Course code is required" })}/>
          </div>
          <div class="mb-3">
            <label htmlFor="duration_years" class="form-label">Duration</label>
            <input type="text" class="form-control" 
            id="duration"
            {...register("duration", { required: "Duration in years is required" })}/>
          </div>
          <div class="mb-3">
            <label htmlFor="teacher_id" class="form-label">Instructor Id</label>
            <input type="text" class="form-control" 
            id="instructor"
            {...register("instructor", { required: "Instructor id is required" })}/>
            {errors.instructor && (
            <span style={{ color: "red", marginTop: "4px", display: "block" }}>
              {errors.instructor.message}
            </span>
          )}
          </div>
          
          <button type="submit" disabled={isSubmitting} class="btn btn-primary">
          {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {submitSuccess && (
          <div style={{ color: "green", marginTop: "10px" }}>
            Submission successful!
          </div>
        )}
        </form>
    </div>
  )
}
