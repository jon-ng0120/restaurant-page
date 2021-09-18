'use strict'

const contactContent = () => {
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = `
    <main>
        <div class="contact">
            <form action="">
                <h1>Contact Us</h1>
                <p>&#9742; (604) - 443 - 1241</p>
                <p>&#128337; Mon - Sat: 9am - 10pm</p>
                <h2>Address</h2>
                <p>12345 Fake Ave</p>
                <img src="../images/map.PNG" alt="" id="map">
            </form>

        </div>

    </main>
    `
}

export {contactContent}
