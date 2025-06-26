# 🎮 The Next Generation – Game Landing Page

A modern website built with **Next.js 15**, **Tailwind CSS**, **Firebase**, and **Three.js** to showcase an indie game project developed in Unity. This site serves as the official portal for presenting the game, development team, gameplay, 3D models, and more.

---

## 🚀 Features

| Section       | Description |
|---------------|-------------|
| 🏠 Home        | General introduction about the game |
| 👨‍👩‍👧 Team      | Introduce the development team |
| 💬 Contact     | Contact form integrated with Firebase Realtime Database |
| ☕ Donate      | Donation information (Momo, PayPal, etc.) |
| ❓ FAQ         | Frequently asked questions |
| 🧊 Models      | Interactive 3D `.fbx` model viewer using `@react-three/fiber` |
| 🎮 Play        | Embed Unity WebGL game via `<iframe>` |
| 🌙 Dark Mode   | Switch between light/dark themes |
| 📱 Responsive  | Fully responsive layout on all screen sizes |

---

## 🧱 Tech Stack

- **Next.js 15 (App Router)**
- **React 19**
- **Tailwind CSS + tailwindcss-animate**
- **Radix UI** components
- **Firebase Realtime Database**
- **Three.js + @react-three/fiber + @react-three/drei**
- **React Hook Form + Zod**
- **Lucide Icons, Sonner Toast, Embla Carousel**
- **Vercel (Hosting & CI/CD)**

---

## 📂 Folder Structure

.
├── app/
│ ├── about/
│ ├── contact/
│ ├── donate/
│ ├── faq/
│ ├── models/
│ ├── play/
│ ├── team/
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ └── ui/
│ ├── footer.tsx
│ ├── header.tsx
│ ├── theme-provider.tsx
│ └── theme-toggle.tsx
├── hooks/
│ ├── use-mobile.tsx
│ └── use-toast.ts
├── lib/
│ ├── firebase.ts ← Firebase init here
│ └── utils.ts
├── public/
│ ├── models/ ← .fbx / .glb files here
│ ├── placeholder-*.svg/.jpg/.html
│ └── webgl/index.html ← Unity WebGL build here
├── styles/
│ └── globals.css
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── package.json
└── tsconfig.json


📦 Run Locally
bash
Copy
Edit
# Install dependencies
npm install

# Start dev server
npm run dev
📤 Deploy to Vercel
Push this repo to GitHub

Go to https://vercel.com → New Project

Select your repo

Vercel will auto-detect Next.js and deploy 🎉

👨‍💻 Author
🎓 Developed by Long Quách Thành – github.com/StephenSouth13

👨‍💻 Student project at VTC Academy

💌 Contact via the contact page or Firebase form

📜 License
