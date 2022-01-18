let items = document.querySelectorAll(".item")

items.forEach(item => {
    item.addEventListener("click", (e) =>{
        items.forEach(item => {
            item.classList ="item"
        })
        console.log(e)
        e.target.classList.toggle(("active"))
    })
})