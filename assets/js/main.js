 var teachers = [{
     name: "David Lac",
     university: "UC Davis",
     degree: "Bachelor's of Science",
     subjects: "Math, Biology, Chemistry",
     profile: "./assets/img/profiles/david-lac.jpg",
     bio: ""
 }];


 $(".button-collapse").sideNav();


 $(document).ready(function() {
     $('.parallax').parallax();
     $('.modal').modal();
     $('select').material_select();
     $('.scrollspy').scrollSpy();
 });