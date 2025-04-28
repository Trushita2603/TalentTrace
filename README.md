# 🧩 Job Portal Website

Welcome to the **Job Portal Website** — a modern full-stack web application designed to connect job seekers with employers, featuring an intuitive UI, secure authentication, and a dynamic search experience.

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
   ```

2. Install the dependencies and run the Spring Boot application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

3. Configure your MongoDB URI inside `src/main/resources/application.properties`:
   ```properties
   spring.data.mongodb.uri=mongodb://localhost:27017/jobportal
   ```

4. Ensure MongoDB server is running locally or provide your MongoDB Atlas URL.

---

### 🎨 Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install the necessary Node modules:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm run dev
   ```

4. Configure API base URL inside `.env`:
   ```env
   VITE_API_URL=http://localhost:8080/api
   ```

---

## 💻 Usage

- Users can register/login via email or social media.
- Employers can post and manage job listings.
- Candidates can search and apply for jobs.
- Admins can monitor and control the system (if admin functionality added).

---

## 🎨 Theme

- **Dark Mode**  
  - **Background**: `#2D2D2D`
  - **Primary Font**: Poppins
- **Button Color**: `#FFD149`
- **Color Palette**:
  - **Mine Shaft** Shades for backgrounds and UI elements.
  - **Bright Sun** Shades for primary buttons and highlights.

---

## 🤝 Contributing

Contributions are welcome! 🚀

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License.  
See `LICENSE` for more information.

---

## 📬 Contact

- **Project Maintainer**: [Your Name]  
- **Email**: [your-email@example.com]  
- **GitHub**: [your-username](https://github.com/your-username)
