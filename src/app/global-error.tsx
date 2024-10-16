"use client";

import ErrorUI from "@/components/error";
import { TErrorProps } from "@/types/error";
import React from "react";

const GlobalError: React.FC<TErrorProps> = ({ error, reset }) => {
	return (
		<html>
			<body>
				<ErrorUI
					status={"500"}
					title="Lỗi"
					message={error?.message}
					action={reset}
					buttonTitle="Thử lại"
				/>
			</body>
		</html>
	);
};

export default GlobalError;
