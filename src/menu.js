'use strict'

const menuContent = () => {
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = `

        <main>
            <div class="menu">
                <div>
                    <h1 class="menu-item">Bibimbap</h1>
                    <p class="menu-description">Rice Dish</p>
                    <p class="price">$12.99</p>
                </div>
                <div>
                    <h1 class="menu-item">Bulgogi</h1>
                    <p class="menu-description">Rice Dish with marintated beef</p>
                    <p class="price">$14.99</p>
                </div>
                <div>
                    <h1 class="menu-item">Spicy rice cakes</h1>
                    <p class="menu-description">Spicy Rice Cakes in hot sauce</p>
                    <p class="price">$16.99</p>
                </div>
                <div>
                    <h1 class="menu-item">Kimbap</h1>
                    <p class="menu-description">Rolls of seaweed</p>
                    <p class="price">$8.99</p>
                </div>
            </div>
    `
}

export {menuContent}