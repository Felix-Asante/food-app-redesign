import { useMemo, useState } from "react";
import MenuCard from "../components/ui/cards/MenuCard";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import NotFound from "../components/ui/NotFound";

const MENU = [
	{
		id: "1",
		name: "Cheese burger",
		category: "Continental dishes",
		isClosed: true,
		openingHours: "11:00am - 8:00pm",
		price: "85",
		image: "src/assets/menu-1.jpeg",
	},
	{
		id: "2",
		name: "Sandwich",
		category: "Continental dishes",
		isClosed: true,
		openingHours: "11:00am - 8:00pm",
		price: "25",
		image: "src/assets/menu-2.jpeg",
	},
	{
		id: "3",
		name: "Beef fried rice",
		category: "Green leaf eatery",
		isClosed: false,
		openingHours: "11:00am - 8:00pm",
		price: "50",
		image: "src/assets/menu-3.jpeg",
	},
];
export default function App() {
	const [searchQuery, setSearchQuery] = useState("");

	const menu = useMemo(() => {
		const keyword = searchQuery.toLowerCase();
		return MENU.filter(
			(menu) =>
				menu.category.toLowerCase().includes(keyword) ||
				menu.name.toLowerCase().includes(keyword)
		);
	}, [searchQuery]);
	const searchHandler = (keyword) => setSearchQuery(keyword);

	return (
		<div className="h-screen relative bg-gray-200">
			<Header onSearch={searchHandler} />
			<section className="content max-w-7xl px-3 mx-auto py-6 h-[75%] overflow-y-scroll overflow-x-hidden">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-full">
					{menu.length > 0
						? menu.map((menu) => <MenuCard {...menu} key={menu.id} />)
						: searchQuery && <NotFound />}
				</div>
			</section>
			<BottomNavigation />
		</div>
	);
}
