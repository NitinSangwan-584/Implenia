const navbarbtn = () => {
    document.getElementById("name").classList.toggle("show-navbar")
    document.getElementById("rotates").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotates2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}
document.getElementById('video-thumbnail').addEventListener('click', function () {
    this.style.display = 'none';
    document.getElementById('video-frame').style.display = 'block';
});