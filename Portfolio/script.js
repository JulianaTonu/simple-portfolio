var Icon = document.getElementById("Icon");
Icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        Icon.src = "images/sun.png";
    }else
    {
        Icon.src = "images/moon.png";
    }
    
}