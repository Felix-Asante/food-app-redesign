import { IconClockHour8 } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

export default function MenuCard(props) {
	const { name, category, isClosed, openingHours, price, image } = props;
	return (
		<div className="relative">
			<img
				src={image}
				alt={name.split(" ").join("-")}
				className="w-full object-cover h-44 rounded-tl-lg rounded-tr-lg"
			/>
			<div className="p-2">
				<Link to="/" className="font-semibold text-lg hover:text-orange">
					{name}
				</Link>
				<p className="text-sm text-gray-400">{category}</p>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1">
						<IconClockHour8 color="#fd7e14" size={20} />
						<p className="text-[14px]">Open: {openingHours}</p>
					</div>
					<p className="font-bold text-[1.35rem]">&#8373;{price}</p>
				</div>
			</div>
			{/* closed badge */}
			{isClosed && (
				<div className="absolute top-2 left-3 bg-orange px-1 font-semibold text-center">
					Closed
				</div>
			)}
		</div>
	);
}
