# LMS Full Stack Curriculum
**Stack:** HonoJS (backend) · TanStack Router + Query (frontend)  
**Starting point:** Auth/login done  
**Scope:** Teachers, Students, Classes, Enrollment, Assignments, Grades, Monthly Reports  

---

## PHASE 1 — Core Backend APIs (Hours 1–10)

**Hour 1 — Teacher Endpoints**
- `GET /teachers` — list all teachers
- `GET /teachers/:id` — single teacher
- `POST /teachers` — create teacher
- `PATCH /teachers/:id` — update
- `DELETE /teachers/:id` — delete

**Hour 2 — Student Endpoints**
- `GET /students` — list all students
- `GET /students/:id` — single student
- `POST /students` — create student
- `PATCH /students/:id` — update
- `DELETE /students/:id` — delete

**Hour 3 — Class Endpoints**
- `GET /classes` — list all classes
- `GET /classes/:id` — single class
- `POST /classes` — create class (assign a teacher)
- `PATCH /classes/:id` — update
- `DELETE /classes/:id` — delete

**Hour 4 — Enrollment Endpoints**
- `POST /enrollments` — enroll student into a class
- `DELETE /enrollments/:id` — unenroll
- `GET /classes/:id/students` — students in a class
- `GET /students/:id/classes` — classes a student is in

**Hour 5 — Assignment Endpoints**
- `GET /classes/:id/assignments` — list assignments per class
- `POST /classes/:id/assignments` — create assignment
- `PATCH /assignments/:id` — update assignment
- `DELETE /assignments/:id` — delete assignment

**Hour 6 — Grade Endpoints**
- `POST /grades` — submit a grade (student + assignment)
- `PATCH /grades/:id` — update grade
- `GET /students/:id/grades` — all grades for a student
- `GET /assignments/:id/grades` — all grades for an assignment

**Hour 7 — Auth Middleware & Role Guards**
- Attach `requireAuth` middleware to all protected routes
- Add role field to users (admin, teacher, student)
- Guard: only teachers can create assignments/grades
- Guard: only admin can create teachers/classes

**Hour 8 — Validation & Error Handling**
- Add Zod validation schemas to all POST/PATCH routes
- Standardize error responses `{ error, message, status }`
- Handle 404s, 422 validation errors, 401/403 auth errors

**Hour 9 — Monthly Report Endpoint**
- `GET /reports/monthly?month=&year=` — aggregate endpoint
- Returns: per-class attendance summary, average grades, assignment completion rate
- Returns: per-student grade summary

**Hour 10 — Backend Polish & Testing**
- Test all endpoints with Postman/curl
- Fix any broken relations or missing foreign keys
- Seed script: generate realistic dummy data for dev

---

## PHASE 2 — Frontend Foundation (Hours 11–18)

**Hour 11 — Project Setup & Layout**
- TanStack Router file-based routing setup
- App shell: sidebar nav, top header, main content area
- Routes scaffold: `/dashboard`, `/teachers`, `/students`, `/classes`, `/reports`
- Auth guard: redirect to `/login` if no token

**Hour 12 — Auth Pages**
- `/login` page with form
- Call `POST /login`, store JWT in localStorage
- `useAuth` hook: read token, decode role, expose `logout()`
- Redirect to dashboard on success

**Hour 13 — Teachers Page**
- `useQuery` → `GET /teachers` → render table
- Columns: name, email, subject, actions
- Loading skeleton + error state
- Search/filter by name (client-side)

**Hour 14 — Teachers CRUD UI**
- "Add Teacher" button → modal form
- `useMutation` → `POST /teachers` → invalidate query
- Edit button → pre-filled modal → `PATCH /teachers/:id`
- Delete button → confirm dialog → `DELETE /teachers/:id`

**Hour 15 — Students Page + CRUD**
- Same pattern as teachers: table, search, add/edit/delete modals
- `useQuery` → `GET /students`
- Show enrolled class count per student in table

**Hour 16 — Classes Page + CRUD**
- Classes table: name, teacher, student count
- Add/edit/delete with modals
- Dropdown to assign teacher when creating a class

**Hour 17 — Enrollment UI**
- Inside class detail page `/classes/:id`
- Tab: "Students" → list enrolled students
- "Enroll Student" → searchable dropdown of students → `POST /enrollments`
- Remove button per student → `DELETE /enrollments/:id`

**Hour 18 — Assignments UI**
- Inside class detail page `/classes/:id`
- Tab: "Assignments" → list assignments with due date + max score
- Add/edit/delete assignment forms
- Role guard: hide add/edit/delete for non-teachers

---

## PHASE 3 — Grades & Reports UI (Hours 19–26)

**Hour 19 — Grade Submission UI**
- Inside assignment detail `/assignments/:id`
- Table: all enrolled students + their grade input
- `useMutation` → `POST /grades` or `PATCH /grades/:id`
- Show saved indicator per row

