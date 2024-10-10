"use client";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html>
			<body>
				<h2>Global Error Page</h2>
                <pre>{error.message}</pre>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	);
}
