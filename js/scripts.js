const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}

const gri = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const init = function(){
  let items = document.querySelectorAll('.gallery li');
  for (let i = 0; i < items.length; i++){
    items[i].style.minWidth = gra(30,60) + 'vw';
    items[i].style.background = randomColor({luminosity: 'light'});
  }
  let verticalItems = document.querySelectorAll('section');
  for (let i = 0; i < verticalItems.length; i++){
    verticalItems[i].style.background = randomColor({luminosity: 'light'});
  }
  cssScrollSnapPolyfill()
}
init();

/////

function goBack() {
  window.history.back();
}

////

$(window).bind('mousewheel', function(event) {
if (event.originalEvent.wheelDelta >= 0) {
  //  alert('Scroll up');
}
else {
   // alert('Scroll down');
}
});





function showHideTopArea() {
  alert('ZZZZ');
}

let topSection = document.getElementById('top-section');
let navSection = document.getElementById('nav-section');
let listSection = document.getElementById('list-section');
let horizontalNav = document.getElementById('horizontal-nav');


let topSectionHammer = new Hammer(topSection);
// let navSectionHammer = new Hammer(navSection);
let listSectionHammer = new Hammer(listSection);


//Calculate 100vh - height of the nav bar
let theHeight = window.innerHeight - horizontalNav.offsetHeight - 50;

topSectionHammer
  .on('panup', function(ev) {
    //console.log(ev);
    //topSection.style.height = '60vh';
  })
  .on('pandown', function(ev) {
    topSection.style.height = theHeight +'px';
  });

 let introDataHeight = document.getElementById('intro-data').offsetHeight;
 let headerHeight = document.getElementById('header').offsetHeight;
 let summaryTextScroll = document.getElementById('summary-text-scroll');

 //Calculate the height of te scrollbar
 let scrollHeight = theHeight - (introDataHeight + headerHeight) - 20 + 'px';

 summaryTextScroll.style.height = scrollHeight;



// navSectionHammer
//   .on('panup', function(ev) {
//     //console.log(ev);
//    // topSection.style.height = '60vh';
//   })
//   .on('swipedown', function(ev) {
//    // let myHeight = horizontalNav.offsetHeight +'px';
//    // topSection.style.height = `calc(100vh - ${myHeight})`;
//       topSection.style.height = theHeight;
//   });

listSectionHammer
  .on('panup', function(ev) {
    //console.log(ev);
  //  topSection.style.height = '60vh';
  })
  .on('swipedown', function(ev) {
  //  let myHeight = horizontalNav.offsetHeight +'px';
  //  topSection.style.height = `calc(100vh - ${myHeight})`;
   // topSection.style.height = '60vh';
      topSection.style.height = theHeight +'px';
  });


// (function (window, document) {
// document.getElementById('toggle').addEventListener('click', function (e) {
//     document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
//     document.getElementById('toggle').classList.toggle('x');
// });
// })(this, this.document);



//When whole body scrolls
window.onscroll = function(e) {
  // print "false" if direction is down and "true" if up
//  alert(this.oldScroll > this.scrollY);
  if (this.oldScroll > this.scrollY === false) {
   // alert('Going Down');
  }
  else {
  //  alert(window.scrollY);
  //  alert('Going Up');
    // if(window.scrollY > 400) {
    //  // alert('AA');
    //   topElement.style.height = '60vh';
    // }
  }
  this.oldScroll = this.scrollY;
}
