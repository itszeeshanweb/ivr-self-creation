// function elementEmpty(){
//     if($('#mainBox').is(':empty')){
//         alert("Empty");
//     }else{
//         alert("Not Empty");
//     }
// }

// function dragFirstObj(){
//     $('.first-object').draggable();
// }


// let obj = $(".first-object") && $(".object-box");

// for(let i = 0; i < obj.length; i++){
//     $(".object-box .link-bar").hide();
// }
var r = document.querySelector(':root');

$(document).on("click", ".object-box", function () {
    $(".object-box").removeClass("current-obj-active");
    $(".object-box").removeAttr("style");
    $(this).addClass("current-obj-active");
    var temwidth = $(this).attr("data-width");
    var temheight = $(this).attr("data-height");
    
    if(temwidth) {
        $(this).css("width", temwidth+"px");
        $('#difinewidthradio').prop("checked", true);
        $("#defineWidth").val(temwidth).attr("disabled", false);
    }else{
        $('#autowidthradio').prop("checked", true);
        $('#difinewidthradio').prop("checked", false);
        $("#defineWidth").val("").attr("disabled", true);
    }

    if(temheight) {
        $(this).css("height", temheight+"px");
        $('#defineheightradio').prop("checked", true);
        $("#defineHeight").val(temheight).attr("disabled", false);
    }else{
        $('#autowidthradio').prop("checked", true);
        $('#defineheightradio').prop("checked", false);
        $("#defineHeight").val("").attr("disabled", true);
    }
    

    if ($(".object-box:nth-child(2)").hasClass("current-obj-active")) {
        // $(".object-box:nth-child(2).current-obj-active").siblings().addClass("obj-left");
        $(".object-box:nth-child(2).current-obj-active").siblings();
        $(".object-box:nth-child(1)").removeClass("obj-left");
        
    } else {
        $(".object-box").removeClass("obj-left");
        $(".object-box").removeClass("Hello");
    }

    $('.object-box').removeClass("adjust-link-bar-with-first");
    if ($(".object-box:nth-child(3n+2)").hasClass("current-obj-active")) {
        $(this).next().next().addClass("adjust-link-bar-with-first");
    }

    $('.object-box').removeClass("adjust-link-bar-with-second");
    if ($(".object-box:nth-child(3n+3)").hasClass("current-obj-active")) {
        $(this).next().addClass("adjust-link-bar-with-second");
    }

    var val = $(this).children('div').find(".objLabel").text();
    $("#name").val(val);

    var caption = $(this).children('div').find(".caption p").text();
    $("#caption").val(caption);


    // if($(".object-box:nth-child(2)").hasClass("current-obj-active")){
        
    // }
});

// Close 
// function closeObj(){
//     let close = $(".close");
//     $(close).parent().parent().parent().remove();
//     $(close).parent().remove();
// }
$(document).on("click", ".close", function () {
    var parentElement = $(this).parent().parent(".object-box").remove();
    if ($('.object-box').length ==1) {
        
            $(".first-object").remove();
            parentElement.remove();
        
    } else {
        parentElement.remove();
    }
    // $(this).find(".first-object").remove();
});

$(".nav-link").click(function () {
    $("#property .accordion-button").removeClass("collapsed");
    $("#collapseProperty").addClass("show");
});

// Answer Call 
$(".answer-call-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box answer-call-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-phone.png" alt="Answers"> <span class="objLabel">Answers</span> </div><div class="col-8 caption"><p>Answers call caption will come here</p></div></div></div></div>';

        $('#mainBox').append(html);

        // alert("Empty on click Answer");
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box answer-call-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-phone.png" alt="Answers"> <span class="objLabel">Answers</span> </div><div class="col-8 caption"><p>Answers call caption will come here</p></div></div></div></div>';
        $('#mainBox').append(html);
        // alert("Not Empty");
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});

// Play 
$(".play-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span></div> </div><div class="object-box play-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-play.png" alt="Play"> <span class="objLabel">Play</span> </div><div class="col-8 caption"><p>Play caption will come here</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box play-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-play.png" alt="Play"> <span class="objLabel">Play</span> </div><div class="col-8 caption"><p>Play caption will come here</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});

// Prompt 
$(".prompt-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span>  </div></div><div class="object-box prompt-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-prompt.png" alt="Prompt"> <span class="objLabel">Prompt</span> </div><div class="col-8 caption"><p>Prompt caption will come here</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box prompt-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-prompt.png" alt="Prompt"> <span class="objLabel">Prompt</span> </div><div class="col-8 caption"><p>Prompt caption will come here</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});

