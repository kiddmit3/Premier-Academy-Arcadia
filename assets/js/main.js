 var faculty = {
     counselors: [{
             name: "Wuu",
             university: "Indiana University",
             degree: "Bachelor's of Arts, Management Information Systems & Psychology",
             subjects: "College Counseling",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Celina Lee",
             university: "UC San Diego",
             degree: "Bachelor's of Science, Management Science",
             subjects: "College Counseling",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         }
     ],
     english: [{
             name: "Wong",
             university: "Tunghai University",
             degree: "Bachelor's of Art",
             subjects: "Chinese, English, Language, Literature, College Essays",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Kuykendall",
             university: "Occidental College, Philosophy",
             degree: "Bachelor's of Art",
             subjects: "ESL, SAT, TOFEL, IELTS, History",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Ryan Jones",
             university: "Cal State University, Northridge",
             degree: "Bachelor's of Art",
             subjects: "ISEE, SSAT, English, History, SAT",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Matthew Megee",
             university: "Michigan State University",
             degree: "Bachelor's of Art",
             subjects: "English, Language, Literature",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Lam",
             university: "UC Berkeley",
             degree: "Bachelor's of Science",
             subjects: "ISEE, SSAT, English, History, SAT",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Borzoni",
             university: "University of Massachusetts",
             degree: "Bachelor's of Art",
             subjects: "English, Writing, Reading, College Essays",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Michael Evans",
             university: "Fuller Semiary",
             degree: "Master's of Art",
             subjects: "English, College Essays",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         }
     ],
     science: [{
             name: "David Lac",
             university: "UC Davis",
             degree: "Bachelor's of Science, Biology",
             subjects: "Math, Biology, Chemistry, Web Development",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Wang",
             university: "Harvard University",
             degree: "Master's of Art",
             subjects: "Math, Physics, Chemistry",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Takano",
             university: "Western University",
             degree: "Master's of Science",
             subjects: "Math, Biology, Chemistry, Environmental Science, SAT",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Wang",
             university: "UC Santa Barbra",
             degree: "Bachelor's of Science",
             subjects: "Math, Biology, Chemistry",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Dr. Moussawi",
             university: "UC Riverside",
             degree: "Doctor of Philosophy, Physics",
             subjects: "Physics",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Yang",
             university: "Oxford University",
             degree: "Master's of Science, Mathematics",
             subjects: "Math, Statistics",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         },
         {
             name: "Chang",
             university: "UC Santa Barbra",
             degree: "Bachelor's of Science",
             subjects: "Math, English",
             profile: "./assets/img/profiles/david-lac.jpg",
             bio: ""
         }
     ]
 };


 $(".button-collapse").sideNav();


 $(document).ready(function() {
     $('.parallax').parallax();
     $('.modal').modal();
     $('select').material_select();
     $('.scrollspy').scrollSpy({ scrollOffset: 55 });

     var englishTemplate = $('#english-template').html();
     var compliedEnglishTemplate = Handlebars.compile(englishTemplate);
     $("#englishTeachers").html(compliedEnglishTemplate(faculty));

     var scienceTemplate = $('#science-template').html();
     var compliedScienceTemplate = Handlebars.compile(scienceTemplate);
     $("#scienceTeachers").html(compliedScienceTemplate(faculty));
 });

 var animateHTML1 = function() {
     var elems,
         windowHeight
     var init = function() {
         elems = document.getElementsByClassName('hiddenRight')
         windowHeight = window.innerHeight
         _addEventHandlers()
     }
     var _addEventHandlers = function() {
         window.addEventListener('scroll', _checkPosition)
         window.addEventListener('resize', init)
     }
     var _checkPosition = function() {
         for (var i = 0; i < elems.length; i++) {
             var posFromTop = elems[i].getBoundingClientRect().top
             if (posFromTop - windowHeight <= 0) {
                 elems[i].className = elems[i].className.replace('hiddenRight', 'fadeRight')
             }
         }
     }
     return {
         init: init
     }
 }

 var animateHTML2 = function() {
     var elems,
         windowHeight
     var init = function() {
         elems = document.getElementsByClassName('hiddenLeft')
         windowHeight = window.innerHeight
         _addEventHandlers()
     }
     var _addEventHandlers = function() {
         window.addEventListener('scroll', _checkPosition)
         window.addEventListener('resize', init)
     }
     var _checkPosition = function() {
         for (var i = 0; i < elems.length; i++) {
             var posFromTop = elems[i].getBoundingClientRect().top
             if (posFromTop - windowHeight <= 0) {
                 elems[i].className = elems[i].className.replace('hiddenLeft', 'fadeLeft')
             }
         }
     }
     return {
         init: init
     }
 }

 animateHTML1().init();
 animateHTML2().init()