function changeNavBG(){
    let scrollValue=window.scrollY
    if(scrollValue<=10){
        document.getElementById("nav").classList.remove("nav-bg")
        document.getElementById("links").classList.remove("links-bg-white")
        document.getElementById("logo").src="./imgs/logo-light.png"
        document.getElementById("nav").style.height="80px"
    }
    else{
    document.getElementById("nav").classList.add("nav-bg")
    document.getElementById("links").classList.add("links-bg-white")
    document.getElementById("logo").src="./imgs/logo-dark.png"
    document.getElementById("nav").style.height="60px"
}
}
window.addEventListener('scroll',changeNavBG)