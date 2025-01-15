export default function addMenu(){
    const mainContainer = document.getElementById('content')
    mainContainer.innerHTML = ''
    const aboutSectionContent = ``
    const aboutSection = document.createElement('section')
    aboutSection.innerText = aboutSectionContent
    mainContainer.appendChild(aboutSection)
}