"use client";
import { Button } from "antd";
import React, { memo } from "react";
import styles from "./header.module.css";
import { useTheme } from "@/context/theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Search from "./search";

type THeader = {
	className?: string;
};

const Header: React.FC<THeader> = ({ className }) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<header className={`${styles["wrapper"]} ${className}`}>
			<div className={`${styles["container"]}`}>
				<div className={styles["header--large_screen"]}>
					<div className={styles["logo"]}>
						<p>TBox</p>
					</div>

					<Search className={styles["search--large_screen"]} />

					<Button
						icon={theme === "light" ? <MdDarkMode /> : <MdLightMode />}
						onClick={toggleTheme}
						aria-label="Toggle theme"
					/>
				</div>

				<Search className={styles["search--small_screen"]} />
			</div>
		</header>
	);
};

export default memo(Header);
