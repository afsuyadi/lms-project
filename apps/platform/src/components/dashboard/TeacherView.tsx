import { useState } from "react";
import { mockUser } from "../../lib/mockAuth";
import { mockAttendanceData, mockDataProgress } from "../../lib/mockData";

export function TeacherView() {
	const [activeTab, setActiveTab] = useState<"progress" | "attendance">(
		"progress",
	);

	const now = new Date();
	const defaultMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
	const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
	const [year, month] = selectedMonth.split("-").map(Number);
	const filteredData = mockDataProgress.filter(
		(d) =>
			d.month === month &&
			d.year === year &&
			d.teacherId === mockUser.teacherId,
	);
	function getSession(session) {
		return session.teacherId === mockUser.teacherId;
	}
	const filteredAttendanceData = mockAttendanceData.filter(
		(d) => d.month === month && d.year === year && d.sessions.some(getSession),
	);
	return (
		<section className="m-10">
			<div>
				<div className="flex justify-between">
					<div className="flex gap-5">
						<button
							type="button"
							className={
								activeTab === "progress"
									? "bg-green-800 text-white cursor-pointer rounded-lg p-2"
									: "bg-white border border-green-800 cursor-pointer rounded-lg p-2"
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
									: "bg-white border border-green-800 cursor-pointer rounded-lg p-2"
							}
							onClick={() => setActiveTab("attendance")}
						>
							Student's Attendance
						</button>
					</div>
					<input
						className="border border-green-800 rounded-lg px-3 py-2 cursor-pointer"
						type="month"
						value={selectedMonth}
						onChange={(e) => setSelectedMonth(e.target.value)}
					/>
				</div>
				{activeTab === "progress" && (
					<div className="mt-3 border border-green-800 min-h-screen rounded-lg p-2">
						<table className="w-full">
							<thead className="bg-green-800 text-white uppercase">
								<tr>
									<th className="px-4 py-3 text-left">Student</th>
									<th className="px-4 py-3 text-left">Teacher</th>
									<th className="px-4 py-3 text-left">Assignment</th>
									<th className="px-4 py-3 text-left">Report</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-300">
								{filteredData.map((d) => (
									<tr
										key={`${d.studentId}-${d.groupId}`}
										className="hover:bg-green-100"
									>
										<td className="px-4 py-3">{d.studentName}</td>
										<td className="px-4 py-3">{d.teacherName}</td>
										<td className="px-4 py-3">
											{d.assignment === null ? (
												<span className="text-gray-400 text-xs">
													No Assignment Yet
												</span>
											) : d.assignment.status === "submitted" ? (
												<button
													type="button"
													className="cursor-pointer bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full "
												>
													Submitted ({d.assignment.score}/100)
												</button>
											) : (
												<button
													type="button"
													className="cursor-pointer bg-yellow-300 text-red-500 px-3 py-1 text-xs font-bold rounded-full"
												>
													Created
												</button>
											)}
										</td>
										<td className="px-4 py-3">
											{d.report === null ? (
												<span className="text-gray-400 text-xs">
													No Report Yet
												</span>
											) : d.report.status === "published" ? (
												<button
													type="button"
													className="cursor-pointer bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
												>
													Published
												</button>
											) : (
												<button
													type="button"
													className="cursor-pointer bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full"
												>
													Created
												</button>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
				{activeTab === "attendance" && (
					<div className="mt-3 border border-green-800 min-h-screen rounded-lg p-2">
						{filteredAttendanceData.map((d) => (
							<div key={d.groupId} className="flex flex-col">
								<h3 className="text-xl font-bold text-green-800 mt-5 mb-3">
									{d.groupName}
								</h3>
								<table className="w-full mb-10">
									<thead className="bg-green-800 text-white uppercase">
										<tr>
											<th className="px-4 py-3 text-left">Student</th>
											<th className="px-4 py-3 text-left">Teacher</th>
											{d.sessions.map((s) => (
												<th className="px-4 py-3 text-left" key={s.sessionId}>
													{s.date}
												</th>
											))}
											<th className="px-4 py-3 text-left">Total Attendance</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-300">
										{d.sessions[0].attendance.map((a) => (
											<tr key={a.studentId} className="hover:bg-green-100">
												<td className="px-4 py-3">{a.studentName}</td>
												<td className="px-4 py-3">
													{d.sessions[0].teacherName}
												</td>
												{d.sessions.map((session) => {
													const record = session.attendance.find(
														(att) => att.studentId === a.studentId,
													);
													return (
														<td key={session.sessionId} className="px-4 py-3">
															{record.isPresent ? "✅" : "❌"}
														</td>
													);
												})}
												{(() => {
													const totalPresence = d.sessions.filter((session) =>
														session.attendance.find(
															(att) =>
																att.studentId === a.studentId &&
																att.isPresent === true,
														),
													).length;
													return <td className="px-4 py-3">{totalPresence}</td>;
												})()}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
