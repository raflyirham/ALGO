const testimonials = [
  {
    name: "Elon Musk",
    img: "assets/img/elon-musk.jpg",
    message:
      "I can't express enough how grateful I am to have discovered ALGO. It has truly been a game-changer in my quest to enhance my logic and problem-solving skills, especially in the realm of algorithms and data structures. Before stumbling upon this treasure trove of knowledge, I often found myself struggling to tackle complex problems efficiently. But now, thanks to the comprehensive resources and expert guidance available on ALGO, I've not only improved my skills but also gained a newfound confidence in approaching algorithmic challenges.",
  },
  {
    name: "Mark Zuckerberg",
    img: "assets/img/mark-zuckerberg.webp",
    message:
      "Discovering ALGO has been an intellectual revelation for me. It's a treasure trove of knowledge, offering an extensive range of resources to cater to every learner's needs. Whether you're an algorithm novice or a seasoned coder, the interactive problem-solving challenges provide an engaging way to hone your skills, all while receiving instant feedback. The mentorship from industry experts sets ALGO apart, as their ability to demystify complex concepts has accelerated my learning journey. The thriving online community fosters collaboration and support, making learning a communal experience. ",
  },
  {
    name: "Bill Gates",
    img: "assets/img/bill-gates.webp",
    message:
      "ALGO has truly been a game-changer in my pursuit of logic and problem-solving excellence. This exceptional platform has an expansive library of resources that cater to learners of all levels, from those taking their first steps into algorithms to seasoned experts seeking advanced insights. The interactive problem-solving challenges are not only addictively engaging but also provide immediate feedback, facilitating a continuous cycle of improvement.",
  },
  {
    name: "Sundar Pichai",
    img: "assets/img/sundar-pichai.webp",
    message:
      "ALGO is my digital haven for nurturing my logic and problem-solving skills to perfection. Within its digital realm lies a vast repository of resources, suitable for everyone, whether you're a greenhorn in the world of algorithms or a seasoned coding maestro seeking to finesse your skills. The interactive problem-solving challenges are like a captivating puzzle that you can't resist solving, offering not only intellectual stimulation but also immediate feedback that fuels progress.",
  },
  {
    name: "Jeff Bezos",
    img: "assets/img/jeff-bezos.jpg",
    message:
      "ALGO is nothing short of a digital sanctuary where I've honed my logic and problem-solving skills to perfection. Nestled within its digital realm is a treasure trove of resources suitable for learners of all levels – from those just starting their journey into algorithms to seasoned coding virtuosos seeking to refine their craft. The interactive problem-solving challenges are like intellectual adventures that draw you in, offering both the thrill of discovery and immediate feedback that propels you forward.",
  },
];

const topics = [
  {
    name: "Array",
    img: "assets/img/topics/array.png",
    description:
      "An array allows you to store a collection of elements of the same data type under a single name.",
  },
  {
    name: "Linked List",
    img: "assets/img/topics/linked-list.png",
    description:
      "A linked list is a sequence of nodes, where each node contains two main components: data and reference.",
  },
  {
    name: "Binary Tree",
    img: "assets/img/topics/binary-tree.png",
    description:
      "A binary tree is composed of nodes, where each node has a maximum of two children nodes.",
  },
  {
    name: "Graph",
    img: "assets/img/topics/graph.png",
    description:
      "A graph is a versatile data structure used to model relationships and connections between a set of objects.",
  },
];

const createTestimonialCard = (name, img, message) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList = "cardContainer";

  const testimonialCard = document.createElement("div");
  testimonialCard.classList =
    "flex flex-row justify-start testimonialCard rounded bg-primary border-line-primary";

  const testimonialImg = document.createElement("img");
  testimonialImg.classList = "rounded";
  testimonialImg.src = img;
  testimonialImg.alt = name;

  const testimonialDiv = document.createElement("div");
  testimonialDiv.classList = "flex flex-column";

  const testimonialName = document.createElement("h3");
  testimonialName.classList = "font-rubik font-bold text-24 text-green mb-14";
  testimonialName.textContent = name;

  const testimonialMessage = document.createElement("p");
  testimonialMessage.classList = "font-rubik font-400 text-18 text-white";
  testimonialMessage.textContent = message;

  testimonialDiv.appendChild(testimonialName);
  testimonialDiv.appendChild(testimonialMessage);

  testimonialCard.appendChild(testimonialImg);
  testimonialCard.appendChild(testimonialDiv);

  cardContainer.appendChild(testimonialCard);

  const testimonialList = document.getElementById("testimonialList");
  testimonialList.appendChild(cardContainer);
};

let testimonialIdx = 0;

function showMoreTestimonial() {
  const LIMIT = 2;
  let count = 0;

  for (
    let i = testimonialIdx;
    i < testimonials.length && count < LIMIT;
    i++, testimonialIdx++, count++
  ) {
    createTestimonialCard(
      testimonials[i].name,
      testimonials[i].img,
      testimonials[i].message
    );
  }

  if (testimonialIdx === testimonials.length) {
    const btnSeeMore = document.getElementById("btnSeeMore");
    btnSeeMore.style.display = "none";
  }
}

function handleSeeMore() {
  showMoreTestimonial();
}

let topicIdx = 0;

