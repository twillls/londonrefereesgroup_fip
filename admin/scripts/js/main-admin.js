(() => {
const adminNavButton = document.querySelector('.admin-dropdown');
const closeAdminNavButton = document.querySelector('.admin-drop-close');

function openAdminNav(){
    console.log('open');
    this.nextElementSibling.classList.remove('hidden');
}

function closeAdminNav(){
    console.log('close');
    this.parentElement.parentElement.parentElement.classList.add('hidden');
}

adminNavButton.addEventListener("click", openAdminNav);
closeAdminNavButton.addEventListener("click", closeAdminNav);

})();