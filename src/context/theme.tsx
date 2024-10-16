"use client";
import React, { createContext, useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContext = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContext>({
	theme: "light",
	toggleTheme: () => {},
});

const useTheme = () => React.useContext(ThemeContext);

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		const themeInStorage = (localStorage.getItem("theme") as Theme) || "light";
		setTheme(themeInStorage);
	}, []);

	const toggleTheme = useCallback(() => {
		setTheme(theme === "light" ? "dark" : "light");
		localStorage.setItem("theme", theme === "light" ? "dark" : "light");
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider, useTheme };
