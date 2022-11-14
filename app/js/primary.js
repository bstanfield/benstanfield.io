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
      path: "stone-sky.png",
      emoji: "🌚",
      title: "The Stone Sky",
      tags: "Science Fiction",
      goodreads: "https://www.goodreads.com/book/show/31817749-the-stone-sky",
    },
    {
      path: "obelisk-gate.png",
      emoji: "💎",
      title: "The Obelisk Gate",
      tags: "Science Fiction",
      goodreads: "https://www.goodreads.com/book/show/26228034-the-obelisk-gate",
      date: "Nov. 2022",
    },
    {
      path: "fifth-season.png",
      emoji: "🌋",
      title: "The Fifth Season",
      tags: "Science Fiction",
      goodreads: "https://www.goodreads.com/en/book/show/19161852-the-fifth-season",
      date: "Nov. 2022",
    },
    {
      path: "your-mind-on-plants.png",
      emoji: "🌹",
      title: "This Is Your Mind On Plants",
      tags: "Nonfiction, Science",
      goodreads: "https://www.goodreads.com/en/book/show/56015023-this-is-your-mind-on-plants",
      date: "Oct. 2022",
    },
    {
      path: "upheaval.png",
      emoji: "🌊",
      title: "Upheaval",
      tags: "History",
      goodreads: "https://www.goodreads.com/book/show/41716904-upheaval",
      date: "Sept. 2022",
    },
    {
      path: "never-let-me-go.png",
      emoji: "🫀",
      title: "Never Let Me Go",
      tags: "Speculative Fiction",
      date: "Jul. 2022",
      review: 4,
      goodreads: "https://www.goodreads.com/book/show/6334.Never_Let_Me_Go",
    },
    {
      path: "invisible-child.png",
      emoji: "🗽",
      title: "Invisible Child",
      tags: "Biography",
      date: "Jul. 2022",
      goodreads: "https://www.goodreads.com/book/show/57359691-invisible-child?from_search=true&from_srp=true&qid=og7JfMBz1T&rank=1",
      review: 5,
    },
    {
      path: "great-mistake.png",
      emoji: "🔫",
      title: "The Great Mistake",
      tags: "Biography",
      date: "Jun. 2022",
      goodreads: "https://www.goodreads.com/book/show/55502632-the-great-mistake?from_search=true&from_srp=true&qid=QEmXYBN1td&rank=1",
      review: 3,
    },
    {
      path: "no-importance.png",
      emoji: "🕵️‍♀️",
      title: "A Woman of No Importance",
      tags: "History",
      date: "Mar. 2022",
      goodreads: "https://www.goodreads.com/book/show/40595446-a-woman-of-no-importance?ac=1&from_search=true&qid=kC3XP5I2p2&rank=1",
      review: 5,
    },
    {
      path: "achilles.png",
      emoji: "⚔️",
      title: "The Song of Achilles",
      tags: "Mythology",
      date: "Feb. 2022",
      goodreads: "https://www.goodreads.com/book/show/13623848-the-song-of-achilles?ac=1&from_search=true&qid=9dBXR4zyNp&rank=1",
      review: 4,
    },
    {
      path: "circe.png",
      emoji: "👩‍🦳",
      title: "Circe",
      tags: "Mythology",
      date: "Feb. 2022",
      goodreads: "https://www.goodreads.com/book/show/35959740-circe?ac=1&from_search=true&qid=qZMrCNjcZq&rank=1",
      review: 5,
    },
    {
      path: "15-commitments.png",
      emoji: "🤝",
      title: "15 Commitments",
      tags: "Business Culture",
      review: 4,
      goodreads: "https://www.goodreads.com/book/show/23275060-15-commitments-of-conscious-leadership?ac=1&from_search=true&qid=7OYtP2JtV4&rank=1",
      date: "Jan. 2022",
    },
    {
      path: "weirdest-people.png",
      emoji: "👶🏼",
      title: "WEIRDEST People",
      tags: "Psychology & Economics",
      goodreads: "https://www.goodreads.com/book/show/51710349-the-weirdest-people-in-the-world?ac=1&from_search=true&qid=zjoN5bkmfo&rank=1",
    },
    {
      anchor: "the-map-that-changed-the-world",
      path: "the-map-that-changed-the-world.png",
      emoji: "🗺",
      title: "The Map That Changed the World",
      tags: "History & Geology",
      date: "Nov. 2021",
      review: 5,
      goodreads: "https://www.goodreads.com/book/show/25014.The_Map_That_Changed_the_World?ac=1&from_search=true&qid=5u49g1kS78&rank=1",
    },
    {
      path: "dune.png",
      emoji: "🏜",
      title: "Dune",
      tags: "Sci-fi & Fantasy",
      date: "Nov. 2021",
      review: 5,
      goodreads: "https://www.goodreads.com/book/show/44767458-dune?ac=1&from_search=true&qid=ISkEXvQjsr&rank=1",
    },
    {
      path: "hail-mary.png",
      emoji: "👨‍🚀",
      title: "Hail Mary",
      tags: "Sci-fi",
      date: "Oct. 2021",
      review: 4,
      goodreads: "https://www.goodreads.com/book/show/54493401-project-hail-mary?ac=1&from_search=true&qid=CuXil1yKSc&rank=1",
    },
    {
      path: "lifes-edge.png",
      emoji: "🦠",
      title: "Life's Edge",
      tags: "Philosophy & Science",
      date: "Aug. 2021",
      review: 4,
      goodreads: "https://www.goodreads.com/book/show/54227475-life-s-edge?ac=1&from_search=true&qid=E4MmowCtzZ&rank=1",
    },
    {
      path: "intro-to-fire.png",
      emoji: "🔥",
      title: "Intro to Fire",
      tags: "Ecology",
      date: "Aug. 2021",
      goodreads: "https://www.goodreads.com/book/show/3789643-introduction-to-fire-in-california?ac=1&from_search=true&qid=oDiuRScYzF&rank=1",
      review: 3,
    },
    {
      path: "drawdown.png",
      emoji: "⏬",
      title: "Drawdown",
      tags: "Climate Science",
      date: "Mar. 2021",
      review: 5,
      goodreads: "https://www.goodreads.com/book/show/31624481-drawdown?ac=1&from_search=true&qid=eMYRTuTFEO&rank=1",
    },
    {
      path: "story-of-more.png",
      emoji: "🌍",
      title: "The Story of More",
      tags: "Climate Science",
      date: "Feb. 2021",
      review: 5,
      goodreads: "https://www.goodreads.com/book/show/49960370-the-story-of-more?ac=1&from_search=true&qid=G9L4KIInq1&rank=1",
    },
    {
      path: "seveneves.png",
      emoji: "🌑",
      title: "Seveneves",
      tags: "Hard Sci-fi",
      date: "Feb. 2020",
      review: 5,
      goodreads: "https://www.goodreads.com/book/show/22816087-seveneves?ac=1&from_search=true&qid=aWBtSVVaXd&rank=1",
    },
  ];

  $(document).ready(function () {
    let count = 0;
    while (count < books.length) {
      $(`#anchor-${count}`).attr(
        "href",
        books[count].goodreads,
      );
      $(`#anchor-${count}`).attr(
        "target",
        "_blank"
      );
      $(`#emoji-${count}`).text(books[count].emoji);
      $(`#path-${count}`).css("background-image", `url(/images/books/${books[count].path})`);
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
    $("#book-iterator-right").click(function () {
      document
        .getElementById("books")
        .scrollBy({ left: 278, behavior: "smooth" });
    });

    $("#book-iterator-left").click(function () {
      document
        .getElementById("books")
        .scrollBy({ left: -278, behavior: "smooth" });
    });

    
    let timeoutId = 0;
    $('#book-iterator-right').on('mousedown', function () {
      timeoutId = setInterval(() => {
        document
        .getElementById("books")
        .scrollBy({ left: 1500, behavior: "smooth" });
      }, 750);
    }).on('mouseup mouseleave', function() {
        clearInterval(timeoutId);
    });

    $('#book-iterator-left').on('mousedown', function () {
      timeoutId = setInterval(() => {
        document
        .getElementById("books")
        .scrollBy({ left: -1500, behavior: "smooth" });
      }, 750);
    }).on('mouseup mouseleave', function() {
        clearInterval(timeoutId);
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
