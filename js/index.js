const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav 
let nav = document.querySelector("a")

nav.textContent = siteContent["nav"]["nav-item-1"]
nav.nextElementSibling.textContent = siteContent["nav"]["nav-item-2"]
nav.nextElementSibling.nextElementSibling.textContent = siteContent["nav"]["nav-item-3"]
nav.nextElementSibling.nextElementSibling.nextElementSibling.textContent = siteContent["nav"]["nav-item-4"]
nav.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = siteContent["nav"]["nav-item-5"]
nav.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent = siteContent["nav"]["nav-item-6"]

//cta
let mainImg1 = document.getElementById("cta-img");
let header = document.querySelector("h1");
let button = document.querySelector('button');

mainImg1.setAttribute('src', siteContent["cta"]["img-src"])
header.textContent = siteContent["cta"]["h1"]
button.textContent = siteContent["cta"]["button"]


//main
let topContentHeaders = document.querySelectorAll(".main-content .text-content h4");
let topContentContent = document.querySelectorAll(".main-content .text-content p");
let middleImg = document.getElementById("middle-img")
let bottomContentHeaders = document.querySelectorAll(".bottom-content .text-content h4");
let bottomContentContent = document.querySelectorAll(".bottom-content .text-content p");

topContentHeaders[0].textContent = siteContent["main-content"]["features-h4"]
topContentHeaders[1].textContent = siteContent["main-content"]["about-h4"]


topContentContent[0].textContent = siteContent["main-content"]["features-content"]
topContentContent[1].textContent = siteContent["main-content"]["about-content"]

middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

bottomContentHeaders[0].textContent = siteContent["main-content"]["services-h4"]
bottomContentHeaders[1].textContent = siteContent["main-content"]["product-h4"]
bottomContentHeaders[2].textContent = siteContent["main-content"]["vision-h4"]

bottomContentContent[0].textContent = siteContent["main-content"]["services-content"]
bottomContentContent[1].textContent = siteContent["main-content"]["product-content"]
bottomContentContent[2].textContent = siteContent["main-content"]["vision-content"]

//contact
let contactHeader = document.querySelector(".contact h4");
let contactContent = document.querySelectorAll(".contact p")

contactHeader.textContent = siteContent["contact"]["contact-h4"]

contactContent[0].textContent = siteContent["contact"]["address"]
contactContent[1].textContent = siteContent["contact"]["phone"]
contactContent[2].textContent = siteContent["contact"]["email"]

//footer
let footer = document.querySelector("footer p");

footer.textContent = siteContent["footer"]["copyright"]

//task 3
let navGreen = document.querySelectorAll("nav a");

let navAdder = document.createElement("a");
let navPointer = document.querySelector("nav")
let newNav1 = document.createElement("a");  
let newNav2 = document.createElement("a"); 

navGreen[0].style.color = ("green");
navGreen[1].style.color = ("green");
navGreen[2].style.color = ("green");
navGreen[3].style.color = ("green");
navGreen[4].style.color = ("green");
navGreen[5].style.color = ("green");

navPointer.appendChild(newNav2);
navPointer.prepend(newNav1);

newNav1.textContent = "Lorem";
newNav2.textContent = "Ipsum";