**Hour 20 — Student Grade View**
- `/students/:id/grades` page
- Table: class → assignment → score → max score → percentage
- Color code: green ≥ 75%, yellow 50–74%, red < 50%

**Hour 21 — Dashboard Page**
- Summary cards: total teachers, students, classes
- Recent enrollments list
- Recent assignments list
- All powered by `useQuery` with stale-time caching

**Hour 22 — Monthly Report Page**
- `/reports` page with month + year picker
- Call `GET /reports/monthly?month=&year=`
- Section 1: per-class average grade table
- Section 2: assignment completion rate bar chart (recharts or similar)

**Hour 23 — Report Drill-down**
- Click a class in the report → expand student-level breakdown
- Show each student's average, highest, lowest grade
- "Export to PDF" button placeholder (wire up in Hour 25)

**Hour 24 — UI Polish Pass**
- Consistent loading skeletons across all pages
- Empty states ("No students yet — add one")
- Toast notifications for all mutations (success/error)
- Mobile responsive check on all pages

**Hour 25 — PDF Report Export**
- Install `jsPDF` or use browser print CSS
- "Export" on report page generates a formatted PDF
- Include: school name header, month/year, class tables, student summaries

**Hour 26 — Role-Based UI**
- Admin sees everything
- Teacher sees only their classes, assignments, grades
- Student sees only their own classes and grades
- Hide nav items and action buttons based on role from token

---

## PHASE 4 — Hardening & Deployment (Hours 27–34)

**Hour 27 — Frontend Error Boundaries**
- Wrap routes in React error boundaries
- 401 → auto logout + redirect to login
- Network error → friendly retry UI

**Hour 28 — Pagination**
- Add `?page=&limit=` to teachers, students, classes endpoints
- Frontend: pagination controls on all tables
- TanStack Query `keepPreviousData` for smooth page transitions

**Hour 29 — Search & Filter (Server-side)**
- `GET /students?search=` — backend filters by name/email
- `GET /classes?teacherId=` — filter by teacher
- Wire up frontend search inputs to query params

**Hour 30 — Performance Pass**
- Add `staleTime` and `gcTime` tuning to all queries
- Prefetch class detail when hovering class row
- Memoize heavy table renders

**Hour 31 — Backend Deployment**
- Deploy HonoJS to Railway / Render / Fly.io
- Set env vars: `DATABASE_URL`, `JWT_SECRET`
- Test all endpoints against production DB

**Hour 32 — Frontend Deployment**
- Deploy React app to Vercel / Netlify
- Set `VITE_API_URL` env var pointing to production backend
- Verify auth flow end-to-end on production

**Hour 33 — Seed & Demo Data**
- Run seed script on production DB
- Create demo accounts: admin, 2 teachers, 5 students
- Populate 2 classes, assignments, grades, 2 months of reports

**Hour 34 — End-to-End Smoke Test**
- Log in as each role and verify correct access
- Submit grades, view report, export PDF
- Fix any production-only bugs

---

## PHASE 5 — Nice-to-Haves (Hours 35–40+)

**Hour 35** — Attendance tracking endpoints + UI  
**Hour 36** — Email notifications (enrollment confirmation, grade posted)  
**Hour 37** — Bulk CSV import for students  
**Hour 38** — Class schedule / calendar view  
**Hour 39** — Student portal (separate login flow, read-only view)  
**Hour 40** — Final UI polish, dark mode, favicon, page titles  

---

## Progress Checklist

**Pre-Phase — Auth**
- ✅ `POST /register`
- ✅ `POST /login`
- ✅ `GET /me`

**Phase 1 — Core Backend APIs**
- ❌ Hour 1 — Teacher Endpoints
- ❌ Hour 2 — Student Endpoints
- ❌ Hour 3 — Class Endpoints
- ❌ Hour 4 — Enrollment Endpoints
- ❌ Hour 5 — Assignment Endpoints
- ❌ Hour 6 — Grade Endpoints
- ❌ Hour 7 — Auth Middleware & Role Guards
- ❌ Hour 8 — Validation & Error Handling
- ❌ Hour 9 — Monthly Report Endpoint
- ❌ Hour 10 — Backend Polish & Testing

**Phase 2 — Frontend Foundation** — not started  
**Phase 3 — Grades & Reports UI** — not started  
**Phase 4 — Hardening & Deployment** — not started  
**Phase 5 — Nice-to-Haves** — not started

---

## Quick Reference — Build Order Logic

```
Auth ✓ → Backend CRUD (H1–6) → Guards (H7–8) → Reports API (H9)
       → Frontend Shell (H11–12) → CRUD UIs (H13–18)
       → Grades UI (H19–20) → Dashboard + Reports UI (H21–25)
       → Role UI (H26) → Harden + Deploy (H27–34)
       → Extras (H35–40)
```

> **Rule of thumb:** Always finish the backend endpoint *before* building its frontend UI. If you get blocked on UI, skip to the next backend hour and come back.
