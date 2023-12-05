const { v4: uuidv4 } = require("uuid");

const courses = [
  {
    courseId: uuidv4(),
    title: "The Complete Python Bootcamp From Zero to Hero in Python",
    description:
      "Learn Python like a Professional, Start from the basics and go all the way to creating your own applications and games.",
    instructors: ["Jose Portilla"],
    thumbnail: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg",
    duration: "5 weeks",
    enrollmentStatus: "closed",
    location: "online",
    prerequisites: ["No programming experience needed"],
    syllabus: [
      {
        week: 1,
        topics: [
          {
            name: "Introduction to Python",
            markAsDone: false,
          },
          {
            name: "Setting up the Python development environment",
            markAsDone: false,
          },
          {
            name: "Basic syntax and data types",
            markAsDone: false,
          },
        ],
      },
      {
        week: 2,
        topics: [
          { name: "Control flow and loops", markAsDone: false },
          { name: "Functions and modules", markAsDone: false },
          {
            name: "Working with lists and dictionaries",
            markAsDone: false,
          },
        ],
      },
      {
        week: 3,
        topics: [
          { name: "File handling in Python", markAsDone: false },
          { name: "Exception handling", markAsDone: false },
          {
            name: "Introduction to object-oriented programming (OOP)",
            markAsDone: false,
          },
        ],
      },
      {
        week: 4,
        topics: [
          {
            name: "Intermediate OOP concepts (inheritance, encapsulation, polymorphism)",
            markAsDone: false,
          },
          {
            name: "Working with external libraries and packages using pip",
            markAsDone: false,
          },
        ],
      },
      {
        week: 5,
        topics: [
          {
            name: "Introduction to web development with Flask or Django",
            markAsDone: false,
          },
          {
            name: "Basic database interactions with SQLite or other databases",
            markAsDone: false,
          },
          { name: "Final project and code review", markAsDone: false },
        ],
      },
    ],
    enrolledStudents: [
      {
        studentId: "stu_001",
        name: "John Doe",
        email: "johndoe@gmail.com",
      },
    ],
  },
  {
    courseId: uuidv4(),
    title: "React Native 101",
    description:
      "Use React Native and your React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux.",
    instructors: ["Academind by Maximilian Schwarzmüller"],
    thumbnail: "https://img-c.udemycdn.com/course/750x422/1436092_2024_4.jpg",
    duration: "8 weeks",
    enrollmentStatus: "open",
    location: "online",
    prerequisites: ["JavaScript (ES6+)", "Basics of React"],
    syllabus: [
      {
        week: 1,
        topics: [
          { name: "Introduction to React Native", markAsDone: false },
          {
            name: "Setting up the development environment",
            markAsDone: false,
          },
          {
            name: "Creating your first React Native project",
            markAsDone: false,
          },
        ],
      },
      {
        topics: [
          {
            name: "Understanding React Native components",
            markAsDone: false,
          },
          { name: "Styling in React Native", markAsDone: false },
          { name: "Handling user input", markAsDone: false },
        ],
        week: 2,
      },
      {
        topics: [
          {
            name: "React Navigation for app navigation",
            markAsDone: false,
          },
          {
            name: "Working with different navigation types",
            markAsDone: false,
          },
          { name: "Passing data between screens", markAsDone: false },
        ],
        week: 3,
      },
      {
        topics: [
          { name: "State management in React Native", markAsDone: false },
          { name: "Using React Hooks", markAsDone: false },
          {
            name: "Managing application state with Context API",
            markAsDone: false,
          },
        ],
        week: 4,
      },
      {
        topics: [
          { name: "Consuming APIs in React Native", markAsDone: false },
          {
            name: "Making HTTP requests with Fetch or Axios",
            markAsDone: false,
          },
        ],
        week: 5,
      },
      {
        topics: [
          {
            name: "Understanding Redux for state management",
            markAsDone: false,
          },
          {
            name: "Combining React Navigation with Redux",
            markAsDone: false,
          },
        ],
        week: 6,
      },
      {
        topics: [
          {
            name: "Working with native device features (camera, geolocation, etc.)",
            markAsDone: false,
          },
          { name: "Implementing device permissions", markAsDone: false },
          {
            name: "Optimizing performance in React Native",
            markAsDone: false,
          },
        ],
        week: 7,
      },
      {
        topics: [
          {
            name: "Testing and debugging in React Native",
            markAsDone: false,
          },
          {
            name: "Building and deploying a React Native app",
            markAsDone: false,
          },
          {
            name: "Best practices and optimization techniques",
            markAsDone: false,
          },
        ],
        week: 8,
      },
    ],
    enrolledStudents: [
      {
        studentId: "stu_002",
        name: "Abhishek",
        email: "abhishek@gmail.com",
      },
      {
        studentId: "stu_003",
        name: "John Doe",
        email: "johndoe21@gmail.com",
      },
    ],
  },
  {
    courseId: uuidv4(),
    title: "Flutter & Dart - The Complete Guide [2023 Edition]",
    description:
      "A Complete Guide to the Flutter SDK & Flutter Framework for building native iOS and Android apps",
    instructors: ["Academind by Maximilian Schwarzmüller"],
    thumbnail: "https://img-c.udemycdn.com/course/750x422/1708340_7108_5.jpg",
    duration: "6 weeks",
    enrollmentStatus: "inProgress",
    location: "online",
    prerequisites: [
      "Basic programming language will help but is not a must-have",
      "You can use either Windows, macOS or Linux for Android app development - iOS apps can only be built on macOS though",
      "NO prior iOS or Android development experience is required",
      "NO prior Flutter or Dart experience is required - this course starts at zero!",
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          { name: "Introduction to Flutter and Dart", markAsDone: false },
          {
            name: "Setting up the development environment",
            markAsDone: false,
          },
          { name: "Creating your first Flutter app", markAsDone: false },
        ],
      },
      {
        week: 2,
        topics: [
          { name: "Understanding Flutter widgets", markAsDone: false },
          { name: "Layouts and navigation in Flutter", markAsDone: false },
        ],
      },
      {
        week: 3,
        topics: [
          { name: "State management in Flutter", markAsDone: false },
          {
            name: "Using Flutter plugins for additional functionality",
            markAsDone: false,
          },
          { name: "Handling user input and gestures", markAsDone: false },
        ],
      },
      {
        week: 4,
        topics: [
          {
            name: "Networking in Flutter: HTTP requests",
            markAsDone: false,
          },
          { name: "Persisting data in Flutter apps", markAsDone: false },
          {
            name: "Error handling and debugging techniques",
            markAsDone: false,
          },
        ],
      },
      {
        week: 5,
        topics: [
          { name: "Advanced Flutter animations", markAsDone: false },
          {
            name: "Implementing custom widgets and packages",
            markAsDone: false,
          },
          { name: "Testing in Flutter", markAsDone: false },
          { name: "Optimizing performance in Flutter", markAsDone: false },
        ],
      },
      {
        week: 6,
        topics: [
          {
            name: "Building and deploying a Flutter app",
            markAsDone: false,
          },
          { name: "Best practices and code review", markAsDone: false },
        ],
      },
    ],
    enrolledStudents: [
      {
        studentId: "stu_003",
        name: "John Doe",
        email: "johndoe21@gmail.com",
      },
    ],
  },
  {
    courseId: uuidv4(),
    title: "Angular - The Complete Guide",
    description:
      'Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',
    instructors: ["Michael Scott", "Dwight Schrute"],
    thumbnail: "https://img-c.udemycdn.com/course/750x422/756150_c033_2.jpg",
    duration: "8 weeks",
    enrollmentStatus: "inProgress",
    location: "online",
    prerequisites: [
      "NO Angular 1 or Angular 2+ knowledge is required!",
      "Basic HTML and CSS knowledge helps, but isn't a must-have",
      "Prior TypeScript knowledge also helps but isn't necessary to benefit from this course",
      "Basic JavaScript knowledge is required",
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          { name: "Introduction to Angular", markAsDone: false },
          {
            name: "Setting up the development environment",
            markAsDone: false,
          },
          { name: "Creating your first Angular app", markAsDone: false },
        ],
      },
      {
        week: 2,
        topics: [
          { name: "Components and Templates", markAsDone: false },
          { name: "Data binding and interpolation", markAsDone: false },
          { name: "Directives and Pipes", markAsDone: false },
        ],
      },
      {
        week: 3,
        topics: [
          { name: "Services and Dependency Injection", markAsDone: false },
          { name: "Routing in Angular", markAsDone: false },
          { name: "Forms and Reactive Forms", markAsDone: false },
        ],
      },
      {
        week: 4,
        topics: [
          { name: "HTTP Client and API integration", markAsDone: false },
          { name: "Angular CLI and Project Structure", markAsDone: false },
          { name: "Testing in Angular", markAsDone: false },
        ],
      },
      {
        week: 5,
        topics: [
          { name: "Advanced Component Concepts", markAsDone: false },
          { name: "Angular Modules", markAsDone: false },
          { name: "RxJS and Observables", markAsDone: false },
        ],
      },
      {
        week: 6,
        topics: [
          { name: "Angular Animation", markAsDone: false },
          { name: "Internationalization (i18n)", markAsDone: false },
          { name: "Progressive Web Apps (PWA)", markAsDone: false },
        ],
      },
      {
        week: 7,
        topics: [
          { name: "Security in Angular", markAsDone: false },
          { name: "NgRx for state management", markAsDone: false },
          { name: "Optimizing Angular Performance", markAsDone: false },
        ],
      },
      {
        week: 8,
        topics: [
          {
            name: "Building and Deploying Angular Apps",
            markAsDone: false,
          },
          { name: "Best practices and code review", markAsDone: false },
          { name: "Final Project and Recap", markAsDone: false },
        ],
      },
    ],
    enrolledStudents: [{}],
  },
  {
    courseId: uuidv4(),
    title: "Machine Learning A-Z: AI, Python & R + ChatGPT Bonus",
    description:
      "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
    instructors: [
      "Kirill Eremenko",
      "Hadelin de Ponteves",
      "SuperDataScience Team",
      "Ligency Team",
    ],
    thumbnail: "https://img-c.udemycdn.com/course/750x422/950390_270f_3.jpg",
    duration: "5 weeks",
    enrollmentStatus: "closed",
    location: "online",
    prerequisites: ["Just some high school mathematics level."],
    syllabus: [
      {
        week: 1,
        topics: [
          { name: "Introduction to Machine Learning", markAsDone: false },
          {
            name: "Overview of AI and its applications",
            markAsDone: false,
          },
          {
            name: "Setting up Python and Jupyter Notebooks",
            markAsDone: false,
          },
        ],
      },
      {
        week: 2,
        topics: [
          {
            name: "Python for Data Science (NumPy, Pandas)",
            markAsDone: false,
          },
          {
            name: "Data visualization with Matplotlib and Seaborn",
            markAsDone: false,
          },
          { name: "Introduction to R for Data Science", markAsDone: false },
        ],
      },
      {
        week: 3,
        topics: [
          {
            name: "Supervised Learning (Regression, Classification)",
            markAsDone: false,
          },
          { name: "Model evaluation and metrics", markAsDone: false },
          {
            name: "Introduction to Machine Learning in R",
            markAsDone: false,
          },
        ],
      },
      {
        week: 4,
        topics: [
          {
            name: "Unsupervised Learning (Clustering, Dimensionality Reduction)",
            markAsDone: false,
          },
          { name: "Feature engineering and selection", markAsDone: false },
          { name: "Advanced R for Machine Learning", markAsDone: false },
        ],
      },
      {
        week: 5,
        topics: [
          {
            name: "Introduction to Neural Networks and Deep Learning",
            markAsDone: false,
          },
          {
            name: "Implementing machine learning models in Python (Scikit-Learn, TensorFlow, Keras)",
            markAsDone: false,
          },
          {
            name: "Bonus: Using ChatGPT for Natural Language Processing",
            markAsDone: false,
          },
        ],
      },
    ],
    enrolledStudents: [
      {
        studentId: "stu_003",
        name: "John Doe",
        email: "johndoe21@gmail.com",
      },
    ],
  },
  {
    courseId: uuidv4(),
    title: "Complete C# Unity Game Developer 2D",
    description:
      "Learn Unity in C# & Code Your First Five 2D Video Games for Web, Mac & PC. The Tutorials Cover Tilemap",
    instructors: ["GameDev.tv Team", "Rick Davidson", "Gary Pettie"],
    thumbnail: "https://img-c.udemycdn.com/course/750x422/258316_55e9_12.jpg",
    duration: "4 weeks",
    enrollmentStatus: "open",
    location: "online",
    prerequisites: [
      "No pre-requisites required, just your passion and willingness to learn how to code.",
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          {
            name: "Introduction to Unity and the Unity interface",
            markAsDone: false,
          },
          {
            name: "Setting up the development environment",
            markAsDone: false,
          },
          {
            name: "Creating your first 2D game in Unity",
            markAsDone: false,
          },
        ],
      },
      {
        week: 2,
        topics: [
          {
            name: "Working with Unity's 2D components and physics",
            markAsDone: false,
          },
          {
            name: "Animating 2D characters and objects",
            markAsDone: false,
          },
          {
            name: "Implementing player controls and interactions",
            markAsDone: false,
          },
        ],
      },
      {
        week: 3,
        topics: [
          {
            name: "Understanding and implementing game mechanics",
            markAsDone: false,
          },
          {
            name: "Implementing sound and music in Unity",
            markAsDone: false,
          },
          {
            name: "User interface (UI) design and implementation",
            markAsDone: false,
          },
        ],
      },
      {
        week: 4,
        topics: [
          {
            name: "Advanced Unity features for 2D game development",
            markAsDone: false,
          },
          { name: "Optimizing game performance", markAsDone: false },
          {
            name: "Building and deploying your 2D game",
            markAsDone: false,
          },
        ],
      },
    ],
    enrolledStudents: [{}],
  },
  {
    courseId: uuidv4(),
    title: "Docker Mastery: with Kubernetes + Swarm from a Docker Captain",
    description:
      "Build, test, deploy containers with the best mega-course on Docker, Kubernetes, Compose, GitHub Actions CI using DevOps",
    instructors: ["Bret Fisher"],
    thumbnail: "https://img-c.udemycdn.com/course/750x422/1035000_c1aa_6.jpg",
    duration: "7 weeks",
    enrollmentStatus: "open",
    location: "online",
    prerequisites: [
      "Understand terminal or command prompt basics.",
      "Linux basics like shells, SSH, and package managers.",
      "Know the basics of creating a server in the cloud (on any provider).",
      "Understand the basics of web and database servers. (how they typically communicate, IP's, ports, etc.)",
      "Know the basics of git and GitHub for accessing course materials.",
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          {
            name: "Introduction to Docker and containerization",
            markAsDone: false,
          },
          {
            name: "Installing Docker and getting started",
            markAsDone: false,
          },
          {
            name: "Working with Docker images and containers",
            markAsDone: false,
          },
        ],
      },
      {
        week: 2,
        topics: [
          {
            name: "Docker Compose for multi-container applications",
            markAsDone: false,
          },
          { name: "Docker networking and storage", markAsDone: false },
          { name: "Docker security best practices", markAsDone: false },
        ],
      },
      {
        week: 3,
        topics: [
          { name: "Introduction to Docker Swarm", markAsDone: false },
          { name: "Setting up a Swarm cluster", markAsDone: false },
          {
            name: "Deploying and managing services with Swarm",
            markAsDone: false,
          },
        ],
      },
      {
        week: 4,
        topics: [
          { name: "Introduction to Kubernetes", markAsDone: false },
          {
            name: "Kubernetes architecture and components",
            markAsDone: false,
          },
          {
            name: "Deploying and managing applications with Kubernetes",
            markAsDone: false,
          },
        ],
      },
      {
        week: 5,
        topics: [
          {
            name: "Kubernetes Pods, Services, and Deployments",
            markAsDone: false,
          },
          { name: "Kubernetes networking and storage", markAsDone: false },
        ],
      },
      {
        week: 6,
        topics: [
          {
            name: "Advanced Kubernetes concepts and features",
            markAsDone: false,
          },
          {
            name: "Monitoring and logging in Kubernetes",
            markAsDone: false,
          },
          { name: "Kubernetes security best practices", markAsDone: false },
        ],
      },
      {
        week: 7,
        topics: [
          {
            name: "Continuous Integration and Deployment (CI/CD) with Docker and Kubernetes",
            markAsDone: false,
          },
          {
            name: "Best practices for managing containerized applications",
            markAsDone: false,
          },
          { name: "Final project and review", markAsDone: false },
        ],
      },
    ],
    enrolledStudents: [
      {
        studentId: "stu_003",
        name: "John Doe",
        email: "johndoe21@gmail.com",
      },
    ],
  },
  {
    courseId: uuidv4(),
    title: "The Complete Oracle SQL Certification Course",
    description:
      "Don't Just Learn the SQL Language, Become Job-Ready and Launch Your Career as a Certified Oracle SQL Developer!",
    instructors: ["Job Ready Programmer"],
    thumbnail: "https://img-c.udemycdn.com/course/750x422/866196_be1d.jpg",
    duration: "6 weeks",
    enrollmentStatus: "closed",
    location: "online",
    prerequisites: [
      "Absolutely no programming experience is required to master the content in this course",
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          { name: "Introduction to Oracle SQL", markAsDone: false },
          { name: "Setting up Oracle Database", markAsDone: false },
          {
            name: "Basic SQL querying (SELECT statement)",
            markAsDone: false,
          },
        ],
      },
      {
        week: 2,
        topics: [
          { name: "Filtering and sorting data", markAsDone: false },
          { name: "Advanced SELECT queries", markAsDone: false },
          {
            name: "Working with multiple tables (JOINS)",
            markAsDone: false,
          },
          { name: "Constraints and indexes", markAsDone: false },
        ],
      },
      {
        week: 3,
        topics: [
          {
            name: "Data manipulation (INSERT, UPDATE, DELETE)",
            markAsDone: false,
          },
          {
            name: "Query optimization and performance tuning",
            markAsDone: false,
          },
        ],
      },
      {
        week: 4,
        topics: [
          { name: "Views, Synonyms, and Sequences", markAsDone: false },
          { name: "Working with dates and times", markAsDone: false },
          { name: "Analytic functions and subqueries", markAsDone: false },
        ],
      },
      {
        week: 5,
        topics: [
          {
            name: "Data aggregation (GROUP BY, HAVING)",
            markAsDone: false,
          },
          { name: "Hierarchical queries (CONNECT BY)", markAsDone: false },
          { name: "Managing transactions and locking", markAsDone: false },
        ],
      },
      {
        week: 6,
        topics: [
          { name: "Advanced topics in Oracle SQL", markAsDone: false },
          {
            name: "Preparation for Oracle SQL Certification",
            markAsDone: false,
          },
          { name: "Practice exams and review", markAsDone: false },
        ],
      },
    ],
    enrolledStudents: [{}],
  },
  {
    courseId: uuidv4(),
    title: "NextJS & OpenAI",
    description:
      "Build GeniusGPT Full-Stack App with Next.js 14+, OpenAI , Clerk Auth, Prisma, PlanetScale TailwindCSS, DaisyUI, Vercel",
    instructors: ["John Smigla"],
    thumbnail: "https://img-c.udemycdn.com/course/750x422/5665916_d978.jpg",
    duration: "3 weeks",
    enrollmentStatus: "closed",
    location: "online",
    prerequisites: ["Knowledge of React"],
    syllabus: [
      {
        week: 1,
        topics: [
          { name: "Introduction to Next.js", markAsDone: false },
          { name: "Setting up a Next.js project", markAsDone: false },
          {
            name: "Pages, Routing, and Navigation in Next.js",
            markAsDone: false,
          },
        ],
      },
      {
        week: 2,
        topics: [
          {
            name: "Next.js Data Fetching (API Routes, SWR)",
            markAsDone: false,
          },
          {
            name: "Styling in Next.js (CSS Modules, Styled Components)",
            markAsDone: false,
          },
          {
            name: "Server-Side Rendering (SSR) in Next.js",
            markAsDone: false,
          },
        ],
      },
      {
        week: 3,
        topics: [
          {
            name: "Introduction to OpenAI and its APIs",
            markAsDone: false,
          },
          {
            name: "Integrating OpenAI GPT models in Next.js",
            markAsDone: false,
          },
          {
            name: "Building applications with Next.js and OpenAI",
            markAsDone: false,
          },
        ],
      },
    ],
    enrolledStudents: [
      {
        studentId: "stu_002",
        name: "Abhishek",
        email: "abhishek@gmail.com",
      },
    ],
  },
  {
    courseId: uuidv4(),
    title: "Automate the Boring Stuff with Python Programming",
    description:
      "A practical programming course for office workers, academics, and administrators who want to improve their productivity.",
    instructors: ["Al Sweigart"],
    thumbnail: "https://img-c.udemycdn.com/course/750x422/543600_64d1_4.jpg",
    duration: "5 weeks",
    enrollmentStatus: "inProgress",
    location: "online",
    prerequisites: [
      "No programming experience is required.",
      "Basic computer skills: surfing websites, running programs, saving and opening documents, etc.",
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          {
            name: "Introduction to Python programming",
            markAsDone: false,
          },
          {
            name: "Setting up Python and the development environment",
            markAsDone: false,
          },
          { name: "Basic Python syntax and data types", markAsDone: false },
        ],
      },
      {
        week: 2,
        topics: [
          { name: "Control flow and loops in Python", markAsDone: false },
          {
            name: "Working with functions and modules",
            markAsDone: false,
          },
          { name: "Handling exceptions and errors", markAsDone: false },
        ],
      },
      {
        week: 3,
        topics: [
          { name: "File handling and manipulation", markAsDone: false },
          { name: "Regular expressions in Python", markAsDone: false },
          { name: "Web scraping basics", markAsDone: false },
        ],
      },
      {
        week: 4,
        topics: [
          {
            name: "Working with spreadsheets and CSV files",
            markAsDone: false,
          },
          {
            name: "Automating tasks with Python scripts",
            markAsDone: false,
          },
          { name: "Web automation with Selenium", markAsDone: false },
        ],
      },
      {
        week: 5,
        topics: [
          { name: "GUI automation with PyAutoGUI", markAsDone: false },
          {
            name: "Sending emails and text messages with Python",
            markAsDone: false,
          },
          {
            name: "Advanced Automation and other things",
            markAsDone: false,
          },
        ],
      },
    ],
    enrolledStudents: [
      { studentId: "stu_001", name: "Test", email: "test@test.com" },
    ],
  },
];

module.exports = courses;
