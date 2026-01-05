export const portfolioData = {
    profile: {
        name: "Ruthvik Kumar Lakka",
        role: "Full Stack Developer",
        tagline: "I build high-performance, scalable systems and clean digital experiences.",
        location: "USA",
        email: "ruthvik.kumar14@gmail.com",
        socials: {
            github: "https://github.com/Ruthvik14",
            linkedin: "https://www.linkedin.com/in/ruthvik-kumar-lakka/",
            twitter: "https://twitter.com/your-handle",
        }
    },
    about: `I'm a Software Engineer with a Master's from Northern Arizona University. From building complex pricing engines at Infosys to developing scalable microservices on AWS at Fact Finders Pro, I thrive on solving intricate technical challenges and optimizing system performance.`,
    skills: [
        // Programming Languages
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

        // Frameworks & Libraries
        { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },

        // Databases
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "DynamoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg" },
        { name: "Oracle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },

        // Cloud & DevOps
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },

        // Tools
        { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "Confluence", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
        { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "OpenAI", logo: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
        { name: "GenAI", logo: "https://cdn-icons-png.flaticon.com/512/12128/12128224.png" }, // Placeholder or specific icon
        { name: "Scikit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Numpy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Pytorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Seaborn", logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
        { name: "Machine Learning", logo: "https://cdn-icons-png.flaticon.com/512/8618/8618881.png" },
    ],
    experience: [
        {
            type: "Professional Experience",
            entries: [
                {
                    title: "Backend Developer",
                    org: "Fact Finders Pro",
                    dates: "2024 - 2025",
                    location: "USA",
                    bullets: [
                        // "Developed distributed microservices in Java & Spring Boot, reducing latency by 40%.",
                        // "Built high-volume ingestion pipelines using Kafka & AWS Lambda.",
                        // "Optimized storage with DynamoDB & S3, improving reliability by 35%.",
                    ],
                    techStack: ["Java", "Spring Boot", "AWS", "Kafka"]
                },
                {
                    title: "Software Engineer",
                    org: "Infosys",
                    dates: "2019 - 2022",
                    location: "India",
                    bullets: [
                        // "Developed core pricing engine for a Global Pricing Configurator.",
                        // "Built SKU selection UI using Angular with reusable components.",
                        // "Automated pipelines with Kubernetes & Docker, reducing defects by 30%.",
                    ],
                    techStack: ["Java", "Spring Boot", "Angular", "Docker"]
                }
            ]
        },
        {
            type: "Academic Experience",
            entries: [
                {
                    title: "Master of Science in Computer Science",
                    org: "Northern Arizona University",
                    dates: "2024",
                    bullets: [
                        // "Focused on Advanced Algorithms, Cloud Computing, and Machine Learning.",
                        // "GPA: 3.80/4.0",
                    ]
                },
                {
                    title: "Bachelor of Science in Computer Science",
                    org: "St.Joseph's Institute of Technology",
                    dates: "2020",
                    bullets: [
                        // "Focused on Advanced Algorithms, Cloud Computing, and Machine Learning.",
                        // "GPA: 3.80/4.0",
                    ]
                },
            ]

        },
    ],
    projects: [
        {
            name: "Heart Failure Prediction",
            description: "The Heart Failure Prediction System is a machine learning-powered API designed to predict the likelihood of heart failure based on patient clinical data. Built using Flask, Scikit-learn, and Pandas, this model leverages Random Forest Classifier to achieve an 87% accuracy in identifying high-risk individuals",
            techStack: ["Python", "Flask", "Seaborn", "Machine Learning"],
            date: "Dec 2024",
            github: "https://github.com/Ruthvik14/Heart_Failure_Prediction",
            // live: "https://github.com/Ruthvik14/Heart_Failure_Prediction"
        },
        {
            name: "AI Text Summarization",
            description: "Built an AI-powered text summarization tool using OpenAI models to condense long articles, documents, and reports into clear, context-preserving summaries. Designed a FastAPI backend with retrieval logic, implemented prompt-engineering techniques for higher accuracy. This project strengthened my skills in Python, GenAI integration.",
            techStack: ["Python", "FastAPI", "OpenAI", "GenAI", "Next.js"],
            date: "May 2025",
            github: "https://github.com/Ruthvik14/AI-text-Summarization",
            // live: "https://github.com/Ruthvik14/Heart_Failure_Prediction"
        },
        {
            name: "Smart Public Transport Delay Predictor",
            description: "Built an AI-powered text summarization tool using OpenAI models to condense long articles, documents, and reports into clear, context-preserving summaries. Designed a FastAPI backend with retrieval logic, implemented prompt-engineering techniques for higher accuracy. This project strengthened my skills in Python, GenAI integration.",
            techStack: ["Python", "FastAPI", "Next.js", "Celery", "Scikit", "Pandas", "Numpy", "Docker"],
            date: "Dec 2025",
            github: "https://github.com/Ruthvik14/Smart-Public-Transport-Delay-Predictor",
            // live: "https://github.com/Ruthvik14/Heart_Failure_Prediction"
        }
    ]
};
