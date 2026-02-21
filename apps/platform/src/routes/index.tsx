import { Button } from "@lmsproject/ui";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({ component: App });

function App() {
	console.log("Environment Variable TEST:", import.meta.env.VITE_TEST);
	return (
		<div>
			<Button label="Hello" />
		</div>
	);
}
