import supabase from "../../js/supabase.js";

async function getArticleCount() {
    const articleCountContainer = document.getElementById("article-count-container");

    const {data, error} = await supabase.from("articles").select();
    
    const count = data.length;
    const countElement = document.createElement("p");
    countElement.textContent = count;
    articleCountContainer.appendChild(countElement);
}

getArticleCount();

// sadece giriş yapmış kullanıcının veri çekebilmesi üzerine bir araştırma ve düşünme gerçekleştir