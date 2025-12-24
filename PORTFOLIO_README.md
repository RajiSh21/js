# Portfolio Website - Two Versions

This repository contains **two versions** of a professional portfolio website:

## 1. Static Portfolio (Root Directory)

A lightweight, single-page portfolio website built with HTML, CSS, and JavaScript.

### Files:
- `index.html` - Main HTML file
- `style.css` - Styling and responsive design
- `script.js` - Interactive features

### Features:
- ✅ Hero section with typing animation
- ✅ About section
- ✅ Skills showcase with progress bars
- ✅ Projects gallery
- ✅ Contact form
- ✅ Fully responsive design
- ✅ Smooth scrolling navigation

### How to Run:
1. Open `index.html` in a web browser, OR
2. Use Live Server extension in VS Code, OR
3. Run: `python3 -m http.server 8000` and visit `http://localhost:8000`

### Deployment:
- **Free hosting**: GitHub Pages, Netlify, Vercel
- **Zero cost**: No server required
- **Fast**: No API calls or database queries

---

## 2. MERN Stack Portfolio (`portfolio-mern/` folder)

A full-stack portfolio website with React frontend and Node.js backend.

### Structure:
```
portfolio-mern/
├── client/     # React frontend
└── server/     # Node.js + Express backend
```

### Features:
- ✅ All features from static version
- ✅ **MongoDB database** for projects and skills
- ✅ **Backend API** for dynamic content
- ✅ **Email notifications** for contact form
- ✅ **Admin capabilities** (add/edit/delete projects)
- ✅ Scalable architecture

### How to Run:
See detailed instructions in `portfolio-mern/README.md`

Quick start:
```bash
# Terminal 1 - Backend
cd portfolio-mern/server
npm install
npm run dev

# Terminal 2 - Frontend
cd portfolio-mern/client
npm install
npm start
```

### Deployment:
- **Frontend**: Netlify, Vercel, AWS Amplify
- **Backend**: Heroku, Railway, Render, AWS
- **Database**: MongoDB Atlas (free tier available)

---

## Which Version Should You Use?

### Choose **Static Version** if:
- ✅ You want simple, fast deployment
- ✅ You don't need to update content frequently
- ✅ You want free hosting
- ✅ You don't need a backend

### Choose **MERN Stack Version** if:
- ✅ You want to manage content through a database
- ✅ You need email notifications
- ✅ You plan to add an admin panel
- ✅ You want to add more backend features later
- ✅ You're learning full-stack development

---

## Screenshots

Both versions have the same visual design:

**Desktop View:**
![Desktop](https://github.com/user-attachments/assets/125423d4-eeaf-4f33-b407-a8f27eb8ae43)

**Mobile View:**
![Mobile](https://github.com/user-attachments/assets/ef43ec67-8781-4f94-8770-18f5db92febe)

---

## Technologies

### Static Version
- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome

### MERN Stack Version
- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Email**: Nodemailer
- **Icons**: Font Awesome

---

## License

MIT License - Feel free to use for personal or commercial projects.
