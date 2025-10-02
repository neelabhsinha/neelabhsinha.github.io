import type { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: "nutanix-mts2",
    position: "Member of Technical Staff 2",
    company: "Nutanix, Inc.",
    location: "San Jose, CA, USA",
    startDate: "2025-06-23",
    endDate: "Present",
    current: true,
    description: [
      "Developing an AI code-review agent that scans and provides reviews for 200+ enterprise-level pull requests weekly",
      "Developing integrations to enhance inference in an enterprise AI offering"
    ],
    companyUrl: "https://www.nutanix.com/company",
    companyLogo: "https://www.sansonetworks.com/images/products/img-nutanix.jpg"
  },
  {
    id: "wellsfargo-se",
    position: "Software Engineer",
    company: "Wells Fargo",
    location: "Hyderabad, India",
    startDate: "2022-08-01",
    endDate: "2023-07-26",
    description: [
      "Contributed to development of an enterprise business process management platform, streamlining 180+ banking operations",
      "Designed & developed a Kafka-based event messaging solution that sends 200000+ msgs/day of business data to warehouses",
      "Programmed and integrated APIs to securely insert, search and retrieve documents from enterprise content management platform",
      "Successfully led a data schema migration drive, collaborating with multiple business federations to plan and manage deliverables"
    ],
    companyUrl: "https://www.wellsfargo.com/about/",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wells_Fargo_Logo_%282020%29.svg/1200px-Wells_Fargo_Logo_%282020%29.svg.png"
  },
  {
    id: "wellsfargo-pa",
    position: "Program Associate (Software)",
    company: "Wells Fargo",
    location: "Hyderabad, India",
    startDate: "2021-07-26",
    endDate: "2022-07-31",
    description: [
      "Developed a utility to dynamically resolve and assign tasks to enterprise IAM groups based on task requirements",
      "Engineered a data redaction service to redact PII information from business workflows with an accuracy of 99.99%"
    ],
    companyUrl: "https://www.wellsfargo.com/about/",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wells_Fargo_Logo_%282020%29.svg/1200px-Wells_Fargo_Logo_%282020%29.svg.png"
  },
  {
    id: "inria",
    position: "Research Intern",
    company: "Inria",
    location: "Sophia Antipolis, France",
    startDate: "2021-02-01",
    endDate: "2021-07-26",
    description: [
      "Devised a novel technique for person-independent eye gaze estimation by seamless extraction and fusion of key physical features",
      "Developed numerous deep learning models to remove subject bias by utilizing anatomical features of the eye from facial landmarks",
      "Obtained best mean 3D angular error of 4.27 degrees, achieving state-of-the-art result and reducing the error by 20% from previous best"
    ],
    companyLogo: "https://avatars.githubusercontent.com/u/2951919?s=280&v=4",
    companyUrl: "https://www.inria.fr/en/stars"
  },
  {
    id: "thomson-reuters",
    position: "Technical Intern",
    company: "Thomson Reuters",
    location: "Hyderabad, India",
    startDate: "2020-08-26",
    endDate: "2020-12-23",
    description: [
      "Successfully programmed full-stack of a web portal responsible for tracking projects and maintaining a hierarchical user access",
      "Also implemented a machine learning model for time-series forecasting of monthly expenses of different business units of the organization",
      "Achieved an accuracy of 94.5% on overall expenses and 85.12% on individual business units on a test set of 4th quarter of 2020"
    ],
    companyLogo: "https://fiu-original.b-cdn.net/fontsinuse.com/use-images/51/51197/51197.png",
    companyUrl: "https://www.thomsonreuters.com/en/about-us"
  },
  {
    id: "rapha-medic",
    position: "Software Development Intern",
    company: "Rapha Medic Pvt. Ltd.",
    location: "Hyderabad, India",
    startDate: "2020-06-01",
    endDate: "2020-07-31",
    description: [
      "Developed full-stack of a native mobile application capable of providing end-to-end medical services to users",
      "Implemented the front-end using Angular and Ionic Framework, and back-end using Express.js and Spring Boot",
      "Integrated video conferencing service using Twilio, and live chat using web sockets to allow seamless interaction of users with medical experts"
    ]
  }
];
