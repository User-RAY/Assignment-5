
// TRANSPARENT HEADER BACKGROUND ON SCROLL
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const headerTwo = document.getElementById('header-two');
    if (window.scrollY > 30) {
        header.classList.add('backdrop-blur-2xl', 'bg-[#ede7da]/70');
        headerTwo.classList.add('backdrop-blur-2xl', 'bg-white/30');
        header.classList.remove('bg-[#F9F7F3]');
        headerTwo.classList.remove('bg-white');
    } else {
        header.classList.remove('backdrop-blur-2xl', 'bg-[#ede7da]/70');
        headerTwo.classList.remove('backdrop-blur-2xl', 'bg-white/30');
        header.classList.add('bg-[#F9F7F3]');
        headerTwo.classList.add('bg-white');
    }
});





// DONATE AND HISTORY BUTTONS TOGGLE
donateBtn.addEventListener('click', function(){
    donateBtn.classList.add('bg-btn-color', 'hover:bg-btn-color/[.8]');
    historyBtn.classList.add('bg-white', 'order-[#111111]/[.3]', 'text-[#111111]/[.7]');
    donateBtn.classList.remove('bg-white', 'border-[#111111]/[.3]', 'text-[#111111]/[.7]');
    historyBtn.classList.remove('bg-btn-color', 'hover:bg-btn-color/[.8]');

    donatePage.classList.remove('hidden');
    historyPage.classList.add('hidden');
});

historyBtn.addEventListener('click', function(){
    historyBtn.classList.add('bg-btn-color', 'hover:bg-btn-color/[.8]');
    donateBtn.classList.add('bg-white', 'order-[#111111]/[.3]', 'text-[#111111]/[.7]');
    historyBtn.classList.remove('bg-white', 'border-[#111111]/[.3]', 'text-[#111111]/[.7]');
    donateBtn.classList.remove('bg-btn-color', 'hover:bg-btn-color/[.8]');

    historyPage.classList.remove('hidden');
    donatePage.classList.add('hidden');
});





//DONATE BUTTONS EVENT HANDLER

noakhaliBtn.addEventListener('click', function(){


    checks(noakhaliAmount,noakhaliFund,'Noakhali','flood');
    
});




feniBtn.addEventListener('click', function(){

    checks(feniAmount,feniFund,'Feni','flood');

});




aidBtn.addEventListener('click', function(){

    checks(aidAmount,aidFund,'Quota Aid', 'injury');
    
});
    