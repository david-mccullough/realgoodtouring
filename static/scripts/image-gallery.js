$(window).load(function () {
  $("body").addClass("loaded");
});

$("#menu").click(function () {
  $(".nav").toggleClass("open");
});

var interval = null;

var interact = false;

$("#galleryGroups a").click(function () {
  clearInterval(interval);
  interact = true;
  var name = $(this).attr("id");
  var nextimg = $("." + name);
  var currentimg = $("img.visible");

  if (nextimg.length === 0) {
    nextimg = $("#stage img:first-child");
  }

  $("img.visible").removeClass("visible").fadeOut(450);

  setTimeout(function () {
    $("#caption").text(nextimg.attr("alt"));
    nextimg.addClass("visible").fadeIn(450);
  }, 450);
});

$("#next").click(function () {
  clearInterval(interval);
  interact = true;
  var nextimg = $("img.visible").next("img");
  var currentimg = $("img.visible");

  if (nextimg.length === 0) {
    nextimg = $("#stage img:first-child");
  }
  if (nextimg.length > 1) {
    nextimg = $("#stage img.visible:first-of-type").next("img");
    $("#stage img.visible:last-of-type").hide();
    if (nextimg.length === 0) {
      nextimg = $("#stage img:first-child");
    }
  }

  $("img.visible").removeClass("visible").fadeOut(450);

  setTimeout(function () {
    $("#caption").text(nextimg.attr("alt"));
    nextimg.addClass("visible").fadeIn(450);
  }, 450);
});

function randomFunc(myArr) {
  var l = myArr.length,
    temp,
    index;
  while (l > 0) {
    index = Math.floor(Math.random() * l);
    l--;
    temp = myArr[l];
    myArr[l] = myArr[index];
    myArr[index] = temp;
  }
  return myArr;
}

var randomarray = [];

var item = 0;
$("#stage img").each(function () {
  randomarray.push(item);
  item = item + 1;
});

randomarray = randomFunc(randomarray);

console.log(randomarray);

$("#prev").click(function () {
  clearInterval(interval);
  interact = true;
  var previmg = $("img.visible").prev("img");
  var currentimg = $("img.visible");

  if (previmg.length === 0) {
    previmg = $("#stage img:last-child");
  }

  if (previmg.length > 1) {
    previmg = $("#stage img.visible:first-of-type").prev("img");
    $("#stage img.visible:last-of-type").hide();
    if (previmg.length === 0) {
      previmg = $("#stage img:last-child");
    }
  }

  $("img.visible").removeClass("visible").fadeOut(450);

  setTimeout(function () {
    $("#caption").text(previmg.attr("alt"));
    previmg.addClass("visible").fadeIn(450);
  }, 450);
});
var random;
var current = 0;

random = randomarray[current];
var nextimg = $("img").eq(random + 1);
$("#caption").text(nextimg.attr("alt"));
nextimg.addClass("visible").fadeIn(600);
current = 1;

interval = setInterval(function () {
  if (interact === false) {
    random = randomarray[current];

    var nextimg = $("img").eq(random + 1);
    var currentimg = $("img.visible");

    if (nextimg.length === 0) {
      nextimg = $("#stage img:first-child");
    }

    currentimg.removeClass("visible").fadeOut(600);

    setTimeout(function () {
      $("#caption").text(nextimg.attr("alt"));
      nextimg.addClass("visible").fadeIn(600);
    }, 700);

    if (current === randomarray.length - 1) {
      current = 0;
    } else {
      current = current + 1;
    }
  }
}, 5000);

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $(".nav").removeClass("open");
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 120,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
          }
        );
      }
    }
  });
