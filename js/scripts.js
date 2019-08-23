includeJs("js/scrollSnapPolyfillScript.js");

//Back Button

function goBack() {
  window.history.back();
}


let topSection = document.getElementById('top-section');
let navSection = document.getElementById('nav-section');
let listSection = document.getElementById('list-section');
let horizontalNav = document.getElementById('horizontal-nav');
let header = document.getElementById('header');

let topSectionHammer = new Hammer(topSection);
let listSectionHammer = new Hammer(listSection);



//Calculate 100vh - height of the nav bar
let theHeight = window.innerHeight - horizontalNav.offsetHeight - header.offsetHeight - 50;

// To reveal part of the top section that is not visible on page load
topSectionHammer
  .on('pandown', function(ev) {
    topSection.style.height = theHeight +'px';
  });


//Gestures on the list section
listSectionHammer
  .on('panup', function(ev) {
    //Maybe remove?
    $("#top-section").slideUp( "slow", function() {});
  })
  .on('swipedown', function(ev) {
     // topSection.style.height = theHeight +'px';
    $("#top-section").slideDown( "slow", function() {});
    body.classList.remove('sticky');
    listSection.style.paddingTop = '0px';
    listSection.scrollTop = 0;
  })
  .on('pandown', function(ev) {
    $("#top-section").slideDown( "slow", function() {});
    body.classList.remove('sticky');
    listSection.style.paddingTop = '0px';
    listSection.scrollTop = 0;
  });


 let introDataHeight = document.getElementById('intro-data').offsetHeight;
 let headerHeight = document.getElementById('header').offsetHeight;
 let summaryTextScroll = document.getElementById('summary-text-scroll');
 let body = document.getElementById('body');

 //Calculate the height of the top text scrollbar
 let scrollHeight = theHeight - (introDataHeight) - 20 + 'px';
 summaryTextScroll.style.height = scrollHeight;


  //Make sure horisontal nav bar sticks to the top
  body.onscroll = stickyHeader;
  //Header & navbar height
  let topHeight = navSection.offsetHeight + header.offsetHeight;
  function stickyHeader(e) {
    //when list section gets to certain height on scroll, make navbar sticky
    if( ($(listSection).offset().top - $(document).scrollTop()) <= topHeight) {
      body.classList.add('sticky');
      listSection.style.paddingTop = navSection.offsetHeight + 'px';
      listSection.scrollTop = 0;
    }
    else {
      body.classList.remove('sticky');
      listSection.style.paddingTop = '0px';
      listSection.scrollTop = 0;
    }
    return false;
  }


//Capture horizontal nav scroll
horizontalNav.onscroll = navScroll;
function navScroll(e) {
   console.log(e.currentTarget.scrollTop);
  //log.textContent = `Scroll position: ${e.target.scrollTop}`;
}

//If horizontal nav is clicked, push it to the top of the page
horizontalNav.onclick = expandList;

function expandList(e) {
  $("#top-section").slideUp( "slow", function() {
    // Animation complete.
    // scroll to the top of the list section
    listSection.scrollTop = 0;
  });
  return false;
}



//When whole body scrolls
// window.onscroll = function(e) {
//   // print "false" if direction is down and "true" if up
// //  alert(this.oldScroll > this.scrollY);
//   if (this.oldScroll > this.scrollY === false) {
//    // alert('Going Down');
//   }
//   else {
//   //  alert(window.scrollY);
//   //  alert('Going Up');
//     // if(window.scrollY > 400) {
//     //  // alert('AA');
//     //   topElement.style.height = '60vh';
//     // }
//   }
//   this.oldScroll = this.scrollY;
// }

// To include other JS files
function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}
