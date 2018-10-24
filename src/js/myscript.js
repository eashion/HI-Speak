$("#words").click(function(){
    $("#buttonDiv").css("display", "none");
    $("#wordsDiv").css("display", "flex");
});

$(".backbutton").click(function(){
    $(this).parent('div').css("display", "none");
    $("#buttonDiv").css("display", "flex");
});