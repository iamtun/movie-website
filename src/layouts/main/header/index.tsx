"use client";
import { Button } from "antd";
import React from "react";
import styles from "./header.module.css";
import { useTheme } from "@/context/theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type THeader = {
	className?: string;
};

const Header: React.FC<THeader> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className={`${styles["wrapper"]} ${className}`}>
			<div className={`${styles["container"]}`}>
				<div className={styles["logo"]}>
					<p>TBox</p>
				</div>

				<Button
					icon={theme === "light" ? <MdDarkMode />: <MdLightMode />}
					onClick={toggleTheme}
				/>
			</div>
		</header>
	);
};

export default Header;
