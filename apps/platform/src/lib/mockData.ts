export const mockDataProgress = [
	{
		studentId: "st-01",
		studentName: "Maryam",
		groupId: "gr-th-01",
		groupName: "Tahsin Dasar",
		teacherId: "te-th-01",
		teacherName: "Ustadzah Lisna",
		month: 5,
		year: 2026,
		assignment: {
			title: "Quiz Tahsin - May",
			score: 80,
			status: "submitted",
		},
		report: { status: "published" },
	},
	{
		studentId: "st-01",
		studentName: "Maryam",
		groupId: "gr-tz-01",
		groupName: "Tahfizh Dasar",
		teacherId: "te-tz-01",
		teacherName: "Ustadzah Siska",
		month: 5,
		year: 2026,
		assignment: null,
		report: { status: "published" },
	},
	{
		studentId: "st-02",
		studentName: "Ibrahim",
		groupId: "gr-en-01",
		groupName: "Bahasa Inggris Dasar",
		teacherId: "te-en-01",
		teacherName: "Mr. Mulki",
		month: 5,
		year: 2026,
		assignment: {
			title: "Quiz Bahasa Inggris - May",
			score: null,
			status: "created",
		},
		report: null,
	},
	{
		studentId: "st-03",
		studentName: "Ahmad",
		groupId: "gr-ar-01",
		groupName: "Bahasa Arab Dasar",
		teacherId: "te-ar-01",
		teacherName: "Ustadzah Afifah",
		month: 5,
		year: 2026,
		assignment: {
			title: "Quiz Bahasa Arab - May",
			score: 85,
			status: "submitted",
		},
		report: { status: "published" },
	},
];

const mockGroupTahsin1 = {
	groupId: "gr-th-01",
	groupName: "Tahsin Dasar 01",
	month: 5,
	year: 2026,
	sessions: [
		{
			sessionId: "s-th-01",
			date: "2026-05-05",
			teacherId: "te-th-01",
			teacherName: "Ustadzah Lisna",
			attendance: [
				{ studentId: "st-01", studentName: "Maryam", isPresent: true },
				{ studentId: "st-02", studentName: "Ibrahim", isPresent: true },
			],
		},
		{
			sessionId: "s-th-02",
			date: "2026-05-12",
			teacherId: "te-th-01",
			teacherName: "Ustadzah Lisna",
			attendance: [
				{ studentId: "st-01", studentName: "Maryam", isPresent: true },
				{ studentId: "st-02", studentName: "Ibrahim", isPresent: true },
			],
		},
		{
			sessionId: "s-th-03",
			date: "2026-05-19",
			teacherId: "te-th-01",
			teacherName: "Ustadzah Lisna",
			attendance: [
				{ studentId: "st-01", studentName: "Maryam", isPresent: true },
				{ studentId: "st-02", studentName: "Ibrahim", isPresent: true },
			],
		},
		{
			sessionId: "s-th-04",
			date: "2026-05-26",
			teacherId: "te-th-01",
			teacherName: "Ustadzah Lisna",
			attendance: [
				{ studentId: "st-01", studentName: "Maryam", isPresent: true },
				{ studentId: "st-02", studentName: "Ibrahim", isPresent: false },
			],
		},
	],
};

const mockGroupEnglish1 = {
	groupId: "gr-en-01",
	groupName: "Bahasa Inggris 01",
	month: 5,
	year: 2026,
	sessions: [
		{
			sessionId: "s-en-01",
			date: "2026-05-08",
			teacherId: "te-en-01",
			teacherName: "Mr. Mulki",
			attendance: [
				{ studentId: "st-03", studentName: "Ahmad", isPresent: true },
			],
		},
		{
			sessionId: "s-en-02",
			date: "2026-05-15",
			teacherId: "te-en-01",
			teacherName: "Mr. Mulki",
			attendance: [
				{ studentId: "st-03", studentName: "Ahmad", isPresent: true },
			],
		},
		{
			sessionId: "s-en-03",
			date: "2026-05-22",
			teacherId: "te-en-01",
			teacherName: "Mr. Mulki",
			attendance: [
				{ studentId: "st-03", studentName: "Ahmad", isPresent: true },
			],
		},
		{
			sessionId: "s-en-04",
			date: "2026-05-29",
			teacherId: "te-en-01",
			teacherName: "Mr. Mulki",
			attendance: [
				{ studentId: "st-03", studentName: "Ahmad", isPresent: true },
			],
		},
	],
};

export const mockAttendanceData = [mockGroupTahsin1, mockGroupEnglish1];
