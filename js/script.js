/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Developer', 'Youtuber', 'Singer'],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop: true
});

/*==================== audio adder ====================*/
// Get the audio element
const backgroundMusic = document.getElementById('background-music');

// Get the image element
const image = document.querySelector('.home-img img'); // Adjust the selector as per your HTML structure

// Flag to track if audio has been started
let audioStarted = false;
// Variable to store the playback position
let playbackPosition = 0;

// Function to start playing the audio
function startBackgroundMusic() {
  // Check if audio has not been started yet
  if (!audioStarted) {
    backgroundMusic.play();
    audioStarted = true;
  }
}

// Function to pause the audio and store the playback position when moving the mouse away from the image
function pauseAndStorePosition() {
  if (audioStarted && !backgroundMusic.paused) {
    backgroundMusic.pause();
    playbackPosition = backgroundMusic.currentTime; // Store the current playback position
  }
}

// Function to resume playback from the stored position when moving the mouse back over the image
function resumeFromStoredPosition() {
  if (audioStarted) {
    backgroundMusic.currentTime = playbackPosition; // Set the playback position
    backgroundMusic.play(); // Resume playback
  }
}

// Add event listeners for mouse enter and leave to control audio playback
image.addEventListener('mouseenter', startBackgroundMusic);
image.addEventListener('mouseleave', pauseAndStorePosition);
image.addEventListener('mouseenter', resumeFromStoredPosition);

