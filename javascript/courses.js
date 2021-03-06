const header = `<h1>Courses</h1>
<p>Read about the courses I have completed</p></div>`;

const courses = {
	courses: [
		{
			title: "Information Security",
			provider: "FreeCodeCamp",
			lang: "JavaScript and Python",
			projects: "5 projects on Repl.it and GitHub",
			description:
				"Building a secure web app with HelmetJS. Building a TCP client and an Nmap and port scanner in Python.",
			completion: "Completed and Passed",
		},
		{
			title: "React Native - The Practical Guide",
			provider: "Udemy",
			lang: "React Native",
			projects: "4 Projects on GitHub",
			description:
				"Use React Native and React knowledge to build native iOS and Android Apps - incl. Push Notifications, Hooks, Redux, Firebase",
			completion: "Ongoing",
		},
		{
			title: "Data Visualization",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			projects: "5 projects through CodePen",
			description:
				"Building charts, graphs, and maps to present different types of data with the D3.js library",
			completion: "Completed and Passed",
		},
		{
			title: "Quality Assurance",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			projects: "5 projects on Repl.it and GitHub",
			description:
				"Writing unit tests and functional tests with Chai and Mocha, using Pug as a template engine, using Passport for authentication and Socket.IO for real-time communication",
			completion: "Completed and Passed",
		},
		{
			title: "APIs and Microservices",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			projects: "5 projects on Repl.it and GitHub",
			description:
				"Managing Packages with Npm, Basic NodeJS and ExpressJS, MongoDB and Mongoose",
			completion: "Completed and Passed",
		},
		{
			title: "Scientific Computing with Python",
			provider: "FreeCodeCamp",
			lang: "Python",
			projects: "5 projects on Repl.it",
			description:
				"Basics of Python, Object-Oriented Programming, Database Design, Web Development",
			completion: "Completed and Passed",
		},
		{
			title:
				"CS50 Introduction to Artificial Intelligence with Python",
			provider: "Harvard University (through edX)",
			lang: "Python",
			projects: "6 quizzes and 12 projects",
			description: `Graph Search Algorithms, Adversarial Search, Knowledge Representation, Logical Inference, Probability Theory, Bayesian Networks,
            Markov Models, Constraint Satisfaction, Machine Learning, Reinforcement Learning, Neural Networks, Natural Language Processing`,
			completion: "Completed and Passed",
		},
		{
			title: "Front End Libraries",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			projects: "5 projects through CodePen",
			description: "Bootstrap, jQuery, Sass, React, Redux",
			completion: "Completed and Passed",
		},
		{
			title: "JavaScript Algorithms and Data Structures",
			provider: "FreeCodeCamp",
			lang: "JavaScript",
			projects: "5 projects",
			description:
				"ES6, Debugging, Regular Expression, Object Oriented Programming, Functional Programming, Data Structures and Algorithm Scripting",
			completion: "Completed and Passed",
		},
		{
			title:
				"CS50 Web Programming with Python and JavaScript",
			provider: "Harvard University (through edX)",
			lang: "HTML, CSS, Python, JavaScript",
			projects: "5 projects including a final project",
			description:
				"SQL, Flask, ORMs, APIs, Django, Git, Scalability and Security",
			completion: "Completed and Passed",
		},
		{
			title: "Responsive Web Design",
			provider: "FreeCodeCamp",
			lang: "CSS and HTML",
			projects: "5 projects through CodePen",
			description: "Flexbox, Media Queries, Accessibility",
			completion: "Completed and Passed",
		},
		{
			title: "CS50 Introduction to Computer Science",
			provider: "Harvard University (through edX)",
			lang: "C, Python, HTML, CSS, JavaScript",
			projects: "9 psets and a final project",
			description:
				"Introduction to Data Structures and Algorithms, Memory,  SQL, Flask",
			completion: "Completed and Passed",
		},
	],
};

const learning_portals = {
	badges: [
		{
			src: "style/img/badges/freecodecamp.svg",
			alt: "FreeCodeCamp",
			color: "#0A0A23",
		},
		{
			src: "style/img/badges/edx.svg",
			alt: "edX",
			color: "#02262B",
		},
		{
			src: "style/img/badges/geeksforgeeks.svg",
			alt: "Geeks For Geeks",
			color: "#0F9D58",
		},
		{
			src: "style/img/badges/leetcode.svg",
			alt: "LeetCode",
			color: "#FFA116",
		},
		{
			src: "style/img/badges/hackerrank.svg",
			alt: "HackerRank",
			color: "#2EC866",
		},
		{
			src: "style/img/badges/stackoverflow.svg",
			alt: "Stack Overflow",
			color: "#F58025",
		},
		{
			src: "style/img/badges/udemy.svg",
			alt: "Udemy",
			color: "#EC5252",
		},
	],
};

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("header").innerHTML = header;

	let mobile_temp = $("#mobile_temp").html();
	let table_temp = $("#table_temp").html();
	let badges_temp = $("#badges_temp").html();
	let badges_output = Mustache.render(
		badges_temp,
		learning_portals
	);
	let mobile_output = Mustache.render(mobile_temp, courses);
	let table_output = Mustache.render(table_temp, courses);

	$("#mobile").append(mobile_output);
	$("#table_body").append(table_output);
	$("#learning").append(badges_output);

	AOS.init();
});
