let greenPressed = false;
let redPressed = false;
let countdown = 10;
let countdownInterval;
let mainClickedCount = 0;

function toLower(el) {
  el.value = el.value.toLowerCase();
}

function gotoPage(pageNumber) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page' + pageNumber).classList.add('active');
}

function checkPasswords() {
  const input1 = document.getElementById('input1').value.trim().toLowerCase();
  const input2 = document.getElementById('input2').value.trim().toLowerCase();

  const validNama = input1 === 'rina sulastri';
  const validTanggal = input2.includes('23') || input2.includes('februari') || input2.includes('feb');

  if (validNama && validTanggal) {
    gotoPage(2);
  } else {
    document.getElementById('errorText').textContent = "Maaf tapi anda salah";
  }
}

function showChoices() {
  mainClickedCount++;
  const result = document.getElementById('resultText');
  result.textContent = "Aku itu tinggi, baik, pinter, kadang ngeselin, nomor peserta ujianku adalah 24.25.049.043 dan inisial ku huruf P lagi jalan.";
  document.getElementById('btnGreen').disabled = true;
  document.getElementById('btnRed').disabled = true;
  document.getElementById('countdownText').textContent = "Sabar, baca lagi nanti salah, pilihan ga bisa di ubah kecuali di reset.10 detik...";
  countdown = 10;

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      document.getElementById('countdownText').textContent = `Sabar, baca lagi nanti salah, pilihan ga bisa di ubah kecuali di reset. ${countdown} detik...`;
    } else {
      clearInterval(countdownInterval);
      document.getElementById('countdownText').textContent = "Intinya kamu mau jadi pacarku ga? sebentar juga ga papa. jangan salah pilih ya cantik";

      if (mainClickedCount === 1) {
        if (!greenPressed) document.getElementById('btnGreen').disabled = false;
        if (!redPressed) document.getElementById('btnRed').disabled = false;
      } else {
        if (greenPressed) {
          document.getElementById('btnGreen').disabled = false;
          document.getElementById('btnRed').disabled = true;
        } else if (redPressed) {
          document.getElementById('btnRed').disabled = false;
          document.getElementById('btnGreen').disabled = true;
        } else {
          document.getElementById('btnGreen').disabled = true;
          document.getElementById('btnRed').disabled = true;
        }
      }
    }
  }, 1000);
}

function showOverlay(message) {
  const words = message.split(" ");
  let formatted = "";
  for (let i = 0; i < words.length; i++) {
    formatted += words[i] + " ";
    if ((i + 1) % 12 === 0) formatted += "\n";
  }

  document.getElementById('overlayText').textContent = formatted.trim();
  document.getElementById('overlay').style.display = "flex";
}

function choose(color) {
  if (color === 'green') {
    greenPressed = true;
    showOverlay("Serius Rin? Kalau begitu kasih kertas dengan kode 705 ke siapapun kecuali Rifki(iki) yang bisa jaga rahasia hubungan kita, katakan nanti kasih ini ke aku. Jangan katakan apapun tentang isi kertas itu, ini nomor WA ku (0823-1780-5579) dan ini username tik tok ku (diys_kocak). Oh ya kalau kamu mau mengatakan sesuatu tulis saja di kertas itu. Hubungan kita mungkin sebentar karena jalur pendidikan kita berbeda, atau kalau kamu mau bertahan aku akan menerima nya");
    document.getElementById('btnRed').disabled = true;
    document.getElementById('btnGreen').disabled = true;
  } else {
    redPressed = true;
    showOverlay(" : Ya sudah jika ini memang yang terbaik untuk mu aku akan Terima. Karena beberapa minggu lagi mungkin kita tidak akan bertemu.");
    document.getElementById('btnGreen').disabled = true;
    document.getElementById('btnRed').disabled = true;
  }
}

function attemptReset() {
  const resetInput = document.getElementById('resetInput').value.trim();
  if (resetInput === '223♡705') {
    location.reload();
  } else {
    alert("Password reset salah!");
  }
}

document.getElementById('overlay').addEventListener('click', function(e) {
  if (e.target.id === 'overlay') {
    document.getElementById('overlay').style.display = "none";
  }
});
