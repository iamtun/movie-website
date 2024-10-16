// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { handleErrorInCatch, IAPIError } from "@/utils/errors";
import { movieService } from "@/services";

const Home = async () => {
	try {
		const { items } = await movieService.getNewMovieUpdated();
		return items.map((item) => <div key={item._id}>{item.name}</div>);
	} catch (error: IAPIError | unknown) {
		handleErrorInCatch(error);
	}
};

export default Home;
