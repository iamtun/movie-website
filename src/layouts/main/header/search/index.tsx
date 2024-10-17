import { useDebounce } from "@/hooks";
import { movieService } from "@/services";
import { Input } from "antd";
import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

type TSearch = {
	className?: string;
};

const Search: React.FC<TSearch> = ({ className }) => {
	const [val, setVal] = useState<string>("");
	const searchValue = useDebounce(val, 500);

	useEffect(() => {
		if (searchValue) {
			movieService
				.searchMoveByKeyword(searchValue)
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [searchValue]);

	return (
		<Input
			size="large"
			placeholder="Tìm kiếm..."
			prefix={<MdOutlineSearch size={24} />}
			className={`${className}`}
			value={val}
			onChange={(e) => setVal(e.target.value)}
		/>
	);
};

export default Search;
