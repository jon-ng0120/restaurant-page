'use strict'

const homePageContent = () => {
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = `   
        <main>
        <div class="welcome-text">
            <h1>안녕하십니까</h1>
            <p>Hello, and welcome to Soonsamie Noodle & Rice<p>
    
            </p>Located in Richmond, BC, we offer a large variety of authentic, homemade Korean food</p>
            <button class="view-menu">View Menu</button>
        </div>
    
        </main>
    `
}

export {homePageContent}
