import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
	component: LoginPage,
});

function LoginPage() {
	return (
		<section className="flex items-center justify-center mx-auto w-full max-w-sm p-8 min-h-screen bg-gray-100 rounded-2xl">
			<div className="max-w-md flex flex-col gap-10">
				<div className="flex items-center justify-center">
					<h2 className="text-3xl font-bold">Login</h2>
				</div>
				<div className="flex flex-col gap-5">
					<input
						className="text-center border border-gray-300 rounded-lg px-3 py-2 w-full"
						type="email"
						placeholder="Enter your email"
					/>
					<input
						className="text-center border border-gray-300 rounded-lg px-3 py-2 w-full"
						type="password"
						placeholder="Enter your password"
					/>
				</div>
				<div className="flex flex-col items-center justify-center">
					<button
						type="submit"
						className="bg-green-700 text-white font-bold w-full px-15 py-2 flex justify-center rounded-3xl"
					>
						Submit
					</button>
				</div>
			</div>
		</section>
	);
}
