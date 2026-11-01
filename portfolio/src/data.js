// All site content lives here, so updating the portfolio never means touching components.

const GH = 'https://github.com/AbdalruhmanIssa'
const img = (path) => `${import.meta.env.BASE_URL}images/${path}`

export const profile = {
  name: 'Abdulrahman Issa',
  handle: 'abdulrahman',
  role: 'Software Engineer · .NET Backend · Full Stack',
  location: 'Saudi Arabia · Transferable Iqama',
  status: 'Open to software, backend and full-stack roles',
  summary:
    'Computer Systems Engineering graduate (2026) who builds REST APIs, auth, real-time features, payment integrations and cloud deployments with C#, ASP.NET Core, EF Core and SQL Server, plus React on the front end and Python/FastAPI for AI services.',
  email: 'abdalruhman.issa04@gmail.com',
  cv: `${import.meta.env.BASE_URL}Abdulrahman_Issa_CV.pdf`,
  links: {
    github: GH,
    linkedin: 'https://www.linkedin.com/in/abdalruhman-issa',
    codeforces: 'https://codeforces.com/profile/Abdalrahman-Tomeh',
  },
}

export const featured = [
  {
    id: 'brainova',
    name: 'Brainova',
    tagline: 'AI brain-tumor MRI analysis platform',
    period: 'Feb 2026 – May 2026',
    context: 'Graduation project, PTUK · Team of 3',
    role: 'My role: .NET backend + Python/TensorFlow AI inference service',
    summary:
      'A training platform for radiology students: upload an MRI, get an explainable AI prediction with a Grad-CAM heatmap, write a diagnostic report and receive supervisor feedback in real time.',
    highlights: [
      'Built a 3-tier (PL/BLL/DAL) ASP.NET Core REST API with EF Core, ASP.NET Identity + JWT and role-based access for students, supervisors and admins.',
      'Built the FastAPI inference service on Google Cloud Run serving a TensorFlow/Keras EfficientNet CNN from Cloud Storage for four-class MRI analysis.',
      'Engineered OpenCV brain-region cropping and MRI validation, test-time augmentation and Grad-CAM heatmaps to localize suspect regions.',
      'Added SignalR real-time notifications and exportable PDF case reports.',
    ],
    stack: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Identity + JWT', 'SignalR', 'Python', 'FastAPI', 'TensorFlow/Keras', 'OpenCV', 'Cloud Run', 'Azure'],
    architecture: [
      { label: 'React SPA', note: 'teammate', mine: false },
      { label: 'ASP.NET Core API', note: 'EF Core · SignalR · JWT', mine: true },
      { label: 'FastAPI service', note: 'Cloud Run', mine: true },
      { label: 'EfficientNet CNN', note: 'Grad-CAM · GCS', mine: true },
    ],
    gallery: [
      { src: img('brainova/app-ai-result.jpg'), name: 'ai-result.png', caption: 'AI diagnosis with Grad-CAM heatmap, served by my FastAPI service' },
      { src: img('brainova/app-supervisor-dashboard.jpg'), name: 'supervisor.png', caption: 'Supervisor dashboard: reports per day and AI predictions' },
      { src: img('brainova/app-my-cases.jpg'), name: 'feedback.png', caption: 'Supervisor feedback on a student case' },
      { src: img('brainova/app-admin-roles.jpg'), name: 'admin.png', caption: 'Admin dashboard: role distribution and permissions' },
      { src: img('brainova/app-report-details.jpg'), name: 'case.png', caption: 'Case details: MRI, prediction and student answers' },
      { src: img('brainova/app-pdf-report.jpg'), name: 'report.pdf', caption: 'Generated PDF case report' },
      { src: img('brainova/app-home.jpg'), name: 'home.png', caption: 'Brainova landing page (frontend by teammate)' },
      { src: img('brainova/app-brain-3d.jpg'), name: 'brain-3d.png', caption: 'Interactive 3D brain model (frontend by teammate)' },
    ],
    links: [
      { label: 'live', href: 'https://brainovaproject.onrender.com/home' },
      { label: 'backend', href: `${GH}/Brainova` },
      { label: 'ai-service', href: `${GH}/Brainova_AI` },
      { label: 'api-docs', href: 'https://documenter.getpostman.com/view/42948249/2sBXcHiyt3' },
    ],
    credit: { label: 'Frontend built by a teammate', href: 'https://github.com/shathazyadeh/BrainovaProject' },
  },
  {
    id: 'timesheet',
    name: 'TimeSheet',
    tagline: 'Project hours, two-step approvals and budgets',
    period: 'Oct 2026',
    context: 'Personal project · Full stack',
    role: 'Built end to end: .NET 10 API + React web app',
    summary:
      'Employees log hours on their projects, a manager approves them, then a director. Approved hours count against each project budget, and every role gets its own dashboard and reports.',
    highlights: [
      'Two-step approval workflow (PendingManager → PendingDirector → Approved) with reject, cancel, reopen and a full review history.',
      'Business rules enforced in the service layer and backed by the database: 12-hour daily cap, one entry per project per day, no future dates.',
      'Concurrency-safe: SERIALIZABLE transactions for cross-row checks and RowVersion so two reviewers can never approve the same entry.',
      'Budget health from approved hours, period balances, director portfolio and PDF export with QuestPDF.',
      'Unit tests (xUnit, Moq, FluentAssertions) plus integration tests on a real SQL Server.',
    ],
    stack: ['.NET 10', 'ASP.NET Core', 'EF Core', 'SQL Server', 'Identity + JWT', 'QuestPDF', 'xUnit', 'React 19', 'MUI', 'TanStack Query'],
    gallery: [
      { src: img('timesheet/01-employee-dashboard.jpg'), name: 'employee.png', caption: 'Employee dashboard: daily cap, weekly hours, last 14 days' },
      { src: img('timesheet/11-director-approvals-budget-impact.jpg'), name: 'approvals.png', caption: 'Director approvals with budget-impact warning' },
      { src: img('timesheet/03-employee-my-time.jpg'), name: 'my-time.png', caption: 'My time: log, edit and resubmit entries with review history' },
      { src: img('timesheet/06-project-budget.jpg'), name: 'budget.png', caption: 'Project budget status' },
      { src: img('timesheet/09-director-dashboard.jpg'), name: 'director.png', caption: 'Director dashboard' },
      { src: img('timesheet/05-manager-approvals.jpg'), name: 'manager.png', caption: 'Manager approval queue' },
      { src: img('timesheet/19-admin-users.jpg'), name: 'admin.png', caption: 'Admin user management' },
    ],
    links: [
      { label: 'api', href: `${GH}/TimeSheet` },
      { label: 'web-app', href: `${GH}/TimeSheetWebApp` },
    ],
  },
]

