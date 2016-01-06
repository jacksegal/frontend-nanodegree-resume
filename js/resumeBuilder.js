// BIO
var bio = {
	"name" : "Jack Segal",
	"role" : "Frontend Web Developer",
	"picture" : "https://pbs.twimg.com/profile_images/569084875605438464/3nPrX5M0.png",
	"welcomeMessage" : "Hello and welcome to my CV",
	"contacts" : {
		"email" : "jackbsegal@gmail.com",
		"github" : "jacksegal",
		"twitter" : "segal_jack",
		"location" : "London, UK"
	},
	"skills": ["MySQL", "php", "AWS", "WordPress", "PCI DSS Compliance", "Responsive Web Design"]
};

bio.displayPicture = function() {
	var formattedImage = HTMLbioPic.replace("%data%",bio.picture);
	$("#header").append(formattedImage);
}

bio.displayMessage = function() {
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);;
	$("#header").append(formattedMessage);
}

bio.displaySkills = function() {

	// create new empty skill (HTMLskillsStart)
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills){

		// add skill (HTMLskills)
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

bio.displayContacts = function(appendHTML) {

	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$(appendHTML).append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$(appendHTML).append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	$(appendHTML).append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$(appendHTML).append(formattedLocation);
}


// WORK
var work = {
	"jobs" : [
		{
			"employer" : "Tuxedo",
			"title" : "Service and Support Manager",
			"location" : "London, UK",
			"dates" : "2014-03-01 - 2016-03-01",
			"description" : "Managing Application Development, Infrastructure and Problem Mgmt"
		},
		{
			"employer" : "Tuxedo",
			"title" : "Service Analyst",
			"location" : "London, UK",
			"dates" : "2012-06-01 - 2014-03-01",
			"description" : "Escalation point for business and clients; writing development specifications; supporting sales and implementation teams; and managing testing"
		},
		{
			"employer" : "Tuxedo",
			"title" : "Technical Coordinator",
			"location" : "London, UK",
			"dates" : "2011-02-01 - 2012-06-01",
			"description" : "Managed monthly development releases - budgeting, prioritising, dev team's time and testing"
		}
	]
};

work.display = function() {
	for(job in work.jobs){

		// create a new job entry
		$("#workExperience").append(HTMLworkStart);

		// add the title (HTMLworkTitle) & employer (HTMLworkEmployer)
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);

		// add the dates (HTMLworkDates)
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		// add the location (HTMLworkLocation)
		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		// add the description (HTMLworkDescription)
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
}


// PROJECTS
var projects = {
	"projects" : [
		{
			"title" : "Bottle Shop",
			"dates" : "2015",
			"description" : "ecommerce website",
			"images" : ["http://portfolio.wacko.io/img/bottle-shop.png"]
		},
		{
			"title" : "Mother Kellys",
			"dates" : "2014",
			"description" : "Trendy bar in Bethnal Green",
			"images" : ["http://portfolio.wacko.io/img/floss-guppy.png"]
		},
		{
			"title" : "Olive Harvest Trust",
			"dates" : "2015",
			"description" : "Charity about Palestine",
			"images" : ["http://portfolio.wacko.io/img/olive-harvest.png"]
		},
		{
			"title" : "Barley Pop",
			"dates" : "2015",
			"description" : "Beer consultancy",
			"images" : ["http://portfolio.wacko.io/img/barley-pop.png"]
		}
	]
};

projects.display = function() {

	for(project in projects.projects){

	 	// create a new project entry
	 	$("#projects").append(HTMLprojectStart);

	 	// add Title (HTMLprojectTitle)
	 	var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	 	$(".project-entry:last").append(formattedProjectTitle);

	 	// add Date (HTMLprojectDates)
	 	var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	 	$(".project-entry:last").append(formattedProjectDates);

	 	// add Description (HTMLprojectDescription)
	 	var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	 	$(".project-entry:last").append(formattedProjectDescription);

	 	// add Images (HTMLprojectImage)
	 	for(image in projects.projects[project].images){
	 		var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
	 		$(".project-entry:last").append(formattedProjectImage);
	 	}

 	}
}


// EDUCATION
var education = {
	"schools" : [
		{
			"name" : "City Lit",
			"location" : "London",
			"degree" : "Math",
			"majors" : ["BC1", "BC2", "BC3"],
			"dates" : "2012",
			"url" : "http://www.citylit.ac.uk/"
		},
		{
			"name" : "Roundwood Park",
			"location" : "Harpenden",
			"degree" : "Math",
			"majors" : ["BC1", "BC2", "BC3"],
			"dates" : "2000 - 2005",
			"url" : "http://www.roundwoodpark.co.uk/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com"
		},
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com"
		}
	]
};


education.display = function() {
	for(school in education.schools){

		// create a new education entry
		$("#education").append(HTMLschoolStart);

		// add Name & Degree
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);

		$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);

		// add Dates
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		// add Location
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		// add Major
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[0]);
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	// create online classes entry
	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses){

		// create a new education entry
		$("#education").append(HTMLschoolStart);

		// add title & school (HTMLonlineTitle - HTMLonlineSchool)
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);;
		$(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);

		// add dates (HTMLonlineDates)
		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		// add HTMLonlineURL
		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}



/*

	TIME TO GET BUILDING

*/


// build name and role
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").prepend(formattedName);


// build contact details - header
bio.displayContacts("#topContacts");

// build bio picture
bio.displayPicture();


// build skills
bio.displaySkills();

// build employment history
work.display();

// build projects
projects.display();

// build education history
education.display();

// build map
$("#mapDiv").append(googleMap);

// build contact details - footer
bio.displayContacts("#footerContacts");

// build internationalize button
//$("#main").append(internationalizeButton);