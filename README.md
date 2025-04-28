# Adding the Backend and Frontend setup sections more explicitly into the README content.

readme_content_with_setups = """# 🧩 Job Portal Application

Welcome to the **Job Portal Application** — a modern full-stack web application designed to connect job seekers with employers, featuring an intuitive UI, secure authentication, and a dynamic search experience.

---

## 📚 Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Theme](#theme)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About

The Job Portal Website aims to streamline the job search and hiring process with a rich set of features, including real-time notifications, secure API access, social logins, and an elegant, responsive design.

---

## ✨ Features

### 1. User Registration and Authentication
- Register via Email & Password.
- Social Logins: Google and LinkedIn OAuth integration.
- Secure Login with JWT token protection.
- OTP verification via Email.
- Password Management: Forgot/Reset Password and Change Password.

### 2. User Profile Management
- Create and update personal profile with photo and contact details.
- Upload, update, and delete resumes (PDF or DOC).
- Manage Skills, Certifications, and Work Experience.

### 3. Job Search and Application
- Advanced search with filters: Keywords, Location, Categories, Company, Experience, Salary Range, and Job Type.
- View detailed Job Descriptions.
- Apply directly through the portal with Resume and Cover Letter.
- Track the status of job applications.

### 4. Employer Functionality
- Post, Update, and Delete job vacancies.
- Set Job Visibility (Public or Private).
- Manage Applicants and contact them directly through the portal.

### 5. Notifications and Alerts
- Real-time Job Alerts based on preferences.
- Email Notifications for Application Status Updates.

### 6. Additional Features
- Save Jobs for future application.
- View detailed Company Profiles.
- Interactive User Dashboard for managing activities (Saved Jobs, Applied Jobs, Recommended Jobs).

### 7. Security and Performance
- Protected routes according to user roles.
- JWT-based secured API communication.
- Fully Responsive and Mobile Friendly.
- Smooth Animations and UI Transitions.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux, TailwindCSS, Mantine UI, Tabler Icons
- **Backend**: Spring Boot
- **Database**: MongoDB
- **Authentication**: JWT, Google OAuth, LinkedIn OAuth
- **Email Service**: OTP Verification, Application Notifications
- **Deployment**: (Optional) AWS, Docker

---

## 🚀 Installation

### Prerequisites
- Node.js v16+
- Java 17+ and Maven
- MongoDB
- Git

---

### 📦 Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
