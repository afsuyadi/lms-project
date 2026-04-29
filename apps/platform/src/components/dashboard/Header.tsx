import { useState } from "react";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="flex flex-row justify-between p-3 bg-green-900 text-white">
			<h1 className="font-bold">Dashboard</h1>
			<div className="relative flex gap-7">
				<button
					type="button"
					className="cursor-pointer"
					onClick={() => setIsOpen(!isOpen)}
				>
					🔔
				</button>
				{isOpen && (
					<div className="absolute right-0 top-8 z-50 text-white bg-gray-800 p-4">
						Notification Panel
					</div>
				)}
				<span>👤 Admin</span>
			</div>
		</header>
	);
}
