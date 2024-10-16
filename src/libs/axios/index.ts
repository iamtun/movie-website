import axios, {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
} from "axios";
import { APIError } from "../../utils/errors";

class BaseAPIService {
	instance: AxiosInstance;

	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config);

		this.instance.interceptors.request.use(
			async (value) => value,
			(error) => Promise.reject(error),
		);

		this.instance.interceptors.response.use(
			(response: AxiosResponse) => {
				const { status, data } = response;

				if (status === 204) {
					// no content
					return true;
				}

				// handle response
				return data;
			},
			(error: AxiosError) => {
				const { status, data } = error?.response || { status: 0 };

				console.error(data);

				if (status === 404) {
					throw new APIError("Nội dung không tìm thấy", status);
				}

				if (status >= 500) {
					throw new APIError("Lỗi server", status);
				}

				throw new APIError("Lỗi không xác định", status);
			},
		);
	}

	get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
		return this.instance.get(endpoint, config);
	}

	post<T>(
		endpoint: string,
		data?: unknown,
		config?: AxiosRequestConfig,
	): Promise<T> {
		return this.instance.post(endpoint, data, config);
	}

	put<T>(
		endpoint: string,
		data?: unknown,
		config?: AxiosRequestConfig,
	): Promise<T> {
		return this.instance.put(endpoint, data, config);
	}

	delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
		return this.instance.delete(endpoint, config);
	}
}

export default BaseAPIService;
