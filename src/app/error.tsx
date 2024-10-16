"use client";
import ErrorUI from "@/components/error";
import { TErrorProps } from "@/types/error";

const Error: React.FC<TErrorProps> = ({ error, reset }) => {
	console.log({ error });
	return (
		<ErrorUI
			status={"error"}
			title="Lỗi"
			message={error?.message}
			action={reset}
			buttonTitle="Thử lại"
		/>
	);
};

export default Error;
