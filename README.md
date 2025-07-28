# Rentzee

**Rentzee** is a modern MERN stack web application that enables users to rent and lease items such as cars, motorbikes, generators, and more. Built with a focus on simplicity, performance, and user experience.

---

## 🚀 Features

* 🔑 Single user role: users can both rent and list items
* 📦 Item listing with image uploads via Cloudinary
* 📅 Real-time availability check & reservations
* 🛒 Order & listing management
* 🔐 Authentication system (login/register)
* 🧠 Responsive and accessible UI
* 🌗 Light theme with Tailwind CSS
* 📱 Mobile-friendly navigation bar (Framer Motion)

---

## 💠 Tech Stack

| Technology        | Description              |
| ----------------- | ------------------------ |
| React.js          | Frontend UI framework    |
| Node.js + Express | Backend REST APIs        |
| MongoDB           | NoSQL database           |
| Cloudinary        | Image management/storage |
| Tailwind CSS      | Styling framework        |
| Framer Motion     | Animation & transitions  |
| React Router      | SPA routing              |

---

## 📁 Folder Structure (Simplified)

```
renze/
├── client/                  # React frontend
│   ├── components/          # Navbar, footer, etc.
│   ├── pages/               # Home, Item, Login, etc.
│   ├── assets/              # Images, icons
│   └── App.jsx
├── server/                  # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── server.js
├── .env
└── README.md
```

---

## 🧪 Getting Started

1. **Clone the repo:**

   ```bash
   git clone https://github.com/DS-Vijayapala/renze.git
   cd renze
   ```

2. **Set up environment variables:**

   Create a `.env` file in both `client/` and `server/` and add necessary keys:

   * MongoDB URI
   * Cloudinary keys
   * JWT secret

3. **Install dependencies:**

   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

4. **Run the app:**

   ```bash
   # In one terminal
   cd server && npm run dev

   # In another terminal
   cd client && npm start
   ```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 🌐 Live Demo (optional)

🚧 Coming soon or hosted on Vercel / Netlify / Render

---

