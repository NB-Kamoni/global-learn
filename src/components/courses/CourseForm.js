import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function CourseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const onSubmit = async (data) => {
    try {
      // Adjust the data structure to match what your backend expects
      const postData = {
        name: data.name,
        description: data.description,
        course_code: data.code,
        duration_years: parseInt(data.duration), // Assuming duration is in years
        teacher_id: parseInt(data.instructor), // Assuming instructor id is an integer
      };

      await axios.post("http://127.0.0.1:5555/courses", postData);
      setSubmitSuccess(true);
      reset(); // Reset the form after successful submission
      setSubmitError(null); // Reset any previous errors
    } catch (error) {
      console.error("Error:", error);
      setSubmitError("Failed to submit the form. Please try again."); // Display a generic error message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Add New Course</h2>
        {submitError && (
          <div style={{ color: "red", marginBottom: "10px" }}>{submitError}</div>
        )}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Course Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span style={{ color: "red", marginTop: "4px", display: "block" }}>
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && (
            <span style={{ color: "red", marginTop: "4px", display: "block" }}>
              {errors.description.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="code" className="form-label">
            Course Code
          </label>
          <input
            type="text"
            className="form-control"
            id="code"
            {...register("code", { required: "Course code is required" })}
          />
          {errors.code && (
            <span style={{ color: "red", marginTop: "4px", display: "block" }}>
              {errors.code.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className="form-label">
            Duration (years)
          </label>
          <input
            type="text"
            className="form-control"
            id="duration"
            {...register("duration", { required: "Duration is required" })}
          />
          {errors.duration && (
            <span style={{ color: "red", marginTop: "4px", display: "block" }}>
              {errors.duration.message}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="instructor" className="form-label">
            Instructor Id
          </label>
          <input
            type="text"
            className="form-control"
            id="instructor"
            {...register("instructor", { required: "Instructor id is required" })}
          />
          {errors.instructor && (
            <span style={{ color: "red", marginTop: "4px", display: "block" }}>
              {errors.instructor.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {submitSuccess && (
          <div style={{ color: "green", marginTop: "10px" }}>
            Submission successful!
          </div>
        )}
      </form>
    </div>
  );
}