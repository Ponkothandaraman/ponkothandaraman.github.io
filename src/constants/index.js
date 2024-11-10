import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpeg";
import bishop from "../assets/bishop.jpeg";

export const HERO_CONTENT = `I'm a passianate Data scientist with hands-on experience of 6 months in a product based company. I've worked on graph data modelling, RAG and specialized in designing and building intellectual chat-bots `;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Machine learning engineer",
    company: " ISPG Technologies India pvt ltd",
    description: `Developing intelligent chatbots by leveraging open-source large language models (LLMs), with a specialization in data modeling using graph databases like Neo4j. Responsible for designing, testing, and enhancing chatbot functionalities and features. Successfully transformed an initial chatbot concept into a robust implementation, achieving a 70% reduction in API calls and significantly enhancing user experience.`,
    technologies: ["Langchain","LLM", "RAG", "Neo4j", "mongoDB","React.js"],
  },
];

export const PROJECTS = [
  {
    title: "Shelf life prediction of tomatoes using Deep learning",
    image: project1,
    description:
      "An advanced computer vision system utilizing YOLO (You Only Look Once) object detection algorithm to revolutionize tomato shelf-life prediction. The system automates the identification and monitoring of individual tomatoes within storage baskets, advancing beyond traditional classification models that only provided class labels.",
    technologies: ["Deep-learning", "YOLO","Shelf-life", "Transformers", "Streamlit"],
  },
  {
    title: "Judicial document summarizer - A Legal Chat-bot ",
    image: project2,
    description:
      "An AI-powered legal assistance system using Large Language Models (LLMs) to analyze Indian Supreme Court judgments. The solution implements Retrieval-Augmented Generation (RAG) architecture for an intelligent legal chatbot that processes and summarizes judicial documents. The system enables quick access to case law and citations through natural language processing, streamlining legal research for professionals and students while maintaining high accuracy in information retrieval.",
    technologies: ["RAG", "LLM", "Scrapping", "Vector-DB", "Streamlit"],
  },
  {
    title: "Bank Customer Churn Prediction",
    image: project3,
    description:
      "A predictive analytics solution for bank customer churn using machine learning techniques. The project leverages logistic regression with SMOTE to address data imbalance, while Grid Search Cross-Validation ensures optimal model parameters. Through comprehensive Exploratory Data Analysis (EDA), the model identifies key patterns in customer behavior, enabling accurate prediction of potential churners and supporting proactive customer retention strategies.",
    technologies: ["EDA", "SMOTE", "GridSearch-CV","LogisticRegression"],
  },
];

export const CONTACT = {
  address: "Coimbatore, Tamil Nadu, India",
  phoneNo: "+91 9003646520 ",
  email: "ponkothandaraman2002@gmailcom",
};


export const education = [
  {
    id: 0,
    img: "https://b-u.ac.in/sites/b-u.ac.in/files/About%20University/bu-logo_0.png",
    school: "Bharathiar University, Coimbatore",
    date: "Aug 2022 - April 2024",
    grade: "7.9 CGPA",
    desc: "Completed a Master’s in Data Analytics, which laid the foundation for my career. Through coursework and research projects, I developed skills in data analysis, machine learning, and analytical, solution-oriented thinking, equipping me to tackle complex data-driven challenges.",
    degree: "Masters in Data analytics",
  },
  {
    id: 1,
    img: bishop ,
    school: "Bishop heber college, Tiruchirappalli",
    date: "June 2019 - May 2022",
    grade: "7.1 CGPA",
    desc: "Holding a Bachelor of Science in Mathematics, with a solid foundation in analytical thinking, problem-solving, and quantitative reasoning. Skilled in mathematical modeling, data analysis, and logical structuring across various problem domains. ",
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
          "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
      },
      {
        name: "Keras",
        image:
          "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png",
      },
      {
        name: "Jupyter",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
      },
      {
        name: "Google Colab",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
      },
      {
        name: "scikit-learn",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
      },
      {
        name: "Streamlit",
        image:
          "https://seeklogo.com/images/S/streamlit-logo-1A3B208AE4-seeklogo.com.png",
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
          "https://yt3.googleusercontent.com/BEHbbtI42GHOisSFC2P0SDkPlBO9eofY_vle616iX0ze76HT3_P40AzE9TjGQH2nxsGaWyey9g=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Genearative-AI",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Langchain",
        image:
          "https://opensource.muenchen.de/logo/langchain.jpg",
      },
      {
        name: "Huggingface",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Groq",
        image:
          "https://logowik.com/content/uploads/images/groq-ai8121.logowik.com.webp",
      },
      {
        name: "Langgraph",
        image:
          "https://langchain-ai.github.io/langgraph/static/wordmark_light.svg",
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
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
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
      // {
      //   name: "Google Cloud",
      //   image:
      //     "https://static-00.iconduck.com/assets.00/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png",
      // },
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
