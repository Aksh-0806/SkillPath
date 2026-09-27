/* =====================================================
   SKILLPATH - CAREER DATA
===================================================== */

const domains = {

    web: {

        name: "Web Development",
        icon: "🌐",

        description:
            "Web development involves creating websites and web applications. A strong foundation in HTML, CSS and JavaScript can be followed by front-end, back-end and database development.",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Web Design",
            "Git & GitHub",
            "Front-End Development",
            "Back-End Development",
            "Database Fundamentals"
        ],

        tools: [
            "Visual Studio Code",
            "Git",
            "GitHub",
            "Browser Developer Tools",
            "Web Development Tools"
        ],

        roadmap: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design",
            "Front-End",
            "Back-End",
            "Database",
            "Projects"
        ],

        projects: [
            "Personal Portfolio Website",
            "Online Learning Website",
            "Event Management Website"
        ],

        careers: [
            "Front-End Developer",
            "Back-End Developer",
            "Full-Stack Developer"
        ],

        levels: [
            ["HTML & CSS", "Beginner", 35],
            ["JavaScript", "Intermediate", 55],
            ["Front-End Development", "Intermediate", 70],
            ["Full-Stack Development", "Advanced", 90]
        ],

        guide:
            "Start with HTML and CSS to understand the structure and design of web pages. Then learn JavaScript to create interactive websites. After building a strong foundation, move towards front-end frameworks, back-end development and databases. Build practical projects regularly and maintain them in a portfolio."
    },


    data: {

        name: "Data Science",
        icon: "📊",

        description:
            "Data Science combines programming, mathematics and statistics to analyze data, identify patterns and generate useful insights.",

        skills: [
            "Python",
            "Mathematics",
            "Statistics",
            "SQL",
            "Data Cleaning",
            "Data Analysis",
            "Data Visualization",
            "Machine Learning Basics"
        ],

        tools: [
            "Python",
            "Jupyter Notebook",
            "SQL",
            "Excel",
            "Data Visualization Tools"
        ],

        roadmap: [
            "Python",
            "Mathematics",
            "Statistics",
            "SQL",
            "Data Analysis",
            "Visualization",
            "Machine Learning",
            "Projects"
        ],

        projects: [
            "Student Performance Analysis",
            "Sales Data Analysis",
            "Data Visualization Dashboard"
        ],

        careers: [
            "Data Analyst",
            "Data Scientist",
            "Business Analyst"
        ],

        levels: [
            ["Python", "Beginner", 35],
            ["Statistics & SQL", "Intermediate", 55],
            ["Data Analysis", "Intermediate", 70],
            ["Machine Learning", "Advanced", 90]
        ],

        guide:
            "Begin with Python programming and basic mathematics and statistics. Learn SQL for handling structured data. Then develop skills in data cleaning, analysis and visualization. After gaining these foundations, explore machine learning and practice with real-world datasets."
    },


    ai: {

        name: "Artificial Intelligence & Machine Learning",
        icon: "🤖",

        description:
            "Artificial Intelligence and Machine Learning focus on developing systems that can learn from data and perform tasks that normally require human intelligence.",

        skills: [
            "Python",
            "Mathematics",
            "Statistics",
            "Data Processing",
            "Machine Learning",
            "Model Evaluation",
            "Deep Learning Basics",
            "Problem Solving"
        ],

        tools: [
            "Python",
            "Jupyter Notebook",
            "Machine Learning Libraries",
            "Data Processing Tools",
            "Model Development Tools"
        ],

        roadmap: [
            "Python",
            "Mathematics",
            "Statistics",
            "Data Processing",
            "Machine Learning",
            "Deep Learning",
            "Model Building",
            "Projects"
        ],

        projects: [
            "House Price Prediction",
            "Student Performance Prediction",
            "Image Classification System"
        ],

        careers: [
            "Machine Learning Engineer",
            "AI Engineer",
            "Data Scientist"
        ],

        levels: [
            ["Python", "Beginner", 35],
            ["Mathematics & Statistics", "Intermediate", 55],
            ["Machine Learning", "Intermediate", 75],
            ["Deep Learning", "Advanced", 90]
        ],

        guide:
            "Start by learning Python and the mathematical concepts required for machine learning. Develop a good understanding of statistics and data processing before studying machine learning algorithms. Gradually explore deep learning and build practical projects to strengthen your understanding."
    },


    cyber: {

        name: "Cybersecurity",
        icon: "🔐",

        description:
            "Cybersecurity focuses on protecting computer systems, networks, applications and information from security threats.",

        skills: [
            "Computer Fundamentals",
            "Computer Networks",
            "Linux",
            "Cybersecurity Fundamentals",
            "Cryptography Basics",
            "Security Concepts",
            "Security Tools",
            "Problem Solving"
        ],

        tools: [
            "Linux",
            "Network Analysis Tools",
            "Security Testing Tools",
            "Virtual Machines",
            "Security Monitoring Tools"
        ],

        roadmap: [
            "Computer Basics",
            "Networking",
            "Linux",
            "Security Fundamentals",
            "Cryptography",
            "Security Testing",
            "Practical Labs",
            "Projects"
        ],

        projects: [
            "Password Strength Checker",
            "Secure Login System",
            "Basic Security Monitoring System"
        ],

        careers: [
            "Security Analyst",
            "Cybersecurity Engineer",
            "Security Tester"
        ],

        levels: [
            ["Computer & Networking", "Beginner", 35],
            ["Linux", "Intermediate", 55],
            ["Security Fundamentals", "Intermediate", 70],
            ["Security Testing", "Advanced", 90]
        ],

        guide:
            "Build a strong foundation in computer systems and networking before learning cybersecurity concepts. Learn Linux and basic security principles, followed by cryptography and security testing. Practice only in authorized environments and develop projects to understand security concepts practically."
    },


    cloud: {

        name: "Cloud Computing",
        icon: "☁️",

        description:
            "Cloud Computing provides computing resources and services such as storage, servers, networking and applications through the internet.",

        skills: [
            "Computer Networks",
            "Operating Systems",
            "Cloud Fundamentals",
            "Virtualization",
            "Cloud Storage",
            "Cloud Services",
            "Cloud Security Basics",
            "Deployment"
        ],

        tools: [
            "Cloud Platforms",
            "Virtual Machines",
            "Linux",
            "Cloud Management Tools",
            "Deployment Tools"
        ],

        roadmap: [
            "Computer Basics",
            "Networking",
            "Linux",
            "Cloud Concepts",
            "Virtualization",
            "Cloud Services",
            "Deployment",
            "Projects"
        ],

        projects: [
            "Cloud-Based File Storage",
            "Cloud Hosting Project",
            "Cloud Monitoring Dashboard"
        ],

        careers: [
            "Cloud Engineer",
            "Cloud Administrator",
            "Cloud Architect"
        ],

        levels: [
            ["Networking", "Beginner", 35],
            ["Linux & Virtualization", "Intermediate", 55],
            ["Cloud Services", "Intermediate", 75],
            ["Cloud Deployment", "Advanced", 90]
        ],

        guide:
            "Start with computer networks, operating systems and Linux fundamentals. Learn cloud computing concepts and virtualization before exploring cloud services. Practice deploying simple applications and gradually develop knowledge of cloud security and management."
    },


    mobile: {

        name: "Mobile App Development",
        icon: "📱",

        description:
            "Mobile application development focuses on designing and developing applications for smartphones and mobile devices.",

        skills: [
            "Programming Fundamentals",
            "Mobile UI Design",
            "Application Development",
            "APIs",
            "Database Basics",
            "Debugging",
            "Version Control",
            "Problem Solving"
        ],

        tools: [
            "Mobile Development IDE",
            "Mobile Development Tools",
            "Git",
            "Emulators",
            "Testing Tools"
        ],

        roadmap: [
            "Programming",
            "Mobile Basics",
            "UI Design",
            "App Development",
            "APIs",
            "Database",
            "Testing",
            "Projects"
        ],

        projects: [
            "To-Do List App",
            "Student Attendance App",
            "Expense Tracker App"
        ],

        careers: [
            "Mobile App Developer",
            "Android Developer",
            "Application Developer"
        ],

        levels: [
            ["Programming", "Beginner", 35],
            ["Mobile UI", "Intermediate", 55],
            ["App Development", "Intermediate", 75],
            ["Complete Applications", "Advanced", 90]
        ],

        guide:
            "Begin with programming fundamentals and understand the basic structure of mobile applications. Learn mobile UI design and application development, followed by APIs and databases. Start with small applications and gradually build complete mobile projects."
    },


    uiux: {

        name: "UI/UX Design",
        icon: "🎨",

        description:
            "UI/UX design focuses on creating attractive, accessible and user-friendly digital products and experiences.",

        skills: [
            "Design Principles",
            "User Research",
            "Wireframing",
            "Prototyping",
            "Visual Design",
            "Typography",
            "Usability Testing",
            "Problem Solving"
        ],

        tools: [
            "Design Tools",
            "Wireframing Tools",
            "Prototyping Tools",
            "Design Systems",
            "Collaboration Tools"
        ],

        roadmap: [
            "Design Basics",
            "User Research",
            "Wireframing",
            "Visual Design",
            "Prototyping",
            "Usability Testing",
            "Design Systems",
            "Portfolio"
        ],

        projects: [
            "Mobile App UI",
            "College Website Design",
            "Online Shopping App Prototype"
        ],

        careers: [
            "UI Designer",
            "UX Designer",
            "Product Designer"
        ],

        levels: [
            ["Design Principles", "Beginner", 35],
            ["Wireframing", "Intermediate", 55],
            ["Prototyping", "Intermediate", 75],
            ["UX Projects", "Advanced", 90]
        ],

        guide:
            "Start by understanding design principles and user experience concepts. Learn user research, wireframing and visual design. Then practice creating interactive prototypes and performing usability testing. Build a portfolio that demonstrates your design thinking and projects."
    },


    testing: {

        name: "Software Testing",
        icon: "🧪",

        description:
            "Software testing ensures that applications meet requirements, work correctly and provide a reliable user experience.",

        skills: [
            "Testing Fundamentals",
            "Test Case Design",
            "Bug Reporting",
            "Software Development Life Cycle",
            "Functional Testing",
            "Regression Testing",
            "Automation Basics",
            "Problem Solving"
        ],

        tools: [
            "Bug Tracking Tools",
            "Test Management Tools",
            "Automation Tools",
            "Version Control",
            "Testing Environments"
        ],

        roadmap: [
            "Testing Basics",
            "SDLC",
            "Test Cases",
            "Functional Testing",
            "Bug Reporting",
            "Regression Testing",
            "Automation",
            "Projects"
        ],

        projects: [
            "Website Testing Project",
            "Login System Test Cases",
            "E-Commerce Testing Project"
        ],

        careers: [
            "Software Tester",
            "QA Analyst",
            "Automation Tester"
        ],

        levels: [
            ["Testing Fundamentals", "Beginner", 35],
            ["Test Case Design", "Intermediate", 55],
            ["Functional Testing", "Intermediate", 70],
            ["Automation Testing", "Advanced", 90]
        ],

        guide:
            "Start with software testing fundamentals and understand the software development life cycle. Learn how to create test cases, identify bugs and perform functional and regression testing. After gaining manual testing knowledge, explore automation testing and practice with real applications."
    }

};


