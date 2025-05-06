import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Nathaniel",
  lastName: "Wetzel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "",
  email: "wetzel.na@northeastern.edu",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nnwetzel",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nnwetzel",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hey, I'm Nathaniel</>,
  subline: (
    <>
      I'm currently interning at Amazon as a SDE.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Studying Computer Science with a passion for artificial intelligence, machine learning, and software development.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Amazon",
        timeframe: "Jun 2025 - Present",
        role: "Software Development Engineer Intern",
        achievements: [
          <>
            Incoming Summer 2025
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Wolters Kluwer",
        timeframe: "Jan - Jun 2025",
        role: "Software Engineer Intern",
        achievements: [
          <>
            UpToDate AI, Patient Engagement Solutions
          </>,
        ],
        images: [],
      },
      {
        company: "Amazon",
        timeframe: "May - Aug 2024",
        role: "Software Development Engineer Intern",
        achievements: [
          <>
            Balance and Account Management
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Northeastern University",
        description: <>Bachelor of Science in Computer Science</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Languages",
        description: <>Java, Python, Bash, HTML/CSS, JavaScript</>,
        images: [],
      },
      {
        title: "Frameworks & Tools",
        images: [],
        description: (
          <>
            Git, AWS (CDK, Lambda, EventBridge, CloudWatch, S3, IAM, VPC, CloudFormation), Azure, Docker, Kubernetes, Jenkins, Ansible, Dagger, VMware, Linux, JUnit, Mockito, Jira, Confluence, Agile
          </>
        ),
        images: [],
      },
      {
        title: "Libraries & Databases",
        description: <>FastAPI, Uvicorn, requests, pandas, NumPy, matplotlib, Elasticsearch</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about....",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/IMG_5681.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };