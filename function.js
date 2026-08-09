document.addEventListener("DOMContentLoaded", function() {
    const text = `Selamat datang di Showcase Visual Kelompok 3.
mempersembahkan aplikasi sederhana ini sebagai bagian
dari proyek UAS 2026. Silakan klik tombol di bawah untuk
memulai eksplorasi Anda.`;

    const elementP = document.getElementById("typing-text");
    let index = 0;
    const kecepatan = 35;
    const jedaUlang = 3000;

    function efekKetik() {
        if (index < text.length) {
            elementP.textContent += text.charAt(index);
            index++;
            setTimeout(efekKetik, kecepatan);
        } else {
            setTimeout(() => {
                elementP.textContent = "";
                index = 0;
                efekKetik();
            }, jedaUlang);
        }
    }

    efekKetik();
});