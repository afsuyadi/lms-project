export const mockUser: {
	id: string;
	teacherId: string | null;
	role: "admin" | "teacher" | "student";
	name: string;
} =
	// { id:1, role: "admin", name: "Ahmad" };
	{
		id: "u-01",
		teacherId: "te-th-01",
		role: "teacher",
		name: "Ustadzah Lisna",
	};
