function openerWithClickBlocker(elementId) {
    const elementToOpen = document.getElementById(elementId);
    elementToOpen.style.display = "block";

    const clickBlocker = document.getElementById("click-blocker");
    clickBlocker.style.display = "block";

    clickBlocker.addEventListener("click", function () {
        clickBlocker.style.display = "none";
        elementToOpen.style.display = "none";
    });
}

function closerWithClickBlocker(elementId) {
    const elementToClose = document.getElementById(elementId);
    elementToClose.style.display = "none";

    const clickBlocker = document.getElementById("click-blocker");
    clickBlocker.style.display = "none";
}

const elementToOpen = document.getElementById('mobile-categories-list');
const button = document.getElementById('categories-button');

button.addEventListener("click", function () {
    if (elementToOpen.style.display == "block") {
        elementToOpen.style.display = "none";
    } else {
        elementToOpen.style.display = "block";
    }
})



//**************************------PAGINATION------**************************

let currentPage = 1;

const page_1 = document.getElementById("pagination-part1");
const page_2 = document.getElementById("pagination-part2");
const page_3 = document.getElementById("pagination-part3");
const paginationBar = document.getElementById("pagination-bar");


function paginator(selectedPage) {

    switch (selectedPage) {
        case 1:
            page_1.style.display = "grid";
            page_2.style.display = "none";
            page_3.style.display = "none";
            break;
    
        case 2:
            page_1.style.display = "none";
            page_2.style.display = "grid";
            page_3.style.display = "none";
            break;
        
        case 3:
            page_1.style.display = "none";
            page_2.style.display = "none";
            page_3.style.display = "grid";
    }
        
    paginationBar.scrollIntoView({ block: "center" });
    currentPage = selectedPage;
}


function prevNextPaginator(prevNext) {

    let selectedPage;

    switch (prevNext) {

        case "prev":
            if (currentPage !== 1) {
                selectedPage = currentPage - 1;
                paginator(selectedPage);
            }
            break;
        
        case "next":
            if (currentPage !== 3) {
                selectedPage = currentPage + 1;
                paginator(selectedPage);
            }
    }
}


const anchors = document.querySelectorAll("a");

// Bağlantıya tıklama olayını ele alın
anchors.forEach(anchorElement => {
    anchorElement.addEventListener('click', function(event) {
        // Sayfanın varsayılan davranışını (yani linkin tıklanarak yüklenmesini) engelleyin
        event.preventDefault();
    
        // Hedef sayfayı yükleyin
        const hedefSayfa = this.getAttribute('href');
        let xhr = new XMLHttpRequest();
        xhr.open('GET', hedefSayfa, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            // Hedef sayfa yüklendiğinde, mevcut sayfanın içeriğini değiştirin
            document.documentElement.innerHTML = xhr.responseText;
            // İsteğe bağlı olarak, hedef sayfanın URL'sini güncellemeniz gerekebilir:
            // history.pushState(null, '', hedefSayfa);
    
            // Artık hedef sayfadasınız ve geçiş işlemi tamamlandı!
            // İsterseniz başka işlemler yapabilirsiniz.
          }
        };
        xhr.send();
      });
});
