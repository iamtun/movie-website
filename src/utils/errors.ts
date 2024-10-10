class APIError extends Error {
	public status: number;

	constructor(message: string, status: number) {
		super(message); // Call the parent class (Error) constructor
		this.status = status;
		this.name = "APIError"; // Set the name of the error class

		// Maintains proper stack trace (for V8-based environments like Node.js)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

export { APIError };
