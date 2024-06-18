document.addEventListener("DOMContentLoaded", function () {
    var rightcard = false;
    var tempblock;
    var tempblock2;
    document.getElementById("blocklist").innerHTML = '<div class="nav-item answer-call-menu blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"> <div class="grabme nav-link"><img src="img/menu-answer-call.png" />Answer</div><div class="blockin"></div></div><div class="blockelem create-flowy noselect nav-item play-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme nav-link"><img src="img/menu-play.png" alt=""> Play</div><div class="blockin"></div></div><div class="nav-item prompt-menu blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme nav-link"><img src="img/menu-prompt.png" alt=""> Prompt</div><div class="blockin"></div></div><div class="blockelem create-flowy noselect nav-item speak-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="4"><div class="grabme nav-link"><img src="img/menu-speak.png" alt=""> Speak</div><div class="blockin"></div></div> <div class="blockelem create-flowy noselect nav-item hang-up-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="5"><div class="grabme nav-link"><img src="img/menu-hang-up.png" alt=""> Hang Up</div><div class="blockin"></div></div> <div class="blockelem create-flowy noselect nav-item db-connect-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="6"><div class="grabme nav-link"><img src="img/menu-db-connect.png" alt=""> DB Connect</div><div class="blockin"></div></div><div class="blockelem create-flowy noselect nav-item db-query-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="7"><div class="grabme nav-link"><img src="img/menu-db-query.png" alt=""> DB query</div><div class="blockin"></div></div>';
    flowy(document.getElementById("canvas"), drag, release, snapping);
    function addEventListenerMulti(type, listener, capture, selector) {
        var nodes = document.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].addEventListener(type, listener, capture);
        }
    }
    function snapping(drag, first) {
        var grab = drag.querySelector(".grabme");
        grab.parentNode.removeChild(grab);
        var blockin = drag.querySelector(".blockin");
        blockin.parentNode.removeChild(blockin);
        if (drag.querySelector(".blockelemtype").value == "1") {
            drag.innerHTML += '<div class="object-box answer-call-obj"><div class="pos-relative"><span class="close">x</span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-phone.png" alt="Answers"> <span class="objLabel">Answer</span> </div><div class="col-8 caption"><p>Answers call caption will come here</p></div></div></div></div>';
        } else if (drag.querySelector(".blockelemtype").value == "2") {
            drag.innerHTML += '<div class="object-box play-obj"><div class="pos-relative"><span class="close">x</span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-play.png" alt="Play"> <span class="objLabel">Play</span> </div><div class="col-8 caption"><p>Play caption will come here</p></div></div></div></div>';
        } else if (drag.querySelector(".blockelemtype").value == "3") {
            drag.innerHTML += '<div class="object-box prompt-obj"><div class="pos-relative"><span class="close">x</span> <div class="row"><div class="col-4 text-center"><img src="img/obj-icon-prompt.png" alt="Prompt"> <span class="objLabel">Prompt</span> </div><div class="col-8 caption"><p>Prompt caption will come here</p></div></div></div></div>';
        } else if (drag.querySelector(".blockelemtype").value == "4") {
            drag.innerHTML += '<div class="object-box speak-obj"><div class="pos-relative"><span class="close">x</span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-speak.png" alt="Speak"> <span class="objLabel">Speak</span> </div><div class="col-8 caption"><p>Speak caption will come here</p></div></div></div></div>';
        } else if (drag.querySelector(".blockelemtype").value == "5") {
            drag.innerHTML += '<div class="object-box hang-up-obj"><div class="pos-relative"><span class="close">x</span> <div class="row"><div class="col-4 text-center"><img src="img/obj-icon-hang-up.png" alt="Hang Up"> <span class="objLabel">Hang Up</span> </div><div class="col-8 caption"><p>Hang Up caption will come here</p></div></div></div></div>';
        } else if (drag.querySelector(".blockelemtype").value == "6") {
            drag.innerHTML += '<div class="object-box db-connect-obj"><div class="pos-relative"><span class="close">x</span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-connect.png" alt="DB Connect"> <span class="objLabel">DB Connect</span> </div><div class="col-8 caption"><p>DB Connect caption will come here</p></div></div></div></div>';
        } else if (drag.querySelector(".blockelemtype").value == "7") {
            drag.innerHTML += '<div class="object-box db-query-obj"><div class="pos-relative"><span class="close">x</span><div class="row"><div class="col-4 text-center"><img src="img/obj-icon-db-query.png" alt="DB Query"> <span class="objLabel">DB Query</span> </div><div class="col-8 caption"><p>DB Connect caption will come here</p></div></div></div></div>';
        }
        return true;
    }
    function drag(block) {
        block.classList.add("blockdisabled");
        tempblock2 = block;
    }
    function release() {
        if (tempblock2) {
            tempblock2.classList.remove("blockdisabled");
        }
    }
    // var disabledClick = function () {
    //     document.querySelector(".navactive").classList.add("navdisabled");
    //     document.querySelector(".navactive").classList.remove("navactive");
    //     this.classList.add("navactive");
    //     this.classList.remove("navdisabled");
    //     if (this.getAttribute("id") == "triggers") {
    //         document.getElementById("blocklist").innerHTML = '<div class="nav-item answer-call-menu blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"> <div class="grabme nav-link"><img src="img/menu-answer-call.png">Answer</div><div class="blockin"></div></div><div class="blockelem create-flowy noselect nav-item play-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme nav-link"><img src="img/menu-play.png" alt=""> Play</div><div class="blockin"></div></div><div class="nav-item prompt-menu blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme nav-link"><img src="img/menu-prompt.png" alt=""> Prompt</div><div class="blockin"></div></div><div class="blockelem create-flowy noselect nav-item speak-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="4"><div class="grabme nav-link"><img src="img/menu-speak.png" alt=""> Speak</div><div class="blockin"></div></div> <div class="blockelem create-flowy noselect nav-item hang-up-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="5"><div class="grabme nav-link"><img src="img/menu-hang-up.png" alt=""> Hang Up</div><div class="blockin"></div></div> <div class="blockelem create-flowy noselect nav-item db-connect-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="6"><div class="grabme nav-link"><img src="img/menu-db-connect.png" alt=""> DB Connect</div><div class="blockin"></div></div><div class="blockelem create-flowy noselect nav-item db-query-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="7"><div class="grabme nav-link"><img src="img/menu-db-query.png" alt=""> DB query</div><div class="blockin"></div></div>';
    //     } else if (this.getAttribute("id") == "actions") {
    //         document.getElementById("blocklist").innerHTML = '<div class="nav-item answer-call-menu blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"> <div class="grabme nav-link"><img src="img/menu-answer-call.png">Answer</div><div class="blockin"></div></div><div class="blockelem create-flowy noselect nav-item play-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme nav-link"><img src="img/menu-play.png" alt=""> Play</div><div class="blockin"></div></div><div class="nav-item prompt-menu blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme nav-link"><img src="img/menu-prompt.png" alt=""> Prompt</div><div class="blockin"></div></div><div class="blockelem create-flowy noselect nav-item speak-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="4"><div class="grabme nav-link"><img src="img/menu-speak.png" alt=""> Speak</div><div class="blockin"></div></div> <div class="blockelem create-flowy noselect nav-item hang-up-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="5"><div class="grabme nav-link"><img src="img/menu-hang-up.png" alt=""> Hang Up</div><div class="blockin"></div></div> <div class="blockelem create-flowy noselect nav-item db-connect-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="6"><div class="grabme nav-link"><img src="img/menu-db-connect.png" alt=""> DB Connect</div><div class="blockin"></div></div><div class="blockelem create-flowy noselect nav-item db-query-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="7"><div class="grabme nav-link"><img src="img/menu-db-query.png" alt=""> DB query</div><div class="blockin"></div></div>';
    //     } else if (this.getAttribute("id") == "loggers") {
    //         document.getElementById("blocklist").innerHTML = '<div class="nav-item answer-call-menu blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="1"> <div class="grabme nav-link"><img src="img/menu-answer-call.png">Answer</div><div class="blockin"></div></div><div class="blockelem create-flowy noselect nav-item play-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="2"><div class="grabme nav-link"><img src="img/menu-play.png" alt=""> Play</div><div class="blockin"></div></div><div class="nav-item prompt-menu blockelem create-flowy noselect"><input type="hidden" name="blockelemtype" class="blockelemtype" value="3"><div class="grabme nav-link"><img src="img/menu-prompt.png" alt=""> Prompt</div><div class="blockin"></div></div><div class="blockelem create-flowy noselect nav-item speak-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="4"><div class="grabme nav-link"><img src="img/menu-speak.png" alt=""> Speak</div><div class="blockin"></div></div> <div class="blockelem create-flowy noselect nav-item hang-up-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="5"><div class="grabme nav-link"><img src="img/menu-hang-up.png" alt=""> Hang Up</div><div class="blockin"></div></div> <div class="blockelem create-flowy noselect nav-item db-connect-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="6"><div class="grabme nav-link"><img src="img/menu-db-connect.png" alt=""> DB Connect</div><div class="blockin"></div></div><div class="blockelem create-flowy noselect nav-item db-query-menu"><input type="hidden" name="blockelemtype" class="blockelemtype" value="7"><div class="grabme nav-link"><img src="img/menu-db-query.png" alt=""> DB query</div><div class="blockin"></div></div>';
    //     }
    // }
    // addEventListenerMulti("click", disabledClick, false, ".side");
    // document.getElementById("close").addEventListener("click", function () {
    //     if (rightcard) {
    //         rightcard = false;
    //         document.getElementById("properties").classList.remove("expanded");
    //         setTimeout(function () {
    //             document.getElementById("propwrap").classList.remove("itson");
    //         }, 300);
    //         tempblock.classList.remove("selectedblock");
    //     }
    // });

    // document.getElementById("removeblock").addEventListener("click", function () {
    //     flowy.deleteBlocks();
    // });
    var aclick = false;
    var noinfo = false;
    var beginTouch = function (event) {
        aclick = true;
        noinfo = false;
        if (event.target.closest(".create-flowy")) {
            noinfo = true;
        }
    }
    var checkTouch = function (event) {
        aclick = false;
    }
    var doneTouch = function (event) {
        if (event.type === "mouseup" && aclick && !noinfo) {
            if (!rightcard && event.target.closest(".block") && !event.target.closest(".block").classList.contains("dragging")) {
                tempblock = event.target.closest(".block");
                rightcard = true;
                // document.getElementById("properties").classList.add("expanded");
                // document.getElementById("propwrap").classList.add("itson");
                tempblock.classList.add("selectedblock");
            }
        }
    }
    addEventListener("mousedown", beginTouch, false);
    addEventListener("mousemove", checkTouch, false);
    addEventListener("mouseup", doneTouch, false);
    addEventListenerMulti("touchstart", beginTouch, false, ".block");
});





