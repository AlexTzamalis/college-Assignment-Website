/* 
    Dropdown Menu JavaScript - Mobile Navigation Toggle
    
    Αυτό το script χειρίζεται το mobile navigation menu:
    - Toggle (εναλλαγή) του menu όταν πατιέται το κουμπί
    - Αλλαγή του 'active' class για το styling 
    - Event handling για το click event
*/

/*  Selectors:
    - navbarToggle: Το κουμπί του hamburger menu (3 γραμμές/3 Span lines)
    - navbarMenu: Το container με τα navigation links (ul element)
*/
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

/*  Event Listener για το click event στο κουμπί:
    - Toggle του 'active' class στο κουμπί (αλλάζει το hamburger σε X)
    - Toggle του 'active' class στο menu (εμφανίζει/κρύβει τα links)  
*/
navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
})