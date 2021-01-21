$(".menu-icon").on("click", function () {
    $(".menu-item").toggle("fast")
})

// модальное окно "заказ услуги"
$(".order").on("click", function () {
    $(".order-modal").css("display", "flex")
})

$(".close").on("click", function () {
    $(".order-modal").css("display", "none")
})

// галерея партнеры 
let partners = [{
    name: "name1",
    src: "./img/galery/partners/1.jpg"
},
{
    name: "name2",
    src: "./img/galery/partners/2.png"
},
{
    name: "name3",
    src: "./img/galery/partners/3.jpg"
},
{
    name: "name4",
    src: "./img/galery/partners/4.jpg"
},
{
    name: "name5",
    src: "./img/galery/partners/5.png"
},
{
    name: "name6",
    src: "./img/galery/partners/6.jpg"
},
{
    name: "name7",
    src: "./img/galery/partners/7.jpg"
},
{
    name: "name8",
    src: "./img/galery/partners/8.png"
},
{
    name: "name9",
    src: "./img/galery/partners/9.png"
},

];
let widthSlider = Number($(".partners-photos").css("width").slice(0, -2));
let widthItem = 200;
let quantityItem = Math.trunc(widthSlider / widthItem);
let widthMargin = (widthSlider % widthItem) / quantityItem;
let startPosition = widthMargin / 2;
let positionDisplacement = 0;


for (let i = 0; i < partners.length; i++) {
    $(".partners-photos").prepend('<div class="photo" id="' + "photo-" + i + '"><img src=' + partners[i].src + '></div>');
    $("#photo-" + i).css("left", startPosition + "px");
    startPosition += widthItem + widthMargin;
}

$(window).resize(function () {
    widthSlider = Number($(".partners-photos").css("width").slice(0, -2));
    quantityItem = Math.trunc(widthSlider / widthItem);
    widthMargin = (widthSlider % widthItem) / quantityItem;
    startPosition = widthMargin / 2;
    positionDisplacement = 0;

    for (let i = 0; i < partners.length; i++) {
        $("#photo-" + i).css("left", startPosition + "px");
        startPosition += widthItem + widthMargin;
    }
})

$('.arrow-left').on('click', function () {
    if (positionDisplacement > 0) {
        positionDisplacement -= widthItem + widthMargin;
        startPosition = (widthMargin / 2) - positionDisplacement;
        for (let i = 0; i < partners.length; i++) {
            $("#photo-" + i).css("left", startPosition + "px");
            startPosition += widthItem + widthMargin;
        }
    }
})

$('.arrow-right').on('click', function () {
    if (positionDisplacement < (widthItem + widthMargin) * (partners.length - quantityItem) ) {
        positionDisplacement += widthItem + widthMargin;
        startPosition = (widthMargin / 2) - positionDisplacement;
        for (let i = 0; i < partners.length; i++) {
            $("#photo-" + i).css("left", startPosition + "px");
            startPosition += widthItem + widthMargin;
        }
    }
})