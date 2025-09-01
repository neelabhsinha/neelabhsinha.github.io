import type { Education } from '../types';

export const education: Education[] = [
  {
    id: "gatech",
    degree: "M.S., Computer Science",
    institution: "Georgia Institute of Technology",
    location: "Atlanta, USA",
    startDate: "2023-08-23",
    endDate: "2025-05-02",
    gpa: "3.81/4.0",
    courses: [
      "Graduate Algorithms",
      "Machine Learning", 
      "Deep Learning",
      "Advanced Natural Language Processing",
      "Computer Vision",
      "Systems for Machine Learning",
      "Enterprise Cybersecurity Management"
    ],
    url: "https://www.gatech.edu/about/rankings",
    institutionLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0BING3ijIAll66zEhslXgd4V_hsGC8RlGQ&s"
  },
  {
    id: "bits",
    degree: "B.E., Electronics and Instrumentation Engineering; M.Sc. Physics (dual)",
    institution: "Birla Institute of Technology and Science, Pilani",
    location: "India",
    startDate: "2016-08-01",
    endDate: "2021-07-01",
    gpa: "8.44/10.0",
    courses: [
      "Object Oriented Programming",
      "Operating Systems",
      "Neural Networks and Fuzzy Logic",
      "Pattern Recognition",
      "Microprocessor Programming and Interfacing",
      "Computer Programming"
    ],
    url: "https://www.bits-pilani.ac.in/news/bits-pilani-raises-the-bar-in-university-rankings/",
    institutionLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/BITS_Pilani-Logo.svg/200px-BITS_Pilani-Logo.svg.png"
  }
];
