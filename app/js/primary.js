document.addEventListener("DOMContentLoaded", () => {
  const $ = require("jquery");

  $(document).ready(() => {
    $(".dropdown").click(function () {
      const query = $(".dropdown > .dropdown-content");
      if (query.is(":visible") === true) {
        $(".dropdown > .dropdown-content").hide();
        $(".dropbtn").css("color", "#333");
      } else {
        $(".dropdown > .dropdown-content").show();
        $(".dropbtn").css("color", "#F26C29");
      }
    });

    $(document).mouseup(function (e) {
      let container = $(".dropdown");
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".dropdown > .dropdown-content").hide();
        $(".dropbtn").css("color", "#333");
      }
    });
    setTimeout(() => {
      $(".toast").fadeTo(1000, 100);
    }, 1000);

    setTimeout(() => {
      $(".toast").fadeTo(1000, 0).hide();
    }, 30000);
  });

  $(".toast-x").click(() => {
    $(".toast").fadeTo(200, 0).hide();
  });

  $(document).ready(function () {
    setTimeout(function () {
      $("#jsHide").css("opacity", "1");
    }, 1000);
  });

  $("#beginner").click(() => {
    history.pushState(null, null, "?beginner");
    $(".toggle-advanced").fadeOut(300);
    $(".toggle-advanced").fadeTo(300, 0);
    $(".toggle-beginner").fadeIn(300);
    $(".toggle-beginner").fadeTo(1000, 100);
  });

  $("#advanced").click(() => {
    history.pushState(null, null, "?advanced");
    $(".toggle-beginner").fadeOut(300);
    $(".toggle-beginner").fadeTo(300, 0);
    $(".toggle-advanced").fadeIn(300);
    $(".toggle-advanced").fadeTo(1000, 100);
  });

  if (window.location.href.indexOf("?beginner") > -1) {
    $("#beginner").prop("checked", true);
    $(".toggle-advanced").hide();
    $(".toggle-beginner").show();
  } else if (window.location.href.indexOf("?advanced") > -1) {
    $("#advanced").prop("checked", true);
    $(".toggle-beginner").hide();
    $(".toggle-advanced").show();
  } else {
    $("#advanced").prop("checked", true);
    $(".toggle-beginner").hide();
    $(".toggle-advanced").show();
  }

  // FOR BOOKS
  const books = [
    {
      path: "circe.png",
      emoji: "👩‍🦳",
      title: "Circe",
      tags: "Mythology",
      date: "Feb. 2022",
    },
    {
      path: "15-commitments.png",
      emoji: "⎯",
      title: "15 Commitments",
      tags: "Business Culture",
      date: "Jan. 2022",
    },
    {
      path: "weirdest-people.png",
      emoji: "👶🏼",
      title: "WEIRDEST People",
      tags: "Psychology & Economics",
    },
    {
      anchor: "the-map-that-changed-the-world",
      path: "the-map-that-changed-the-world.png",
      emoji: "🗺",
      title: "The Map That Ch...",
      tags: "History & Geology",
      date: "Nov. 2021",
    },
    {
      path: "dune.png",
      emoji: "🏜",
      title: "Dune",
      tags: "Sci-fi & Fantasy",
      date: "Nov. 2021",
    },
    {
      path: "hail-mary.png",
      emoji: "👨‍🚀",
      title: "Hail Mary",
      tags: "Sci-fi",
      date: "Oct. 2021",
    },
    {
      path: "lifes-edge.png",
      emoji: "🦠",
      title: "Life's Edge",
      tags: "Philosophy & Science",
      date: "Aug. 2021",
    },
    {
      path: "intro-to-fire.png",
      emoji: "🔥",
      title: "Intro to Fire",
      tags: "Ecology",
      date: "Aug. 2021",
    },
    {
      path: "drawdown.png",
      emoji: "⏬",
      title: "Drawdown",
      tags: "Climate science",
      date: "Mar. 2021",
    },
    {
      path: "story-of-more.png",
      emoji: "🌍",
      title: "The Story of More",
      tags: "Climate science",
      date: "Feb. 2021",
    },
    {
      path: "seveneves.png",
      emoji: "🌑",
      title: "Seveneves",
      tags: "Hard Sci-fi",
      date: "Feb. 2020",
    },
  ];

  $(document).ready(function () {
    let count = 0;
    while (count < 3) {
      $(`#anchor-${count}`).attr(
        "href",
        "/projects/reading.html#" + books[count].anchor
      );
      $(`#emoji-${count}`).text(books[count].emoji);
      $(`#path-${count}`).attr("src", `./images/books/${books[count].path}`);
      $(`#title-${count}`).text(` ${books[count].title}`);
      $(`#tags-${count}`).text(`${books[count].tags}`);
      $(`#finished-${count}`).text(
        books[count].date ? `Finished ${books[count].date}` : "Reading now..."
      );
      if (books[count].date) {
        $(`#finished-tag-${count}`).css("display", "block");
      } else {
        $(`#finished-tag-${count}`).css("display", "none");
      }
      count++;
    }
  });

  $(document).ready(function () {
    let offset = 0;
    let count = 0;
    $("#book-iterator").click(function () {
      count = 0;
      offset = offset + 3;

      // First check if we're out of bounds of array
      if (!books[count + offset]) {
        offset = 0;
      }

      $(".book").css("transform", "translateX(-10%)");
      $(".book").css("opacity", "0");

      setTimeout(function () {
        $(".book").css("transform", "translateX(10%)");
      }, 200);

      setTimeout(function () {
        $(".book").css("opacity", "1");
        $(".book").css("transform", "translateX(0%)");
      }, 500);

      setTimeout(function () {
        while (count < 3) {
          $(`#emoji-${count}`).text(books[count + offset].emoji);
          $(`#path-${count}`).attr(
            "src",
            `./images/books/${books[count + offset].path}`
          );
          $(`#title-${count}`).text(` ${books[count + offset].title}`);
          $(`#tags-${count}`).text(`${books[count + offset].tags}`);
          $(`#finished-${count}`).text(
            books[count + offset].date
              ? `Finished ${books[count + offset].date}`
              : "Reading now..."
          );
          if (books[count + offset].date) {
            $(`#finished-tag-${count}`).css("display", "block");
          } else {
            $(`#finished-tag-${count}`).css("display", "none");
          }
          count++;
        }
      }, 300);
    });
  });

  // EMOJI TIME
  $(document).ready(function () {
    const d = new Date();
    const time = d.getHours();
    const hours = ((time + 11) % 12) + 1;

    if (time >= 12 && time <= 16) {
      $(".emoji").prepend("📚");
      $("#one").append("Reading a book...");
      $("#time").append(hours + " PM" + ":");
    } else if (time <= 10 && time >= 5) {
      $(".emoji").prepend("☕️");
      $("#one").append("Brewing coffee...");
      $("#time").append(hours + "AM" + ":");
    } else if (time >= 18 && time <= 22) {
      $(".emoji").prepend("🏡");
      $("#one").append("Working at a coffee shop...");
      $("#time").append(hours + " PM" + ":");
    } else if (time >= 20) {
      $(".emoji").prepend("😴");
      $("#time").append(hours + " PM" + ":");
      $("#one").append("ZzZzz...");
    } else if (time >= 10 && time <= 12) {
      $(".emoji").prepend("📝");
      $("#time").append(hours + " AM" + ":");
      $("#one").append("Taking notes...");
    } else if (time >= 13 && time < 15) {
      $(".emoji").prepend("🍕");
      $("#one").append("Reheating leftovers...");
      $("#time").append(hours + " PM" + ":");
    } else if (time == 16) {
      $(".emoji").prepend("🚴");
      $("#one").append("Biking home from class...");
      $("#time").append(hours + " PM" + ":");
    } else if (time == 17) {
      $(".emoji").prepend("📰");
      $("#one").append("Reading NY Times...");
      $("#time").append(hours + " PM" + ":");
    } else if (time == 0) {
      $(".emoji").prepend("🌮");
      $("#one").append("Midnight snackin'");
      $("#time").append(hours + " AM" + ":");
    } else {
      $(".emoji").prepend("👨‍💻");
      $("#time").append(hours + " AM" + ":");
      $("#one").append("Tweaking CSS files...");
    }
  });

  // BACK TO TOP BTN
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });

  // STICKY NAV
  if ($("#stick-here").length) {
    function sticktothetop() {
      var window_top = $(window).scrollTop();
      var top = $("#stick-here").offset().top;
      if (window_top > top) {
        $("#stickThis").addClass("stick");
        $(".intro").css("margin-top", "75px");
        $("#stick-here").height($("#stickThis").outerHeight());
      } else {
        $("#stickThis").removeClass("stick");
        $(".intro").css("margin-top", "0px");
        $("#stick-here").height(0);
      }
    }

    $(function () {
      $(window).scroll(sticktothetop);
      sticktothetop();
    });
  }

  // SCROLL-TO-TOP
  $(document).ready(function () {
    $(".scroll-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
    });
  });

  // FADE INS
  $(document).ready(function () {
    $("video").click(function () {
      this.paused ? this.play() : this.pause();
      if (this.paused == true) {
        $(".pauseicon").css("display", "block");
      } else {
        $(".pauseicon").css("display", "none");
      }
    });

    const description = [
      "../../images/benmoji-sunglasses.mp4",
      "../../images/benmoji-sunglasses.mp4",
      "../../images/benmoji-sunglasses.mp4",
      "../../images/benmoji-newglasses.mp4",
      "../../images/benmoji-newglasses.mp4",
      "../../images/benmoji-newglasses.mp4",
      "../../images/benmoji-newglasses.mp4",
      "../../images/benmoji-newglasses.mp4",
      "../../images/benmoji-newglasses.mp4",
      "../../images/benmoji-10s.mp4",
      "../../images/benmoji-10s.mp4",
    ];
    const size = description.length;
    const rand = Math.floor(size * Math.random());
    $(".benmoji").attr("src", description[rand]);

    setInterval(function () {
      // toggle the class every five second
      $(".pulse").toggleClass("grow");
      setTimeout(function () {
        // toggle back after 1 second
        $(".pulse").toggleClass("grow");
      }, 1200);
    }, 2400);

    setTimeout(function () {
      $("#show").css("opacity", "1");
      $("#hide").css("opacity", "1");
    }, 0);

    setTimeout(function () {
      $(".emoji").css("opacity", "1");
      $("#one").css("opacity", "1");
    }, 0);
  });
});
