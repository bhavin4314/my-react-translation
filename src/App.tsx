import { useTranslation } from "react-i18next";
import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import { Login } from "./components/login";
import { LanguageChanger } from "./components/language-changer";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-center justify-end gap-3">
        <ModeToggle />
        <LanguageChanger />
      </div>
      <div className="flex items-center justify-center h-[90vh]">
        <Login />
      </div>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <h1>{t("welcome")}</h1>
        <p>{t("greeting", { name: "Alice" })}</p>
      </div>
    </>
  );
}

export default App;
