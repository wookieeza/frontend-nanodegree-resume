var bio = {
    name: "Debbie Wood",
    role: "Senior Engineer",
    contact: { email: "debbie@test.com", telephone: "0879383576"},
    pictureUrl: "images/fry.jpg",
    welcomeMsg: "hello",
    skills: ["java","javaScript","grails","Android","Swift"]
};

var education ={
    "schools": [
        {
            "institution": "TUKS",
            "years": 3,
            "course": " BIS Multimedia",
            "pass": 2004
        },
        {
            "institution": "TUKS",
            "years": 2,
            "course": "BSc Hons Computer Science",
            "pass": 2006
        },
        {
            "institution": "TCD",
            "years": 2,
            "course": "MSc Health Informatics",
            "pass": 2014
        }
    ]
};

var work = {
    "work": [
    {
        "employer":"Opticode",
        "title": "Junior Developer",
        "location": "Pretoria",
        "dates": "2001 - 2003",
        "description": "Developer"
    },
    {
        "employer":"Psybergate",
        "title": "Developer",
        "location": "Pretoria",
        "dates": "2003 - 2005",
        "description": "Developer"
    },
    {
        "employer":"Mobile Travel Technologies",
        "title": "Senior Developer",
        "location": "Dublin",
        "dates": "2006 - 2013",
        "description": "Developer"
    }
]
};

var projects = {
    "projects": [
    {
        "title": "SOS LOL",
        "dates": "2001 - 2003",
        "description": "Developer",
        "images": ["images/1.png","images/2.png"]
    },
    {
        "title": "ESAP",
        "dates": "2003 - 2005",
        "description": "Developer",
        "images": ["images/1.png","images/2.png"]
    },
    {
        "title": "Solmelia",
        "dates": "2003 - 2005",
        "description": "Developer",
        "images": ["images/1.png","images/2.png"]
    }
]
};



var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedContactEmail = HTMLcontactGeneric.replace("%contact%","Email").replace("%data%", bio.contact.email);
var formattedContactTelephone = HTMLcontactGeneric.replace("%contact%","Mobile").replace("%data%", bio.contact.telephone);
var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedHTMLworkDates = HTMLworkDates.replace("%data%",work.work[0].dates);
var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%",education.schools[0].pass);

$("#header").prepend([formattedName]);
$("#header").append([formattedRole]);


$("#header").append([formattedHTMLbioPic]);
$("#header").append([formattedHTMLwelcomeMsg]);
$("#topContacts").append([formattedContactEmail]);
$("#topContacts").append([formattedContactTelephone]);

$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedHTMLworkDates);
$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedHTMLschoolDates);



