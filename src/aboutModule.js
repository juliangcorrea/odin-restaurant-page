export default function addMenu(){
    const mainContainer = document.getElementById('content')
    mainContainer.innerHTML = ''
    const aboutSectionContent = `<div class="title">
                <h2>Contact Us</h2>
            </div>
            <div class="contact-info">
                <h2>Name of contact</h2>
                <h3>Position of contact</h3>
                <h3>Phone Number: xxx-xxx-xxxx</h3>
                <h3>Email: sampleEmail@sample.com</h3>
            </div>`
    const aboutSection = document.createElement('section')
    aboutSection.innerHTML = aboutSectionContent
    mainContainer.appendChild(aboutSection)
}