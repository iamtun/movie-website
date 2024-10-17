"use client";
import { Button, Input } from "antd";
import React, { memo } from "react";
import styles from "./header.module.css";
import { useTheme } from "@/context/theme";
import { MdDarkMode, MdLightMode, MdOutlineSearch } from "react-icons/md";

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

					<Input
						size="large"
						placeholder="Tìm kiếm..."
						prefix={<MdOutlineSearch size={24} />}
						className={styles["search"]}
					/>
					<Button
						icon={theme === "light" ? <MdDarkMode /> : <MdLightMode />}
						onClick={toggleTheme}
						aria-label="Toggle theme"
					/>
				</div>

				<Input
					size="large"
					placeholder="Tìm kiếm..."
					prefix={<MdOutlineSearch size={24} />}
					className={styles["search--small_screen"]}
				/>
			</div>
		</header>
	);
};

export default memo(Header);
