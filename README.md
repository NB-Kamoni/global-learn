# School Management System

## Overview

The School Management System is a comprehensive platform designed to manage various aspects of a school's operations. This system provides functionalities for students, instructors (teachers), and administrators, each with specific permissions and capabilities. 

## Features

The system is divided into several key components:

- **Exams**: Manage and view exam schedules and results.
- **Opportunities**: Track and manage opportunities available for students.
- **Analytics**: Provides data-driven insights and reports.
- **Finance**: View and manage financial information such as school fees and salaries.
- **Profile**: Manage user profiles and personal information.
- **Auth**: Handles user authentication and authorization.
- **Help**: Provides assistance and support documentation.
- **Schedule**: Manages and views the school schedule.
- **Calendar**: Displays and manages school events and deadlines.
- **Home**: The landing page of the application.
- **Sidebar**: Navigation component for accessing various sections of the system.
- **Choppy**: AI help to respond to common questions.
- **Messages**: Communication module for sending and receiving messages.
- **User Dashboard**: Personalized dashboard for each user role.
- **Courses**: Manage and view course details.
- **Navbar**: Navigation bar for easy access to different parts of the application.
- **Enquiries**: Handles student inquiries and concerns.
- **Notes**: Allows users to take and view notes within the school system.

## User Roles and Permissions

### Admin
- **CRUD Operations**: Create, Read, Update, Delete operations across all components.
- **Finance**: View and adjust school fees and teacher salaries.
- **Courses**: View and adjust all courses.
- **Enquiries**: Manage and respond to inquiries.

### Instructors (Teachers)
- **View**: Access course details and exam schedules.
- **Finance**: View teacher salaries.
- **Courses**: View courses they are associated with.

### Students
- **View**: Access their own profile, course details, and exam results.
- **Finance**: View school fees.
- **Courses**: View courses they are enrolled in.
## User Authentication

The system features domain-based user authentication. Depending on the domain used to access the system, users can log in as different roles:

- **Students**: Accessible via the student domain.
- **Instructors (Teachers)**: Accessible via the instructor domain.
- **Admin**: Accessible via the admin domain.

This allows for streamlined and secure access based on the user’s role, ensuring that each user sees only the relevant information and functionalities.
## Technologies Used
- Frontend: React.js, HTML, CSS
- Backend: Node.js, Python
- Authentication: Firebase
- Database: MySQL
- Other Tools: Firebase for authentication.

## Getting Started

To get started with the School Management System, follow these steps:

1. **Clone the Repository**:
   ```git clone git@github.com:NB-Kamoni/global-learn.git```
2. **Start the Apllication**:
    npm start
    The application should now be running on http://localhost:3000.