function showTopic() {
  const MOD = topics.length;

  const topicOne = document.getElementsByClassName("topicCard")[0];
  const topicTwo = document.getElementsByClassName("topicCard")[1];
  const topicThree = document.getElementsByClassName("topicCard")[2];

  topicOne.querySelector("img").src = topics[topicIdx % MOD].img;
  topicOne.querySelector("h3").textContent = topics[topicIdx % MOD].name;
  topicOne.querySelector("p").textContent = topics[topicIdx % MOD].description;

  topicTwo.querySelector("img").src = topics[(topicIdx + 1) % MOD].img;
  topicTwo.querySelector("h3").textContent = topics[(topicIdx + 1) % MOD].name;
  topicTwo.querySelector("p").textContent =
    topics[(topicIdx + 1) % MOD].description;

  topicThree.querySelector("img").src = topics[(topicIdx + 2) % MOD].img;
  topicThree.querySelector("h3").textContent =
    topics[(topicIdx + 2) % MOD].name;
  topicThree.querySelector("p").textContent =
    topics[(topicIdx + 2) % MOD].description;
}

function btnTopicHandle(type) {
  switch (type) {
    case "prev": {
      topicIdx -= 1;
      if (topicIdx < 0) topicIdx = topics.length - 1;

      showTopic();
      break;
    }
    case "next": {
      topicIdx += 1;
      if (topicIdx >= topics.length) topicIdx = 0;

      showTopic();
      break;
    }
  }
}

function handleDropdown() {
  const dropdown = document.getElementById("menu");

  if (dropdown.style.display === "none") {
    dropdown.style.display = "flex";
  } else {
    dropdown.style.display = "none";
  }
}

showMoreTestimonial();

class Faq {
  constructor(question, answer, index) {
    this.question = question;
    this.answer = answer;
    this.index = index;
  }

  createFaqCard() {
    const questionCard = document.createElement("button");
    questionCard.classList = "questionCard";
    questionCard.setAttribute("onclick", `handleFaqClick(${this.index})`);

    const questionCardContent = document.createElement("div");
    questionCardContent.classList = "flex flex-row justify-between rounded";

    const article = document.createElement("article");

    const question = document.createElement("h3");
    question.classList = "font-rubik font-bold text-24 text-white";
    question.textContent = this.question;

    const answer = document.createElement("p");
    answer.classList = "font-rubik font-400 text-18 text-white";
    answer.textContent = this.answer;
    answer.style.marginTop = "14px";

    article.appendChild(question);
    article.appendChild(answer);

    const symbol = document.createElement("p");
    symbol.classList = "font-rubik font-bold text-24 text-white";
    symbol.textContent = ">";

    questionCardContent.appendChild(article);
    questionCardContent.appendChild(symbol);

    questionCard.appendChild(questionCardContent);

    this.questionCard = questionCard;
  }

  hideAnswer() {
    this.questionCard
      .querySelector("div > article")
      .querySelector("p").style.display = "none";

    this.questionCard.querySelector("div > p").textContent = ">";
  }

  showAnswer() {
    this.questionCard
      .querySelector("article")
      .querySelector("p").style.display = "block";

    this.questionCard.querySelector("div > p").textContent = "^";
  }
}

const faqs = [
  {
    question: "What is ALGO?",
    answer:
      "ALGO is a platform for learning algorithms and data structures. It is a place where you can learn and practice algorithms and data structures. You can also compete with other users and see your rank on the leaderboard.",
  },
  {
    question: "How to use ALGO?",
    answer:
      "You can use ALGO by creating an account and logging in. After logging in, you can start learning algorithms and data structures. You can also compete with other users and see your rank on the leaderboard.",
  },
  {
    question: "How to create an account?",
    answer:
      "You can create an account by clicking on the 'Sign Up' button on the top right corner of the page. You can also create an account by clicking on the 'Sign Up' button on the login page.",
  },
  {
    question: "How to login?",
    answer:
      "You can login by clicking on the 'Sign In' button on the top right corner of the page. You can also login by clicking on the 'Sign In' button on the signup page.",
  },
];

let faqsButton = [];

function handleFaqClick(index) {
  if (
    faqsButton[index].questionCard.querySelector("p").style.display === "none"
  ) {
    faqsButton[index].showAnswer();
  } else {
    faqsButton[index].hideAnswer();
  }
}

function initateFaq() {
  for (let i = 0; i < faqs.length; i++) {
    let questionContainer = document.getElementById("questionContainer");

    let q1 = new Faq(faqs[i].question, faqs[i].answer, i);
    q1.createFaqCard();
    q1.hideAnswer();
    faqsButton.push(q1);

    questionContainer.appendChild(q1.questionCard);
  }
}

initateFaq();

//

console.log(
  "%c                                               .--.\n                                                `.  \\\n                                                  \\  \\\n                                                   .  \\\n                                                   :   .\n                                                   |    .\n                                                   |    :\n                                                   |    |\n   ..._  ___                                       |    |\n  `.\"\".`''''\"\"--..___                              |    |\n  ,-\\  \\             \"\"-...__         _____________/    |\n  / ` \" '                    `\"\"\"\"\"\"\"\"                  .\n  \\                                                      L\n  (>                                                      \\\n /                                                         \\\n \\_    ___..---.                                            L\n   `--'         '.                                           \\\n                  .                                           \\_\n                 _/`.                                           `.._\n              .'     -.                                             `.\n             /     __.-Y     /''''''-...___,...--------.._            |\n            /   _.\"    |    /                ' .      \\   '---..._    |\n           /   /      /    /                _,. '    ,/           |   |\n           \\_,'     _.'   /              /''     _,-'            _|   |\n                   '     /               `-----''               /     |\n                   `...-'                                       `...-'\n",
  "color: white"
);

console.log(
  "%cDibuat oleh Rafly Irham Safatulloh | Dicoding - Belajar Dasar Pemrograman Web",
  "background: white; color: red; padding: 8px; border-radius: 8px; font-weight: bold"
);
