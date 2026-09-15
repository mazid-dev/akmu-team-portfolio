cd team-portfolio && cat > README.md << 'READMEEOF'
<div align="center">

# 🎓 AKMU Team Portfolio

### Anwer Khan Modern University · Final Year Project

**A professional team portfolio showcasing DevOps, Networking & Network Security expertise**

[![CI/CD Pipeline](https://github.com/mazid-dev/akmu-team-portfolio/actions/workflows/cicd.yml/badge.svg)](https://github.com/mazid-dev/akmu-team-portfolio/actions/workflows/cicd.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/7562ca11-1d8a-43ce-9cc9-a6bf6eab3424/deploy-status)](https://app.netlify.com/sites/akmu-team-portfolio/deploys)
[![Live Site](https://img.shields.io/badge/Live-akmu--team--portfolio.netlify.app-00C7B7?logo=netlify&logoColor=white)](https://akmu-team-portfolio.netlify.app)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Made with](https://img.shields.io/badge/Made%20with-HTML%20%7C%20CSS%20%7C%20JS-orange.svg)]()

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Team Members](#-team-members)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Local Development](#-local-development)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Deployment](#-deployment)
- [Setup Guide](#️-setup-guide)
- [Screenshots](#-screenshots)
- [Future Scope](#-future-scope)
- [Work Distribution](#-work-distribution)
- [Acknowledgments](#-acknowledgments)
- [License](#-license)

---

## 🎯 About the Project

**AKMU Team Portfolio** is a professional multi-page portfolio website developed as the **Final Year Project** for the **Department of Computer Science & Engineering** at **Anwer Khan Modern University (AKMU), Dhaka, Bangladesh**.

The project demonstrates a full software development lifecycle — from UI/UX design to deployment automation — featuring:

- 🎨 **Modern UI/UX** with gradient aesthetics and smooth animations
- 🌙 **Dark mode** with `localStorage` persistence
- 📱 **Fully responsive** design (mobile-first)
- 👤 **Individual profile pages** for each team member
- 🔄 **Automated CI/CD pipeline** using GitHub Actions + Netlify
- 🔒 **Security headers** configured via Netlify
- 📬 **Working contact form** powered by Netlify Forms

The website serves as a digital identity for the team, showcasing their technical expertise, academic projects, certifications, and professional experience in **DevOps**, **Network Engineering**, and **Network Security**.

---

## 🌐 Live Demo

<div align="center">

**🔗 [https://akmu-team-portfolio.netlify.app](https://akmu-team-portfolio.netlify.app)**

</div>

| Page | URL |
|------|-----|
| 🏠 Homepage | `/` |
| 👤 Mazid's Profile | `/members/mazid.html` |
| 👤 Abu Sayed's Profile | `/members/abusayed.html` |
| 👤 Roich's Profile | `/members/roich.html` |
| 👤 Lokman's Profile | `/members/lokman.html` |

---

## 👥 Team Members

| # | Name | Student ID | Role | Profile |
|---|------|-----------|------|---------|
| 1 | **Md Mazid Hossain** | `12-232-0028` | DevOps Engineer & IT Executive | [View →](members/mazid.html) |
| 2 | **Md. Abu Sayed** | `12-232-0029` | Network Engineer | [View →](members/abusayed.html) |
| 3 | **Md Roich Uddin** | `12-232-0042` | Network Security Engineer | [View →](members/roich.html) |
| 4 | **Lokman Hossain** | `12-232-0043` | Network Support Engineer | [View →](members/lokman.html) |

---

## ✨ Key Features

### 🎨 Design & UX
- Modern gradient-based design system
- Floating blob animations in hero section
- Smooth scroll-triggered reveal animations
- Hover effects and micro-interactions
- Custom 404 handling via Netlify redirects

### 🌙 Theming
- Dark / Light mode toggle
- Preference persisted via `localStorage`
- CSS variables for easy theming
- Smooth color transitions

### 📱 Responsive
- Mobile-first approach
- Hamburger menu for small screens
- Adaptive grid layouts
- Fluid typography with `clamp()`

### 👤 Multi-Page Architecture
- Dynamic team cards rendered via JavaScript
- Individual profile pages for each member
- SEO-optimized meta tags per page
- Open Graph tags for social sharing

### 🔄 DevOps & Automation
- **CI/CD pipeline** with 3 parallel jobs
- **Auto-deployment** on push to `main`
- **Secret scanning** for security
- **HTML validation** in CI
- **Artifact upload** for build outputs

### 🔒 Security
- Security headers via `netlify.toml`:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` restricting geolocation, mic, camera

### 📬 Contact Form
- Netlify Forms integration
- Spam protection (built-in)
- No backend required

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| **Styling** | CSS Variables, Flexbox, CSS Grid, Animations |
| **Icons** | Font Awesome 6.5 |
| **Fonts** | Google Fonts (Inter) |
| **Hosting** | Netlify |
| **CI/CD** | GitHub Actions |
| **Version Control** | Git & GitHub |
| **Forms** | Netlify Forms |

---