$(document).on("click", ".object-box", function () {
    $(".object-box").removeClass("current-obj-active");
    $(".object-box").removeAttr("style");
    $(this).addClass("current-obj-active");
    var temwidth = $(this).attr("data-width");
    var temheight = $(this).attr("data-height");

    $("#property .accordion-button").removeClass("collapsed");
    $("#collapseProperty").addClass("show");

    if (temwidth) {
        $(this).css("width", temwidth + "px");
        $('#difinewidthradio').prop("checked", true);
        $("#defineWidth").val(temwidth).attr("disabled", false);
    } else {
        $('#autowidthradio').prop("checked", true);
        $('#difinewidthradio').prop("checked", false);
        $("#defineWidth").val("").attr("disabled", true);
    }

    if (temheight) {
        $(this).css("height", temheight + "px");
        $('#defineheightradio').prop("checked", true);
        $("#defineHeight").val(temheight).attr("disabled", false);
    } else {
        $('#autowidthradio').prop("checked", true);
        $('#defineheightradio').prop("checked", false);
        $("#defineHeight").val("").attr("disabled", true);
    }

    var val = $(this).children('div').find(".objLabel").text();
    $("#name").val(val);

    var caption = $(this).children('div').find(".caption p").text();
    $("#caption").val(caption);

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

        if (fieldName != previousName && fieldCaption != previousCaption && defineWidth > 250) {
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