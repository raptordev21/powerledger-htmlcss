function initMap() {
    let loc = { lat: 28.6712, lng: 77.3177 }

    let map = new google.maps.Map(document.getElementById("map"), {
        center: loc,
        zoom: 9,
    });

    let marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}

// Sticky menu background
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9
    } else {
        document.querySelector('#navbar').style.opacity = 1
    }
})

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});

// -100 to change scroll position
// scrollTop: $(hash).offset().top - 100