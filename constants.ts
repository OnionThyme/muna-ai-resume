
import { Project, SkillCategory } from './types';

export const RESUME_PDF_LINK = "https://drive.google.com/uc?export=download&id=1V0vgBONcf7KFGzzW5D7TSlM0GPTSkRU4";

export const RESUME_CONTENT = `
Muna Conteh
Senior Business Analyst driving technology delivery across U.S. federal agencies and enterprise environments using Agile methodologies. Expert in applying AI-enabled solutions to automate and modernize enterprise business processes, document management, and data-driven workflows. Recognized for delivering measurable outcomes through process optimization, AI-supported analysis, and informed build-versus-buy decisions. Strong in requirements leadership, cross-functional collaboration, and aligning technical execution with strategic and regulatory priorities.

KEY ROLES & PROJECTS:
1. Generative AI Consultant @ Kikiing Technology (Apr 2024 - Present): Implementing AI tools for clients, prompt engineering, and AI literacy training. Projects include MedTech automated scripting and retail knowledge bases.
● Guides clients on leveraging generative AI for business growth through training on AI literacy, prompt engineering, and AI-powered solutions.
● Implement AI tools to streamline client operations, including content generation, marketing support, and meeting management.
● Train clients to build simple AI tools aligned to their use cases, improving automation and workflow efficiency.
● Conduct in-depth research on generative AI technologies and assess their impact on processes across Project Management, MedTech, and AgriTech.
● Develop and deliver AI governance training to enable responsible, compliant, and scalable AI practices.
PROJECTS:
● Project 1: Automated Scripting for Medical Education (MedTech)
○ The Challenge: Worked with a Medical Doctor struggling to manage a massive 300-page training presentation. Manual script writing was taking too long.
○ My Action: Designed a custom automation workflow using ChatGPT and Google Gemini. Engineered a complex prompt that forced the AI to "read" research artifacts and cross-reference them with visual content.
○ The Technical Detail: Used Prompt Chaining where the output of the data extraction phase became the input for the script-writing phase to ensure context was kept over 300 pages.
○ The Result: Reduced the script-drafting timeline by approximately 80%, allowing the client to move to the recording phase weeks ahead of schedule.
● Project 2: AI-Powered Knowledge Base for Personalized Client Care (Retail/Service)
○ The Challenge: Esthetician manually creating custom product usage guides, causing delays.
○ My Action: Built a private, grounded AI knowledgebase using NotebookLM and Google Gemini. Gathered past guides and ingredient lists to "train" the tool.
○ The Technical Detail: Implemented "Source-Grounded" architecture. AI restricted to only using provided documents to eliminate hallucinations.
○ The Result: Enabled generation of custom guides the same day of service, saving 3 hours of administrative work per week.
● Project 3: Government-Focused AI Governance & PM Literacy (Enterprise)
○ The Challenge: Training a Software Project Manager in a government-facing enterprise on Generative AI within strict regulations.
○ My Action: Developed specialized curriculum bridging basic AI use and Enterprise AI Governance. Taught prompt engineering for automated project dashboards.
○ The Technical Detail: Focused on AI Ethics and Compliance. Taught "Bias Detection" in prompts to ensure objective reports.
○ The Result: Transitioned her from "AI-curious" to "AI-competent," speeding up executive reporting.
● Project 4: Operational Automation for Home Health Care (Healthcare)
○ The Challenge: Home health care agency overwhelmed by documentation for Home Health Aide Certification.
○ My Action: Analyzed manual process. Trained team on Prompt Engineering for document drafting.
○ The Result: Reduced time spent on document preparation by over 50%.

2. Senior AI Business Analyst @ Randstad (Client: Federal Reserve Board) (Oct 2023 - Apr 2024): Led first AI product for sentiment analysis of public comments. 
● Collaborated with technical and business stakeholders to implement organization’s first AI product using public/private datasets.
● Supported digital transformation of public comment management.
● Drove efficient delivery in a 2-week Agile sprint environment.
● Managed RAID logs to track risks and changes.
● Served as acting Scrum Master.
PROJECT: The Public Comment Sentiment Analysis AI Engine
○ The Challenge: Fed Reserve receives thousands of pages of unstructured public feedback. Humanly impossible to read quickly enough.
○ My Action: Liaison between Policy Experts and Data Scientists. Translated needs for "understanding public mood" into NLP requirements.
○ The Technical Detail: Maintained BRD and Technical Specs. Focused on NLP logic for "financial concern" vs "negative sentiment".
○ The Result: Bridged communication gap, allowing data science team to build the model.
○ AI Governance: Led AI Governance. Created RACI Matrix and RTM. Documented "Explainability" of the model for legal compliance.
○ Modernizing Architecture: Managed "To-Be" system design using MS Visio. Managed RAID log for integration of three distinct systems.

3. Senior BA/Scrum Master @ Skyline Tech (Client: Maryland DoIT) (Aug 2022 - July 2023): AI-enabled Enterprise Asset Management (EAM) feasibility.
● Led build-vs-buy feasibility analysis for AI-enabled EAM solution in ServiceNow.
● Acted as Scrum Master for the analysis team.
PROJECT: AI-Enabled Enterprise Asset Management (EAM) Feasibility & Strategy
○ The Challenge: State's asset management in ServiceNow failed mandates for real-time inventory. "As-Is" state plagued by data integrity issues.
○ My Action: Led end-to-end strategic analysis and vendor evaluation. Coordinated live demos for Cabinet Secretary.
○ The Technical Detail: Leveraged Gartner Research. Developed Matrix to evaluate vendors on security and NLP. Defined "Plain English" query requirements.
○ The Result: Recommended optimizing in-house system over off-the-shelf software, saving licensing fees and addressing AI governance gaps.

4. Senior BA/Scrum Master @ Base2 Tech (Client: Department of Justice) (Aug 2017 - Dec 2021): CATS security modernization, PPP fraud recovery automation.
● Led cross-functional Agile delivery as Scrum Master.
● Accelerated federal recovery of fraudulent PPP funds.
PROJECT 1: AFMS Security Modernization (2FA & NIST Compliance)
○ The Challenge: CATS database login outdated and non-compliant.
○ My Action: Led cross-functional Agile team redesigning login. Translated federal security requirements into technical stories.
○ The Technical Detail: Managed Two-Factor Authentication (2FA) implementation meeting NIST and FISMA standards.
○ The Result: Delivered modernized, compliant login portal.
PROJECT 2: Asset Seizure Notification Module (PPP Fraud Recovery)
○ The Challenge: Urgent need to seize fraudulent PPP loans. Manual notification process was a bottleneck.
○ My Action: Led analysis for Asset Seizure Notification module. Mapped "As-Is" process with legal stakeholders.
○ The Technical Detail: Designed system logic for automated notification engine tied to CATS database triggers. Ensured "Chain of Custody".
○ The Result: Accelerated federal recovery of fraudulent funds.

5. Senior Business Analyst @ Maximus (Client: NY State Health Department) (Nov 2015 - July 2017): Medicaid/Medicare notice automation and eligibility systems.
○ The Challenge: Manual legal "Notices" for eligibility changes were slow and error-prone.
○ My Action: Co-led effort to automate notice process. Performed Gap Analysis.
○ The Technical Detail: Created functional documentation. Used Process Mapping for lifecycle visualization.
○ The Result: Transitioned state to fully automated notice system.

6. Software Business Systems Analyst II @ CGI (Client: Centers for Medicare & Medicaid Services - CMS) (Feb 2013 - Oct 2015): Healthcare.gov federal exchange enhancements and FFM integration.
○ The Challenge: Evolving federal healthcare laws required real-time system updates.
○ My Action: Led Gap Analysis and requirements elicitation. Acted as "translator" between CMS policy experts and technical teams.
○ The Technical Detail: Authored BRDs and Technical Specs. Focused on Data Mapping between federal portal and state systems.
○ The Result: Ensured critical system updates were 100% compliant with federal law.

7. Senior Business Analyst @ Acumen Solutions (Client: USPS) (May 2010 - Jan 2013): Logistics & Customer Experience modernization for mail delivery tracking.
○ The Challenge: Legacy paper-based tracking systems.
○ My Action: Led requirements gathering. Bridged "old world" paper tracking and "new world" cloud technology.
○ The Technical Detail: Mapped "As-Is" manual processes to "To-Be" cloud architecture.
○ The Result: Provided technical roadmap for migration to cloud-based environment.

8. QA Analyst @ Thomson Financial (In-house product: Thomson ONE) (February 2009 – April 2010): Supported global investment banking clients by maintaining the integrity of mission-critical financial data delivery.
○ The Challenge: Ensuring the reliability of a high-stakes financial data platform sold to global banks, where data accuracy and system uptime are critical for market operations.
○ My Action: Served as a core member of the internal product team. Translated business needs into rigorous test cases to simulate real-world banking workflows.
○ The Technical Detail: Designed and executed manual and automated test scripts. Focused on data validation and UI/UX consistency across the Thomson ONE suite.
○ The Result: Streamlined the release cycle by identifying critical bugs early, ensuring a stable and high-performing product for global financial institutions.

SKILLS: 
● Product & Systems Analysis: Gap Analysis, Workflow Analysis, Root Cause Analysis, Data Fluency, Use Case Discovery, User Stories, Acceptance Criteria, Technical Specifications, Gap Analysis, SQL, User Flows, Functional Wireframes, Mockups 
● Agile: Sprint Ceremonies, Backlog Refinement, Process Mapping, JIRA, Agile Metrics, Scrum Master (Role-based), Impediment Removal
● Platforms & Tools: ServiceNow Platform, MS Teams, SharePoint, Confluence, MS Visio, Excel, PowerPoint, GitHub, FileZilla, ClearQuest, ClearCase, Balsamiq, Quality Center, HP ALM, Google Workspace
● Documentation: Functional Specifications, Technical Documentation, Training Materials, System Demonstrations
● AI & Modernization: Generative AI Workspace, Prompt Engineering, ChatGPT, Claude, Google Gemini, Bias Detection, Ethical AI Governance
● Healthcare & Compliance: HIPAA Awareness, Regulatory Compliance, Medicaid/Medicare Systems, Data Privacy, Risk Management
● Leadership & Project Management: Change Management, Stakeholder Engagement, RACI Matrix, RTM Development, Governance Development
● DevOps & Delivery: Deployment Monitoring, User Acceptance Testing (UAT), Test Planning & Execution, Release Management

Education: BS Business Administration, Old Dominion University.
Certifications: Business Analysis: Essential Tools and Techniques, Requirements Elicitation and Analysis, Learning Data Analytics: 1 Foundations, Agile Requirements Foundations
`;

