export const mockDataProgress = [
	{
		studentId: "1",
		studentName: "Maryam",
		groupId: "tahsin-01",
		groupName: "Tahsin Dasar",
		teacherId: "te-th-01",
		teacherName: "Ustadzah Lisna",
		month: 5,
		year: 2026,
		assignment: { title: "Quiz Tahsin - April", score: 85, submitted: true },
		report: { published: true },
	},
	{
		studentId: "1",
		studentName: "Maryam",
		groupId: "tahfizh-01",
		groupName: "Tahfizh Dasar",
		teacherId: "te-th-02",
		teacherName: "Ustadzah Siska",
		month: 5,
		year: 2026,
		assignment: { title: "Quiz Tahfizh - April", score: 90, submitted: true },
		report: { published: true },
	},
	{
		studentId: "2",
		studentName: "Ibrahim",
		groupId: "inggris-01",
		groupName: "Bahasa Inggris Dasar",
		teacherId: "te-en-02",
		teacherName: "Mr. Mulki",
		month: 5,
		year: 2026,
		assignment: {
			title: "Quiz Bahasa Inggris - April",
			score: 70,
			submitted: true,
		},
		report: { published: true },
	},
	{
		studentId: "3",
		studentName: "Ahmad",
		groupId: "arab-01",
		groupName: "Bahasa Arab Dasar",
		teacherId: "te-ar-01",
		teacherName: "Ustadzah Afifah",
		month: 5,
		year: 2026,
		assignment: {
			title: "Quiz Bahasa Arab - April",
			score: 85,
			submitted: false,
		},
		report: { published: false },
	},
];

const mockGroupTahsin1 = {
	groupId: "TH01",
	groupName: "Tahsin Dasar 01",
	month: 5,
	year: 2026,
	sessions: [
		{
			sessionId: 1,
			date: "2026-05-05",
			teacherId: "te-th-01",
			teacherName: "Ustadzah Lisna",
			attendance: [
				{ studentId: 1, studentName: "Maryam", isPresent: true },
				{ studentId: 2, studentName: "Ibrahim", isPresent: true },
			],
		},
		{
			sessionId: 2,
			date: "2026-05-12",
			teacherId: "te-th-01",
			teacherName: "Ustadzah Lisna",
			attendance: [
				{ studentId: 1, studentName: "Maryam", isPresent: true },
				{ studentId: 2, studentName: "Ibrahim", isPresent: true },
			],
		},
		{
			sessionId: 3,
			date: "2026-05-19",
			teacherId: "te-th-01",
			teacherName: "Ustadzah Lisna",
			attendance: [
				{ studentId: 1, studentName: "Maryam", isPresent: true },
				{ studentId: 2, studentName: "Ibrahim", isPresent: true },
			],
		},
		{
			sessionId: 4,
			date: "2026-05-26",
			teacherId: "te-th-01",
			teacherName: "Ustadzah Lisna",
			attendance: [
				{ studentId: 1, studentName: "Maryam", isPresent: true },
				{ studentId: 2, studentName: "Ibrahim", isPresent: false },
			],
		},
	],
};

const mockGroupEnglish1 = {
	groupId: 2,
	groupName: "Bahasa Inggris 01",
	month: 5,
	year: 2026,
	sessions: [
		{
			sessionId: 1,
			date: "2026-05-08",
			teacherId: "te-en-01",
			teacherName: "Miss Poetry",
			attendance: [{ studentId: 3, studentName: "Ahmad", isPresent: true }],
		},
		{
			sessionId: 2,
			date: "2026-05-15",
			teacherId: "te-en-01",
			teacherName: "Miss Poetry",
			attendance: [{ studentId: 3, studentName: "Ahmad", isPresent: true }],
		},
		{
			sessionId: 3,
			date: "2026-05-22",
			teacherId: "te-en-01",
			teacherName: "Miss Poetry",
			attendance: [{ studentId: 3, studentName: "Ahmad", isPresent: true }],
		},
		{
			sessionId: 4,
			date: "2026-05-29",
			teacherId: "te-en-01",
			teacherName: "Miss Poetry",
			attendance: [{ studentId: 3, studentName: "Ahmad", isPresent: true }],
		},
	],
};

export const mockAttendanceData = [mockGroupTahsin1, mockGroupEnglish1];
