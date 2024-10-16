import { notFound } from "next/navigation";

export interface IAPIError extends Error {
	status: number;
}

class APIError extends Error implements IAPIError {
	public status: number;

	constructor(message: string, status: number) {
		super(message);
		this.status = status;
		this.name = "APIError";

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

const handleErrorInCatch = (error: unknown) => {
	if (error instanceof APIError) {
		if (error.status === 404) {
			notFound();
		}

		throw new APIError(error.message, error.status);
	}

	if (error instanceof Error) {
		throw new Error(error.message);
	}
};

export { APIError, handleErrorInCatch };
