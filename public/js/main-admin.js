(() => {
const adminNavButton = document.querySelector('.admin-dropdown');
const closeAdminNavButton = document.querySelector('.admin-drop-close');

function openAdminNav(){
    console.log('open');
    // debugger;
    this.nextElementSibling.classList.remove('hidden');
}

function closeAdminNav(){
    console.log('close'); 
    // debugger;
    this.parentElement.parentElement.parentElement.classList.add('hidden');
}

adminNavButton.addEventListener("click", openAdminNav);
closeAdminNavButton.addEventListener("click", closeAdminNav);

})();