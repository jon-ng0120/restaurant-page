`use strict`

import 'style.css';

const homeTab = document.querySelector('#home-tab');
const menuTab = document.querySelector('#menu-tab');
const contactTab = document.querySelector('#contact-tab');
const allTabs = document.querySelectorAll('.tab');
const menuButton = document.querySelector('view-menu');

import {homePageContent} from './home-page'
import {menuContent} from './menu'
import {contactContent} from './contact'

// homePageContent()
// menuContent()

const clearContent = () => {
    const mainContent = document.querySelector('#content');
    while (mainContent.firstChild) {
        mainContent.removeChild(mainContent.lastChild)
    }
}

allTabs.forEach(element => {
    element.addEventListener('click', () => {
        clearContent();
    })
})

document.addEventListener('click', e => {
    if (e.target == homeTab) {
        homePageContent();
    } else if (e.target === menuTab || e.target === menuButton) {
        menuContent()
    } else if (e.target === contactTab) {
        contactContent()
    }
})

document.onload = homePageContent();