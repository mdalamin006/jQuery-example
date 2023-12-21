$(document).ready(function () {
    // moodchange
    $(".btnMood").on("click", function () {
        $(".backGround").toggleClass("moodChange");
    })
    // 
    $(".show").on("click", function () {
        $(".para").show(2000);
    });
    $(".hide").on("click", function () {
        $(".para").hide(2000);
    });
    $(".togg").on("click", function () {
        $(".para").toggle(2000);
    });
    // change Div
    // $(".textChange").
    $(".textChange").on("click", function () {
        $(".tc").text("This text is change");
    })
    // Adding Text
    $(".addBtn").on("click", function () {
        $(".addText").append(", This text is added");
    })
    // Add element
    $(".addElement").on("click", function () {
        let myAdd = $("<p></p>").text("This text add by jquery");
        $(".elementPara").append(myAdd);
    })
    // Attribute manipulation
    $(".attrBute").on("click", function () {
        $("a").attr("href", "https://mdalamin006.fun/");
        let lastValue = $("a").attr("href");
        $(".attPara").text(lastValue);
    })
    // Click
    $(".clickStyle").on("click", function () {
        // $(".cssStyle").css("color","red");
        // $(".cssStyle").css({"color":"red","font-size":"5rem"});
        $(".cssStyle").toggleClass("style", "slow");
    })
    // Click2
    $(".myButton").on("mouseover", function () {
        let value = this.innerHTML;
        $(".demo").text(value + " is clicked")
    })
    // Input demo project
    $(".loginBtn").on("click", function () {
        let password1 = $(".pass1").val();
        let password2 = $(".pass2").val();
        if (password1 != "" && password2 != "") {
            if (password1 == password2) {
                $(".passtext").text("Password is match,Login succesfully");
            }
            else {
                $(".passtext").text("Password didn't match");
            }
        }
        else {
            alert("please enter a password")
        }
    });
    // fade out
    $(".fadeOutBtn").on("click", function () {
        $(".fadeOut").fadeOut(2000);
    });
    $(".fadeOutIn").on("click", function () {
        $(".fadeOut").fadeIn(2000);
    });
    $(".fadeOutToggle").on("click", function () {
        $(".fadeOut").fadeToggle(2000);
    });
    // SLide 
    $(".slideUp").on("click", function () {
        $(".slideDiv").slideUp(2000);
    })
    $(".slideDown").on("click", function () {
        $(".slideDiv").slideDown(2000);
    })
    $(".slideToggle").on("click", function () {
        $(".slideDiv").slideToggle(2000);
    })
    // Animate
    $(".animBtn").on("click", function () {
        $(".divAnim").animate({
            width: "300px",
            height: "300px",
            marginLeft: "20%",
            borderRadius: "30px",
            backgroundColor: "yellow",
        }, 2000);
    });
    // Fade toggle
    $(".fadeBtn").on("click", function () {
        $(".div1").fadeToggle();
        $(".div3").fadeToggle("slow");
        $(".div2").fadeToggle(3000);
    });
    // Slide toggle
    $(".slideBtn").on("click", function () {
        $(".div4").slideToggle();
        $(".div5").slideToggle("slow");
        $(".div6").slideToggle(3000);
    })

    // slide toggle
    $(".headText").on("click", function () {
        $(".slidePara").slideToggle(1000);
    })
    // Animation
    $(".animaBtn").on("mouseover", function () {
        $(".anim").animate({
            fontSize: "50px",
            marginLeft: '350px',
            width: "300px",
            height: "300px",
            borderRadius: "50px",
        }, 2000)
    })
    $(".stopBtn").on("mouseover", function () {
        $(".anim").stop();
    })
    // // JQ dimenson
    $(".jqBtn").on("click", function () {
        // let txt = $(".divJQ").width();
        // let txt2 = $(".divJQ").height();
        // let txt1 = $(".p").text("width of this div: " + txt + "px" + "<br>" +
        //     "Height of this div is:" + txt2 + "px"
        // );

        // $(".divJQ").html(txt1);
        // var txt = "";
        // txt += "Width of div: " + $("#div1").width() + "</br>";
        // txt += "Height of div: " + $("#div1").height();
        // $("#div1").html(txt)
        // var txt = "";
        // txt += "width of this div :" + $(".divJQ").width() + "</br>";
        // txt =txt+ "Height of this div :" + $(".divJQ").height();

        // $(".divJQ").html(txt);

        let txt = "Width:" + $(".divJQ").width() + "px" + "<br>"
            + "Height:" + $(".divJQ").height() + "px" + "<br>"
            + "Outer Width:" + $(".divJQ").outerWidth(true) + "px" + "<br>"
            + "Outer Height:" + $(".divJQ").outerHeight(true) + "px" + "<br>"
            + "Inner Width:" + $(".divJQ").innerWidth() + "px" + "<br>"
            + "inner height:" + $(".divJQ").innerHeight() + "px" + "<br>"
        $(".divJQ").html(txt);
    })
    // 
    $(".ajBtn").on("click", function () {
        $(".ajDiv");
    })
    // Filter
    $("#myInput").on("keyup", function () {
        let value = $("#myInput").val().toLowerCase();
        $("#tableBode tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })

}); 