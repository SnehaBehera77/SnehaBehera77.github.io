// Typing effect
const typingText = [
    "Electrical Engineering Student",
    "C++ Learner",
    "Web Developer",
    "Tech Explorer"
];

let index = 0;
let charIndex = 0;

function typeEffect() {
    const element = document.querySelector(".typing");
    element.textContent = typingText[index].slice(0, charIndex);

    charIndex++;

    if (charIndex > typingText[index].length) {
        charIndex = 1;
        index = (index + 1) % typingText.length;
    }

    setTimeout(typeEffect, 130);
}

typeEffect();
