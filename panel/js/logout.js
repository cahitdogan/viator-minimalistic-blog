import supabase from "../../js/supabase.js";

const logoutButton = document.querySelector("header > div > button");

logoutButton.addEventListener("click", async function() {
    const { error } = await supabase.auth.signOut();

    if (!error) {
        window.location.href = "login.html"
    }
});