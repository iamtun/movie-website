"use client";

import { Button, Flex, Result } from "antd";
import { ResultStatusType } from "antd/es/result";
import React from "react";

type TErrorProps = {
	status?: ResultStatusType;
	title?: string;
	message?: string;
	buttonTitle?: string;
	action: () => void;
};

const ErrorUI: React.FC<TErrorProps> = ({
	status = "error",
	title = "Lỗi",
	message = "Lỗi không xác định",
	buttonTitle = "Trang chủ",
	action,
}) => {
	return (
		<Flex justify="center" align="center" style={{ height: "100vh" }}>
			<Result
				status={status}
				title={title}
				subTitle={message}
				extra={
					<Button type="primary" onClick={action}>
						{buttonTitle}
					</Button>
				}
			/>
		</Flex>
	);
};

export default ErrorUI;
