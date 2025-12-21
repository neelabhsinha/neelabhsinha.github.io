import type { Publication } from '../types';

export const publications: Publication[] = [
  {
    id: "qa_prompting",
    title: "QA-prompting: Improving Summarization with Large Language Models using Question-Answering",
    authors: ["Neelabh Sinha"],
    date: "2025-05-20",
    venue: "Proceedings of the 4th New Frontiers in Summarization Workshop in The 2025 Conference on Empirical Methods in Natural Language Processing (EMNLP)",
    venueShort: "NewSumm, EMNLP 2025",
    abstract: "Language Models (LMs) have revolutionized natural language processing, enabling high-quality text generation through prompting and in-context learning. However, models often struggle with long-context summarization due to positional biases, leading to suboptimal extraction of critical information. There are techniques to improve this with fine-tuning, pipelining, or using complex techniques, which have their own challenges. To solve these challenges, we propose QA-prompting - a simple prompting method for summarization that utilizes question-answering as an intermediate step prior to summary generation. Our method extracts key information and enriches the context of text to mitigate positional biases and improve summarization in a single LM call per task without requiring fine-tuning or pipelining. Experiments on multiple datasets belonging to different domains using ten state-of-the-art pre-trained models demonstrate that QA-prompting outperforms baseline and other state-of-the-art methods, achieving up to 29% improvement in ROUGE scores. This provides an effective and scalable solution for summarization and highlights the importance of domain-specific question selection for optimal performance.",
    tags: ["Large Language Models", "Text Summarization", "Prompt Engineering", "Natural Language Processing"],
    featured: true,
    image: "/images/qa_prompting/featured.png",
    links: [
      {
        type: "pdf",
        url: "https://arxiv.org/abs/2505.14347"
      },
      {
        type: "code",
        url: "https://github.com/neelabhsinha/qa-prompting"
      }
    ]
  },
  {
    id: "vlm_selection",
    title: "Guiding Vision-Language Model Selection for Visual Question-Answering Across Tasks, Domains, and Knowledge Types",
    authors: ["Neelabh Sinha", "Vinija Jain", "Aman Chadha"],
    date: "2025-01-19",
    venue: "The First Workshop of Evaluation of Multi-Modal Generation (EvalMG) in 31st International Conference on Computational Linguistics (COLING), 2025",
    venueShort: "EvalMG, COLING 2025",
    abstract: "Visual Question-Answering (VQA) has become key to user experience, particularly after improved generalization capabilities of Vision-Language Models (VLMs). But evaluating VLMs for an application requirement using a standardized framework in practical settings is still challenging. This paper aims to solve that using an end-to-end framework. We present VQA360 - a novel dataset derived from established VQA benchmarks, annotated with task types, application domains, and knowledge types, for a comprehensive evaluation. We also introduce GoEval, a multimodal evaluation metric developed using GPT-4o, achieving a correlation factor of 56.71% with human judgments. Our experiments with state-of-the-art VLMs reveal that no single model excels universally, thus, making a right choice a key design decision. Proprietary models such as Gemini-1.5-Pro and GPT-4o-mini generally outperform others, but open-source models like InternVL-2-8B and CogVLM-2-Llama-3-19B also demonstrate competitive strengths, while providing additional advantages. Our framework can also be extended to other tasks.",
    tags: ["Vision Language Models", "Computer Vision", "Natural Language Processing"],
    featured: true,
    image: "/images/vlm_selection/featured.png",
    links: [
      {
        type: "pdf",
        url: "https://aclanthology.org/2025.evalmg-1.7/"
      },
      {
        type: "code",
        url: "https://github.com/neelabhsinha/vlm-selection-tasks-domains-knowledge-type"
      },
      {
        type: "video",
        url: "https://youtu.be/3VqlBPW-vco?si=nXF1nHOE7spnRSAH"
      }
    ]
  },
  {
    id: "aspect_eval_llm",
    title: "Are Small Language Models Ready to Compete with Large Language Models for Practical Applications?",
    authors: ["Neelabh Sinha", "Vinija Jain", "Aman Chadha"],
    date: "2025-05-03",
    venue: "Proceedings of the 5th Workshop on Trustworthy NLP, 2025 Annual Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics (NAACL)",
    venueShort: "TrustNLP, NAACL 2025",
    abstract: "The rapid rise of Language Models (LMs) has expanded their use in several applications. Yet, due to constraints of model size, associated cost, or proprietary restrictions, utilizing state-of-the-art (SOTA) LLMs is not always feasible. With open, smaller LMs emerging, more applications can leverage their capabilities, but selecting the right LM can be challenging as smaller LMs don't perform well universally. This work tries to bridge this gap by proposing a framework to experimentally evaluate small, open LMs in practical settings through measuring semantic correctness of outputs across three practical aspects: task types, application domains and reasoning types, using diverse prompt styles. It also conducts an in-depth comparison of 10 small, open LMs to identify best LM and prompt style depending on specific application requirement using the proposed framework. We also show that if selected appropriately, they can outperform SOTA LLMs like DeepSeek-v2, GPT-4o-mini, Gemini-1.5-Pro, and even compete with GPT-4o.",
    tags: ["Large Language Models", "Natural Language Processing"],
    featured: true,
    image: "/images/aspect_eval_llm/featured.png",
    links: [
      {
        type: "pdf",
        url: "https://aclanthology.org/2025.trustnlp-main.25/"
      },
      {
        type: "code",
        url: "https://github.com/neelabhsinha/lm-application-eval-kit"
      },
      {
        type: "doi",
        url: "https://doi.org/10.18653/v1/2025.trustnlp-main.25"
      }
    ]
  },
  {
    id: "personality_recognition",
    title: "Multimodal Personality Recognition using Cross-attention Transformer and Behaviour Encoding",
    authors: ["Tanay Agrawal", "Dhruv Agarwal", "Michal Balazia", "Neelabh Sinha", "Francois Bremond"],
    date: "2022-07-01",
    venue: "17th International Conference on Computer Vision Theory and Applications (VISAPP), Virtual, February, 2022",
    venueShort: "VISAPP, 2022",
    abstract: "Personality computing and affective computing have gained recent interest in many research areas. The datasets for the task generally have multiple modalities like video, audio, language and bio-signals. In this paper, we propose a flexible model for the task which exploits all available data. The task involves complex relations and to avoid using a large model for video processing specifically, we propose the use of behaviour encoding which boosts performance with minimal change to the model. Cross-attention using transformers has become popular in recent times and is utilised for fusion of different modalities. Since long term relations may exist, breaking the input into chunks is not desirable, thus the proposed model processes the entire input together. Our experiments show the importance of each of the above contributions.",
    tags: ["Personality Recognition", "Computer Vision"],
    featured: false,
    image: "/images/personality_recognition/featured.jpg",
    links: [
      {
        type: "pdf",
        url: "https://arxiv.org/abs/2112.12180"
      },
      {
        type: "doi",
        url: "https://doi.org/10.5220/0010841400003124"
      }
    ]
  },
  {
    id: "flame",
    title: "FLAME: Facial Landmark Heatmap Activated Multimodal Gaze Estimation",
    authors: ["Neelabh Sinha", "Michal Balazia", "Francois Bremond"],
    date: "2021-11-16",
    venue: "2021 17th IEEE International Conference on Advanced Video and Signal Based Surveillance, 16-19 November, 2021",
    venueShort: "AVSS, 2021",
    abstract: "3D gaze estimation is about predicting the line of sight of a person in 3D space. Person-independent models for the same lack precision due to anatomical differences of subjects, whereas person-specific calibrated techniques add strict constraints on scalability. To overcome these issues, we propose a novel technique, Facial Landmark Heatmap Activated Multimodal Gaze Estimation (FLAME), as a way of combining eye anatomical information using eye land-mark heatmaps to obtain precise gaze estimation without any person-specific calibration. Our evaluation demonstrates a competitive performance of about 10% improvement on benchmark datasets ColumbiaGaze and EYEDIAP. We also conduct an ablation study to validate our method.",
    tags: ["Gaze Estimation", "Computer Vision"],
    featured: false,
    image: "/images/flame/featured.jpg",
    links: [
      {
        type: "pdf",
        url: "https://arxiv.org/abs/2110.04828"
      },
      {
        type: "code",
        url: "https://github.com/neelabhsinha/flame"
      },
      {
        type: "video",
        url: "https://youtu.be/LDwkVlMj8q4"
      },
      {
        type: "doi",
        url: "https://doi.org/10.1109/AVSS52988.2021.9663816"
      }
    ]
  }
];