export const PROJECTS: Project[] = [
  {
    id: 'kikiing',
    title: 'Generative AI Consultant',
    company: 'Kikiing Technology',
    period: 'April 2024 - Present',
    location: 'Remote',
    isCurrent: true,
    highlights: [
      'Guided professionals and small businesses to leverage GenAI for operational efficiency and specialized content automation.',
      'Implements AI tools to streamline client operations.',
      'Trains clients on prompt engineering and workflow efficiency.'
    ],
    fullStory: {
      challenge: 'Small business owners and medical professionals were losing hours to repetitive documentation, such as a Doctor manually scripting a 300-page training deck and an esthetician hand-writing custom client guides.',
      action: 'I designed tailored AI solutions, including a "source grounded" prompt workflow for medical accuracy and a custom knowledge base using Google Gemini and NotebookLM for personalized skincare guides.',
      technicalDetail: 'Engineered multi-stage prompt chaining to synthesize research artifacts with visual content, and mapped historical client data into a structured AI knowledge base to automate delivery of usage guides.',
      result: 'Reduced script drafting time by 80% for the medical project and enabled "same day" delivery of custom guides for the esthetician, significantly increasing client satisfaction and operational speed.'
    }
  },
  {
    id: 'fed-reserve',
    title: 'Senior AI Business Analyst',
    company: 'Randstad USA',
    client: 'Federal Reserve Board',
    period: 'October 2023 – April 2024',
    location: 'Washington, DC',
    highlights: [
      'Implemented organization\'s first AI product leveraging large datasets.',
      'Established AI governance for new AI components.',
      'Managed digital transformation of public comment systems.'
    ],
    fullStory: {
      challenge: 'The Fed received thousands of pages of unstructured public feedback via the Proposals Search portal. Human policy experts could not read them fast enough for decision-making.',
      action: 'Served as liaison between Policy Experts and Data Scientists, to build a three-tier system: a submission interface, an internal management portal, and a Governor decision dashboard.',
      technicalDetail: 'Authored technical specs for NLP logic and mapped "To-Be" data flows in Visio to ensure model explainability and federal transparency.',
      result: 'Automated the categorization of public sentiment, turning raw data into actionable insights while maintaining 100% regulatory compliance.'
    }
  },
  {
    id: 'doit-md',
    title: 'Senior Business Analyst / Scrum Master',
    company: 'Skyline Technology',
    client: 'Maryland Department of IT',
    period: 'August 2022 – July 2023',
    location: 'Baltimore, MD',
    highlights: [
      'Led build-vs-buy feasibility for AI-enabled EAM solution.',
      'Defined technical needs for NLP search and network security.',
      'Conducted market intelligence using Gartner Research to evaluate top-tier AI and NLP asset management vendors.'
    ],
    fullStory: {
      challenge: 'The existing asset management process within ServiceNow was failing state mandates for real-time inventory, plagued by duplicate records and high manual effort.',
      action: 'Led end-to-end strategic analysis and vendor evaluation. Coordinated live technical demonstrations for the Cabinet Secretary.',
      technicalDetail: 'Leveraged Gartner Research and developed a matrix to evaluate vendors on security protocols and NLP capabilities.',
      result: 'Provided recommendation to maintain and optimize the system in-house, avoiding massive licensing fees and addressing AI governance gaps.'
    }
  },
  {
    id: 'doj',
    title: 'Senior Business Analyst / Scrum Master',
    company: 'Base2 Technology',
    client: 'Department of Justice',
    period: 'August 2017 – December 2021',
    location: 'Washington, DC',
    highlights: [
      'Redesigned AFMS login experience with compliant 2FA.',
      'Accelerated federal recovery of fraudulent PPP funds.',
      'Triaged production defects and performed Root-Cause Analysis (RCA).'
    ],
    fullStory: {
      challenge: 'DOJ launched a high-priority initiative to recover fraudulent PPP funds. The manual paper-heavy notification process for seized property was a critical bottleneck.',
      action: 'I led the design of a digital notification component, mapping legal requirements into automated email templates fueled by real-time CATS data.',
      technicalDetail: 'Designed system logic for an automated notification engine tied to specific status changes in the CATS database.',
      result: 'Digitized a critical legal checkpoint, reducing manual errors and accelerating the federal forfeiture lifecycle.'
    }
  },
  {
    id: 'maximus',
    title: 'Senior Business Analyst',
    company: 'Maximus',
    client: 'NY State Health Department',
    period: 'November 2015 – July 2017',
    location: 'Albany, NY',
    highlights: [
      'Co-led the redesign to automate MMIS (Medicaid Management Information System) notice generation.',
      'Performed Gap Analysis to modernize legacy notice software, ensuring accuracy and compliance',
      'Managed system enhancements and monitored MMIS health as the designated technical analyst.'
    ],
    fullStory: {
      challenge: 'The NY State Health Dept was facing backlogs in notifying Medicaid recipients about eligibility changes, leading to legal compliance risks.',
      action: 'Streamlined the notice-generation workflow by identifying redundant approval steps and automating data triggers from the central MMIS database.',
      technicalDetail: 'Mapped complex XML data schemas to human-readable notice templates, ensuring dynamic data injection was error-free.',
      result: 'Successfully automated the legal notice lifecycle, ensuring timely, compliant communications for millions of citizens while reducing manual workload.'
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Strong',
    title: 'Primary Expertise',
    description: 'Core competencies developed over 15+ years of senior-level consulting.',
    skills: [
      { name: 'Business & Systems Analysis', note: 'BRD, FRD, RTM, Use Cases' },
      { name: 'AI Implementation & Governance', note: 'Prompt engineering, Bias detection' },
      { name: 'Federal Compliance', note: 'HIPAA, NIST, FISMA, FedRAMP' },
      { name: 'Agile/Scrum Leadership', note: 'Certified Scrum Master, sprint facilitation' }
    ]
  },
  {
    category: 'Moderate',
    title: 'Working Knowledge',
    description: 'Strong proficiency, capable of leading technical discussions and execution.',
    skills: [
      { name: 'Data Engineering & SQL', note: 'Query writing, data modeling basics' },
      { name: 'NLP/Sentiment Analysis', note: 'Applied in AI projects' },
      { name: 'Process Automation', note: 'Workflow optimization, RPA concepts' },
      { name: 'Healthcare Systems', note: 'MMIS, Medicaid, claims processing' }
    ]
  },
  {
    category: 'Gaps',
    title: 'Honest Acknowledgment',
    description: 'Understanding of the ecosystem without deep hands-on implementation.',
    skills: [
      { name: 'Frontend/Backend Development', note: 'Not a developer role' },
      { name: 'Mobile App Development', note: 'Limited exposure' },
      { name: 'DevOps/CI-CD Pipelines', note: 'Understanding, not implementation' }
    ]
  }
];

export const STRONG_FIT_EXAMPLE = `Position: Senior Business Analyst (AI Initiatives)
Location: Remote / Washington DC
Requirements: 
- 10+ years of Business Analysis experience in federal sectors.
- Experience with AI/NLP implementation and prompt engineering.
- Agile/Scrum certification (CSM).
- Strong understanding of compliance (NIST/FISMA).
- Ability to bridge the gap between technical teams and policy stakeholders.`;

export const WEAK_FIT_EXAMPLE = `Position: Lead Java Full Stack Developer
Location: New York
Requirements: 
- 8+ years hands-on experience with Java, Spring Boot, and React.
- Deep expertise in Kubernetes, Docker, and AWS infrastructure management.
- Ability to write clean, unit-tested code and perform deep code reviews.
- Experience with microservices architecture and database optimization.`;
