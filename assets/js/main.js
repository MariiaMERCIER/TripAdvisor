const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const closeBtn = document.getElementById("closeBtn")


btn.onclick = ()=>{
    modal.style.display="block"
} 

closeBtn.onclick = ()=>{
    modal.style.display= "none";
}



document.addEventListener("DOMContentLoaded", ()=>{

document
.querySelector("#contactForm")
.addEventListener("submit", async(event)=>{
event.preventDefault();

const data ={
nom: document.querySelector("#Nom").value,
prenom: document.querySelector("#Prenom").value,
email:document.querySelector("#Email").value,
subject: document.querySelector("#Sujet").value,
message: document.querySelector("#message").value,
};


const response = await axios.post("http://localhost/3000/form", data);
alerte ("Merci de nous avoir ecris!")
});


});