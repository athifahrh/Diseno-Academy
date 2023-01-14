// Awal FAQ

$(document).ready(function() {
  $(".accordion-header").click(function() {
    // Self-clicking close
    if($(this).next(".accordion-body").hasClass("active")) {
      $(this).next(".accordion-body").removeClass("active").slideUp()
      $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
    }
    else {
      $(".accordion .accordion-body").removeClass("active").slideUp()
      $(".accordion .accordion-header span").removeClass("fa-minus").addClass("fa-plus");
      $(this).next(".accordion-body").addClass("active").slideDown()
      $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
    }
  })
})

// Akhir FAQ