import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/Groups")({
	component: RouteComponent,
});

const mockGroups = [
	{
		groupId: "gr-01",
		groupName: "Tahsin Dasar - 01",
		subjectId: "sub-01",
		subjectName: "Tahsin",
		teacherId: "te-01",
		teacherName: "Ustadzah Lisna",
		studentIds: [
			{ studentId: "st-01", studentName: "Maryam" },
			{ studentId: "st-02", studentName: "Ibrahim" },
		],
	},
	{
		groupId: "gr-02",
		groupName: "Tahfizh Dasar - 01",
		subjectId: "sub-02",
		subjectName: "Tahfizh",
		teacherId: "te-03",
		teacherName: "Ustadzah Siska",
		studentIds: [
			{ studentId: "st-01", studentName: "Maryam" },
			{ studentId: "st-02", studentName: "Ibrahim" },
		],
	},
	{
		groupId: "gr-03",
		groupName: "Bahasa Inggris Dasar - 01",
		subjectId: "sub-03",
		subjectName: "Bahasa Inggris",
		teacherName: "Mister Mulki",
		teacherId: "te-02",
		studentIds: [{ studentId: "st-03", studentName: "Ahmad" }],
	},
	{
		groupId: "gr-04",
		groupName: "Bahasa Arab Dasar - 01",
		subjectId: "sub-04",
		subjectName: "Bahasa Arab",
		teacherName: "Ustadzah Afifah",
		teacherId: "te-04",
		studentIds: [{ studentId: "st-04", studentName: "Dawud" }],
	},
	{
		groupId: "gr-05",
		groupName: "Calistung Dasar - 01",
		subjectId: "sub-05",
		subjectName: "Calistung",
		teacherName: "Ustadzah Ghalda",
		teacherId: "te-01",
		studentIds: [{ studentId: "st-05", studentName: "Ilyas" }],
	},
];

function RouteComponent() {
	return (
		<section className="grid grid-cols-3 gap-4 p-6">
			{mockGroups.map((g, i) => (
				<div
					key={g.groupId}
					className="animate-fade-slide-up
					border rounded-lg bg-green-800
					text-white p-5 gap-1 cursor-pointer
					transition-all duration-200
					hover:-translate-y-1 hover:scale-105
					hover:shadow-xl"
					style={{ animationDelay: `${i * 80}ms` }}
				>
					<div className="font-semibold">{g.groupName}</div>
					<div className="text-sm text-gray-50">{g.subjectName}</div>
					<div className="text-sm">{g.teacherName}</div>
					<div className="text-sm text-gray-400">
						{g.studentIds.length}{" "}
						{g.studentIds.length === 1 ? "student" : "students"}
					</div>
				</div>
			))}
		</section>
	);
}
