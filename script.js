function toggleMusic() {
    let music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Typing effect for letter.html
const text = `My dearest Lavanyaa ❤️,

I am really sorry for what happened. You are the most precious person in my life and I never want to hurt you.

Please forgive me, my love. I promise to make you smile every single day.

Yours forever,
Someone who loves you ❤️`;

let index = 0;
function typeText() {
    if (document.getElementById('typed-text')) {
        if (index < text.length) {
            document.getElementById('typed-text').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 50);
        }
    }
}
typeText();
