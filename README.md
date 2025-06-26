🎮 The Next Generation – Official Game Landing Page
A stunning, high-performance landing page built with Next.js 15, Tailwind CSS, Firebase, and Three.js to spotlight an indie Unity game project. This website serves as the all-in-one platform to present gameplay, showcase 3D assets, introduce the development team, and more.

Crafted for creators, gamers, and believers in innovation.

🚀 Key Features at a Glance
🔹 Section	💡 Description
🏠 Home	Eye-catching intro to the game universe
👥 Team	Meet the passionate developers behind the scenes
💬 Contact	Built-in Firebase form to reach out instantly
☕ Donate	Support us via MoMo, PayPal, and more
❓ FAQ	Answers to common player & supporter questions
🧊 Models	Real-time 3D viewer for .fbx assets using @react-three/fiber
🎮 Play	Directly play the Unity WebGL version inside an iframe
🌗 Dark Mode	Toggle between light/dark themes effortlessly
📱 Responsive	Fully mobile-friendly and accessible on all devices

🧱 Technology Stack
This site harnesses the power of modern web and game development tools:

⚛ Next.js 15 – App Router architecture

🌀 React 19

🎨 Tailwind CSS + tailwindcss-animate

🎛 Radix UI – Accessible and headless UI components

🔥 Firebase Realtime Database

🧠 Three.js + @react-three/fiber, @react-three/drei

🧾 React Hook Form + Zod (form validation done right)

🌟 Lucide Icons, Sonner Toast, Embla Carousel

🚀 Vercel – Instant deployment, CI/CD, and global CDN

🗂 Project Structure
pgsql
Copy
Edit
.
├── app/
│   ├── about/         → Game concept, vision, and storytelling
│   ├── contact/       → Firebase-powered contact form
│   ├── donate/        → Donation info
│   ├── faq/           → Common questions
│   ├── models/        → Interactive 3D viewer
│   ├── play/          → Unity WebGL embed
│   ├── team/          → Developer bios
│   ├── layout.tsx     → Global layout template
│   └── page.tsx       → Main landing page
│
├── components/
│   ├── ui/            → Header, Footer, ThemeToggle, etc.
│   └── theme-provider.tsx
│
├── hooks/             → Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── lib/               → Utility functions & Firebase init
│   ├── firebase.ts
│   └── utils.ts
│
├── public/
│   ├── models/        → .fbx / .glb 3D assets
│   ├── webgl/         → Unity WebGL build folder
│   └── placeholder assets
│
├── styles/
│   └── globals.css
│
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── package.json
└── tsconfig.json
⚙️ Run Locally
bash
Copy
Edit
# Install dependencies
npm install

# Start development server
npm run dev
🚀 Deploy in Seconds
Push this project to GitHub

Go to Vercel → Click New Project

Select the repository

Vercel auto-detects your stack and deploys instantly 🎉

👨‍💻 About the Developer
👤 Quách Thành Long – Indie Developer, UI Enthusiast, and Game Programmer
📂 GitHub: github.com/StephenSouth13
🎓 A student project at VTC Academy
💌 Get in touch via the [Contact Page] or through the integrated Firebase form

📄 License
Open-source under MIT – free to learn from, remix, or contribute.
