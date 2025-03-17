const openMenu = () => {
    document.querySelector('.dropDown-content').classList.toggle('dropDown-content-active')
}

const closeMenu = () => {
    document.querySelector('.dropDown-content').classList.remove('dropDown-content-active')
}

document.querySelector('.dropbtn').addEventListener('click', openMenu); 
document.querySelector('.dropclosebtn').addEventListener('click', closeMenu); 