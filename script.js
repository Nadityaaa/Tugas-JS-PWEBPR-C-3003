const main_box = document.getElementById("main-box")
const main_title = document.getElementById("main-title")
const pic = document.getElementById("pic")
const question_box = document.getElementById("question-box")
const question_text = document.getElementById("question-text")
const button = document.getElementById("button")
const yes_btn = document.getElementById("yes-btn")
const no_btn = document.getElementById("no-btn")

yes_btn.addEventListener('click', ()=> {
    main_title.innerHTML = "Anda Berbohong!";
    question_text.innerHTML = "Anda adalah seorang Teknisi";
    main_box.style.backgroundColor = "#E12E2E";
    pic.src = "Assets/Teknisi.png";
    button.style.display = 'none';
})

no_btn.addEventListener('click', ()=> {
    main_title.innerHTML = "Anda Benar!";
    question_text.innerHTML = "Anda adalah seorang Mahasiswa";
    main_box.style.backgroundColor = "#6FD240";
    pic.src = "Assets/Mahasiswa.png";
    button.style.display = 'none';
})