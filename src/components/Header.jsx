import { IconSearch, IconShoppingBag } from "@tabler/icons-react";

export default function Header({ onSearch }) {
	return (
		<header className="shadow-sm py-3 border-b">
			{/* top most section */}
			<div className="max-w-7xl px-3 mx-auto">
				<div className="flex justify-between items-center">
					<h5 className="font-semibold text-xl">Food Joint</h5>
					<div className="relative">
						<IconShoppingBag size={26} />
						<button className="border-0 outline-none w-[0.8rem] h-[0.8rem] absolute top-0 -right-1 bg-orange text-[10px] font-bold flex items-center justify-center rounded-full">
							1
						</button>
					</div>
				</div>
				{/* search bar */}
				<section className="mt-5 bg-gray-200 p-2 rounded-full border border-gray-300 flex items-center gap-2 transition-all duration-150 focus-within:scale-[1.01] shadow-sm">
					<IconSearch size={22} />
					<input
						type="text"
						className="border-0 bg-transparent outline-none w-full text-sm"
						placeholder="Search for a dish"
						onChange={(e) => onSearch(e.target.value)}
					/>
				</section>
			</div>
		</header>
	);
}
