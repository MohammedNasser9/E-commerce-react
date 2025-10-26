## 🛍️ E-Commerce React App

**Live Demo:** [https://e-commerce-react-liart-omega.vercel.app/](https://e-commerce-react-liart-omega.vercel.app/)

---

### 📖 Overview

This is a modern **E-Commerce Frontend Application** built using **React (Vite)**, integrated with a **Strapi backend** for dynamic product management.  
The project features **real-time product fetching**, category filtering, and smooth **animations powered by Framer Motion** — all wrapped in a professional **Material UI (MUI)** design.

Developed by **Mohammed Nasser**, this app demonstrates a clean and scalable architecture for modern web commerce platforms.

---

### ⚙️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend Framework** | React + Vite |
| **UI Library** | Material UI (MUI) |
| **State Management** | Redux Toolkit + RTK Query |
| **Animations** | Framer Motion |
| **Backend API** | Strapi (hosted separately) |
| **Deployment** | Vercel |
| **Package Manager** | npm |

---

### 🚀 Live Demo

🔗 **Production URL:**  
👉 [https://e-commerce-react-liart-omega.vercel.app/](https://e-commerce-react-liart-omega.vercel.app/)

---

### 🧠 Core Features

- 🧩 **Dynamic Products** fetched from Strapi via RTK Query.  
- 🧾 **Category Filtering** (Men / Women / All).  
- 💬 **Add to Cart Dialog** with multiple images and detailed info.  
- 🎞️ **Framer Motion Animations** on product grid and hover effects.  
- ☁️ **Deployed on Vercel** with environment variables configuration.  
- 🧭 **Scroll to Top Button** for smooth navigation.  
- 📱 **Responsive Design** built with Material UI Grid System.

---

### 🧩 Project Structure

E-commerce/
│
├── backend-strapi/ # Strapi CMS (Backend API)
│
└── front-end/ # React Frontend App
├── src/
│ ├── components/
│ │ ├── features/
│ │ ├── footer/
│ │ ├── header/
│ │ ├── hero/
│ │ ├── products/
│ │ └── scrollingUp/
│ ├── store.js
│ ├── productsApi.js
│ ├── App.jsx
│ ├── main.jsx
│ ├── theme.jsx
│ └── index.css
│
├── vite.config.js
├── package.json
└── README.md