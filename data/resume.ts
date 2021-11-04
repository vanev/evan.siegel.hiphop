import Item, { Category } from "../Resume/Item";

export const items: Record<number, Item> = {
  0: {
    id: 0,
    category: Category.Work,
    title: "Staff Engineer",
    company: "Grailed",
    location: "New York, NY",
    startTime: "2017-10",
    endTime: null,
  },

  1: {
    id: 1,
    category: Category.Work,
    title: "Senior Software Engineer",
    company: "Harry's",
    location: "New York, NY",
    startTime: "2013-02",
    endTime: "2017-07",
    body: [
      "Built Harrys.com custom Ruby-on-Rails e-commerce platform, primarily focusing on the frontend.",
      "Member of Harrys.com start up team faciliating initial launch of company and website.",
      "Helped build subscription business, achieving 30+ percentage point increase in subscription penetration.",
      "Refactored checkout using React.js, among other modern Javascript tools, introducing those tools into the platform.",
      "Lead one of three teams tasked with refactoring major pieces of the platform in preparation to launch Harry's in the UK.",
      "Lead cross-functional Harry's x Jimmy Chin project; won Webby Award for Harry's x Jimmy Chin microsite.",
      "Interviewed many, many engineers, both technical and non-technical interview; interviewed many non-engineering roles for values alignment and cross-functional communication skills.",
      "Developed technical front-end phone screens and interview questions.",
      "On-boarded 3 frontend engineers, assisted with on-boarding many others.",
      "Developed and taught a 10-week long Javascript 101 class for Harry's employees (a few times).",
      "Unpacked a lot of FreshDirect boxes; changed a lot of empty water coolers; ran a handful of board game nights.",
    ],
  },

  2: {
    id: 2,
    category: Category.Work,
    title: "Co-Founder & Director of Product",
    company: "Involvio, LLC",
    location: "New York, NY",
    startTime: "2011-02",
    endTime: "2013-02",
    body: [
      "Responsible for building involvio.com, an event promotion website for college students, and nustalgic.com, an event photo gallery website. Managed developer and designer; wrote HTML, CSS, Javascript, and Python in building Nustalgic and the front-end of Involvio.",
    ],
  },

  3: {
    id: 3,
    category: Category.Work,
    title: "Participant",
    company: "GE|OMD Summer Incubator",
    location: "New York, NY",
    startTime: "2011-06",
    endTime: "2011-08",
    body: [
      "10-week incubator program bringing together select student entrepreneurs in a collaborative environment to develop digital, media, and marketing ideas. Involvio selected winner, awarded $10,000 prize to help fund business.",
    ],
  },

  4: {
    id: 4,
    category: Category.Work,
    title: "Technology Support Specialist",
    department: "Center for Teaching, Learning, and Technology",
    company: "Goucher College",
    location: "Baltimore, MD",
    startTime: "2008-09",
    endTime: "2011-05",
  },

  5: {
    id: 5,
    category: Category.Work,
    title: "Summer Intern & Website Developer/Manager",
    company: "The Energeia Partnership",
    location: "East Farmingdale, NY",
    startTime: "2010-06",
    endTime: "2010-08",
    body: [
      "Shadowed the director of the Energia Partnership, assisting with day-to-day tasks.",
    ],
  },

  6: {
    id: 6,
    category: Category.Work,
    title: "Dining Hall Manager",
    company:
      "Union for Reform Judaism and North American Federation of Temple Youth’s Kutz Campus for Reform Jewish Teens",
    location: "Warwick, NY",
    startTime: "2009-05",
    endTime: "2009-08",
    body: [
      "former, Resident Advisor, June - August 2008",
      "former, Work Staff/Dishwasher, June - August 2007",
    ],
  },

  7: {
    id: 7,
    category: Category.Leadership,
    title: "President",
    organization: "Student Government Association, Goucher College",
    location: "Baltimore, MD",
    startTime: "2009-07",
    endTime: "2010-07",
    body: [
      "Chaired the Student Senate and the Executive Board, bodies of 50+ and 10 students, respectively. Responsible for an annual budget of $250,000. Enacted the New Deal for Goucher College, a $20,000 on-campus job’s program for students.",
      "former, Vice President for Clubs, Feb. 2009-Aug. 2009",
    ],
  },

  8: {
    id: 8,
    category: Category.Leadership,
    title: "Moderator & Game Developer",
    organization: "Humans vs. Zombies, Goucher College",
    location: "Baltimore, MD",
    startTime: "2010-02",
    endTime: "2011-05",
    body: [
      "Organized and supervised week-long games of Humans vs. Zombies, with a team of 5-7 moderators, for over 200 students. Created and implemented a series of missions encouraging teamwork, leadership, and excitement.",
    ],
  },

  9: {
    id: 9,
    category: Category.Leadership,
    title: "President",
    organization: "Youth Group, North Shore Synagogue",
    location: "Syosset, NY",
    startTime: "2006-08",
    endTime: "2007-06",
    body: [
      "Developed and instituted educational programming and ran social functions for one of the most active teen youth groups in the New York region.",
    ],
  },

  10: {
    id: 10,
    category: Category.Education,
    title: "History Major, Secondary Education Concentration, B.A.",
    school: "Goucher College",
    location: "Baltimore, MD",
    startTime: "2007-08",
    endTime: "2011-05",
  },

  11: {
    id: 11,
    category: Category.Education,
    title: "Student Teacher",
    school: "Patapsco High School",
    location: "Baltimore, MD",
    startTime: "2010-08",
    endTime: "2010-12",
  },

  12: {
    id: 12,
    category: Category.Education,
    title: "English Teacher",
    school: "Ikamva Lesizwe Public School",
    location: "Kenton-On-Sea, South Africa",
    startTime: "2010-05",
    endTime: "2010-06",
  },
};
