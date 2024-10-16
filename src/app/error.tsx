"use client";
import { TErrorProps } from "@/types/error";

// Error components must be Client Components

const Error: React.FC<TErrorProps> = ({ error, reset }) => {
	return (
		<div>
			<h2>Error Page!</h2>
			<pre>{error.message}</pre>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
			>
				Try again
			</button>
		</div>
	);
};

export default Error;