export const projects = [
  {
    name: 'Silverhand',
    tagline: 'Streaming service backend',
    period: 'Nov 2025 – Dec 2025',
    summary:
      'Layered PL/BLL/DAL backend for a streaming platform: titles, episodes, subscription plans, viewer profiles, favorites and subtitles, with Stripe payments. Deployed on MonsterASP.',
    stack: ['ASP.NET Core', 'EF Core', 'Stripe', 'Scalar', '3-tier'],
    images: [
      { src: img('other/silverhand-api-crop.jpg'), alt: 'Silverhand Titles endpoints in the Scalar API reference' },
      { src: img('other/silverhand-api.jpg'), alt: 'Silverhand API reference: titles, episodes, plans, payments, subscriptions' },
      { src: img('other/silverhand-tree.png'), alt: 'Silverhand PL/BLL/DAL solution structure', tree: true },
    ],
    links: [{ label: 'code', href: `${GH}/Silverhand` }],
  },
  {
    name: 'AY Shop',
    tagline: 'E-commerce backend',
    period: 'Sep 2025',
    summary:
      'E-commerce backend for product catalog, order management and Stripe checkout, built on a clean BLL/DAL/PL layered architecture with separate admin and customer areas.',
    stack: ['ASP.NET Core', 'EF Core', 'Stripe', '3-tier'],
    // shown as a text tree on the card; the real Visual Studio screenshot opens on click
    tree: [
      ['AYShop.sln', ''],
      ['├── AYShop.PL', 'controllers · areas · Program.cs'],
      ['├── AYShop.BLL', 'services: classes + interfaces'],
      ['└── AYShop.DAL', 'data · DTOs · models · repositories'],
    ],
    images: [{ src: img('other/ayshop-tree.png'), alt: 'AY Shop BLL/DAL/PL solution structure', tree: true }],
    links: [{ label: 'code', href: `${GH}/AYShop` }],
  },
  {
    name: 'Ecoms',
    tagline: 'E-commerce web app',
    period: 'Oct 2024',
    summary: 'Component-based React storefront with product browsing, categories, auth and a shopping cart. Deployed on Render.',
    stack: ['React', 'Vite', 'JavaScript', 'Render'],
    images: [{ src: img('other/ecoms.jpg'), alt: 'Ecoms storefront home page' }],
    links: [
      { label: 'live', href: 'https://ecoums.onrender.com' },
      { label: 'code', href: `${GH}/FrontFinalProject` },
    ],
  },
  {
    name: 'Burgineer',
    tagline: 'Burger restaurant website',
    period: 'Aug 2024',
    summary: 'Five-page responsive restaurant site with a hero carousel, filterable menu, reservation and contact forms, and a light/dark toggle.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    images: [
      { src: img('other/burgineer-home.jpg'), alt: 'Burgineer home page' },
      { src: img('other/burgineer-menu.jpg'), alt: 'Burgineer filterable menu' },
    ],
    links: [
      { label: 'live', href: 'https://abdalruhmanissa.github.io/FrontProject/' },
      { label: 'code', href: `${GH}/FrontProject` },
    ],
  },
]