// Speak 
$(".speak-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span></div> </div><div class="object-box speak-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-speak.png" alt="Speak"> <span class="objLabel">Speak</span> </div><div class="col-8 caption"><p>Speak caption will come here</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box speak-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-speak.png" alt="Speak"> <span class="objLabel">Speak</span> </div><div class="col-8 caption"><p>Speak caption will come here</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});

// Hang Up 
$(".hang-up-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box hang-up-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-hang-up.png" alt="Hang Up"> <span class="objLabel">Hang Up</span> </div><div class="col-8 caption"><p>Hang Up caption will come here</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box hang-up-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-hang-up.png" alt="Hang Up"> <span class="objLabel">Hang Up</span> </div><div class="col-8 caption"><p>Hang Up caption will come here</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});

// DB Connect 
$(".db-connect-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box db-connect-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-connect.png" alt="DB&nbsp;Connect"> <span class="objLabel">DB&nbsp;Connect</span> </div><div class="col-8 caption"><p>DB&nbsp;Connect caption will come here</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box db-connect-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-connect.png" alt="DB Connect"> <span class="objLabel">DB&nbsp;Connect</span> </div><div class="col-8 caption"><p>DB&nbsp;Connect caption will come here</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});



// DB Query 
$(".db-query-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box db-query-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="DB Query"> <span class="objLabel">DB Query</span> </div><div class="col-8 caption"><p>DB Query caption will come here</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box db-query-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="DB Query"> <span class="objLabel">DB Query</span> </div><div class="col-8 caption"><p>DB Connect caption will come here</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});


// Reject
$(".reject-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box reject-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt=" Reject"> <span class="objLabel"> Reject</span> </div><div class="col-8 caption"><p>Deny an inbound call basis certain criteria</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box reject-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Reject"> <span class="objLabel">Reject</span> </div><div class="col-8 caption"><p>Deny an inbound call basis certain criteria</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});


// Record
$(".record-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box record-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Record"> <span class="objLabel"> Record</span> </div><div class="col-8 caption"><p>Allow caller to record a message</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box record-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Record"> <span class="objLabel">Record</span> </div><div class="col-8 caption"><p>Allow caller to record a message</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});



// Playback
$(".playback-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box playback-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Playback"> <span class="objLabel"> Playback</span> </div><div class="col-8 caption"><p>To play the recorded message to caller</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box playback-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Playback"> <span class="objLabel">Playback</span> </div><div class="col-8 caption"><p>To play the recorded message to caller</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});
// dial
$(".dial-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box dial-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Dial"> <span class="objLabel"> Dial</span> </div><div class="col-8 caption"><p>Call an external number</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box dial-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Dial"> <span class="objLabel">Dial</span> </div><div class="col-8 caption"><p>Call an external number</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});

// Transfer
$(".transfer-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box transfer-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Transfer"> <span class="objLabel"> Transfer</span> </div><div class="col-8 caption"><p>Transfer to another service / number</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box transfer-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Transfer"> <span class="objLabel">Transfer</span> </div><div class="col-8 caption"><p>Transfer to another service / number</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});
// Conference
$(".conference-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box conference-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Conference"> <span class="objLabel"> Conference</span> </div><div class="col-8 caption"><p>Conference with external party</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box conference-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Conference"> <span class="objLabel">Conference</span> </div><div class="col-8 caption"><p>Conference with external party</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});
// Call Back
$(".callback-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box callback-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Call Back"> <span class="objLabel"> Call Back</span> </div><div class="col-8 caption"><p>Allow caller to schedule callback</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box callback-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Call Back"> <span class="objLabel">Call Back</span> </div><div class="col-8 caption"><p>Allow caller to schedule callback</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});
// email
$(".email-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box email-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Email"> <span class="objLabel">Email</span> </div><div class="col-8 caption"><p>Allow to trigger an email</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box email-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Email"> <span class="objLabel">Email</span> </div><div class="col-8 caption"><p>Allow to trigger an email</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});
// SMS
$(".sms-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box sms-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="SMS"> <span class="objLabel">SMS</span> </div><div class="col-8 caption"><p>Allow an SMS to be triggered</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box sms-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="SMS"> <span class="objLabel">SMS</span> </div><div class="col-8 caption"><p>Allow an SMS to be triggered</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});

// Disposition
$(".disposition-menu").click(function () {
    if ($('#mainBox').is(':empty')) {

        var html = '<div class="first-object"><div class="object-box start-obj">Start <span class="link-bar"></span> </div></div><div class="object-box disposition-obj current-obj-active"><div class="p-relative"><span class="close">x</span><span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Disposition"><span class="objLabel">Disposition</span> </div><div class="col-8 caption"><p>Outcome to be stored in DB</p></div></div></div></div>';

        $('#mainBox').append(html);
    } else {
        $(".object-box").removeClass("current-obj-active");
        let html = '<div class="object-box disposition-obj current-obj-active"><div class="p-relative"><span class="close">x</span> <span class="link-bar"></span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="Disposition"><span class="objLabel">Disposition</span> </div><div class="col-8 caption"><p>Outcome to be stored in DB</p></div></div></div></div>';
        $('#mainBox').append(html);
    }
    // return elementEmpty();
    $(".object-box").removeClass("obj-left");
    var val = $(".object-box.current-obj-active").children('div').find(".objLabel").text();
    $("#name").val(val);
    var caption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
    $("#caption").val(caption);

    $('#autowidthradio').prop("checked", true);
    $('#difinewidthradio').prop("checked", false);
    $("#defineWidth").val("").attr("disabled", true);
});





var widthFlag = 0;
$(document).ready(function () {
    saveBtn = function () {
        var fieldName = $('#name').val();
        var previousName = $(".object-box.current-obj-active").children('div').find(".objLabel").text();

        var fieldCaption = $("#caption").val();
        var previousCaption = $(".object-box.current-obj-active").children('div').find(".caption p").text();
        $(".object-box.current-obj-active").children('div').find(".objLabel").text(fieldName);
        $(".object-box.current-obj-active").children('div').find(".caption p").text(fieldCaption);

        if ($('#difinewidthradio').is(':checked')) {
            var defineWidth = $("#defineWidth").val();
            if (defineWidth > 250) {
                $(".object-box.current-obj-active").css("width", defineWidth);
                $(".object-box.current-obj-active").attr("data-width", defineWidth);
            } else if (defineWidth <= 250) {
                alert("Min 250px width is required.");
            }
        }

        if ($('#defineheightradio').is(':checked')) {
            var defineHeight = $("#defineHeight").val();
            if (defineHeight > 111) {
                $(".object-box.current-obj-active").css("height", defineHeight);
                $(".object-box.current-obj-active").attr("data-height", defineHeight);
            } else if (defineHeight <= 111) {
                alert("Min 111px height is required.");
            }
        }
        // if($("#defineWidth").val() == 250){
        //     var defineWidth = $("#defineWidth").val();
        //     console.log("width :"+defineWidth);
        //     $(".object-box.current-obj-active").style.setProperty('--objectWidth', `${defineWidth}px`);
        // }
        
        // if($("input[type=radio][value=defineWidth]").is(':checked')){
        //     r.style.setProperty('--objectWidth', `${defineWidth}px`);
        // }else if($("input[type=radio][value=autoWidth]").is(':checked')){
        //     r.style.setProperty('--objectWidth', "250px");
        // }

        
        if (fieldName != previousName && fieldCaption != previousCaption && defineWidth > 250 ) {
            alert("Name, Caption and Width Changed");
        }
        else if (fieldName != previousName) {
            alert("Name Changed");
        }
        else if (fieldCaption != previousCaption) {
            alert("Caption Changed");
        }
        else if (defineWidth > 250) {
            alert("Width Changed");
        }
        else {
            alert("Nothing Changed");
        }
    }
});

$('input[type=radio][name=autowidth]').change(function () {
    if (this.value == "autoWidth") {
        $("#defineWidth").attr("disabled", true);
        $("#defineWidth").val("");
    }
    else if (this.value == "defineWidth") {
        $("#defineWidth").attr("disabled", false);
        // var rs = getComputedStyle(r);
        // let num = rs.getPropertyValue('--objectWidth').slice(0, -2)*1;
        widthFlag = 1;
        $("#defineWidth").val("250");
    }
});

$('input[type=radio][name=radioheight]').change(function () {
    if (this.value == "autoHeight") {
        $("#defineHeight").attr("disabled", true);
        $("#defineHeight").val("");
    }
    else if (this.value == "defineHeight") {
        $("#defineHeight").attr("disabled", false);
        // var rs = getComputedStyle(r);
        // let num = rs.getPropertyValue('--objectWidth').slice(0, -2)*1;
        widthFlag = 1;
        $("#defineHeight").val("111");
    }
});

$(document).ready(function () {

    // Optimalisation: Store the references outside the event handler:
    // var $window = $(window);
    var $pane = $('#mainBox');

    function checkWidth() {
        var windowsize = $pane.width();
        if (windowsize >= 440) {
            //if the window is greater than 440px wide then turn on jScrollPane..
            // $pane.jScrollPane({
            //     scrollbarWidth: 15,
            //     scrollbarMargin: 52
            // });
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

$(function () {
    $("#mainBox").sortable();
    $("#mainBox").disableSelection();
});

// $( "#mainBox" ).draggable({
    
// });