// const text = "Frontend Develop";
// const typingEl = document.getElementById("typing");
// let i = 0;

// function typeChar() {
//   if (i < text.length) {
//     typingEl.textContent = text.substring(0, i + 1);
//     i++;
//     setTimeout(typeChar, 200);
//   } else {
//     // nhấp nháy con trỏ
//     setInterval(() => {
//       typingEl.classList.toggle("blink");
//     }, 500);
//   }
// }
// typeChar();

const text = "Frontend Develop";
const typingEl = document.getElementById("typing");

let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  if (!isDeleting) {
    // Đang gõ
    typingEl.textContent = text.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === text.length) {
      setTimeout(() => {
        isDeleting = true;
      }, 1500); // Dừng 1.5s trước khi xóa
    }
  } else {
    // Đang xóa
    typingEl.textContent = text.substring(0, charIndex); // giữ đúng charIndex
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
    }
  }

  // Nhấp nháy con trỏ
  typingEl.classList.toggle("blink");

  const speed = isDeleting ? 120 : 220; // xóa nhanh hơn gõ
  setTimeout(typeLoop, speed);
}

typeLoop();
