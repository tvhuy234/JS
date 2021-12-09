$(document).ready(function () {
// CSS slide
    $("#slide").css("display", "flex")
    $("#content").width(600);
    $("#content").height(400);
    $("#content").css({
        "border": "black solid 1px",
        "text-align": "center",
        "positive": "relative",
        "padding": "10px"
    });
    $(".change").width(40);
    $(".change").height(20);
    $(".image").width(600);
    $(".image").height(400);
    $(".image:not(:first-child)").hide()
// Center slide
    $.fn.center = function () {
        this.css({
            'position': 'fixed',
            'left': '50%',
            'top': '50%',
        });
        this.css({
            'margin-left': -this.outerWidth() / 2 + 'px',
            'margin-top': -this.outerHeight() / 2 + 'px'
        });
        return this;
    }
    $("#slide").center()
// Slide function
    var slideIndex = 0;
    var endImg = $(".image:last").attr("idx");
    $("#next").click(function () {
        if (++slideIndex > endImg) {
            slideIndex = 0;
        }
        $(".image").hide();
        $(".image").eq(slideIndex).show();
    })
    $("#back").click(function () {
        if (--slideIndex < 0) {
            slideIndex = endImg;
        }
        $(".image").hide();
        $(".image").eq(slideIndex).show();
    });
});
