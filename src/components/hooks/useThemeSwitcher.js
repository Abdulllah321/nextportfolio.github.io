import { useState, useEffect } from "react";

function useThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const isClient = typeof window !== "undefined"; // Check if code is running on the client-side

    if (isClient) {
      const initialTheme = localStorage.getItem("theme") || "light";
      setTheme(initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    }
  };

  useEffect(() => {
    const isClient = typeof window !== "undefined"; // Check if code is running on the client-side

    if (isClient) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark");
      }
    }
  }, [theme]);

  return [theme, toggleTheme];
}

export default useThemeSwitcher;
