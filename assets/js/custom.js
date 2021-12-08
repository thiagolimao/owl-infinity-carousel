function gradientInfinityCard() {
    const getPrimaryColor = '#00ad8e';
    const getSecondaryColor = '#10bab7';

    var e =
        '<svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">';
    (e += '<g filter="url(#filter0_d_1259_8055)">'),
        (e +=
            '<ellipse rx="23.5653" ry="23.5" transform="matrix(-1 0 0 1 26.9034 23.5)" fill="white"/>'),
        (e += "</g>"),
        (e +=
            '<path d="M18.5276 23.1084L35.2852 23.1084" stroke="' +
            getPrimaryColor +
            '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'),
        (e +=
            '<path d="M25.8594 29.7344L18.5279 23.1087L25.8594 16.483" stroke="' +
            getPrimaryColor +
            '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'),
        (e += "<defs>"),
        (e +=
            '<filter id="filter0_d_1259_8055" x="0.539844" y="0" width="52.7289" height="52.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">'),
        (e += '<feFlood flood-opacity="0" result="BackgroundImageFix"/>'),
        (e +=
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>'),
        (e += '<feOffset dy="2.8"/>'),
        (e += '<feGaussianBlur stdDeviation="1.4"/>'),
        (e += '<feComposite in2="hardAlpha" operator="out"/>'),
        (e +=
            '<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>'),
        (e +=
            '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1259_8055"/>'),
        (e +=
            '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1259_8055" result="shape"/>'),
        (e += "</filter>"),
        (e += "</defs>"),
        (e += "</svg>");
    var o =
        '<svg width="54" height="53" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg">';
    (o += '<g filter="url(#filter0_d_1259_8049)">'),
        (o +=
            '<ellipse cx="27.077" cy="23.5" rx="23.5653" ry="23.5" fill="white"/>'),
        (o += "</g>"),
        (o +=
            '<path d="M35.4529 23.1084L18.6953 23.1084" stroke="' +
            getPrimaryColor +
            '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'),
        (o +=
            '<path d="M28.1211 29.7344L35.4525 23.1087L28.1211 16.483" stroke="' +
            getPrimaryColor +
            '" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'),
        (o += "<defs>"),
        (o +=
            '<filter id="filter0_d_1259_8049" x="0.711719" y="0" width="52.7289" height="52.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">'),
        (o += '<feFlood flood-opacity="0" result="BackgroundImageFix"/>'),
        (o +=
            '<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>'),
        (o += '<feOffset dy="2.8"/>'),
        (o += '<feGaussianBlur stdDeviation="1.4"/>'),
        (o += '<feComposite in2="hardAlpha" operator="out"/>'),
        (o +=
            '<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>'),
        (o +=
            '<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1259_8049"/>'),
        (o +=
            '<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1259_8049" result="shape"/>'),
        (o += "</filter>"),
        (o += "</defs>"),
        (o += "</svg>"),
        $(".infinity-carousel").owlCarousel({
            loop: !0,
            margin: 10,
            nav: !0,
            navText: [e, o],
            dots: !1,
            responsive: {
                0: { items: 1.5 },
                600: { items: 1.75 },
                768: { items: 2.25 },
                900: { items: 2.5 },
                1024: { items: 3.25 },
                1100: { items: 3.5 },
                1200: { items: 4.25 },
                1350: { items: 4.5 },
                1500: { items: 4 },
            },
        });
}

$(document).ready(function () {
    gradientInfinityCard()
});
