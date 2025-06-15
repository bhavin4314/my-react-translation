# 🌐 My React Translation

A multilingual React application powered by **Vite**, **i18next**, and **Tailwind CSS**. This project demonstrates internationalization support, theme toggling (light/dark/system), and modern UI components using **ShadCN UI**.


## ✨ Features

- 🌍 Multi-language support (English, French, etc.)
- 🔄 Language switcher with persistent selection via `localStorage`
- 🌓 Theme toggle: light, dark, and system
- ⚡ Lightning-fast development with Vite
- 🎨 Tailwind CSS + ShadCN UI for styling
- 📁 Clean modular folder structure

---

## 🧰 Tech Stack

- React (with Vite)
- i18next + react-i18next
- Tailwind CSS
- ShadCN UI
- TypeScript (optional)
- localStorage (for theme/language persistence)

---

## 📁 Folder Structure

```
my-react-translation/
├── public/
│   └── ...
├── src/
│   ├── components/         # Reusable UI components
│   ├── locales/            # i18n translation files
│   │   ├── en/translation.json
│   │   └── fr/translation.json
│   ├── theme/              # Theme logic (if implemented)
│   ├── App.tsx
│   ├── main.tsx
│   └── i18n.ts             # i18next config
├── .env
├── tailwind.config.ts
├── index.html
└── package.json
```

---

## 🚀 Getting Started

### ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- npm or yarn

### 📦 Installation

```bash
git clone https://github.com/bhavin4314/my-react-translation.git
cd my-react-translation
npm install
```

### 🧪 Development

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

### 🔧 Production Build

```bash
npm run build
```

To preview the build:

```bash
npm run preview
```

---

## 🌐 Adding a New Language

1. Create a folder under `src/locales/` (e.g., `de/`).
2. Add a `translation.json` file with your translations.
3. Update `i18n.ts` to include the new language.
4. Update your language selector UI.

---

## 📄 Environment Variables

Example `.env`:

```env
VITE_API_URL=https://example.com/api
```

Use in code:

```ts
import.meta.env.VITE_API_URL
```

---

## 🙋‍♂️ Author

Made with ❤️ by [Bhavin Prajapati](https://github.com/bhavin4314)

---

## 📄 License

Licensed under the [MIT License](./LICENSE).

---

## ⭐️ Support

If you found this project useful, please give it a ⭐️ on GitHub and share it!
