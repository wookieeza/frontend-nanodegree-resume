//$("#main").append(['Debbie Wood']);

var awesomeThoughts = "I am Debbie and I am AWESOME!";

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
console.log(funThoughts);

//$("#main").append([funThoughts]);


var audacityStr = "Audacity";
var udacity = audacityStr.slice(1).replace("u","U");
console.log(udacity);

var bio = {
    name: "Debbie Wood",
    role: "Senior Engineer",
    contact: { email: "debbie@test.com", telephone: "0879383576"},
    pictureUrl: "images/fry.jpg",
    welcomeMsg: "hello",
    skills: ["java","javaScript","grails","Android","Swift"]
};

var work = {};
work.position = "Engineer";
work.employer =  "WhatClinic";
work.yearsworked = 1;
work.city = "Dublin";

var education = {};
education["name"] = "TCD";
education["years"] = 2;
education["city"] = "Dublin"

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedContactEmail = HTMLcontactGeneric.replace("%contact%","Email").replace("%data%", bio.contact.email);
var formattedContactTelephone = HTMLcontactGeneric.replace("%contact%","Mobile").replace("%data%", bio.contact.telephone);
var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%",work.position)

var formattedHTMLschoolName = HTMLschoolName.replace("%data%",education["name"])

$("#header").prepend([formattedName]);

$("#header").append([formattedRole]);


$("#header").append([formattedHTMLbioPic]);
$("#header").append([formattedHTMLwelcomeMsg]);
$("#topContacts").append([formattedContactEmail]);
$("#topContacts").append([formattedContactTelephone]);

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedHTMLworkTitle);
$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedHTMLschoolName);


