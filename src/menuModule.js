export default function addMenu(){
    const mainContainer = document.getElementById('content')
    mainContainer.innerHTML = ''
    const menuSectionContent = `<div class="title">
                <h1>Menu</h1>
            </div>
            <div class="sub-title">
                <h2>Beverages</h2>
            </div>
            <div class="sub-container">
                <h3>Name of beverage</h3>
                <p>Short description of beverage</p>
                <h4>Price $$</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy37H_IIAKYo95IrQKdtqG7MRyuvjuZm-OKA&s" alt="" class="product-img">
            </div>
            <div class="sub-title">
                <h2>Sides</h2>
            </div>
            <div class="sub-container">
                <h3>Name of side</h3>
                <p>Short description of side</p>
                <h4>Price $$</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy37H_IIAKYo95IrQKdtqG7MRyuvjuZm-OKA&s" alt="" class="product-img">
            </div>
            <div class="sub-title">
                <h2>Main Dishes</h2>
            </div>
            <div class="sub-container">
                <h3>Name of main dish</h3>
                <p>Short description of main dish</p>
                <h4>Price $$</h4>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy37H_IIAKYo95IrQKdtqG7MRyuvjuZm-OKA&s" alt="" class="product-img">
            </div>`
    const menuSection = document.createElement('section')
    menuSection.innerHTML = menuSectionContent
    mainContainer.appendChild(menuSection)
}