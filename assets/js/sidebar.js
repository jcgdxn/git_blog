//Git+GitHub Lesson#11 add-on

$("#sidebarCollapse").on("click", function() {
  $("nav").toggleClass("active");
  $(".wrapper").toggleClass("menuup");
  $(".mobile-header").toggleClass("hide");
});
