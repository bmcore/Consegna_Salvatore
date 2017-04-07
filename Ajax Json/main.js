$('.btn').click(function () {

    $.ajax({
        dataType: "html",
        url: "index2.html",
        success: function (postCheDeveArrivare) {
            $(".post").after(postCheDeveArrivare)
        }
    });
});