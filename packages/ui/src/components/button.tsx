interface ButtonProps {
	label: string;
}

export const Button = ({ label }: ButtonProps) => {
	return (
		<button type="button" style={{ background: "black", color: "white" }}>
			{label}
		</button>
	);
};
