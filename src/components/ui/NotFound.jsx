import { IconMailbox } from "@tabler/icons-react";
import React from "react";
import { theme } from "../../theme";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<IconMailbox size={100} color={theme.gray300} />
			<p className="text-center  mt-2">No Result found</p>
		</div>
	);
}
