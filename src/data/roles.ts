export type Role = {
  title: string
  slug: string
  skills: string[]
  certifications: string[]
  learningPath: string[]
  averageSalary: string
  summary: string
  badges: string[]
}

export const roles: Role[] = [
  {
    title: 'Software Engineer',
    slug: 'software-engineer',
    skills: ['JavaScript', 'Python', 'Data Structures', 'Algorithms'],
    certifications: ['Azure Developer Associate'],
    learningPath: [
      'Learn basic programming with Python or JavaScript',
      'Understand algorithms and data structures',
      'Build mini projects (e.g. to-do app, calculator)',
      'Explore Git, GitHub and contribute to open source',
      'Apply for internships or entry-level roles'
    ],
    averageSalary: '£45,000 – £75,000',
    summary: 'How to become a software engineer in the UK with no experience',
    badges: ['Most Searched', 'Top Pay']
  },
  {
    title: 'Data Analyst',
    slug: 'data-analyst',
    skills: ['SQL', 'Excel', 'Tableau', 'Python'],
    certifications: ['Microsoft Certified: Data Analyst Associate'],
    learningPath: [
      'Master Excel for basic analysis',
      'Learn SQL to query databases',
      'Visualise data using Tableau or Power BI',
      'Process data with Python and Pandas',
      'Build a portfolio and apply for roles'
    ],
    averageSalary: '£40,000 – £65,000',
    summary: 'Data analyst career path guide for beginners',
    badges: ['Most Searched', 'Beginner-Friendly']
  },
  {
    title: 'DevOps Engineer',
    slug: 'devops-engineer',
    skills: ['CI/CD', 'Docker', 'Kubernetes', 'AWS'],
    certifications: ['AWS Certified DevOps Engineer'],
    learningPath: [
      'Learn Linux fundamentals and shell scripting',
      'Set up CI/CD pipelines with GitHub Actions',
      'Containerise apps using Docker',
      'Deploy and manage Kubernetes clusters',
      'Automate infrastructure with Terraform'
    ],
    averageSalary: '£55,000 – £85,000',
    summary: 'DevOps engineer roadmap for UK professionals',
    badges: ['Most Searched', 'Top Pay']
  },
  {
    title: 'Cybersecurity Analyst',
    slug: 'cybersecurity-analyst',
    skills: ['Network Security', 'Threat Analysis', 'SIEM'],
    certifications: ['CompTIA Security+', 'CISSP'],
    learningPath: [
      'Understand networking and security basics',
      'Use tools like Wireshark and Splunk',
      'Perform ethical hacking on TryHackMe',
      'Learn incident response and forensics',
      'Obtain certifications and apply for jobs'
    ],
    averageSalary: '£45,000 – £75,000',
    summary: 'Entry path to a cybersecurity analyst role in the UK',
    badges: ['Most Searched']
  },
  {
    title: 'Cloud Engineer',
    slug: 'cloud-engineer',
    skills: ['AWS', 'Azure', 'Terraform', 'Networking'],
    certifications: ['AWS Solutions Architect', 'Azure Solutions Architect Expert'],
    learningPath: [
      'Learn cloud fundamentals (AWS, Azure, GCP)',
      'Deploy applications on cloud platforms',
      'Automate infrastructure with Terraform',
      'Manage networking and security',
      'Build cloud-native projects and certify'
    ],
    averageSalary: '£60,000 – £90,000',
    summary: 'Cloud engineer career path guide for 2025',
    badges: ['Top Pay', 'Most Searched']
  },
  {
    title: 'Machine Learning Engineer',
    slug: 'machine-learning-engineer',
    skills: ['Python', 'TensorFlow', 'Data Modelling'],
    certifications: ['TensorFlow Developer Certificate'],
    learningPath: [
      'Master Python, NumPy, and Pandas',
      'Learn machine learning algorithms',
      'Build models with Scikit-learn and TensorFlow',
      'Work on datasets like MNIST and Titanic',
      'Create projects and apply for ML roles'
    ],
    averageSalary: '£60,000 – £100,000',
    summary: 'Machine learning engineer roadmap without a degree',
    badges: ['Top Pay']
  },
  {
    title: 'AI Engineer',
    slug: 'ai-engineer',
    skills: ['Deep Learning', 'NLP', 'OpenAI APIs'],
    certifications: ['Azure AI Engineer Associate'],
    learningPath: [
      'Understand AI and deep learning fundamentals',
      'Explore NLP with Hugging Face and spaCy',
      'Integrate OpenAI APIs for smart applications',
      'Build chatbots and AI assistants',
      'Pursue AI roles in labs and startups'
    ],
    averageSalary: '£65,000 – £110,000',
    summary: 'AI engineer career path for ambitious developers',
    badges: ['Most Searched', 'Top Pay']
  },
  {
    title: 'Full Stack Developer',
    slug: 'full-stack-developer',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React'],
    certifications: [],
    learningPath: [
      'Master HTML, CSS, and JavaScript',
      'Learn front-end frameworks like React or Vue',
      'Build backends with Node.js and Express',
      'Work with databases like MongoDB and PostgreSQL',
      'Deploy full-stack projects and build a portfolio'
    ],
    averageSalary: '£50,000 – £80,000',
    summary: 'Full stack developer road to landing your first job',
    badges: ['Most Searched', 'Beginner-Friendly']
  },
  {
    title: 'Frontend Developer',
    slug: 'frontend-developer',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    certifications: [],
    learningPath: [
      'Learn HTML, CSS, and JavaScript fundamentals',
      'Build interfaces with React and component design',
      'Make responsive and accessible UIs',
      'Clone real apps and build portfolio projects',
      'Apply for junior frontend roles'
    ],
    averageSalary: '£40,000 – £65,000',
    summary: 'Beginner-friendly guide to becoming a frontend developer',
    badges: ['Beginner-Friendly', 'Most Searched']
  },
  {
    title: 'Backend Developer',
    slug: 'backend-developer',
    skills: ['Node.js', 'Express', 'Databases', 'APIs'],
    certifications: [],
    learningPath: [
      'Understand server-side architecture and REST APIs',
      'Learn Node.js and Express framework',
      'Work with SQL and NoSQL databases',
      'Implement authentication and security',
      'Build portfolio APIs and apply for backend roles'
    ],
    averageSalary: '£45,000 – £70,000',
    summary: 'Backend developer career path in the UK explained',
    badges: ['Top Pay']
  },
  {
    title: 'Data Engineer',
    slug: 'data-engineer',
    skills: ['ETL', 'Big Data', 'SQL', 'Spark'],
    certifications: ['Google Professional Data Engineer'],
    learningPath: [
      'Learn SQL and relational databases',
      'Understand ETL processes and data warehouses',
      'Process big data with Apache Spark',
      'Build data pipelines with Airflow',
      'Create a data engineering portfolio'
    ],
    averageSalary: '£55,000 – £85,000',
    summary: 'Data engineer roadmap for high-demand jobs',
    badges: ['Top Pay', 'Most Searched']
  },
  {
    title: 'UX/UI Designer',
    slug: 'ux-ui-designer',
    skills: ['Figma', 'Prototyping', 'User Research'],
    certifications: [],
    learningPath: [
      'Study design principles and UX fundamentals',
      'Create wireframes and prototypes in Figma',
      'Conduct user research and usability testing',
      'Build a design portfolio',
      'Collaborate with developers and apply for roles'
    ],
    averageSalary: '£40,000 – £65,000',
    summary: 'UX/UI designer career path for beginners',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'Product Manager',
    slug: 'product-manager',
    skills: ['Agile', 'Scrum', 'Stakeholder Management'],
    certifications: ['Certified Scrum Product Owner (CSPO)'],
    learningPath: [
      'Understand product lifecycle and Agile principles',
      'Use tools like Jira, Confluence, and Trello',
      'Write user stories and plan roadmaps',
      'Lead sprint demos and gather feedback',
      'Apply for associate product manager roles'
    ],
    averageSalary: '£55,000 – £90,000',
    summary: 'Product manager career path guide in tech companies',
    badges: ['Top Pay']
  },  
  {
    title: 'QA Engineer',
    slug: 'qa-engineer',
    skills: ['Selenium', 'Automated Testing', 'Jest'],
    certifications: ['ISTQB Certified Tester'],
    learningPath: [
      'Learn software testing principles',
      'Write manual and automated tests',
      'Use Selenium and Cypress for E2E testing',
      'Test APIs and front-end behaviour',
      'Build QA portfolio and apply for roles'
    ],
    averageSalary: '£40,000 – £65,000',
    summary: 'QA engineer roadmap for ensuring software quality',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'Systems Administrator',
    slug: 'systems-administrator',
    skills: ['Linux', 'Networking', 'Scripting'],
    certifications: ['CompTIA Server+', 'Azure Fundamentals'],
    learningPath: [
      'Manage Linux and Windows servers',
      'Configure DNS, DHCP, and Active Directory',
      'Automate tasks with Bash or PowerShell',
      'Monitor logs and secure systems',
      'Gain experience and apply for sysadmin roles'
    ],
    averageSalary: '£40,000 – £70,000',
    summary: 'Systems administrator career path for reliable IT infrastructure',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'Network Engineer',
    slug: 'network-engineer',
    skills: ['Routing', 'Switching', 'VPNs', 'Cisco'],
    certifications: ['Cisco CCNA'],
    learningPath: [
      'Learn OSI model and networking fundamentals',
      'Configure routers, switches, and firewalls',
      'Set up VPNs and VLANs',
      'Simulate networks with Packet Tracer',
      'Get certified and apply for network roles'
    ],
    averageSalary: '£50,000 – £75,000',
    summary: 'Network engineer roadmap for building secure networks',
    badges: ['Top Pay']
  },
  {
    title: 'Database Administrator',
    slug: 'database-administrator',
    skills: ['SQL', 'MySQL', 'Query Optimization', 'Backups'],
    certifications: ['Oracle DBA', 'Azure Database Admin'],
    learningPath: [
      'Master SQL and database design',
      'Implement backups and replication',
      'Optimize queries and manage indexes',
      'Monitor performance and logs',
      'Pursue DBA certifications and apply'
    ],
    averageSalary: '£45,000 – £70,000',
    summary: 'Database administrator career path for data reliability',
    badges: ['Top Pay']
  },
  {
    title: 'Business Analyst',
    slug: 'business-analyst',
    skills: ['Requirement Gathering', 'Modelling', 'Analysis'],
    certifications: ['CBAP'],
    learningPath: [
      'Gather stakeholder requirements and document them',
      'Use UML and BPMN for process modelling',
      'Analyze data with Excel and Power BI',
      'Create business cases and workflows',
      'Build portfolio and apply for analyst roles'
    ],
    averageSalary: '£45,000 – £75,000',
    summary: 'Business analyst career path for bridging tech and business',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'Technical Support Specialist',
    slug: 'technical-support-specialist',
    skills: ['Troubleshooting', 'Hardware', 'Customer Support'],
    certifications: ['CompTIA A+'],
    learningPath: [
      'Resolve common OS and software issues',
      'Repair PC and Mac hardware',
      'Use ticketing systems like Jira and Zendesk',
      'Provide on-site and remote support',
      'Gain experience and move up in IT support'
    ],
    averageSalary: '£30,000 – £50,000',
    summary: 'Tech support specialist path for customer-facing IT roles',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'IT Project Manager',
    slug: 'it-project-manager',
    skills: ['Planning', 'Scrum', 'Risk Management'],
    certifications: ['PMP', 'Scrum Master'],
    learningPath: [
      'Learn project management fundamentals',
      'Manage Agile and Scrum teams',
      'Use Asana or MS Project for planning',
      'Mitigate risks and manage budgets',
      'Lead IT projects and apply for PMP roles'
    ],
    averageSalary: '£55,000 – £95,000',
    summary: 'IT project manager path for leading tech initiatives',
    badges: ['Top Pay']
  },
  {
    title: 'Mobile App Developer',
    slug: 'mobile-app-developer',
    skills: ['Kotlin', 'Swift', 'React Native'],
    certifications: [],
    learningPath: [
      'Learn native Android (Kotlin) or iOS (Swift)',
      'Build cross-platform apps with React Native',
      'Understand app store deployments',  
      'Optimize performance and UI design',
      'Publish apps and apply for roles'
    ],
    averageSalary: '£45,000 – £80,000',
    summary: 'Mobile app developer roadmap for iOS and Android',
    badges: ['Most Searched']
  },
  {
    title: 'Site Reliability Engineer (SRE)',
    slug: 'site-reliability-engineer',
    skills: ['Monitoring', 'Automation', 'Incident Response'],
    certifications: ['Google SRE', 'CKA'],
    learningPath: [
      'Understand site reliability and DevOps principles',
      'Implement monitoring with Prometheus and Grafana',
      'Automate fixes with scripting and CI/CD',
      'Conduct post-mortems and reliability planning',
      'Apply for SRE and infrastructure roles'
    ],
    averageSalary: '£60,000 – £100,000',
    summary: 'SRE career path for ensuring uptime and reliability',
    badges: ['Top Pay']
  },
  {
    title: 'AI Prompt Engineer',
    slug: 'ai-prompt-engineer',
    skills: ['NLP', 'Prompt Writing', 'LLM APIs'],
    certifications: ['DeepLearning.AI Prompt Engineering'],
    learningPath: [
      'Learn NLP basics and LLM internals',
      'Practice crafting effective prompts',
      'Integrate with GPT, Claude, and LLaMA APIs',
      'Build chatbots and automation flows',
      'Demonstrate projects and apply for roles'
    ],
    averageSalary: '£55,000 – £90,000',
    summary: 'AI prompt engineer path for working with LLMs',
    badges: ['Most Searched']
  },
  {
    title: 'Blockchain Developer',
    slug: 'blockchain-developer',
    skills: ['Solidity', 'Ethereum', 'Smart Contracts'],
    certifications: ['Blockchain Council Developer'],
    learningPath: [
      'Understand blockchain fundamentals',
      'Write smart contracts in Solidity',  
      'Interact with Web3.js and Truffle',
      'Build and deploy dApps on testnets',  
      'Contribute to blockchain projects'
    ],
    averageSalary: '£55,000 – £95,000',
    summary: 'Blockchain developer roadmap for decentralized apps',
    badges: ['Most Searched']
  },
  {
    title: 'Tech Recruiter',
    slug: 'tech-recruiter',
    skills: ['ATS', 'Tech Terms', 'Sourcing'],
    certifications: ['LinkedIn Recruiter', 'DevSkiller Tech Hiring'],
    learningPath: [
      'Identify key technical skills in resumes',
      'Use ATS and sourcing tools (LinkedIn, GitHub)',
      'Screen and interview tech candidates',
      'Build client and candidate relationships',
      'Obtain recruiter certifications and grow network'
    ],
    averageSalary: '£35,000 – £60,000',
    summary: 'Tech recruiter path for connecting talent with roles',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'Technical SEO Specialist',
    slug: 'technical-seo-specialist',
    skills: ['SEO', 'Analytics', 'HTML'],
    certifications: ['Google Analytics', 'SEMrush SEO'],
    learningPath: [
      'Learn SEO fundamentals and best practices',
      'Use Google Analytics and Search Console',
      'Optimize website performance and structure',
      'Conduct keyword research and audits',
      'Apply for technical SEO roles'
    ],
    averageSalary: '£35,000 – £60,000',
    summary: 'Technical SEO specialist path for improving search visibility',
    badges: ['Most Searched']
  },
  {
    title: 'Cloud Security Engineer',
    slug: 'cloud-security-engineer',
    skills: ['Cloud Security', 'IAM', 'Network Security', 'Encryption'],
    certifications: ['Certified Cloud Security Professional (CCSP)', 'AWS Certified Security – Specialty'],
    learningPath: [
      'Learn cloud fundamentals (AWS, Azure, GCP)',
      'Understand identity and access management (IAM)',
      'Implement network security and encryption in the cloud',
      'Use security monitoring tools like GuardDuty and Security Center',
      'Obtain cloud security certifications and apply for roles'
    ],
    averageSalary: '£65,000 – £95,000',
    summary: 'Secure cloud infrastructures, protect data and manage identities',
    badges: ['Top Pay', 'Most Searched']
  },
  {
    title: 'DevSecOps Engineer',
    slug: 'devsecops-engineer',
    skills: ['DevOps', 'Security', 'Automation', 'CI/CD'],
    certifications: ['Certified DevSecOps Professional', 'CompTIA Security+'],
    learningPath: [
      'Understand DevOps pipelines and best practices',
      'Integrate security into CI/CD with SAST and DAST tools',
      'Automate security testing with Jenkins or GitHub Actions',
      'Implement container and cloud security (Docker, Kubernetes)',
      'Obtain DevSecOps certification and apply for roles'
    ],
    averageSalary: '£60,000 – £90,000',
    summary: 'Merge security into DevOps pipelines to deliver secure software fast',
    badges: ['Most Searched', 'Top Pay']
  },
  {
    title: 'IoT Engineer',
    slug: 'iot-engineer',
    skills: ['Embedded Linux', 'MQTT', 'Sensors', 'Microcontrollers'],
    certifications: ['Cisco IoT Certification', 'AWS IoT Developer - Specialty'],
    learningPath: [
      'Learn basics of microcontrollers and sensors (Arduino, Raspberry Pi)',
      'Understand IoT communication protocols (MQTT, HTTP)',
      'Develop edge applications on embedded Linux',
      'Secure IoT devices and data pipelines',
      'Build IoT prototypes and apply for roles'
    ],
    averageSalary: '£45,000 – £70,000',
    summary: 'Design and deploy Internet-of-Things solutions for connected devices',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'Embedded Systems Engineer',
    slug: 'embedded-systems-engineer',
    skills: ['C/C++', 'Real-Time OS', 'Microcontrollers', 'RTOS'],
    certifications: ['ARM Accredited Engineer', 'Certified Embedded Systems Engineer'],
    learningPath: [
      'Learn C/C++ programming for low-level systems',
      'Understand real-time operating systems (FreeRTOS, VxWorks)',
      'Work with microcontrollers (STM32, PIC)',
      'Implement hardware-software integration and debugging',
      'Build embedded projects and apply for roles'
    ],
    averageSalary: '£50,000 – £80,000',
    summary: 'Develop firmware and low-level software for hardware devices',
    badges: ['Most Searched']
  },
  {
    title: 'Robotics Engineer',
    slug: 'robotics-engineer',
    skills: ['ROS', 'C++', 'Python', 'Control Systems'],
    certifications: ['ROS Developer Certification', 'Certified LabVIEW Associate'],
    learningPath: [
      'Learn robotics fundamentals and kinematics',
      'Program with ROS and Gazebo simulator',
      'Implement control algorithms in C++ and Python',
      'Integrate sensors and actuators on robotic platforms',
      'Build robotic prototypes and apply for roles'
    ],
    averageSalary: '£55,000 – £85,000',
    summary: 'Design, program and deploy autonomous robotic systems',
    badges: ['Top Pay']
  },
  {
    title: 'Computer Vision Engineer',
    slug: 'computer-vision-engineer',
    skills: ['OpenCV', 'Deep Learning', 'Python', 'Image Processing'],
    certifications: ['Microsoft Certified: Azure AI Engineer', 'TensorFlow Developer Certificate'],
    learningPath: [
      'Learn image processing basics with OpenCV',
      'Study deep learning models for vision (CNNs)',
      'Implement object detection and segmentation',
      'Use frameworks like TensorFlow and PyTorch',
      'Build CV projects and apply for roles'
    ],
    averageSalary: '£60,000 – £95,000',
    summary: 'Use AI to interpret and analyse visual data in real time',
    badges: ['Most Searched', 'Top Pay']
  },
  {
    title: 'Natural Language Processing Engineer',
    slug: 'nlp-engineer',
    skills: ['NLP', 'Deep Learning', 'Python', 'Transformer Models'],
    certifications: ['DeepLearning.AI NLP Specialization'],
    learningPath: [
      'Learn text preprocessing and tokenization',
      'Understand language models (RNNs, Transformers)',
      'Implement sentiment analysis and NER',
      'Fine-tune models like BERT and GPT',
      'Build NLP applications and apply for roles'
    ],
    averageSalary: '£60,000 – £100,000',
    summary: 'Build systems that understand and generate human language',
    badges: ['Top Pay']
  },
  {
    title: 'Quantum Computing Researcher',
    slug: 'quantum-computing-researcher',
    skills: ['Quantum Algorithms', 'Qiskit', 'Python', 'Linear Algebra'],
    certifications: ['IBM Quantum Developer'],
    learningPath: [
      'Learn quantum mechanics basics and qubit models',
      'Study quantum gates and circuits',
      'Program with Qiskit or Cirq',
      'Understand quantum algorithms (QC, Grover, Shor)',
      'Publish research and apply for roles'
    ],
    averageSalary: '£70,000 – £120,000',
    summary: 'Research and develop algorithms for quantum computers',
    badges: ['Most Searched', 'Top Pay']
  },
  {
    title: 'VR/AR Developer',
    slug: 'vr-ar-developer',
    skills: ['Unity', 'Unreal Engine', 'C#', '3D Graphics'],
    certifications: ['Unity Certified Developer'],
    learningPath: [
      'Learn 3D graphics fundamentals and game engines',
      'Develop interactive experiences in Unity or Unreal',
      'Implement input systems for VR/AR devices',
      'Optimize performance and UX for immersive apps',
      'Publish VR/AR applications and apply for roles'
    ],
    averageSalary: '£45,000 – £75,000',
    summary: 'Create immersive virtual and augmented reality experiences',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'Game Designer',
    slug: 'game-designer',
    skills: ['Game Theory', 'Level Design', 'Unity', 'Prototyping'],
    certifications: ['Certified Game Designer'],
    learningPath: [
      'Study game mechanics and design principles',
      'Sketch levels and gameplay flow',
      'Prototype with Unity or Unreal',
      'Conduct playtesting and iterate designs',
      'Build a portfolio of game prototypes'
    ],
    averageSalary: '£35,000 – £60,000',
    summary: 'Design engaging game mechanics and levels',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'Technical Writer',
    slug: 'technical-writer',
    skills: ['Writing', 'Markdown', 'APIs', 'Documentation Tools'],
    certifications: ['DITA XML Certification'],
    learningPath: [
      'Learn technical writing fundamentals',
      'Use documentation tools like Sphinx or Docusaurus',
      'Write clear API and user guides',
      'Collaborate with engineers for accuracy',
      'Build documentation portfolio and apply'
    ],
    averageSalary: '£35,000 – £60,000',
    summary: 'Produce clear, user-friendly technical documentation',
    badges: ['Most Searched']
  },
  {
    title: 'Technical Account Manager',
    slug: 'technical-account-manager',
    skills: ['Customer Success', 'Technical Support', 'SaaS', 'Communication'],
    certifications: ['Certified Customer Success Manager'],
    learningPath: [
      'Understand SaaS platforms and customer lifecycle',
      'Learn account management best practices',
      'Develop technical troubleshooting skills',
      'Build strong client relationships',
      'Apply for technical account roles'
    ],
    averageSalary: '£45,000 – £80,000',
    summary: 'Bridge technical solutions and client success',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'Solutions Architect',
    slug: 'solutions-architect',
    skills: ['Architecture Design', 'Cloud', 'Microservices', 'Security'],
    certifications: ['AWS Solutions Architect – Professional', 'TOGAF Certified'],
    learningPath: [
      'Learn software architecture patterns',
      'Design cloud-based microservices',
      'Implement security and compliance',
      'Create architecture diagrams and documentation',
      'Obtain architect certifications and apply'
    ],
    averageSalary: '£80,000 – £120,000',
    summary: 'Design robust, scalable solutions across technologies',
    badges: ['Top Pay']
  },
  {
    title: 'SEO Specialist',
    slug: 'seo-specialist',
    skills: ['Keyword Research', 'On-Page SEO', 'Analytics', 'Content Strategy'],
    certifications: ['Google Analytics Individual Qualification'],
    learningPath: [
      'Learn SEO fundamentals and best practices',
      'Perform keyword research with SEMrush or Ahrefs',
      'Optimize on-page elements and metadata',
      'Use Google Analytics for performance tracking',
      'Apply for SEO specialist roles'
    ],
    averageSalary: '£30,000 – £50,000',
    summary: 'Improve website visibility and drive organic traffic',
    badges: ['Most Searched', 'Beginner-Friendly']
  },
  {
    title: 'Digital Forensics Analyst',
    slug: 'digital-forensics-analyst',
    skills: ['Forensic Tools', 'File Recovery', 'Chain of Custody', 'Windows/Linux'],
    certifications: ['EnCase Certified Examiner', 'GIAC Certified Forensic Analyst'],
    learningPath: [
      'Learn forensic investigation fundamentals',
      'Use tools like EnCase and FTK',
      'Understand file system forensics',
      'Maintain chain of custody and reporting',
      'Obtain certifications and apply for roles'
    ],
    averageSalary: '£50,000 – £80,000',
    summary: 'Investigate digital evidence and support legal cases',
    badges: ['Top Pay']
  },
  {
    title: 'E-commerce Developer',
    slug: 'ecommerce-developer',
    skills: ['Shopify', 'Magento', 'JavaScript', 'Payment APIs'],
    certifications: ['Shopify Developer Certification'],
    learningPath: [
      'Learn e-commerce fundamentals and platforms',
      'Develop themes and storefronts',
      'Integrate payment gateways and APIs',
      'Implement security and performance optimizations',
      'Build e-commerce projects and apply'
    ],
    averageSalary: '£40,000 – £70,000',
    summary: 'Build and customize online retail platforms',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'Bioinformatics Engineer',
    slug: 'bioinformatics-engineer',
    skills: ['Python', 'R', 'Genomics', 'Data Analysis'],
    certifications: ['Certified Bioinformatics Professional'],
    learningPath: [
      'Learn biology fundamentals and genomics',
      'Analyse sequences with Python and R',
      'Use tools like BLAST and Bioconductor',
      'Develop pipelines for genomic data',
      'Apply for bioinformatics roles'
    ],
    averageSalary: '£45,000 – £75,000',
    summary: 'Combine biology and computation to analyse genomic data',
    badges: ['Most Searched']
  },
  {
    title: 'Data Privacy Officer',
    slug: 'data-privacy-officer',
    skills: ['GDPR', 'Risk Assessment', 'Policy Writing', 'Auditing'],
    certifications: ['CIPP/E – Certified Information Privacy Professional'],
    learningPath: [
      'Learn GDPR and data protection laws',
      'Perform privacy impact assessments',
      'Develop privacy policies and procedures',
      'Conduct audits and compliance checks',
      'Obtain CIPP/E certification and apply'
    ],
    averageSalary: '£50,000 – £85,000',
    summary: 'Ensure organisational compliance with data protection regulations',
    badges: ['Top Pay']
  },
  {
    title: 'Data Governance Analyst',
    slug: 'data-governance-analyst',
    skills: ['Data Quality', 'Metadata Management', 'Stewardship', 'Collaboration'],
    certifications: ['CDMP – Certified Data Management Professional'],
    learningPath: [
      'Learn data governance frameworks',
      'Implement data quality controls',
      'Manage metadata and lineage',
      'Collaborate with stakeholders and IT',
      'Obtain CDMP certification and apply'
    ],
    averageSalary: '£45,000 – £75,000',
    summary: 'Manage data assets and enforce governance policies',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'AI Ethics Specialist',
    slug: 'ai-ethics-specialist',
    skills: ['Ethics', 'Policy', 'Bias Mitigation', 'Regulation'],
    certifications: ['AI Ethics Certification'],
    learningPath: [
      'Study AI ethics principles and case studies',
      'Learn bias detection and mitigation techniques',
      'Understand AI regulations and compliance',
      'Develop ethical guidelines for AI projects',
      'Apply for AI ethics roles in organisations'
    ],
    averageSalary: '£50,000 – £80,000',
    summary: 'Ensure responsible and fair use of AI systems',
    badges: ['Most Searched']
  },
  {
    title: 'MLOps Engineer',
    slug: 'mlops-engineer',
    skills: ['Machine Learning', 'CI/CD', 'Docker', 'Kubernetes'],
    certifications: ['Google Cloud Professional Machine Learning Engineer'],
    learningPath: [
      'Learn ML workflows and model deployment',
      'Set up CI/CD for ML pipelines',
      'Containerise models with Docker',
      'Orchestrate with Kubernetes and Kubeflow',
      'Apply for MLOps roles'
    ],
    averageSalary: '£60,000 – £95,000',
    summary: 'Automate and manage ML model lifecycle in production',
    badges: ['Top Pay']
  },
  {
    title: 'Site Reliability Security Engineer',
    slug: 'sre-security-engineer',
    skills: ['SRE', 'Security', 'Incident Response', 'Automation'],
    certifications: ['Google SRE', 'CISSP'],
    learningPath: [
      'Understand SRE principles and security practices',
      'Implement monitoring and alerting with security focus',
      'Automate incident response workflows',
      'Conduct security post-mortems and reliability planning',
      'Apply for SRE security roles'
    ],
    averageSalary: '£65,000 – £100,000',
    summary: 'Combine reliability engineering and security in production systems',
    badges: ['Most Searched', 'Top Pay']
  },
  {
    title: 'RPA Developer',
    slug: 'rpa-developer',
    skills: ['UiPath', 'Automation', 'VBScript', 'Process Mapping'],
    certifications: ['UiPath Certified RPA Developer'],
    learningPath: [
      'Learn RPA fundamentals and tools',
      'Map business processes for automation',  
      'Develop bots with UiPath or Automation Anywhere',
      'Implement error handling and logging',
      'Build RPA portfolio and apply for roles'
    ],
    averageSalary: '£40,000 – £65,000',
    summary: 'Automate repetitive tasks using robotic process automation',
    badges: ['Beginner-Friendly']
  },
  {
    title: 'Digital Marketing Technologist',
    slug: 'digital-marketing-technologist',
    skills: ['Marketing Automation', 'Analytics', 'CRM', 'SEO'],
    certifications: ['Google Analytics Individual Qualification'],
    learningPath: [
      'Learn marketing fundamentals and tools',
      'Implement automation with platforms like HubSpot',
      'Analyse campaigns with Google Analytics',
      'Integrate CRM systems and data pipelines',
      'Apply for digital marketing tech roles'
    ],
    averageSalary: '£35,000 – £60,000',
    summary: 'Bridge marketing and technology to optimise campaigns',
    badges: ['Most Searched']
  },
  {
    title: 'Blockchain Architect',
    slug: 'blockchain-architect',
    skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Security'],
    certifications: ['Certified Blockchain Architect'],
    learningPath: [
      'Understand blockchain protocols and consensus',
      'Design smart contract architectures',
      'Implement dApps with security best practices',
      'Deploy and monitor blockchain networks',
      'Apply for blockchain architect roles'
    ],
    averageSalary: '£70,000 – £120,000',
    summary: 'Architect and design secure, scalable blockchain systems',
    badges: ['Top Pay']
  }
];
