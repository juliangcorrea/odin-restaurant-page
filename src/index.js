import "./style.css"
import {default as addHome} from './homeModule'
import {default as addMenu} from './menuModule'
import {default as addAbout} from './aboutModule'

const allBtns = document.querySelector('header').querySelectorAll('button')
const btnFunctions = {
    home: addHome,
    menu: addMenu,
    about: addAbout
}
let prevBtn = allBtns[0]
btnFunctions.home()
prevBtn.classList.add('btn-selected')
allBtns.forEach(element => {
    element.addEventListener('click', () => {
        prevBtn.classList.remove('btn-selected')
        element.classList.add('btn-selected')
        prevBtn = element
        btnFunctions[element.textContent.toLowerCase()]()
    })
});