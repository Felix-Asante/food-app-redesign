import {
	IconBell,
	IconPaperBag,
	IconToolsKitchen2,
	IconUser,
} from "@tabler/icons-react";
import { NavLink, useLocation } from "react-router-dom";
import { theme } from "../theme";

const NAV_LINKS = [
	{ label: "Dishes", path: "/", icon: IconToolsKitchen2 },
	{ label: "Orders", path: "/orders", icon: IconPaperBag },
	{ label: "Notifications", path: "/notification", icon: IconBell },
	{ label: "Profile", path: "/account", icon: IconUser },
];

export default function BottomNavigation() {
	const { pathname } = useLocation();

	return (
		<footer className="bg-white  shadow-md px-2 py-3 rounded-tl-xl rounded-tr-xl fixed bottom-0 left-0 w-full">
			<nav className="max-w-7xl px-3 mx-auto">
				<ul className="flex items-center justify-around gap-x-5">
					{NAV_LINKS?.map((link) => (
						<NavLink
							to={link.path}
							className={`flex flex-col items-center gap-1 font-semibold py-1 px-4 rounded-md hover:bg-orange/10 ${
								pathname === link.path ? "text-orange" : theme.gray400
							}`}
						>
							<>
								<link.icon
									color={`${
										pathname === link.path ? theme.orange : theme.gray400
									}`}
									size={25}
								/>
								<span className="text-[13px] ">{link.label}</span>
							</>
						</NavLink>
					))}
				</ul>
			</nav>
		</footer>
	);
}
