//query.Selector
var available = document.querySelector("h3");
//selecting class names
var mainTitle = document.querySelector(".main-title");
//multiple selectors
var firstItem = document.querySelector("ul li");
var intro = document.querySelector(".intro p");
//style property
intro.style.color = "purple";
//CSS dashes to camelCase
intro.style.fontSize = "3em";
intro.style.fontStyle = "italic";
//Modifying attributes
var firstImg = document.querySelector("img");
firstImg.src = "img/lulu.jpeg";
firstImg.alt = "Lulu bouquet";
//innerText - use to access text within an element and add new HTML to the page
var firstCaption = document.querySelector("figcaption");
firstCaption.innerText = "The Lulu.";
//innerHTML - used to add HTML: useful for highlighting or adding emphasis to text
firstCaption.innerHTML = "The <strong>Lulu</strong>";
//adding a Span to style a word
var intro = document.querySelector(".intro p");
intro.innerHTML = 'Available <span class="increase__size"> today</span>';
//using JS to add a class/style that's not in CSS
var attention = document.querySelector(".increase__size");
attention.style.fontSize = "2.5em";
