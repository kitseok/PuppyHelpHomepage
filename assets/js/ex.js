let items = Array.from($("ul").children());
let ul = $("ul");
let nav = $(".nav");

function pageLoad() {
   nav.addClass("active");
   ul.addClass("active");
    items.forEach(function(item, index) {
      animateIn(item, index);
    });
}

pageLoad();

nav.click(function() {
  let isActive = $("ul").hasClass("active");
  nav.addClass("active");
  if (!isActive) {
    ul.addClass("active");
    items.forEach(function(item, index) {
      animateIn(item, index);
    });
  }

  if (isActive) {
    nav.removeClass("active");
    ul.removeClass("active");
    items.forEach(function(item, index) {
      animateOut(item);
    });
  }
});

function animateIn(li, index) {
  let delay = (index + 1) * 280;
  let yAxis = index + 7;
  setTimeout(function() {
    li.style.opacity = 1;
    li.style.transform = "translateY(" + yAxis + "px)";
  }, delay);
}

function animateOut(li) {
  let delay = 0;
  setTimeout(function() {
    li.style.opacity = 0;
    li.style.transform = "translateY(0px)";
  }, delay);
}
