// Функция для переключения экранов
function nextScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// --- Экран 1: Конверт ---
document.getElementById('open-btn').addEventListener('click', () => {
    nextScreen('screen-question');
});

// --- Экран 2: Вопрос ---
const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');

btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
    btnNo.innerText = "Точно нет?";
});

btnYes.addEventListener('click', () => {
    setTimeout(() => {
        nextScreen('screen-gifts');
    }, 400); 
});

// --- Экран 3: Подарки ---
function openGift(element) {
    nextScreen('screen-gallery');
}

// --- Экран 5: Музыка ---
const playBtn = document.getElementById('play-btn');
const music = document.getElementById('bg-music');
let isPlaying = false;

playBtn.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        playBtn.innerText = "▶ Воспроизвести";
    } else {
        music.play();
        playBtn.innerText = "⏸ Пауза";
    }
    isPlaying = !isPlaying;
});

// --- Экран 6: Торт ---
document.getElementById('blow-btn').addEventListener('click', () => {
    const flames = document.querySelectorAll('.flame');
    flames.forEach(flame => {
        flame.classList.add('extinguished');
    });

    document.getElementById('cake-title').innerText = "Ты задула все свечи!";
    document.getElementById('blow-btn').style.display = 'none';

    setTimeout(() => {
        document.getElementById('final-text').classList.remove('hidden');
    }, 600); 
});