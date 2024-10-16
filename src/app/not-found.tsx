"use client";
import ErrorUI from "@/components/error";
import { useRouter } from "next/navigation";

const NotFound = () => {
	const router = useRouter();
	return (
		<ErrorUI
			status={"404"}
			title={"404"}
			message={"Nội dung đã bị xóa hoặc không tìm thấy"}
			action={() => router.replace("/")}
		/>
	);
};

export default NotFound;
