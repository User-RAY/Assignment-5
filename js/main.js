
// transparent header background on scroll

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const headerTwo = document.getElementById('header-two');
    if (window.scrollY > 40) { // Change this value to adjust when the color changes
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