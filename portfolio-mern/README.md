# Portfolio Website - MERN Stack

A full-stack portfolio website built with MongoDB, Express.js, React, and Node.js.

## Features

### Frontend (React)
- **Hero Section** with animated typing effect
- **About Section** with profile information
- **Skills Section** with animated progress bars (data from MongoDB)
- **Projects Section** with project cards (data from MongoDB)
- **Contact Form** with backend integration and email notifications
- **Responsive Design** for mobile, tablet, and desktop
- **Smooth Scrolling** and animations

### Backend (Node.js + Express)
- RESTful API for projects, skills, and contact messages
- MongoDB database integration
- Email notifications for contact form submissions
- CORS enabled for cross-origin requests
- Environment variable configuration

## Project Structure

```
portfolio-mern/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── services/      # API service
│   │   ├── styles/        # CSS files
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── server/                # Node.js backend
    ├── models/            # MongoDB models
    ├── routes/            # API routes
    ├── controllers/       # Route controllers
    ├── server.js          # Server entry point
    ├── .env.example       # Environment variables template
    └── package.json
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Setup Backend

1. Navigate to server directory:
```bash
cd portfolio-mern/server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CLIENT_URL=http://localhost:3000
```

5. Start the server:
```bash
npm run dev    # Development with nodemon
npm start      # Production
```

The server will run on `http://localhost:5000`

### Setup Frontend

1. Navigate to client directory:
```bash
cd portfolio-mern/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React app:
```bash
npm start
```

The app will run on `http://localhost:3000`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/category/:category` - Get skills by category
- `POST /api/skills` - Create skill (admin)
- `PUT /api/skills/:id` - Update skill (admin)
- `DELETE /api/skills/:id` - Delete skill (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `PATCH /api/contact/:id/status` - Update message status (admin)

## Database Schema

### Project
```javascript
{
  title: String,
  description: String,
  technologies: [String],
  liveUrl: String,
  githubUrl: String,
  imageUrl: String,
  featured: Boolean,
  order: Number,
  timestamps: true
}
```

### Skill
```javascript
{
  name: String,
  icon: String,
  percentage: Number (0-100),
  category: String (frontend/backend/database/tools/other),
  order: Number,
  timestamps: true
}
```

### Contact
```javascript
{
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String (new/read/replied),
  timestamps: true
}
```

## Seeding Database

To populate the database with sample data, you can use MongoDB Compass or the MongoDB shell:

```javascript
// Sample Projects
db.projects.insertMany([
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform with payment integration",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/user/project",
    featured: true,
    order: 1
  }
]);

// Sample Skills
db.skills.insertMany([
  {
    name: "HTML5",
    icon: "fab fa-html5",
    percentage: 90,
    category: "frontend",
    order: 1
  }
]);
```

## Email Configuration

To enable email notifications:

1. Use Gmail with an [App Password](https://support.google.com/accounts/answer/185833)
2. Update `.env` with your email credentials:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Deployment

### Frontend (Netlify/Vercel)
1. Build the React app:
```bash
cd client && npm run build
```

2. Deploy the `build` folder to Netlify or Vercel

3. Update environment variables with your production API URL

### Backend (Heroku/Railway/Render)
1. Push your code to GitHub
2. Connect your repository to your hosting service
3. Add environment variables in the hosting dashboard
4. Deploy

### Database (MongoDB Atlas)
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Update `MONGODB_URI` in your environment variables

## Technologies Used

### Frontend
- React 18
- React Router DOM
- Axios
- Font Awesome
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Nodemailer
- CORS
- dotenv

## Features Comparison with Static Version

| Feature | Static Version | MERN Stack Version |
|---------|---------------|-------------------|
| Portfolio Content | Hardcoded | Database-driven |
| Contact Form | Frontend only | Full backend integration |
| Email Notifications | No | Yes |
| Admin Panel | No | Possible to add |
| Content Management | Edit files | Update database |
| Scalability | Limited | High |
| Hosting Cost | Free | Paid (backend hosting) |

## Future Enhancements

- [ ] Admin dashboard for content management
- [ ] User authentication
- [ ] Blog functionality
- [ ] Image upload feature
- [ ] Search functionality
- [ ] Analytics integration
- [ ] Multi-language support

## License

MIT License

## Support

For issues or questions, please open an issue in the repository.
