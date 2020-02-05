const icons = [
    {
        name: 'git',
        link: 'https://github.com/aikwdc00',
        classname: 'fab',
        font: 'fa-github'
    },
    {
        name: 'medium',
        link: 'https://medium.com/@fredli_85391',
        classname: 'fab fa-medium',

    },
    {
        name: 'mail',
        link: 'mailto:aikwdc00@hotmail.com',
        classname: 'fas fa-envelope-square',

    },
    {
        name: 'telegram',
        link: 'https://web.telegram.org/#/fredli000',
        classname: 'fab fa-telegram-plane',

    },
    {
        name: 'slack',
        link: 'https://join.slack.com/t/fred-nis4860/shared_invite/enQtOTI2MzAzNTI2NjI3LWZkMjUyNGZlYTUwNmNhMWI0MTQyOGNjZGNjOWQ1OTM0NDk1YjJkZDYzYTk3OTczNDM4YjA3ZjRjNDIxOTNhYTI',
        classname: 'fab fa-slack',
    }
]

const navbartop = document.querySelector('.navbar-top')
const explore = document.querySelector('.explore')
const button = document.querySelector('button.navbar-toggler.navbar-dark')
const infoPanel = document.querySelector('.infoPanel')
const footerPanel = document.querySelector('.footer-panel')

// scroll Event Listener
window.addEventListener('scroll', function (e) {
    // scroll控制explore
    if (window.scrollY <= 0) {
        explore.classList.add('at_top')
    } else {
        explore.classList.remove('at_top')
    }
    // scroll控制導覽列
    if (window.scrollY > 0) {
        navbartop.classList.remove('navbar-top')
        button.classList.remove('navbar-dark')
    } else {
        navbartop.classList.add('navbar-top')
        button.classList.add('navbar-dark')
    }
})

// show info and footer icon
showInfoIcon()
showFooterIcon()

function showInfoIcon() {
    let cell = ''
    icons.forEach(item => {
        cell += `
            <li class="list-group-item">
                <a href=${item.link} target="_blank">
                    <i class="${item.classname} ${item.font}"></i>
                </a>
            </li>
        `
    })
    infoPanel.innerHTML = cell
}

function showFooterIcon() {
    let cell = ''
    icons.forEach(item => {
        cell += `
            <li class="nav-item mr-3">
                <a href=${item.link} target="_blank">
                    <i class="${item.classname} ${item.font}"></i>
                </a>
            </li>
        `
    })
    footerPanel.innerHTML = cell
}

