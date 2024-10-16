import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import MainLayout from "@/layouts/main";
import { ThemeProvider } from "@/context/theme";

const roboto = Roboto({
	subsets: ["latin", "vietnamese"],
	weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
	title: "Movie Website",
	description: "Tổng hợp phim hay nhất thế giới",
	robots: {
		index: false,
		follow: false,
	},
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return (
		<html lang="vn">
			<body className={`${roboto.className}`}>
				<AntdRegistry>
					<ThemeProvider>
						<MainLayout>{children}</MainLayout>
					</ThemeProvider>
				</AntdRegistry>
			</body>
		</html>
	);
};

export default RootLayout;
