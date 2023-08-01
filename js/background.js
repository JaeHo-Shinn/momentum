const images = ["0.jpg", "1.jpg", "2.jpg"]; //array 생성

const imgnumber = images.length;
const backgroundimage = images[Math.floor(Math.random() * imgnumber)]; //object에서 랜덤하게

//
//
const bGImages = document.createElement("img"); //js 상의 body에 img tag 생성
bGImages.src = `img/${backgroundimage}`; // img tag에 src 생성

document.body.appendChild(bGImages); //HTML의 body에 tag 생성
