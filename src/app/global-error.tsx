"use client";

import { TErrorProps } from "@/types/error";
import React from "react";

const GlobalError: React.FC<TErrorProps> = ({ error, reset }) => {
	return (
		<html>
			<body>
				<h2>Global Error Page</h2>
				<pre>{error.message}</pre>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	);
};

export default GlobalError;
