/**
 * Created by Steve on 03/08/2015.
 */

function showModal() {

    //$(".content").addClass("inactive");
    //$(".content").fadeTo('fast', 0.1, function() {
    //    $(".modal-overlay").css("visibility","visible");
    //    $(".modal-dialog").css("visibility","visible");
    //});

    $(".content").fadeTo('fast', 0.1);
    $(".modal-overlay").css("visibility","visible");
    $(".modal-dialog").css("visibility","visible");
};

function hideModal() {
    //$(".content").removeClass("inactive");
    $(".content").fadeTo('fast', 1);
    $(".modal-overlay").css("visibility","hidden");
    $(".modal-dialog").css("visibility","hidden");
};

function pmo_animate() {
    /*$(".modal-dialog").animate({
            height: '+=50px',
            width: '+=50px'
        }, 'slow');

    $(".modal-dialog").animate({
            height: '-=50px',
            width: '-=50px'
        }, 'slow');
    */
}