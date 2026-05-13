export const mockDataProgress = [
	{
		studentId: "st-01",
		studentName: "Maryam",
		subjectId: "sub-01",
		subjectName: "Tahsin Dasar",
		groupId: "gr-01",
		groupName: "Tahsin Dasar - Grup 1",
		teacherId: "te-01",
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
		subjectId: "sub-02",
		subjectName: "Tahfizh Dasar",
		groupId: "gr-02",
		groupName: "Tahfizh Dasar - Grup 1",
		teacherId: "te-03",
		teacherName: "Ustadzah Siska",
		month: 5,
		year: 2026,
		assignment: null,
		report: { status: "published" },
	},
	{
		studentId: "st-02",
		studentName: "Ibrahim",
		subjectId: "sub-03",
		subjectName: "Bahasa Inggris Dasar",
		groupId: "gr-03",
		groupName: "Bahasa Inggris Dasar - 01",
		teacherId: "te-02",
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
		subjectId: "sub-04",
		subjectName: "Bahasa Arab Dasar",
		groupId: "gr-04",
		groupName: "Bahasa Arab Dasar - Grup 1",
		teacherId: "te-04",
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
	groupId: "gr-01",
	groupName: "Tahsin Dasar - 01",
	subjectId: "sub-01",
	subjectName: "Tahsin Dasar",
	month: 5,
	year: 2026,
	sessions: [
		{
			sessionId: "s-01",
			date: "2026-05-05",
			teacherId: "te-01",
			teacherName: "Ustadzah Lisna",
			attendance: [
				{ studentId: "st-01", studentName: "Maryam", isPresent: true },
				{ studentId: "st-02", studentName: "Ibrahim", isPresent: true },
			],
		},
		{
			sessionId: "s-02",
			date: "2026-05-12",
			teacherId: "te-01",
			teacherName: "Ustadzah Lisna",
			attendance: [
				{ studentId: "st-01", studentName: "Maryam", isPresent: true },
				{ studentId: "st-02", studentName: "Ibrahim", isPresent: true },
			],
		},
		{
			sessionId: "s-03",
			date: "2026-05-19",
			teacherId: "te-01",
			teacherName: "Ustadzah Lisna",
			attendance: [
				{ studentId: "st-01", studentName: "Maryam", isPresent: true },
				{ studentId: "st-02", studentName: "Ibrahim", isPresent: true },
			],
		},
		{
			sessionId: "s-04",
			date: "2026-05-26",
			teacherId: "te-01",
			teacherName: "Ustadzah Lisna",
			attendance: [
				{ studentId: "st-01", studentName: "Maryam", isPresent: true },
				{ studentId: "st-02", studentName: "Ibrahim", isPresent: false },
			],
		},
	],
};

const mockGroupEnglish1 = {
	groupId: "gr-03",
	groupName: "Bahasa Inggris Dasar - 01",
	subjectId: "sub-03",
	subjectName: "Bahasa Inggris Dasar",
	month: 5,
	year: 2026,
	sessions: [
		{
			sessionId: "s-05",
			date: "2026-05-08",
			teacherId: "te-02",
			teacherName: "Mr. Mulki",
			attendance: [
				{ studentId: "st-03", studentName: "Ahmad", isPresent: true },
			],
		},
		{
			sessionId: "s-06",
			date: "2026-05-15",
			teacherId: "te-02",
			teacherName: "Mr. Mulki",
			attendance: [
				{ studentId: "st-03", studentName: "Ahmad", isPresent: true },
			],
		},
		{
			sessionId: "s-07",
			date: "2026-05-22",
			teacherId: "te-02",
			teacherName: "Mr. Mulki",
			attendance: [
				{ studentId: "st-03", studentName: "Ahmad", isPresent: true },
			],
		},
		{
			sessionId: "s-08",
			date: "2026-05-29",
			teacherId: "te-02",
			teacherName: "Mr. Mulki",
			attendance: [
				{ studentId: "st-03", studentName: "Ahmad", isPresent: true },
			],
		},
	],
};

export const mockAttendanceData = [mockGroupTahsin1, mockGroupEnglish1];

export const mockSubjects = [
	{ subjectId: "sub-01", subjectName: "Tahsin" },
	{ subjectId: "sub-02", subjectName: "Tahfizh" },
	{ subjectId: "sub-03", subjectName: "Bahasa Inggris" },
	{ subjectId: "sub-04", subjectName: "Bahasa Arab" },
	{ subjectId: "sub-05", subjectName: "Calistung" },
];

export const mockTeachers = [
	{ teacherId: "te-01", teacherName: "Ustadzah Lisna" },
	{ teacherId: "te-02", teacherName: "Mister Mulki" },
	{ teacherId: "te-03", teacherName: "Ustadzah Siska" },
	{ teacherId: "te-04", teacherName: "Ustadzah Afifah" },
	{ teacherId: "te-05", teacherName: "Ustadzah Ghalda" },
];

export const mockStudents = [
	{ studentId: "st-01", studentName: "Maryam" },
	{ studentId: "st-02", studentName: "Ibrahim" },
	{ studentId: "st-03", studentName: "Ahmad" },
	{ studentId: "st-04", studentName: "Dawud" },
	{ studentId: "st-05", studentName: "Ilyas" },
];

export const mockGroups = [
	{
		groupId: "gr-01",
		groupName: "Tahsin Dasar - 01",
		subjectId: "sub-01",
		subjectName: "Tahsin",
		teacherId: "te-01",
		teacherName: "Ustadzah Lisna",
		isActive: true,
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
		isActive: true,
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
		isActive: true,
		teacherId: "te-02",
		studentIds: [{ studentId: "st-03", studentName: "Ahmad" }],
	},
	{
		groupId: "gr-04",
		groupName: "Bahasa Arab Dasar - 01",
		subjectId: "sub-04",
		subjectName: "Bahasa Arab",
		teacherName: "Ustadzah Afifah",
		isActive: true,
		teacherId: "te-04",
		studentIds: [{ studentId: "st-04", studentName: "Dawud" }],
	},
	{
		groupId: "gr-05",
		groupName: "Calistung Dasar - 01",
		subjectId: "sub-05",
		subjectName: "Calistung",
		teacherName: "Ustadzah Ghalda",
		isActive: false,
		teacherId: "te-01",
		studentIds: [{ studentId: "st-05", studentName: "Ilyas" }],
	},
];
