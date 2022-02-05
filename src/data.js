export const projects = [
  {
    title: "Derivative Pricer",
    subtitle: "C++ and Qt6 Framework",
    description:
      "Interface using C++ Qt6 framework to compute various derivative's arbitrage-free price using Monte Carlos simulation for Vanilla and Exotic Option and risk-neutral Binary Tree Pricing for American Option. The project focuses on good programming practises such as packaging reusable components like generation of random numbers and parameters integral. Abstract classes have been created to allow easy extension to other options if its payoff may be define. Vanilla Options, Simple Exotic Option and American Options can be valued.",
    image: "./optionPricer.gif",
    link: "https://github.com/alanriya/OptionPricer", 
  },
  {
    title: "Market Data DartBoard",
    subtitle: "Python 3.9 and RabbitMQ",
    description:
      "This project simulates the how market data flows from exchange to the client. A server will read a dummmy file that contains market data in their native protocol and sends it through a TCP connection through RabbitMQ 's topic exchange. Another client application will receive the data and trys to build the book, the book state is then published over the another TCP connection to any client subscribing to the market data to display a dart board. This project still lacks a frontend UI that is fast enough to handle large volume of data and rendering them at the same time.",
    image: "./marketParser.gif",
    link: "https://github.com/alanriya/dataTransfer",
  }
];

export const backgrounds = [
  {
    cardTitle: 'A.P. Moller-Maersk, Global Trade Finance Internship',
    cardSubtitle:
      "Rotate around Mumbai, Rotterdam, and Singapore offices.",
    title: "May 2018 - July 2018",
    cardDetailedText: ["- Independently formulated a robust business development strategy in identifying high margin pools for Maersk Trade Finance globally."],
  },
  {
    cardTitle: 'ING Bank N.V., Spring Analyst - Structured Finance APAC',
    cardSubtitle:
      "Embarked on a 6-months internship with ING bank.",
    title: "Dec 2018 - Apr 2019",
    cardDetailedText: ["- Independently crafted the bank’s APAC Logistics subsector strategy from scratch and helped track the region’s market opportunities."],
  },
  {
    cardTitle: 'Finally an NUS Grad!',
    cardSubtitle:
      "Graduated with Bachelors in Social Science with major in Economics (specialisation in Monetary and Financial Economics), with Second Major in Geography from National University of Singapore.",
    title: "Jun 2019",
    cardDetailedText: ["- Achieved Honours with distinction and was awarded President's Sport Team of the Year and NUS Sports Team of the Year.", "- Excelled in International Trade & Finance Research areas: Arctic Geopolitics, Sustainable Tourism.", "- I spent 6 months abroad at Concordia University (Montreal) as part of my Overseas Exchange Programme."]
  },
  {
    cardTitle: 'ING Bank N.V., Analyst, Structured Finance APAC',
    cardSubtitle: "Started my career at ING bank following the internship",
    title: "June 2019 - May 2021",
    cardDetailedText: ["- Functioned as the front office account manager for a portfolio of Korean, Japanese and Singapore shipping clients." ,"- Skilled in financial analysis of maritime companies, including building of financial models to forecast balance sheets and cashflows ", "- Actively involved in the bank’s strategic innovation & sustainability initiatives, and was trained and certified to be an innovation coach for the APAC region to promote agile ways of working internally."]  
  },
  {
    cardTitle: `ING Bank N.V., Analyst, Sustainable Finance APAC`,
    cardSubtitle:
      "Internally rotated to ING's sustainable finance department",
    title: "May May 2021 - Present",
    cardDetailedText: ["- Experienced in originating, structuring, and executing Sustainable Finance deals, including GSS and Sustainability-Linked bonds/loans.", "- Excels in analysing companies’ ESG strategies, identifying gaps, and proposing advisory solutions to align with investors’ expecta1tions.", "- Well-versed with various global and regional sustainability standards, benchmarks, and Second Party Opinion providers.", "- Conducted in-depth sector knowledge from the sustainability perspective on the Energy, Transportation, Metals & Mining, Agriculture, Circular Economy, Telecommunications and Infrastructure sectors."]
  }
];

export const skills = [
  "Microsoft Office - Excel, Word and Powerpoint",
  "ESG Analysis",
  "Financial Analysis",
  "Design Thinking", 
  "R Studio",
  "Stata"
];
