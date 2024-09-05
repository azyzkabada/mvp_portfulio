const PRJCT = require("../../main");
const { ProjectsModel } = PRJCT;
console.log("heloa", ProjectsModel);

async function addProjects() {
  try {
    console.log("Connection has been established successfully.");
    const projectsData = [
      {
        date: "2024-09-01",
        projectName: "EcoEase: Your Personal Guide to Sustainable Living",
        content:
          "EcoEase is a sleek and user-friendly app designed to help individuals adopt a more sustainable lifestyle. Whether you're looking to reduce your carbon footprint, track your recycling habits, or discover eco-friendly products, EcoEase provides personalized tips and actionable insights tailored to your unique lifestyle. With features like a carbon tracker, daily green challenges, and a community of like-minded users, EcoEase makes going green simple and rewarding. Join us on the journey to a cleaner, greener future, one step at a time.",
        display: true,
        likes: 5,
        isArchived: false,
        mainImage:
          "http://res.cloudinary.com/dlyf0syzk/image/upload/v1725522627/r0ejc8f0vmyvav7arpqu.jpg",
      },
      {
        date: "2024-09-02",
        projectName: "Learnify: Your Personalized Learning Companion",
        content:
          "Learnify is an innovative education app designed to make learning engaging, personalized, and accessible for everyone. With a vast library of interactive courses, quizzes, and tutorials across various subjects, Learnify adapts to your learning style and pace. Whether you're a student looking to boost your grades, a professional aiming to upskill, or a curious mind eager to explore new topics, Learnify offers a tailored learning experience. With features like progress tracking, gamified lessons, and expert-led content, Learnify transforms education into a fun and rewarding journey. Unlock your full potential with Learnify!",
        display: true,
        likes: 10,
        isArchived: false,
        mainImage:
          "http://res.cloudinary.com/dlyf0syzk/image/upload/v1725523140/r05gfhxytinmm0vyzdvr.jpg",
      },
      {
        date: "2024-09-03",
        projectName: "HistoryHub: Explore the Past, Shape the Future",
        content:
          "HistoryHub is an engaging app designed to bring history to life for learners of all ages. Dive into interactive timelines, explore detailed maps, and watch animated documentaries that make historical events and figures come alive. Whether you're a student or a history enthusiast, HistoryHub offers a captivating journey through time, helping you understand the past to better navigate the future.",
        display: true,
        likes: 15,
        isArchived: false,
        mainImage:
          "http://res.cloudinary.com/dlyf0syzk/image/upload/v1725523411/hruetypbr9nsqslfb502.jpg",
      },
      {
        date: "2024-09-04",
        projectName: "FitLife: Your Virtual Fitness Coach",
        content:
          "FitLife is a dynamic app designed to keep you motivated and on track with your fitness goals. Whether you're looking to lose weight, build muscle, or simply maintain a healthy lifestyle, FitLife offers customized workout plans, meal suggestions, and progress tracking tailored to your needs. With features like virtual coaching, real-time feedback, and a community of fitness enthusiasts, FitLife makes staying active engaging and fun. Start your fitness journey with FitLife and reach your full potential!",
        display: false,
        likes: 20,
        isArchived: false,
        mainImage:
          "https://res.cloudinary.com/dlyf0syzk/image/upload/v1725524972/erw3y8xpemonup6kcfuv.png",
      },
      {
        date: "2024-09-05",
        projectName: "MindfulMe: Your Personal Mental Wellness Companion",
        content:
          "MindfulMe is a thoughtfully designed app that helps you cultivate mindfulness and improve mental well-being. With guided meditations, mood tracking, and personalized wellness tips, MindfulMe provides the tools you need to manage stress, build resilience, and enhance your overall mental health. Whether you're a beginner or experienced in mindfulness practices, MindfulMe offers a tailored approach to help you stay balanced and present in your daily life.",
        display: true,
        likes: 25,
        isArchived: false,
        mainImage:
          "https://res.cloudinary.com/dlyf0syzk/image/upload/v1725523973/idinwn5vvtiqwu43edql.jpg",
      },
      {
        date: "2024-09-06",
        projectName: "TravelPro: Your Ultimate Travel Planner",
        content:
          "TravelPro is an intuitive app designed to simplify your travel planning experience. Whether you're organizing a solo trip, a family vacation, or a business journey, TravelPro provides a seamless platform to plan, book, and manage all your travel needs. From flight and hotel bookings to itinerary suggestions and travel tips, TravelPro ensures a hassle-free and enjoyable travel experience. Discover new destinations and make the most of your adventures with TravelPro!",
        display: true,
        likes: 30,
        isArchived: false,
        mainImage:
          "https://res.cloudinary.com/dlyf0syzk/image/upload/v1725524157/xyduhauhi0gw3e36h2g2.jpg",
      },
      {
        date: "2024-09-07",
        projectName: "ChefMaster: Your Virtual Culinary Assistant",
        content:
          "ChefMaster is an innovative app that brings the art of cooking to your fingertips. Whether you're a beginner or a seasoned chef, ChefMaster offers a diverse range of recipes, cooking tutorials, and meal planning tools to suit every taste and dietary need. With interactive features like ingredient substitution tips, cooking timers, and a vibrant community of home cooks, ChefMaster makes cooking at home an enjoyable and stress-free experience. Unleash your culinary creativity with ChefMaster!",
        display: true,
        likes: 35,
        isArchived: false,
        mainImage:
          "https://res.cloudinary.com/dlyf0syzk/image/upload/v1725525238/zydu1ntxok9tyqssgh0t.png",
      },
      {
        date: "2024-09-08",
        projectName: "FinanceWise: Your Guide to Financial Freedom",
        content:
          "FinanceWise is a comprehensive app designed to help you take control of your finances. Whether you're looking to budget, save, invest, or plan for retirement, FinanceWise offers personalized financial advice, easy-to-use tools, and expert tips tailored to your financial goals. With features like expense tracking, investment guides, and goal-setting, FinanceWise empowers you to make informed decisions and achieve financial independence. Start your journey to financial freedom with FinanceWise!",
        display: true,
        likes: 40,
        isArchived: false,
        mainImage:
          "https://res.cloudinary.com/dlyf0syzk/image/upload/v1725524489/vdrmqs9qpg8cjxj80gn9.jpg",
      },
      {
        date: "2024-09-09",
        projectName: "SkillBoost: Elevate Your Career",
        content:
          "SkillBoost is a career development app designed to help professionals enhance their skills and advance their careers. Whether you're looking to learn new skills, get certifications, or prepare for your next job interview, SkillBoost provides personalized learning paths, expert-led courses, and career advice to help you achieve your professional goals. With interactive learning modules, progress tracking, and networking opportunities, SkillBoost makes career advancement accessible and engaging.",
        display: true,
        likes: 45,
        isArchived: false,
        mainImage:
          "https://res.cloudinary.com/dlyf0syzk/image/upload/v1725524701/enrgcqhmpvrmwtp67y5w.png",
      },
      {
        date: "2024-09-10",
        projectName: "HomeHaven: Redefine Your Living Space",
        content:
          "HomeHaven is an app designed to help you create a personalized and harmonious living environment. Whether you're planning a renovation, redecorating, or simply looking for home organization tips, HomeHaven provides expert advice, inspiration, and step-by-step guides tailored to your style and budget. With features like virtual room planners, DIY tutorials, and a community of home enthusiasts, HomeHaven makes it easy to transform your space into your dream home.",
        display: true,
        likes: 50,
        isArchived: false,
        mainImage:
          "https://res.cloudinary.com/dlyf0syzk/image/upload/v1725524827/o1ulhf2iua36ocoqzpjp.png",
      },
    ];

    // Insertion des données
    await ProjectsModel.bulkCreate(projectsData);
    console.log("10 projects have been added successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

addProjects();

const { MessagesModel } = PRJCT;

async function addMessages() {
  try {
    console.log("Connection has been established successfully.");
    const messagesData = [
      {
        authorFullName: "John Doe",
        email: "johndoe@example.com",
        content: "Hello, I have a question regarding your service.",
        isRead: false,
        isArchived: false,
      },
      {
        authorFullName: "Jane Smith",
        email: "janesmith@example.com",
        content: "Can you provide more details about the EcoEase project?",
        isRead: true,
        isArchived: false,
      },
      {
        authorFullName: "Alice Johnson",
        email: "alicejohnson@example.com",
        content: "I loved the MindfulMe app, it's been really helpful!",
        isRead: true,
        isArchived: false,
      },
      {
        authorFullName: "Bob Brown",
        email: "bobbrown@example.com",
        content: "Is there any way to get early access to Learnify?",
        isRead: false,
        isArchived: true,
      },
      {
        authorFullName: "Charlie Davis",
        email: "charliedavis@example.com",
        content: "I found a bug in the HistoryHub app. Who should I contact?",
        isRead: true,
        isArchived: false,
      },
      {
        authorFullName: "David Wilson",
        email: "davidwilson@example.com",
        content: "Can you send me more information about FitLife?",
        isRead: false,
        isArchived: false,
      },
      {
        authorFullName: "Eva Miller",
        email: "evamiller@example.com",
        content: "I would like to know more about the TravelPro app.",
        isRead: true,
        isArchived: true,
      },
      {
        authorFullName: "Frank Garcia",
        email: "frankgarcia@example.com",
        content: "I have a suggestion for a feature in ChefMaster.",
        isRead: false,
        isArchived: false,
      },
      {
        authorFullName: "Grace Lee",
        email: "gracelee@example.com",
        content: "Can you assist with the setup of FinanceWise?",
        isRead: false,
        isArchived: false,
      },
      {
        authorFullName: "Henry Young",
        email: "henryyoung@example.com",
        content: "I'm experiencing issues with the SkillBoost app.",
        isRead: true,
        isArchived: false,
      },
    ];

    // Inserting the data into the Messages model
    await MessagesModel.bulkCreate(messagesData);
    console.log("10 messages have been added successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

addMessages();
