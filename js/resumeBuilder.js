var bio = {
    name: "Debbie Wood",
    role: "Senior Engineer",
    contact: { email: "debbie@test.com", telephone: "0879383576"},
    pictureUrl: "images/fry.jpg",
    welcomeMsg: "hello",
    skills: ["java","javaScript","grails","Android","Swift"]
};
bio.display = function(){

    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedContactEmail = HTMLcontactGeneric.replace("%contact%","Email").replace("%data%", bio.contact.email);
    var formattedContactTelephone = HTMLcontactGeneric.replace("%contact%","Mobile").replace("%data%", bio.contact.telephone);
    var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
    var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

    $("#header").prepend([formattedName]);
    $("#header").append([formattedRole]);
    $("#header").append([formattedHTMLbioPic]);
    $("#header").append([formattedHTMLwelcomeMsg]);

    $("#topContacts").append([formattedContactEmail]);
    $("#topContacts").append([formattedContactTelephone]);

    if(bio.skills.length>0){
        $("#header").append(HTMLskillsStart);
        $("#skills").append( HTMLskills.replace("%data%",bio.skills[0]));
        $("#skills").append( HTMLskills.replace("%data%",bio.skills[1]));
        $("#skills").append( HTMLskills.replace("%data%",bio.skills[2]));
        $("#skills").append( HTMLskills.replace("%data%",bio.skills[3]));
    }


};
bio.display();

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
education.display = function(){

    var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%",education.schools[0].pass);
    $("#education").append(HTMLschoolStart);
    $(".education-entry").append(formattedHTMLschoolDates);

};

var work = {
    "work": [
    {
        "employer":"Opticode",
        "employerUrl":"http://www.opticode.co.za",
        "title": "Junior Developer",
        "location": "Pretoria",
        "dates": "2001 - 2003",
        "description": "Developer"
    },
    {
        "employer":"Psybergate",
        "employerUrl":"http://www.psybergate.co.za",
        "title": "Developer",
        "location": "Pretoria",
        "dates": "2003 - 2005",
        "description": "Developer"
    },
    {
        "employer":"Mobile Travel Technologies",
        "employerUrl":"http://www.mttnow.com",
        "title": "Senior Developer",
        "location": "Dublin",
        "dates": "2006 - 2013",
        "description": "Developer"
    }
]
};
work.display = function(){
    $("#workExperience").append(HTMLworkStart);
    for ( job in work.work){
        $("#workExperience").append(HTMLworkStart);

        var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%",work.work[job].employer);
        var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%",work.work[job].title);
        var formattedHTMLworkDates = HTMLworkDates.replace("%data%",work.work[job].dates);
        var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%",work.work[job].location);
        var formattedHTMLworkDescription = HTMLworkDescription.replace("%data%",work.work[job].description);

        $(".work-entry:last").append(formattedHTMLworkEmployer + formattedHTMLworkTitle + formattedHTMLworkDates + formattedHTMLworkLocation + formattedHTMLworkDescription);
    }

    var formattedHTMLworkDates = HTMLworkDates.replace("%data%",work.work[0].dates);
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry").append(formattedHTMLworkDates);
};

work.display();

var projects = {
    "projects": [
    {
        "title": "SOS LOL",
        "dates": "2001 - 2003",
        "description": "Developer",
        "images": ["images/1.jpg","images/2.png"]
    },
    {
        "title": "ESAP",
        "dates": "2003 - 2005",
        "description": "Developer",
        "images": ["images/1.jpg","images/2.png"]
    },
    {
        "title": "Solmelia",
        "dates": "2003 - 2005",
        "description": "Developer",
        "images": ["images/1.jpg","images/2.png"]
    }
]
};



projects.display = function (){
   for(project in projects.projects){
       console.log(projects.projects[project]);

       var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
       var formattedHTMLprojectDates = HTMLprojectDates.replace('%data%',projects.projects[project].dates);
       var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
       var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[0]);


       $('#projects').append(HTMLprojectStart);
       $(".project-entry:last").append(formattedHTMLprojectTitle + formattedHTMLprojectDates + formattedHTMLprojectDescription + formattedHTMLprojectImage);
   }
};

projects.display();



function inName(name){

    if (!name) { name = "boe jangles"};

    var names = name.split(" ");

    return names[0] + " " + names[1].toUpperCase();
}

console.log(inName("debbie wood"));



$(document).click(function (loc){
    logClicks(loc.pageX,loc.pageY);
});


function locationizer(work) {
    var locations= [];
    for (job in work.work){
       locations.push(work.work[job].location);
    }
}

locationizer(work);
$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);

//checkout d3



