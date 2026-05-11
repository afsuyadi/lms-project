import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/Groups")({
	component: RouteComponent,
});

const _mockGroups = [
	{
		groupId: "gr-01",
		groupName: "Tahsin Dasar - 01",
		subjectId: "sub-01",
		teacherId: "te-01",
		studentIds: [
			{ studentId: "st-01", studentName: "Maryam" },
			{ studentId: "st-02", studentName: "Ibrahim" },
		],
	},
	{
		groupId: "gr-02",
		groupName: "Tahfizh Dasar - 01",
		subjectId: "sub-02",
		teacherId: "te-03",
		studentIds: [
			{ studentId: "st-01", studentName: "Maryam" },
			{ studentId: "st-02", studentName: "Ibrahim" },
		],
	},
	{
		groupId: "gr-03",
		groupName: "Bahasa Inggris Dasar - 01",
		subjectId: "sub-03",
		teacherId: "te-02",
		studentIds: [{ studentId: "st-03", studentName: "Ahmad" }],
	},
	{
		groupId: "gr-04",
		groupName: "Bahasa Arab Dasar - 01",
		subjectId: "sub-04",
		teacherId: "te-04",
		studentIds: [{ studentId: "st-04", studentName: "Dawud" }],
	},
	{
		groupId: "gr-05",
		groupName: "Calistung Dasar - 01",
		subjectId: "sub-05",
		teacherId: "te-01",
		studentIds: [{ studentId: "st-05", studentName: "Ilyas" }],
	},
];

function RouteComponent() {
	return <section></section>;
}
