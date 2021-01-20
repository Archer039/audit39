$(".menu-icon").on("click", function(){
    $(".menu-item").toggle("fast")
})

// модальное окно "заказ услуги"
$(".order").on("click", function(){
    $(".order-modal").css("display", "flex")
})

$(".close").on("click", function(){
    $(".order-modal").css("display", "none")
})