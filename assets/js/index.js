const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}
$('.my-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".previous",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 992,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
    ]
});
document.querySelectorAll('.red-card, .blue-card, .yellow-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        let btn = document.querySelector('.rbg-btn');
        if (card.classList.contains('red-card')) {
            btn.style.background = 'var(--color-white)';
            btn.style.color = 'var(--color-red)';
            btn.style.border = '2px solid var(--color-red)';
        } else if (card.classList.contains('blue-card')) {
            btn.style.background = 'var(--color-white)';
            btn.style.color = 'var(--color-blue)';
            btn.style.border = '2px solid var(--color-blue)';
        } else if (card.classList.contains('yellow-card')) {
            btn.style.background = 'var(--color-white)';
            btn.style.color = 'var(--color-yellow-2)';
            btn.style.border = '2px solid var(--color-yellow-2)';
        }
    });

    card.addEventListener('mouseout', () => {
        let btn = document.querySelector('.rbg-btn');
        btn.style.background = ''; // Reset to default
        btn.style.color = '';
        btn.style.border = '';
    });
});
