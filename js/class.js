window.addEventListener("load" , ()=>{
    // console.log("hi");
    const open = document.querySelector("#open");
    // console.log("open");
    const detail = document.querySelector("#detail");
    const closeBtn =document.querySelector("#close")
    open.addEventListener("click" , ()=>{
        detail.style.display = "block";
        open.style.display = "none";
        // closeBtn.style.display = "block";
    });
    closeBtn.addEventListener("click" , ()=>{ 
        detail.style.display = "none";
        // closeBtn.style.display = "none";
        open.style.display = "block";
        open.style.backgroundColor = "red";
        open.style.color = "white";
    });
});
