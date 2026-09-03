# Subrata Bag — Premium Developer Portfolio

A modern, high-performance software developer portfolio built with React, Vite, and Tailwind CSS v4. Designed with premium UI aesthetics, smooth animations, and a seamless Dark/Light mode experience.

![Portfolio Preview](./src/assets/demo.png)

## 🚀 Live Demo
**[View Live Portfolio](https://subrata-s-portfolio.vercel.app/)**

## ✨ Key Features
- **Premium UI/UX:** Glassmorphism design elements, gradient mesh backgrounds, and modern typography (Inter font).
- **Dark/Light Mode:** Seamless, state-persisted theme toggling across the entire application.
- **Scroll Reveal Animations:** Dynamic page-entry animations (sliding in from different directions) powered by Framer Motion.
- **Infinite Skill Marquee:** Continuously sliding dual-row technology showcase with pause-on-hover functionality.
- **Live Coding Stats:** Real-time GitHub contribution metrics and LeetCode problem-solving stats integration.
- **Interactive Counters:** Animated number counters for project and experience statistics.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views, featuring an animated full-screen mobile menu.

## 🛠️ Tech Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 + DaisyUI
- **Animations:** Framer Motion
- **Icons:** Lucide React + React Icons
- **Form Handling:** Web3Forms API
- **Routing:** React Router DOM

## 📦 Local Setup & Installation

Follow these steps to run the project locally on your machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/subrata-code/subrata-s-portfolio.git
   cd subrata-s-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables (Optional)**
   Create a `.env` file in the root directory to set up the Web3Forms API for the contact section:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
   *(If omitted, the contact form will gracefully fallback to opening your default email client).*

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure
```text
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable UI sections (Hero, Navbar, About, etc.)
│   ├── constants/       # Centralized portfolio data (portfolioData.js)
│   ├── context/         # React Context providers (ThemeContext.jsx)
│   ├── pages/           # Main page layouts (Home.jsx)
│   ├── index.css        # Global styles, keyframes, and dark mode variants
│   ├── main.jsx         # App entry point
│   └── App.jsx          # Root component & Routing
```

## 🤝 Customization
To customize this portfolio for yourself, simply edit the `src/constants/portfolioData.js` file. The entire application's content (links, projects, experience, education, social profiles) is driven dynamically by this single data file!

## 📜 License
**© 2025 Subrata Bag. All Rights Reserved.**

This repository and its source code are **PROPRIETARY and CONFIDENTIAL**. 

While the code is public for showcase and evaluation purposes, it is **NOT** open-source. You are strictly prohibited from copying, cloning, modifying, distributing, or using this code or design to build your own portfolio or application. Unauthorized use or reproduction is illegal. 

Please see the [LICENSE](LICENSE) file for complete terms and restrictions.