export const skills = {
  languages: ['C#', 'Python', 'Java', 'C++', 'JavaScript', 'SQL'],
  backend: ['ASP.NET Core Web API / MVC', 'Entity Framework Core', 'FastAPI', 'REST APIs', 'ASP.NET Identity', 'SignalR'],
  frontend: ['React', 'Vite', 'Tailwind CSS', 'Bootstrap', 'HTML', 'CSS'],
  ai: ['TensorFlow / Keras', 'OpenCV', 'Grad-CAM'],
  cloudAndTools: ['SQL Server', 'Git', 'GitHub', 'Postman', 'Google Cloud Run', 'Google Cloud Storage', 'Azure', 'Render', 'MonsterASP'],
  spoken: ['Arabic (native)', 'English (professional)'],
}

export const timeline = [
  {
    hash: 'b0j2026',
    ref: 'HEAD -> career',
    date: 'Jul 2026 – Sep 2026',
    title: 'IT Department Intern · Bank of Jordan',
    place: 'Ramallah, Palestine',
    points: [
      'Completed the Mehnati Internship Program with rotations across banking systems, payment systems, networking and IT support.',
      'Gained hands-on exposure to enterprise IT operations in a regulated banking environment.',
      'Co-authored and presented an AI-powered banking assistant proposal: requirements, business benefits, roadmap and risks.',
    ],
  },
  {
    hash: 'ptuk226',
    ref: 'tag: graduated',
    date: 'Sep 2022 – Aug 2026',
    title: 'B.Sc. Computer Systems Engineering',
    place: 'Palestine Technical University – Kadoorie (PTUK), Tulkarm',
    points: ['Graduation project: Brainova, an AI-assisted brain-tumor MRI training platform.'],
  },
]

export const certifications = [
  { name: 'Back-End Development with ASP.NET', by: 'Knowledge Academy · 100 hours', year: '2025' },
  { name: 'Front End Development Program', by: '100 hours', year: '2024' },
  { name: 'Programming for Data Science with Python', by: 'Udacity Nanodegree', year: '2024' },
]
