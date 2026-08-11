document.addEventListener("DOMContentLoaded", function() {
    const elementP = document.getElementById("typing-text");
    const source = document.getElementById("source-text");

    const htmlText = source.innerHTML.trim();      // versi lengkap dengan <b>
    const plainText = source.textContent.trim();   // versi tanpa tag, buat animasi ngetik

    let index = 0;
    const kecepatan = 35;
    const jedaUlang = 3000;

    function ketik() {
        if (index <= plainText.length) {
            elementP.textContent = plainText.substring(0, index);
            index++;
            setTimeout(ketik, kecepatan);
        } else {
            elementP.innerHTML = htmlText; //kata2 akan otomatis berubah menjadi versi lengkap dengan <b> setelah selesai ngetik
            setTimeout(() => {
                index = 0;
                ketik();
            }, jedaUlang);
        }
    }

    ketik();
});