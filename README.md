# T-AI: Academic Assessment Platform

T-AI is a comprehensive educational technology platform designed to streamline the academic assessment process through AI-assisted grading, interactive learning, and advanced analytics. The system features separate interfaces for students and professors, each tailored to their specific needs.

## Getting Started

To access the application, open `UI_prototyping/index.html` in your web browser. From the login page:

1. Select either "Student" or "Professor" role
2. Click "Log In" to be redirected to the appropriate dashboard
3. No credentials are required in this demo version

For demonstration purposes, the authentication system has been disabled, allowing direct access to both interfaces.

## Folder Structure

The application is organized as follows:

```
UI_prototyping/
├── css/               # Shared stylesheets
│   └── styles.css     # Main stylesheet with dark theme
├── js/                # JavaScript files
│   └── chatbot.js     # Controls AI assistant functionality
├── images/            # Image assets
├── index.html         # Login page
├── student/           # Student interface files
│   ├── dashboard.html      # Main student dashboard
│   ├── assignments.html    # Assignment submission interface
│   ├── grades.html         # Performance tracking
│   └── lecture-archive.html # Lecture materials
└── professor/         # Professor interface files
    ├── dashboard.html      # Main professor dashboard
    ├── assignments.html    # Assignment management
    ├── grading.html        # Grading interface
    ├── lectures.html       # Lecture management
    └── analytics.html      # Student performance analytics
```

## Student Interface

Access the student interface by selecting "Student" on the login page and clicking "Log In". Students can:

1. **Dashboard** (`student/dashboard.html`)
   - Overview of courses, upcoming assignments, and latest lectures
   - Quick stats on performance and pending work

2. **Lecture Archive** (`student/lecture-archive.html`)
   - Access recorded lectures with transcripts
   - View lecture notes and key concepts
   - Download lecture slides

3. **Assignments** (`student/assignments.html`)
   - Submit handwritten assignments via the OCR system
   - Track pending, submitted, and graded assignments
   - View assignment requirements and deadlines

4. **Performance** (`student/grades.html`)
   - Comprehensive grade overview with visual analytics
   - Course-specific performance metrics
   - Personalized improvement recommendations
   - Detailed feedback on past assignments

## Professor Interface

Access the professor interface by selecting "Professor" on the login page and clicking "Log In". Professors can:

1. **Dashboard** (`professor/dashboard.html`)
   - Overview of courses and student activities
   - Quick access to recent submissions
   - Notifications for grading challenges

2. **Lectures** (`professor/lectures.html`)
   - Upload and manage lecture recordings
   - Edit auto-generated transcripts
   - Manage key concepts
   - Publish lecture materials for students

3. **Assignments** (`professor/assignments.html`)
   - Create and manage assignments
   - Configure grading criteria and rubrics
   - Set up AI-assisted grading
   - Track submission status

4. **Grading** (`professor/grading.html`)
   - Review student submissions
   - OCR processing for handwritten answers
   - Provide feedback with AI assistance
   - Handle grading challenges

5. **Analytics** (`professor/analytics.html`)
   - Track student performance across courses
   - Identify struggling students
   - Analyze engagement patterns
   - Generate insights for improving teaching

## AI Assistant

Both interfaces include an interactive AI assistant (collapsible chatbot) that provides context-aware help:

- For students: assistance with assignments, explanations of lecture content, and study recommendations
- For professors: grading assistance, student performance insights, and content management support

To collapse the chatbot, click the X icon in the top-right corner of the chat window. To reopen it, click the chat bubble that appears in the bottom-right corner of the screen.

## Navigation

- Use the sidebar on the left for main navigation between sections
- The notification bell in the top-right indicates new alerts
- The profile icon provides access to account settings
- Breadcrumb navigation is available in some sections for deeper hierarchy

## Technology Stack

- HTML5, CSS3, and JavaScript
- Responsive design that works across devices
- Dark theme UI for reduced eye strain

## Development Notes

This is a UI prototype that demonstrates the interface and interactions of the T-AI system. For a production implementation, additional backend development would be required for data persistence, authentication, and server-side processing. 