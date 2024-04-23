 
const expand_btn = document.querySelector(".expand-btn")

let activeIndex;

expand_btn.addEventListener("click", ()=>{
    document.body.classList.toggle("collapsed")
})

const current = window.location.href

const allLinks = document.querySelectorAll(".sidebar-links a")

allLinks.forEach((ele)=>{
    ele.addEventListener("click", ()=>{
        const hrefLinkClick = ele.href

        allLinks.forEach((link)=>{
            if(link.href == hrefLinkClick){
                link.classList.add("active")
            }else{
                link.classList.remove("active")
            }
        })
    })
})

const searInput = document.querySelector(".search_wrapper input")

searInput.addEventListener("focus", (e)=>{
    document.body.classList.remove("collapsed")
})