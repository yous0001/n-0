function changeNavBG(){
    let scrollValue=window.scrollY
    if(scrollValue<=100){
        document.getElementById("nav").classList.remove("nav-bg")
        document.getElementById("links").classList.remove("links-bg-white")
    }
    else{
    document.getElementById("nav").classList.add("nav-bg")
    document.getElementById("links").classList.add("links-bg-white")
}
}
window.addEventListener('scroll',changeNavBG)