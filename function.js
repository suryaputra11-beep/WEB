document.addEventListener("DOMContentLoaded", function () {

    // Memanggil header.html
    fetch("header.html")
        .then(res => {
            if (!res.ok) {
                throw new Error("Gagal memuat header.html");
            }
            return res.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => {
            console.error("Error header:", error);
        });


    // Typing text
    const elementP1 = document.getElementById("typing-text-1");
    const elementP2 = document.getElementById("typing-text-2");

    const sourceP1 = document.getElementById("source-text-1");
    const sourceP2 = document.getElementById("source-text-2");

    const htmlTextP1 = sourceP1.innerHTML.trim();
    const plainTextP1 = sourceP1.textContent.trim();

    const htmlTextP2 = sourceP2.innerHTML.trim();
    const plainTextP2 = sourceP2.textContent.trim();

    let index = 0;
    const kecepatan = 35;

    function ketikP1() {
        if (index <= plainTextP1.length) {
            elementP1.textContent = plainTextP1.substring(0, index);
            index++;
            setTimeout(ketikP1, kecepatan);
        } else {
            elementP1.innerHTML = htmlTextP1;

            index = 0;
            ketikP2();
        }
    }

    function ketikP2() {
        if (index <= plainTextP2.length) {
            elementP2.textContent = plainTextP2.substring(0, index);
            index++;
            setTimeout(ketikP2, kecepatan);
        } else {
            elementP2.innerHTML = htmlTextP2;
        }
    }

    ketikP1();
});