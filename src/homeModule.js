export default function addHome(){
    const mainContainer = document.getElementById('content')
    mainContainer.innerHTML = ''
    const homeSectionContent = `<div class="title">
                <h1>Restaurant Name</h1>
            </div>
            <div class="mid-sections">
                <p>Playful and exaggerated reviews are the best thing ever! 
                    They take something simple and turn it into an epic adventure, 
                    making you feel like you’ve just discovered a hidden gem on a treasure map. 
                    The language is so over-the-top, you’ll laugh, cringe, and maybe even believe 
                    it’s too good to be true. These reviews are the kind of thing you’ll want to keep 
                    reading again and again, just to see how far they’ll go!
                </p>
                <h3>Your average review about anything</h3>
            </div>
            <div class="mid-sections">
                <h2>Hours</h2>
                <ul>
                    <li>Sunday: Sure, why not?</li>
                    <li>Monday: I hate Mondays</li>
                    <li>Tuesday: Kinda meh day tbh</li>
                    <li>Wednesday: Mid week vibes</li>
                    <li>Thursday: Can taste the weekend</li>
                    <li>Friday: Yay!</li>
                    <li>Saturday: Prob not, for labor laws n' stuff</li>
                </ul>
            </div>
            <div class="mid-sections">
                <h2>Where to find us</h2>
                <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/11/truco-secreto-google-maps-casi-nadie-conoce-puede-ayudarte-planificar-viajes-como-experto-3237494.jpg?tf=1200x" alt="" class="map">
                <h2>Some adress</h2>
                        </div>`
     const homeSection = document.createElement('section')
     homeSection.innerHTML = homeSectionContent
     mainContainer.appendChild(homeSection)
}