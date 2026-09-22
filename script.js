let clicks = 0;

const maxClicks = 20;

const egg = document.getElementById("egg");
const counter = document.getElementById("counter");
const message = document.getElementById("message");

const chick = document.getElementById("chick");

const birthday = document.getElementById("birthday");

const restart = document.getElementById("restart");


/* =========================
   CLICK EGG
========================= */

egg.addEventListener("click", function () {

    // Don't allow more clicks after opening
    if (clicks >= maxClicks) {
        return;
    }

    clicks++;

    // Update counter
    counter.textContent = `${clicks} / ${maxClicks}`;


    // Shake egg
    egg.classList.remove("shake");

    // Force browser to restart animation
    void egg.offsetWidth;

    egg.classList.add("shake");


    // Create floating emoji
    createFloatingEmoji();


    // Change egg cracks
    updateEgg();


    // Change message
    updateMessage();


    // Egg opens at 20 clicks
    if (clicks === maxClicks) {
        openEgg();
    }

});


/* =========================
   UPDATE EGG
========================= */

function updateEgg() {

    if (clicks >= 5) {
        egg.classList.add("cracked1");
    }

    if (clicks >= 10) {
        egg.classList.add("cracked2");
    }

    if (clicks >= 15) {
        egg.classList.add("cracked3");
    }

}


/* =========================
   UPDATE MESSAGE
========================= */

function updateMessage() {

    if (clicks < 5) {

        message.textContent =
            "Something is happening... 👀";

    } else if (clicks < 10) {

        message.textContent =
            "The egg is starting to crack!";

    } else if (clicks < 15) {

        message.textContent =
            "Keep going! 🥚✨";

    } else if (clicks < 20) {

        message.textContent =
            "Almost there!! 😳";

    } else {

        message.textContent =
            "✨ SURPRISE! ✨";

    }

}


/* =========================
   OPEN EGG
========================= */

function openEgg() {

    // Hide egg
    setTimeout(() => {

        egg.style.opacity = "0";

        egg.style.transform =
            "scale(0.5)";

    }, 200);


    // Show chick
    setTimeout(() => {

        chick.classList.add("show");

    }, 500);


    // Birthday message
    setTimeout(() => {

        birthday.classList.add("show");

        createBirthdayConfetti();

    }, 900);

}


/* =========================
   FLOATING EMOJI
========================= */

function createFloatingEmoji() {

    const emojis = [
        "💕",
        "✨",
        "⭐",
        "💗",
        "🌸"
    ];

    const emoji =
        document.createElement("div");

    emoji.className = "floating";

    emoji.textContent =
        emojis[
            Math.floor(
                Math.random() * emojis.length
            )
        ];


    // Random position
    emoji.style.left =
        Math.random() * 100 + "vw";

    emoji.style.top =
        "65vh";


    document.body.appendChild(emoji);


    // Remove after animation
    setTimeout(() => {

        emoji.remove();

    }, 2000);

}


/* =========================
   BIRTHDAY CONFETTI
========================= */

function createBirthdayConfetti() {

    const emojis = [
        "🎉",
        "🎊",
        "🎈",
        "💕",
        "✨",
        "⭐",
        "🎂"
    ];


    for (let i = 0; i < 40; i++) {

        setTimeout(() => {

            const emoji =
                document.createElement("div");

            emoji.className =
                "floating";

            emoji.textContent =
                emojis[
                    Math.floor(
                        Math.random() *
                        emojis.length
                    )
                ];


            emoji.style.left =
                Math.random() * 100 + "vw";

            emoji.style.top =
                (50 + Math.random() * 40) + "vh";


            document.body.appendChild(emoji);


            setTimeout(() => {

                emoji.remove();

            }, 2500);

        }, i * 70);

    }

}


/* =========================
   RESTART
========================= */

restart.addEventListener("click", function () {

    clicks = 0;


    // Reset counter
    counter.textContent = "0 / 20";


    // Reset message
    message.textContent =
        "Click the egg!";


    // Reset egg
    egg.style.opacity = "1";

    egg.style.transform = "";


    egg.classList.remove(
        "cracked1",
        "cracked2",
        "cracked3"
    );


    // Hide chick
    chick.classList.remove("show");


    // Hide birthday message
    birthday.classList.remove("show");

});
