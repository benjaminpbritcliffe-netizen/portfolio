export const siteConfig = {
  name: "Benjamin Britcliffe",
  title: "Cyber Security Analyst",
  description: "Portfolio website of Benjamin Britcliffe — Software Developer and Data Professional transitioning into Cyber Security.",
  accentColor: "#1d4ed8",

  social: {
    email: "benjaminbritcliffe@outlook.com",
    linkedin: "https://linkedin.com/in/benjaminbritcliffe",
    github: "https://github.com/benjaminpbritcliffe-netizen",
  },

  aboutMe:
    "I'm a software developer and data professional actively transitioning into cyber security, with a strong academic foundation in networking and forensics. I hold the Certified Ethical Hacker (CEH) certification and am currently completing CompTIA Security+. My background in software development gives me a deep understanding of how applications are built and exploited, while years of data analysis work maps directly onto the analytical demands of SIEM-driven security operations. This portfolio documents the hands-on security projects, research, and tooling I've built as part of that transition.",

  skills: [
    "Python",
    "Linux",
    "Wireshark",
    "Nmap",
    "Splunk / SIEM",
    "Penetration Testing",
    "Networking & Protocols",
    "Bash Scripting",
    "Power BI",
    "SQL / Database Administration",
    "ETL & Data Pipelines",
    "Secure Code Review",
  ],

  projects: [
    {
      name: "Computer Fundamentals",
      description:
        "An exploration of core computing concepts including hardware architecture, operating system internals, and Linux fundamentals. Covers how low-level system components interact and how this knowledge underpins practical security work.",
      link: "https://github.com/benjaminpbritcliffe-netizen/cyber-portfolio/tree/main/Computer%20Fundamentals",
      skills: ["Hardware Architecture", "Software Architecture", "Linux"],
    },
    {
      name: "Cyber Events Archive",
      description:
        "A curated archive of documented cyber security events and incidents, analysed using network capture tools and scripting. Each entry includes traffic analysis, root cause investigation, and lessons learned.",
      link: "https://github.com/benjaminpbritcliffe-netizen/cyber-portfolio/tree/main/Cyber%20Events%20Archive",
      skills: ["Wireshark", "Networking", "Bash Scripting"],
    },
    {
      name: "Cyber Laws & Ethics",
      description:
        "An in-depth review of the legal and ethical frameworks that govern cyber security practice in the UK and internationally. Covers legislation such as the Computer Misuse Act, GDPR, and the ethical responsibilities of security professionals.",
      link: "https://github.com/benjaminpbritcliffe-netizen/cyber-portfolio/tree/main/Cyber%20Laws%20&%20Ethics",
      skills: ["Policy & Compliance", "Risk Management", "Security Frameworks"],
    },
    {
      name: "Cyber Security Fundamentals",
      description:
        "A broad practical project covering core cyber security disciplines including threat detection, incident response, and system hardening. Uses SIEM tooling to identify, triage, and respond to simulated security events across a range of scenarios.",
      link: "https://github.com/benjaminpbritcliffe-netizen/cyber-portfolio/tree/main/Cyber%20Security%20Fundamentals",
      skills: ["Splunk / SIEM", "Threat Detection", "Linux"],
    },
    {
      name: "Ebooks",
      description:
        "A collection of self-authored reference material and curated tutorial content covering key cyber security topics. Designed to support continuous learning and act as a personal knowledge base for technical research and revision.",
      link: "https://github.com/benjaminpbritcliffe-netizen/cyber-portfolio/tree/main/Ebooks%20And%20Tutorial%20Material",
      skills: ["Research & Documentation", "Python", "Linux"],
    },
    {
      name: "House of Vokabel",
      description:
        "A custom-built Python tool for managing and studying cyber security terminology and vocabulary. Designed to reinforce technical knowledge through structured flashcard-style learning and automated quiz generation.",
      link: "https://github.com/benjaminpbritcliffe-netizen/cyber-portfolio/tree/main/House%20Of%20Vokabel",
      skills: ["Python", "Scripting", "Automation"],
    },
    {
      name: "Malware Analysis",
      description:
        "A hands-on malware analysis project examining real and simulated malicious samples in controlled environments. Includes static and dynamic analysis techniques, behavioural observation, and write-ups detailing indicators of compromise.",
      link: "https://github.com/benjaminpbritcliffe-netizen/cyber-portfolio/tree/main/Malware%20Analysis",
      skills: ["Reverse Engineering", "Python", "Linux"],
    },
    {
      name: "Networking",
      description:
        "A practical deep-dive into networking concepts and protocols fundamental to cyber security. Covers packet analysis, network topology, TCP/IP, DNS, and common attack surfaces, with hands-on labs using industry-standard tooling.",
      link: "https://github.com/benjaminpbritcliffe-netizen/cyber-portfolio/tree/main/Networking",
      skills: ["Wireshark", "Nmap", "Networking & Protocols"],
    },
    {
      name: "Programming Fundamentals",
      description:
        "A foundational programming project focused on building scripting and automation skills relevant to cyber security. Covers Python and Bash scripting through practical exercises including log parsing, file manipulation, and tool development.",
      link: "https://github.com/benjaminpbritcliffe-netizen/cyber-portfolio/tree/main/Programming%20Fundamentals",
      skills: ["Python", "Bash Scripting", "Linux"],
    },
            {
      name: "Security Models",
      description:
        "A section on different models to help identify and mitigate cyber threats.",
      link: "https://github.com/benjaminpbritcliffe-netizen/cyber-portfolio/tree/main/Security%20Models",
      skills: ["Diamond Model", "Kill Chain", "MITRE Framework"],
    },
        {
      name: "Security Principles And Procedures",
      description:
        "A section on how to keep a business compliant with security controls and policies.",
      link: "https://github.com/benjaminpbritcliffe-netizen/cyber-portfolio/tree/main/Security%20Principles%20And%20Procedures",
      skills: ["Risk Management", "Risk Identification", "Threat Modelling"],
    },
    {
      name: "Tools",
      description:
        "A personal toolkit of custom-built and curated security utilities developed throughout my learning journey. Includes scripts for reconnaissance, enumeration, and analysis — each documented with usage instructions and example outputs.",
      link: "https://github.com/benjaminpbritcliffe-netizen/cyber-portfolio/tree/main/tools",
      skills: ["Python", "Nmap", "Bash Scripting", "Wireshark"],
    },
  ],

  experience: [
    {
      company: "WEC Group Ltd",
      title: "Software Developer",
      dateRange: "Apr 2023 - Present",
      bullets: [
        "Develop and maintain internal software systems with an awareness of secure coding principles and input validation best practices",
        "Collaborate on system architecture decisions, applying knowledge of attack surfaces and software vulnerability patterns",
        "Work across the full development lifecycle from requirements gathering through to deployment, maintaining a security-first mindset throughout",
      ],
    },
    {
      company: "Runshaw College",
      title: "Data Analyst",
      dateRange: "Nov 2022 - Apr 2023",
      bullets: [
        "Applied analytical techniques to large institutional datasets — directly transferable to log analysis and SIEM-based threat detection workflows",
        "Produced structured reporting and visualisations, mirroring the output expectations of a SOC analyst role",
        "Maintained data integrity and identified anomalies, applying the same pattern-recognition mindset central to threat hunting",
      ],
    },
    {
      company: "The Opportunity Group",
      title: "Business Data Analyst",
      dateRange: "May 2022 - Nov 2022",
      bullets: [
        "Built Power BI dashboards and reporting pipelines — skills directly applicable to SIEM dashboards and security metric visualisation",
        "Managed data flows and validated pipeline integrity, reinforcing an understanding of data-in-transit and storage considerations",
        "Worked under tight reporting deadlines, developing the triage and prioritisation instincts required in incident response environments",
      ],
    },
    {
      company: "The Senator Group",
      title: "Continuous Improvement Analyst",
      dateRange: "Apr 2017 - Apr 2022",
      bullets: [
        "Conducted structured root cause analysis across operational processes — a methodology that translates directly to security incident investigation",
        "Produced KPI dashboards and performance documentation, building strong habits around evidence-based reporting and audit trails",
        "Five-year tenure demonstrates reliability, stakeholder communication, and the ability to drive sustained and measurable change",
      ],
    },
  ],

  education: [
    {
      school: "EC-Council",
      degree: "Certified Ethical Hacker (CEH)",
      dateRange: "2024",
      achievements: [
        "Internationally recognised certification covering ethical hacking methodologies and penetration testing across all five phases",
        "Covered reconnaissance, scanning, gaining access, maintaining access, and covering tracks in controlled environments",
        "Demonstrated knowledge of security countermeasures across a wide range of attack vectors, tools, and platforms",
      ],
    },
    {
      school: "CompTIA",
      degree: "CompTIA Security+ (In Progress)",
      dateRange: "2025 - Present",
      achievements: [
        "Currently studying core domains including threats & vulnerabilities, architecture, implementation, and security governance",
        "Supplementing exam preparation with hands-on labs, TryHackMe, and practical security exercises",
      ],
    },
    {
      school: "University of Central Lancashire (UCLAN)",
      degree: "BSc (Hons) Computing",
      dateRange: "2015 - 2016",
      achievements: [
        "Advanced study in computing disciplines including software engineering, systems architecture, and security principles",
        "Built on applied networking and forensics knowledge developed through prior foundational study",
      ],
    },
    {
      school: "University Centre at Blackburn College (Lancaster University)",
      degree: "FdSc Networking and Forensics",
      dateRange: "2013 - 2015",
      achievements: [
        "Developed core skills in network infrastructure, digital forensics, and investigative methodology",
        "Gained practical exposure to forensic tooling, packet analysis, and network security techniques",
      ],
    },
    {
      school: "Blackburn College",
      degree: "BTEC National Extended Diploma — Computing (Networking)",
      dateRange: "2011 - 2013",
      achievements: [
        "Established a strong technical foundation in computing with a specialism in networking",
        "Covered network design, hardware, operating systems, and IT infrastructure fundamentals",
      ],
    },
  ],
};