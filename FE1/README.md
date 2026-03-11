# 🚀 UserHub - Dev Community Style User Management

A modern, Dev Community inspired user management application built with React + Vite.

![Dev Community Style](https://img.shields.io/badge/style-dev.to-blue)
![React](https://img.shields.io/badge/react-18.2.0-blue)
![Vite](https://img.shields.io/badge/vite-5.0-purple)

## ✨ Features

- 🎨 **Dev.to Inspired Design** - Clean, professional interface
- ⚡ **Fast & Modern** - Built with Vite for lightning-fast development
- 📱 **Fully Responsive** - Works on all devices
- 🎭 **Beautiful UI** - Custom design system with smooth animations
- 🔄 **Full CRUD** - Create, Read, Update, Delete users
- 🎯 **Type Safety** - Built with modern React practices

## 🎨 Design System

- **Typography**: Sora (display) + Plus Jakarta Sans (body)
- **Colors**: Dev.to inspired palette (navy blue primary)
- **Layout**: Card-based with sidebar navigation
- **Animations**: Smooth CSS transitions and micro-interactions

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- Backend API running at `http://localhost:5219`

### Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

The app will open at http://localhost:5173

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🔧 Configuration

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:5219
```

For production, update with your deployed backend URL.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Top navigation bar
│   ├── Sidebar.jsx         # Left sidebar with menu
│   ├── UserCard.jsx        # User card component
│   └── UserModal.jsx       # Create/Edit modal
├── services/
│   └── api.js              # API service layer
├── App.jsx                 # Main application
├── App.css                 # Design system & styles
└── main.jsx                # Entry point
```

## 🎯 Usage

### View Users
Browse all users in a beautiful card-based layout

### Create User
Click "Create User" button in the header to add a new user

### Edit User
Click the edit icon on any user card to modify their details

### Delete User
Click the delete icon on any user card to remove them

## 🌐 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Set environment variable: `VITE_API_URL`

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Axios** - HTTP client
- **React Icons** - Icon library
- **CSS3** - Custom design system

## 🎨 Design Philosophy

This project follows Dev.to's design principles:

- **Clean & Minimal** - Focus on content
- **Professional** - Production-ready aesthetics
- **Accessible** - Keyboard navigation and ARIA labels
- **Performant** - Optimized animations and rendering

## 📝 API Endpoints

The app connects to these backend endpoints:

- `GET /users` - Get all users
- `GET /users/{id}` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/{id}` - Update user
- `DELETE /users/{id}` - Delete user

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for learning or production.

## 🙏 Credits

Design inspired by [Dev.to](https://dev.to) - the amazing developer community platform.

---

**Made with ❤️ using React + Vite**
