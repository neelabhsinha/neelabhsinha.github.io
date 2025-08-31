import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: "chat_app",
    title: "Private Chat Application using MongoDB and Socket.io",
    summary: "Implemented a multi-client chat system along with messages retention feature.",
    date: "2020-06-20",
    tags: ["Full-stack Development", "Chat Application"],
    image: "/images/chat_app/featured.png",
    category: "Full-stack Development",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/neelabhsinha/Private-Chat-Application-using-MongoDB-and-Socket.io"
      }
    ]
  },
  {
    id: "news_text_classification",
    title: "News-text Classification using a Weighted RNN",
    summary: "Implemented weighted RNNs, providing an alternative to attention mechanism by dynamically weighing each token based on their impact on determining the class of the news article.",
    date: "2019-11-28",
    tags: ["Natural Language Processing", "Machine Learning", "Deep Learning", "Text Classification"],
    image: "/images/news_text_classification/featured.png",
    category: "Machine Learning",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/neelabhsinha/News-text-Classification-using-a-Weighted-RNN"
      }
    ]
  },
  {
    id: "driver_drowsiness_detection",
    title: "Driver Drowsiness Detection",
    summary: "Computer vision system for detecting driver drowsiness using eye tracking and facial landmarks.",
    date: "2020-03-15",
    tags: ["Computer Vision", "Deep Learning", "Drowsiness Detection"],
    image: "/images/driver_drowsiness_detection/featured.png",
    category: "Computer Vision",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/neelabhsinha/driver-drowsiness-detection"
      }
    ]
  },
  {
    id: "fifa_world_cup_prediction",
    title: "FIFA World Cup Prediction",
    summary: "Machine learning model to predict FIFA World Cup match outcomes using historical data and team statistics.",
    date: "2018-06-10",
    tags: ["Machine Learning", "Classification"],
    image: "/images/fifa_world_cup_prediction/featured.png",
    category: "Machine Learning",
    featured: false,
    links: [
      {
        type: "github",
        url: "https://github.com/neelabhsinha/fifa-world-cup-prediction"
      }
    ]
  },
  {
    id: "knowledge_based_vqa",
    title: "Knowledge-based Visual Question Answering",
    summary: "Visual question answering system that incorporates external knowledge bases for comprehensive understanding.",
    date: "2021-01-15",
    tags: ["Computer Vision", "Natural Language Processing", "Question Answering"],
    image: "/images/knowledge_based_vqa/featured.jpg",
    category: "Computer Vision",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/neelabhsinha/knowledge-based-vqa"
      }
    ]
  },
  {
    id: "leakage_detection",
    title: "Leakage Detection in Smart Water Distribution Systems",
    summary: "IoT-based system for detecting water leakages in smart distribution networks using sensor data analysis.",
    date: "2019-05-20",
    tags: ["Machine Learning", "Leakage Detection"],
    image: "/images/leakage_detection/featured.png",
    category: "Machine Learning",
    featured: false,
    links: [
      {
        type: "github",
        url: "https://github.com/neelabhsinha/leakage-detection-smart-water"
      }
    ]
  },
  {
    id: "peft_classification",
    title: "Parameter-Efficient Fine-tuning for Text Classification",
    summary: "Implementation of parameter-efficient fine-tuning techniques for large language models in text classification tasks.",
    date: "2023-09-10",
    tags: ["Natural Language Processing", "Deep Learning", "Classification"],
    image: "/images/peft_classification/featured.jpg",
    category: "Natural Language Processing",
    featured: true,
    links: [
      {
        type: "github",
        url: "https://github.com/neelabhsinha/peft-classification"
      }
    ]
  },
  {
    id: "rbfn_nn_control",
    title: "RBFN Neural Network Control",
    summary: "Radial Basis Function Network for intelligent control systems design and implementation.",
    date: "2020-11-30",
    tags: ["Intelligent Control", "Controller Design"],
    image: "/images/rbfn_nn_control/featured.png",
    category: "Control Systems",
    featured: false,
    links: [
      {
        type: "github",
        url: "https://github.com/neelabhsinha/rbfn-neural-control"
      }
    ]
  }
];
