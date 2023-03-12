const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !==""){
        // document.querySelector("overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
        },500);
    }
});

var type = new Typed('.typing-script',{
    strings: ['Student', 'Full Stack Developer', 'Competitive programmer'],
    typeSpeed: 120,
    loop: true
});

let url="https://script.google.com/macros/s/AKfycbyw_pV5JTUYKpLzaSBDGG_iyuhbE_rFQzehJ6s9axN6JwH_tlK8ZkjAf74WsM9ka5uw/exec";
let form = document.querySelector("form");
let submit = document.querySelector(".submit");
let message = document.querySelector(".message");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    submit.value = "sending.."
    fetch(url, {
    method: "POST",
    body: new FormData(form)
    })
    .then(res => res.text())
    .then(data => {
        message.innerHTML = data;
        submit.value = "Send Message"
    })
    .catch(err => {
        message.innerHTML = err;
        submit.value = "Send Message"
    })
})