/* =====================================================
   SHOW DOMAIN
===================================================== */

function showDomain(key) {

    const domain = domains[key];

    const content = document.getElementById("domainContent");

    content.innerHTML = `

        <button class="back-btn" onclick="resetDetails()">
            ← Back to Career Domains
        </button>


        <div class="domain-header">

            <span class="section-label">
                CAREER DOMAIN
            </span>

            <h2>
                ${domain.icon} ${domain.name}
            </h2>

            <p>
                ${domain.description}
            </p>

        </div>


        <div class="content-grid">


            <!-- SKILLS -->

            <div class="info-box">

                <h3>🎯 Skills to Learn</h3>

                <ul>

                    ${domain.skills
                        .map(skill => `<li>${skill}</li>`)
                        .join("")}

                </ul>

            </div>


            <!-- TOOLS -->

            <div class="info-box">

                <h3>🛠 Tools & Technologies</h3>

                <ul>

                    ${domain.tools
                        .map(tool => `<li>${tool}</li>`)
                        .join("")}

                </ul>

            </div>


            <!-- ROADMAP -->

            <div class="info-box">

                <h3>🗺 Learning Roadmap</h3>

                <div class="roadmap">

                    ${domain.roadmap
                        .map((step, index) =>

                            `<div class="road-step">
                                ${index + 1}. ${step}
                            </div>`

                        )
                        .join("")}

                </div>

            </div>


            <!-- CAREER -->

            <div class="info-box">

                <h3>💼 Career Roles</h3>

                <ul>

                    ${domain.careers
                        .map(career => `<li>${career}</li>`)
                        .join("")}

                </ul>

            </div>


            <!-- PROJECTS -->

            <div class="info-box">

                <h3>💡 Practice Projects</h3>

                <ul>

                    ${domain.projects
                        .map(project => `<li>${project}</li>`)
                        .join("")}

                </ul>

            </div>


            <!-- SKILL LEVEL -->

            <div class="info-box">

                <h3>📈 Skill Progression</h3>

                ${domain.levels.map(level => `

                    <div class="skill-level">

                        <div class="skill-level-header">

                            <span>${level[0]}</span>

                            <span>${level[1]}</span>

                        </div>

                        <div class="progress">

                            <div
                                class="progress-bar"
                                style="width:${level[2]}%"
                            ></div>

                        </div>

                    </div>

                `).join("")}

            </div>


            <!-- GUIDE -->

            <div class="guide-box">

                <h3>📚 Your Learning Guide</h3>

                <p>
                    ${domain.guide}
                </p>

            </div>


        </div>

    `;

    document.getElementById("details").scrollIntoView({
        behavior: "smooth"
    });
}


/* =====================================================
   RESET DETAILS
===================================================== */

function resetDetails() {

    document.getElementById("domainContent").innerHTML = `

        <div class="welcome-details">

            <div class="large-icon">
                🚀
            </div>

            <span class="section-label">
                YOUR JOURNEY STARTS HERE
            </span>

            <h2>
                Select a Career Domain
            </h2>

            <p>
                Choose any career path above to discover the skills,
                roadmap, tools, projects and career opportunities
                you need to move forward.
            </p>

        </div>

    `;

    document.getElementById("domains").scrollIntoView({
        behavior: "smooth"
    });
}


/* =====================================================
   SEARCH DOMAINS
===================================================== */

function searchDomains() {

    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const cards =
        document.querySelectorAll(".domain-card");

    let found = false;

    cards.forEach(card => {

        const name =
            card.getAttribute("data-name");

        if (name.includes(input)) {

            card.style.display = "block";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    document.getElementById("noResults").style.display =
        found ? "none" : "block";
}


/* =====================================================
   DARK MODE
===================================================== */

function toggleTheme() {

    document.body.classList.toggle("dark");

    const button =
        document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {

        button.textContent = "☀️";

    } else {

        button.textContent = "🌙";

    }
}