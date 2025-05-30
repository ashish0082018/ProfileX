# 📇 ProfileX — Dynamic Profile Builder with Sharable Links

**ProfileX** is a powerful web application that empowers users to create personalized, visually appealing, and sharable profile pages. Designed for professionals, freelancers, and creators, it integrates modern web technologies, AI enhancements, and security-first practices to deliver a seamless profile-building experience.

> **🔗 Live Demo**: [https://profilex-coral.vercel.app/](#)  
> **💻 GitHub Repository**: [https://github.com/ashish0082018/ProfileX](#)

---

## 🚀 Features

- ✨ **Dynamic Profile Builder** – Create and update profiles with personal, professional, and social information.
- 🔗 **Sharable Public Profiles** – Generate public-facing links.
- 🧠 **AI-Enhanced Editor** – Integrated AI tools offer rephrasing, grammar corrections, and suggestion prompts for bio section.
- 📸 **Media Uploads via Cloudinary** – Optimize profile images with compression and CDN delivery.
- 🔐 **Secure Authentication System**
  - Google OAuth & Custom Credentials via NextAuth.js
  - OTP-based email verification for enhanced reliability
- 📄 **Form Validation with Zod** – Strong type-safe client/server validations
- ⚡ **Performance Optimizations**
  - Caching strategies (ISR/SSR with Next.js)
- 🌍 **100% Responsive & SEO Friendly** – Designed for all screen sizes and optimized for search engines
- 🧩 **Modular Codebase** – Maintainable and scalable architecture

---

## 🛠️ Tech Stack

| Layer        | Technologies |
|--------------|--------------|
| **Frontend** | Next.js (App Router), TypeScript, Tailwind CSS |
| **Backend**  | Node.js, Prisma ORM, PostgreSQL |
| **Auth**     | NextAuth.js (Google OAuth + Credentials), OTP Email |
| **AI Tools** | gemini API |
| **Validation** | Zod |
| **Media**    | Cloudinary |
| **Dev Tools** | Vercel, VSCode, GitHub, Postman |

---



## Getting Started
# Clone the repository
git clone https://github.com/ashish0082018/ProfileX
cd profilex

# 2. Install dependencies
npm install

# 3. Generate Prisma client and apply migrations
npx prisma generate
npx prisma migrate dev

# 4. Start the development server
npm run dev

