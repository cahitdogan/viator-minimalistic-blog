import supabase from "../../js/supabase.js";

async function isLoggedIn() {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
        window.location.href = "login.html";
    }
}

isLoggedIn();