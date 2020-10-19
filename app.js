const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const burgerLine = document.querySelectorAll('.hamburger .line');
const scroll = document.querySelector('.scroll-button');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const scrollBtn = document.querySelector('.scroll-button');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerLine.forEach(line => {
    line.classList.toggle('toggle');
    line.classList.toggle('open');
  })
  line1.classList.toggle('line1');
  line2.classList.toggle('line2');
  line3.classList.toggle('line3');
  document.body.classList.toggle("stop-scrolling");
});
navLinks.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burgerLine.forEach(line => {
    line.classList.toggle('toggle');
  })
});

var clicked = false;
var clickedfirst = false;
scroll.addEventListener('click', () => {
  
  if(clicked){
    if(clickedfirst){
      window.location.href = '#home';
      scrollBtn.classList.remove('scroll-btn-rotate');
    }else{
      window.location.href = '#contact';
      scrollBtn.classList.add('scroll-btn-rotate');
    }
    clickedfirst = !clickedfirst;
  }else{
    window.location.href = '#mywork';
  }
  clicked = !clicked;
});
/////TRANSLATIONS///////////

const LangWrap = document.querySelector('.language-wrap');
const languages = document.querySelectorAll('.language');

//home page
const homeTitle = document.querySelector('.home-title');
const homeDescription = document.querySelector('.home-description');
//menu
const menuHome = document.querySelector('.menu-home');
const menuWork = document.querySelector('.menu-work');
const menuContact = document.querySelector('.menu-contact');
//my work
const workTitle = document.querySelector('.work-title');
const cardDsc1 = document.querySelector('.dsc1');
const cardDsc2 = document.querySelector('.dsc2');
const cardDsc3 = document.querySelector('.dsc3');
const cardDsc4 = document.querySelector('.dsc4');
const cardDsc5 = document.querySelector('.dsc5');

const firstLink = document.querySelectorAll('.first-link');
const secondLink = document.querySelectorAll('.second-link');
//contact
const contactTitle = document.getElementById('contact-title');
const msgTitle = document.getElementById('message-title');
const msgEmail = document.getElementById('mail');
const msgMessage = document.getElementById('message-content');
const sendBtn = document.getElementById('btnSend');


languages.forEach(el => {
  el.addEventListener('click', () => {
    const attr = el.getAttribute('language');
    homeTitle.textContent = languageData[attr].hometitle;
    homeDescription.setAttribute('style', 'white-space: pre;');
    homeDescription.textContent = languageData[attr].homedescription;

    menuHome.textContent = languageData[attr].menuhome;
    menuWork.textContent = languageData[attr].menuwork;
    menuContact.textContent = languageData[attr].menucontact; 

    workTitle.textContent = languageData[attr].worktitle;
    cardDsc1.textContent = languageData[attr].carddsc1;
    cardDsc2.textContent = languageData[attr].carddsc2;
    cardDsc3.textContent = languageData[attr].carddsc3;
    cardDsc4.textContent = languageData[attr].carddsc4;
    cardDsc5.textContent = languageData[attr].carddsc5;

    firstLink.forEach(lk =>{
      lk.textContent = languageData[attr].link1;
    });
    secondLink.forEach(lk2 =>{
      lk2.textContent = languageData[attr].link2;
    });

    contactTitle.textContent = languageData[attr].contacttitle;
    msgTitle.placeholder = languageData[attr].msgtitle;
    msgEmail.placeholder = languageData[attr].msgemail;
    msgMessage.placeholder = languageData[attr].msgmessage;
    sendBtn.value = languageData[attr].contactbtn;
  });
});

var languageData = {
                    "english":{
                      "hometitle": "Welcome to my portfolio page",
                      "homedescription": "You can review my projects here \n Feel free to contact me",
                      "menuhome": "HOME",
                      "menuwork": "MY WORK",
                      "menucontact": "CONTACT",
                      "worktitle": "Here you can find my projects",
                      "carddsc1": "Simple makeup businness page layout. Page contains services gallery, pricing and visits booking calendar. Project will be still developed.",
                      "carddsc2": "Landing page for any business. This template was created from psd file. Page created for learingn purposes",
                      "carddsc3": "Tic Tac Toe game created for learining purposes. Game handles 2 players. In the future AI can be added to improve functionality",
                      "carddsc4": "My previous portfolio page. This page was used as a template for current purple page. Sligtly worse design",
                      "carddsc5": "Coming soon!",
                      "link1": "Live page version",
                      "link2": "Review code github",
                      "contacttitle": "Here you can contact me",
                      "msgtitle": "Type title here",
                      "msgemail": "Type Your e-mail here",
                      "msgmessage": "Type your message to me here",
                      "contactbtn": "SEND"                    
                    },
                    "polish":{
                      "hometitle": "Witaj na mojej stronie portfolio",
                      "homedescription": "Możesz tutaj zobaczyć moje projekty \n Nie wahaj się ze mną skontaktować",
                      "menuhome": "GŁÓWNA",
                      "menuwork": "PROJEKTY",
                      "menucontact": "KONTAKT",
                      "worktitle": "Tutaj znajdziesz moje projekty",
                      "carddsc1": "Prosty szablon dla strony makijażowej. Strona zawiera galerię usług, cennik oraz system do rezerwacji wizyt. Projekt będzie nadal rozwijany.",
                      "carddsc2": "Wzór strony dla każdej firmy. Ten szablon został stworzony z pliku psd. Strona stworzona do nauki",
                      "carddsc3": "Gra kółko i krzyżyk. Stworzona do nauki. Gra posiada tryb na 2 graczy. W przyszłości można dodać AI aby poprawić funkcjonalność",
                      "carddsc4": "Moja poprzednia strona portfolio. Była użyta jako wzór obecnej strony. Nieco gorszy design strony.",
                      "carddsc5": "Już wkrótce!",
                      "link1": "Wyświetl stronę",
                      "link2": "Zobacz kod na github",
                      "contacttitle": "Tutaj możesz do mnie napisać",
                      "msgtitle": "Tutaj wpisz tytuł",
                      "msgemail": "Tutaj wpisz swój e-mail",
                      "msgmessage": "Wpisz swoją wiadomość do mnie",
                      "contactbtn": "WYŚLIJ" 
                    }
}