import { createFileRoute } from "@tanstack/react-router";
import { Ban, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import { mockGroups, mockSubjects, mockTeachers } from "../../lib/mockData";

export const Route = createFileRoute("/dashboard/Groups")({
	component: RouteComponent,
});

function CreateGroupModal({ onClose }: { onClose: () => void }) {
	const [groupName, setGroupName] = useState("");
	const [subjectId, setSubjectId] = useState(0);
	const [teacherId, setTeacherId] = useState(0);

	return (
		<div
			role="dialog"
			onKeyDown={(e) => e.key === "Escape" && onClose()}
			className="fixed inset-0 bg-black/50 flex items-center justify-center font-bold z-50"
			onClick={onClose}
		>
			<div
				role="dialog"
				onKeyDown={(e) => e.key === "Escape" && onClose()}
				className="bg-white rounded-lg p-6 w-96"
				onClick={(e) => e.stopPropagation()}
			>
				<h2>Create Group</h2>
				<form>
					<div className="flex flex-col gap-2">
						<input
							className="border rounded-md p-2 text-sm"
							placeholder="e.g. Tahsin Dasar 01"
							value={groupName}
							onChange={(e) => setGroupName(e.target.value)}
						/>
						<select
							className="border rounded-md p-2 text-sm"
							value={subjectId}
							onChange={(e) => setSubjectId(e.target.value)}
						>
							<option value="">Select subject</option>
							{mockSubjects.map((s) => (
								<option key={s.subjectId} value={s.subjectId}>
									{s.subjectName}
								</option>
							))}
						</select>
						<select
							className="border rounded-md p-2 text-sm"
							value={teacherId}
							onChange={(e) => setTeacherId(e.target.value)}
						>
							<option value="">Select teacher</option>
							{mockTeachers.map((t) => (
								<option key={t.teacherId} value={t.teacherId}>
									{t.teacherName}
								</option>
							))}
						</select>
					</div>
				</form>
				<div className="flex justify-end gap-2 mt-4">
					<button
						type="button"
						onClick={onClose}
						className="cursor-pointer rounded-lg border shadow-2xl p-2 hover:bg-green-800 hover:text-white"
					>
						Cancel
					</button>
					<button
						type="button"
						className="cursor-pointer rounded-lg border shadow-2xl p-2 hover:bg-green-800 hover:text-white"
					>
						Create
					</button>
				</div>
			</div>
		</div>
	);
}
function RouteComponent() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<section className="p-6">
			{isModalOpen && (
				<CreateGroupModal onClose={() => setIsModalOpen(false)} />
			)}
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-xl font-bold">Groups</h1>
				<button
					type="button"
					className="flex items-center gap-2"
					onClick={() => setIsModalOpen(true)}
				>
					<PlusCircle
						size={18}
						className="cursor-pointer hover:bg-yellow-400 rounded-full"
					/>
					Create Group
				</button>
			</div>
			<div className="grid grid-cols-3 gap-4">
				{mockGroups.map((g, i) => (
					<div
						key={g.groupId}
						className={`animate-fade-slide-up
					border rounded-lg
					text-white p-5 cursor-pointer
					transition-all duration-200
					hover:-translate-y-1 hover:scale-105
					hover:shadow-xl flex flex-col gap-3
				${g.isActive === false ? "bg-gray-400" : "bg-green-800"}`}
						style={{ animationDelay: `${i * 80}ms` }}
					>
						<div className="font-semibold">{g.groupName}</div>
						<div className="text-sm">{g.teacherName}</div>
						<div className="flex flex-row gap-3">
							<div className="text-4xl text-white font-bold hover:text-yellow-400">
								{g.studentIds.length}{" "}
							</div>
							<div className="items-baseline">
								{g.studentIds.length === 1 ? "Student" : "Students"}
							</div>
						</div>
						<div className="flex justify-end gap-3">
							<Pencil size="18" className="hover:text-yellow-400" />
							<Ban size="18" className="hover:text-yellow-400" />
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
