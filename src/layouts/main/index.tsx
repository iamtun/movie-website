"use client";
import React from "react";
import styles from "./main.module.css";
import Header from "./header";
import { useTheme } from "@/context/theme";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { theme } = useTheme();
	return (
		<div className={`${styles["container"]} ${theme}`}>
			<Header className={styles["header"]} />
			<main className={styles["main"]}>
				<div className={styles["content"]}>{children}</div>
			</main>
			<footer className={styles["footer"]}>footer</footer>
		</div>
	);
};

export default MainLayout;
