const teachers = [
	{
		id: 1,
		name: "Ustadzah Siska",
		subjectIds: ["Tahsin", "Tahfizh"],
		icon: "👱🏻‍♀️",
	},
	{ id: 2, name: "Miss Poetry", subjectIds: ["Bahasa Inggris"], icon: "🙋🏻‍♀️" },
	{
		id: 3,
		name: "Mister Mulki",
		subjectIds: ["Bahasa Inggris"],
		icon: "🧔",
	},
	{
		id: 4,
		name: "Ustadzah Lisna",
		subjectIds: ["Tahsin", "Tahfizh"],
		icon: "🙎🏻‍♀️",
	},
];

export function Teachers() {
	return (
		<section className="bg-gray-70 py-10 px-6 text-center">
			<h2 className="text-3xl font-bold text-green-700 mb-10">Our Teachers</h2>
			<div className="grid grid-cols-4 gap-6 bg-white">
				{teachers.map((t) => (
					<div key={t.id}>
						<span className="text-4xl">{t.icon}</span>
						<h4 className="text-lg font-semibold mt-3">{t.name}</h4>
						<p className="text-sm text-gray-500 mt-2">
							{t.subjectIds.join(", ")}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
