import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpeg";
import bishop from "../assets/bishop.jpeg";

export const HERO_CONTENT = `I'm a passionate AI/ML Engineer with hands-on experience in building agent-based architectures, RAG systems, and graph-based data models. I specialize in designing and deploying real-time conversational voice bots and leveraging Neo4j and Graph Neural Networks (GNNs) for large-scale marketplace relationship management.`;

export const EXPERIENCES = [
  {
    company: "Happyplace Technologies Pvt Ltd, Kochi",
    roles: [
      {
        year: "Nov 2025 - Present",
        role: "AI/ML Engineer",
        description: [
          "Designed graph-based data models and implemented Graph Neural Networks (GNNs) using Neo4j for large-scale marketplace relationship management",
          "Built an AI-driven attribute classification system for product taxonomy using agent-based architecture",
          "Leveraged Google ADK and Qdrant DB for scalable knowledge retrieval and structured reasoning",
          "Improved taxonomy accuracy and automation in product categorization workflows"
        ],
        technologies: ["Neo4j", "Graph Neural Networks (GNN)", "Google ADK", "Qdrant DB", "Agentic AI", "Python"]
      }
    ]
  },
  {
    company: "ISPG Technologies India Pvt Ltd, Kochi",
    roles: [
      {
        year: "July 2025 - Nov 2025",
        role: "AI/ML Engineer",
        description: [
          "Developed a unified chat + voice conversational AI system with persistent context across modalities",
          "Integrated Google ADK, Pipecat, and MCP for session management and tool orchestration",
          "Built scalable architecture to maintain context continuity between voice and chat interactions",
          "Contributed to real-time conversational intelligence systems for enterprise use cases"
        ],
        technologies: ["Google ADK", "Pipecat", "MCP", "Conversational AI", "Python"]
      },
      {
        year: "Dec 2024 - June 2025",
        role: "Associate Machine Learning Engineer",
        description: [
          "Built a production-grade voice bot platform using Pipecat framework integrating TTS, STT, and real-time LLMs",
          "Developed a full-stack application (React-based) for Call campaign creation, Call analytics & logging, and Cost tracking and optimization",
          "Integrated voice bot with CRM APIs to perform real-time business actions",
          "Designed a configurable architecture to dynamically modify conversation flows and LLMs, TTS, and STT providers",
          "Implemented cost optimization strategies for LLM and voice usage",
          "Worked on analytics pipelines to monitor call performance and efficiency"
        ],
        technologies: ["Pipecat", "MCP", "React", "APIs", "CRM Integration", "TTS", "STT", "Real-time LLMs"]
      },
      {
        year: "May 2024 - Nov 2024",
        role: "Machine learning engineer - Internship",
        description: [
          "Graph data modelling for particular use case to achieve graph traversal",
          "Created graph traversal reactive forms with neo4j",
          "Written complex cypher queries for LLM training",
          "Written test cases for Chat-bot and checking its efficiency in the latest version of it",
          "Graph RAG designing and implementation for Q&A on documents",
          "Testing the conversational search engine in multiple products"
        ],
        technologies: ["Neo4j", "Cypher", "RAG", "LLM", "React.js", "Python"]
      }
    ]
  }
];

export const PROJECTS = [
  {
    title: "Design and Development of E-Advocate (Based on 100 Cases)",
    image: project2,
    description: [
      "Developed a question-answering system tailored for legal documents, specifically focusing on Indian Penal Code (IPC) cases.",
      "Processed legal data using text splitting techniques and converted it into embeddings for semantic understanding.",
      "Created a FAISS-based vector database to efficiently index and retrieve relevant legal documents.",
      "Incorporated a Question-Answering chain (RAG) for retrieval and generation of context from vector database to generate accurate responses.",
      "Created a user-friendly user interface using Streamlit to input queries related to IPC cases."
    ],
    technologies: ["RAG", "LLM", "FAISS", "Vector-DB", "Streamlit", "Python"]
  },
  {
    title: "Design and Development of Deep Learning Architecture to Predict Shelf Life of Tomatoes",
    image: project1,
    description: [
      "Developed a deep learning object detection model based on YOLO architecture to predict tomato shelf life using transfer learning.",
      "Annotated images of various tomato stages to train the model for accurate prediction of shelf life.",
      "Achieved over 60% average accuracy in identifying tomato shelf life stages, ensuring reliable predictions.",
      "Implemented an efficient model architecture and training process for fast and accurate tomato shelf life prediction.",
      "Created a user-friendly interface using Streamlit to predict the shelf life of tomatoes."
    ],
    technologies: ["Deep-learning", "YOLO", "Shelf-life", "Transformers", "Streamlit", "Python"]
  },
  {
    title: "Bank Customer Churn Prediction",
    image: project3,
    description:
      "A predictive analytics solution for bank customer churn using machine learning techniques. The project leverages logistic regression with SMOTE to address data imbalance, while Grid Search Cross-Validation ensures optimal model parameters. Through comprehensive Exploratory Data Analysis (EDA), the model identifies key patterns in customer behavior, enabling accurate prediction of potential churners and supporting proactive customer retention strategies.",
    technologies: ["EDA", "SMOTE", "GridSearch-CV", "LogisticRegression"]
  }
];

