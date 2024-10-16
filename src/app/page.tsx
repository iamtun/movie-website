import { notFound } from "next/navigation";
import { APIError } from "@/utils/errors";
import { movieService } from "@/services";

const Home = async () => {
	try {
		const { items } = await movieService.getNewMovieUpdated();
		return items.map((item) => <div key={item._id}>{item.name}</div>);
	} catch (error) {
		if (error instanceof APIError) {
			if (error.status === 404) {
				notFound();
			}
		}

		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}
};

export default Home;
