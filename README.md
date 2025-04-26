# Mohd Arshil Azim - Portfolio Website

A modern, responsive portfolio website built with React and CSS to showcase my projects, skills, and achievements.

## Features

- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 📂 Detailed project showcases
- 📊 Skills and achievements sections
- 📝 Contact form
- 🔄 Easy to update and maintain

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Add your profile image:
   - Save your profile photo as "profile-image.jpg" in the "public" folder
   - For best results, use a square image of at least 400x400 pixels

5. Start the development server:
   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

## Customization

- Update content in the components to personalize the website
- Modify CSS files to change colors, fonts, and styles
- Add or remove sections as needed

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── profile-image.jpg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ScrollToTop.jsx
│   │   └── sections/
│   │       ├── About.jsx
│   │       ├── Achievements.jsx
│   │       ├── Contact.jsx
│   │       ├── Hero.jsx
│   │       ├── Projects.jsx
│   │       └── Skills.jsx
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── AchievementsPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── SkillsPage.jsx
│   ├── styles/
│   │   ├── About.css
│   │   ├── Achievements.css
│   │   ├── Contact.css
│   │   ├── Footer.css
│   │   ├── Hero.css
│   │   ├── Layout.css
│   │   ├── Navbar.css
│   │   ├── Projects.css
│   │   └── Skills.css
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
└── package.json
```

## Deployment

To build the production version:

```bash
npm run build
```

Deploy the contents of the `build` folder to your hosting provider.

## Built With

- React.js
- React Router
- CSS
- React Icons

## License

This project is licensed under the MIT License.