export const CONTACT = {
  address: "Coimbatore, Tamil Nadu, India",
  phoneNo: "+91 9003646520 ",
  email: "ponkothandaraman2002@gmail.com",
};

export const education = [
  {
    id: 0,
    img: "https://b-u.ac.in/sites/b-u.ac.in/files/About%20University/bu-logo_0.png",
    school: "Bharathiar University, Coimbatore",
    date: "Aug 2022 - April 2024",
    grade: "7.9 CGPA / 71.7%",
    desc: "Completed a Master’s in Data Analytics, which laid the foundation for my career. Through coursework and research projects, I developed skills in data analysis, machine learning, and analytical, solution-oriented thinking, equipping me to tackle complex data-driven challenges.",
    degree: "Masters in Data analytics",
  },
  {
    id: 1,
    img: bishop,
    school: "Bishop heber college, Tiruchirappalli",
    date: "June 2019 - May 2022",
    grade: "7.1 CGPA / 77%",
    desc: "Holding a Bachelor of Science in Mathematics, with a solid foundation in analytical thinking, problem-solving, and quantitative reasoning. Skilled in mathematical modeling, data analysis, and logical structuring across various problem domains.",
    degree: "Bachelor of Science - Mathematics",
  },
];

export const skills = [
  {
    title: "Machine Learning",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Tensorflow",
        image:
          "https://yt3.googleusercontent.com/ytc/AIdro_lAp1zO3sFLjm6hBn_gH0nd3FzZ6c2GN5U85vwlbH1e9ME=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "Keras",
        image:
          "https://avatars.githubusercontent.com/u/34455048?s=200&v=4",
      },
      {
        name: "PyTorch (GNN)",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "scikit-learn",
        image:
          "https://avatars.githubusercontent.com/u/17349883?s=200&v=4",
      },
      {
        name: "Streamlit",
        image:
          "https://user-images.githubusercontent.com/7164864/217935870-c0bc60a3-6fc0-4047-b011-7b4c59488c91.png",
      },
      {
        name: "Jupyter",
        image:
          "https://avatars.githubusercontent.com/u/7388996?s=200&v=4",
      },
      {
        name: "Google Colab",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
      },
    ],
  },
  {
    title: "Generative-AI",
    skills: [
      {
        name: "Langchain",
        image:
          "https://opensource.muenchen.de/logo/langchain.jpg",
      },
      {
        name: "Langgraph",
        image:
          "https://cdn.prod.website-files.com/65b8cd72835ceeacd4449a53/69983caa0521ea61da792805_Frame%202147254720.svg",
      },
      {
        name: "Pipecat",
        image:
          "https://avatars.githubusercontent.com/u/169612734?s=200&v=4",
      },
      {
        name: "MCP",
        image:
          "https://avatars.githubusercontent.com/u/182288589?s=200&v=4",
      },
      {
        name: "Google ADK",
        image:
          "https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png",
      },
      {
        name: "Huggingface",
        image:
          "https://avatars.githubusercontent.com/u/25720743?s=200&v=4",
      },
      {
        name: "Groq",
        image:
          "https://logowik.com/content/uploads/images/groq-ai8121.logowik.com.webp",
      },
    ],
  },
  {
    title: "Data Analytics",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Pandas",
        image:
          "https://www.svgrepo.com/show/473742/pandas.svg",
      },
      {
        name: "Numpy",
        image: "https://logosandtypes.com/wp-content/uploads/2024/02/NumPy.png",
      },
      {
        name: "Matplotlib",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd_3-4JIsx_ivTrRU-mA0jFcjLVsLzdU99TQ&s",
      },
      {
        name: "Seaborn",
        image:
          "https://i.pinimg.com/474x/cc/aa/c9/ccaac9b2ce19a131fa386c3b7cc0c923.jpg",
      },
      {
        name: "PowerBI",
        image:
          "https://e7.pngegg.com/pngimages/327/384/png-clipart-power-bi-business-intelligence-microsoft-azure-microsoft-dynamics-cloud-computing-cloud-computing-angle-text-thumbnail.png",
      },
      {
        name: "Excel",
        image:
          "https://www.freeiconspng.com/uploads/excel-png-office-xlsx-icon-3.png",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Postgresql",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "Neo4j",
        image:
          "https://avatars.githubusercontent.com/u/201120?s=200&v=4",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Qdrant DB",
        image:
          "https://avatars.githubusercontent.com/u/73504361?s=200&v=4",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://code.visualstudio.com/assets/branding/code-stable.png",
      },
      {
        name: "Postman",
        image:
          "https://avatars.githubusercontent.com/u/10251060?s=200&v=4",
      },
      {
        name: "Bitbucket",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/0e/Bitbucket-blue-logomark-only.svg",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      // {
      //   name: "AWS",
      //   image:
      //     "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      // },
      {
        name: "Google Cloud",
        image:
          "https://avatars.githubusercontent.com/u/2810941?s=200&v=4",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Flask",
        image:
          "https://pic.onlinewebfonts.com/thumbnails/icons_437027.svg",
      },
      {
        name: "Fast-API",
        image:
          "https://icon.icepanel.io/Technology/svg/FastAPI.svg",
      },
    ],
  },
];
