export const mockUser: {
	id: string;
	teacherId: string | null;
	studentId: string | null;
	role: "admin" | "teacher" | "student";
	name: string;
} =
	// { id: 1, role: "admin", name: "Ahmad" };
	// {
	// 	id: "usr-01",
	// 	teacherId: "te-th-01",
	// 	role: "teacher",
	// 	name: "Ustadzah Lisna",
	// };
	{
		id: "usr-02",
		teacherId: null,
		studentId: "st-01",
		role: "student",
		name: "Maryam",
	};
