
// burger menu disappear onClick
  document.addEventListener("DOMContentLoaded", function () {
    // Get the burger menu and menu items
    const burgerMenu = document.querySelector(".navbar-collapse");
    const menuItems = document.querySelectorAll(".navbar-nav .nav-link");

    // Add click event listeners to each menu item
    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Check if the burger menu is open (visible)
        if (window.getComputedStyle(burgerMenu).display !== "none") {
          // Hide the burger menu when an item is clicked
          burgerMenu.classList.remove("show");
        }
      });
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    // Get the burger menu and toggle button
    const burgerMenu = document.querySelector(".navbar-collapse");
    const toggleButton = document.querySelector(".navbar-toggler");

    // Function to check if the target element is inside the burger menu
    function isTargetInsideMenu(target) {
      return burgerMenu.contains(target) || toggleButton.contains(target);
    }

    // Function to hide the burger menu
    function hideMenu() {
      burgerMenu.classList.remove("show");
    }

    // Add click event listener to the document body
    document.body.addEventListener("click", function (event) {
      // If the target element is not inside the burger menu, hide the menu
      if (!isTargetInsideMenu(event.target)) {
        hideMenu();
      }
    });

    // Add click event listener to the toggle button
    toggleButton.addEventListener("click", function () {
      // Check if the burger menu is currently open (visible)
      const isMenuOpen = burgerMenu.classList.contains("show");

      if (isMenuOpen) {
        hideMenu(); // If the menu is open, hide it
      }
    });
  });



// Set the date we're counting down to
// var countDownDate = new Date("Mar 31, 2023 12:00:00").getTime();

// Update the countdown every 1 second
// var x = setInterval(function() {

  // Get the current date and time
  // var now = new Date().getTime();

  // Calculate the time remaining
 // var timeRemaining = countDownDate - now;

  // Calculate days, hours, minutes, and seconds remaining
 // var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
 // var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 // var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
 // var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown in the element with id="countdown"
 // document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
 // + minutes + "m " + seconds + "s ";

  // If the countdown is over, display a message
 // if (timeRemaining < 0) {
   // clearInterval(x);
   // document.getElementById("countdown").innerHTML = "WE HAVE LAUNCHED!";
  //  }
// }, 1000);


// whatsapp chat API
function openWhatsappChat() {
  window.open("https://wa.me/233203786321");
}
document.getElementById("whatsapp-button").addEventListener("click", openWhatsappChat);

// Mobbile money API