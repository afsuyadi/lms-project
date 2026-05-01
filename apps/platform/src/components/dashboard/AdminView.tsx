import { useState } from "react";

const _mockData = [
	{
		studentId: "1",
		studentName: "Maryam",
		groupId: "tahsin-01",
		groupName: "Tahsin Dasar",
		teacherId: "t-01",
		teacherName: "Ustadzah Lisna",
		assignment: { title: "Quiz April", score: 85, submitted: true },
		report: { published: true },
	},
];

export function AdminView() {
	const [activeTab, setActiveTab] = useState<"progress" | "attendance">(
		"progress",
	);

	return (
		<section className="m-10">
			<div>
				<div className="flex gap-5">
					<button
						type="button"
						className={
							activeTab === "progress"
								? "bg-green-800 text-white cursor-pointer rounded-lg p-2"
								: "bg-white border border-green-800 rounded-lg p-2"
						}
						onClick={() => setActiveTab("progress")}
					>
						Student's Progress
					</button>
					<button
						type="button"
						className={
							activeTab === "attendance"
								? "bg-green-800 text-white cursor-pointer rounded-lg p-2"
								: "bg-white border border-green-800 rounded-lg p-2"
						}
						onClick={() => setActiveTab("attendance")}
					>
						Student's Attendance
					</button>
				</div>
				{activeTab === "progress" && (
					<div className="mt-3 border border-green-800 min-h-screen rounded-lg p-2">
						Progress Content
					</div>
				)}
				{activeTab === "attendance" && (
					<div className="mt-3 border border-green-800 min-h-screen rounded-lg p-2">
						Attendance Content
					</div>
				)}
			</div>
		</section>
	);
}
