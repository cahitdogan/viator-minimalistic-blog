import supabase from "../../js/supabase.js"


isLoggedIn();


const email = document.getElementById("email");
const password = document.getElementById("password");
const loginButton = document.getElementById("login-button");
const errorMessage = document.querySelector("form p");

loginButton.addEventListener("click", () => {
    signIn();
})

async function signIn() {
    const {error} = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    });

    if (error) {
        errorMessage.style.color = "red";
        errorMessage.textContent = error.message;
    } else {
        errorMessage.style.color = "green";
        errorMessage.textContent = "Login successful";
        window.location.href = "dashboard.html"
    }
}

async function isLoggedIn() {
    const { data } = await supabase.auth.getSession();
    
    if (data.session) {
        window.location.href = "dashboard.html";
    }
}