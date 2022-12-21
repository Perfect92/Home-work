// const tabs = document.querySelectorAll(".tabheader__item")
// const tabsParens = document.querySelector(".tabheader__item")
// const tabsContent = document.querySelectorAll(".tabcontent")
//
//
//
//
// const hideTabContent = () => {
//     tabsContent.forEach(() => {
//         item.style.display = "none"
//
//     })
//     tabs.forEach((item) =>{
//         item.classList.remove("tabheader__item_active")
//     })
// }
//
// hideTabContent()
//
//
// const show = (i = 0 ) => {
//     tabsContent[i].style.display = " block"
//     tabs[i].classList.add("tabheader__item_active")}
//
// hideTabContent()
// show()

// tabsParens.addEventListener("click", (event) =>{
//     if (event.target.classList.contains("tabheader__item")){
//         tabs.forEach(item, i) => {
//             if (event.target === item){
//                 hideTabContent()
//                 show(i)
//             }
//         }
//     }
// })


const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const claseModalBtn  = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}

const closeModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = ""
}


modalTrigger.addEventListener("click", openModal)
claseModalBtn.addEventListener("click", closeModal)


