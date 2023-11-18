let links=document.querySelectorAll("li a");
links.forEach((link)=>{
  link.addEventListener("click",()=>{
    link.style.cssText("display:block")
  })
})
let home=document.querySelector("#home")
let about=document.querySelector("#about")
let services=document.querySelector("#services")
let gallery=document.querySelector("#gallary")
let contact=document.querySelector("#contact")
links[0].addEventListener("click",()=>{
  home.style.cssText=("display:block");
  about.style.cssText=("display:none");
  services.style.cssText=("display:none");
  gallery.style.cssText=("display:none");
  contact.style.cssText=("display:none");
})
links[1].addEventListener("click",()=>{
  home.style.cssText=("display:none");
  about.style.cssText=("display:block");
  services.style.cssText=("display:none");
  gallery.style.cssText=("display:none");
  contact.style.cssText=("display:none");
})
links[2].addEventListener("click",()=>{
  home.style.cssText=("display:none");
  about.style.cssText=("display:none");
  services.style.cssText=("display:block");
  gallery.style.cssText=("display:none");
  contact.style.cssText=("display:none");
})
links[3].addEventListener("click",()=>{
  home.style.cssText=("display:none");
  about.style.cssText=("display:none");
  services.style.cssText=("display:none");
  gallery.style.cssText=("display:block");
  contact.style.cssText=("display:none");
})
links[4].addEventListener("click",()=>{
  home.style.cssText=("display:none");
  about.style.cssText=("display:none");
  services.style.cssText=("display:none");
  gallery.style.cssText=("display:none");
  contact.style.cssText=("display:block");
})
console.log(links[4])