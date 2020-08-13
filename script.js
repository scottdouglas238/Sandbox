$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id")//id is hour 9 and 10 and
        localStorage.setItem(time, value);
    });

    function timeUpdate(){
        var currentTime = moment().hours()
        $(".time-block").each(function(){
            var hourBlock = parseInt($(this).attr("id").split("-")[1])
            if (hourBlock < currentTime){
                $(this).addClass("past")
            } else if(hourBlock === currentTime){
                $(this).removeClass("past")
                $(this).addClass("present")
            } else {
               $(this).removeClass("past")
               $(this).removeClass("present")
               $(this).addClass("future")
            }
        })//this will trigger the class of time block
    }
     timeUpdate()

     $("#hour-9 .description").val(localStorage.getItem("hour-9"))//this is to trigger the time block
     $("#hour-10 .description").val(localStorage.getItem("hour-10"))
     $("#hour-11 .description").val(localStorage.getItem("hour-11"))
     $("#hour-12 .description").val(localStorage.getItem("hour-12"))
     $("#hour-13 .description").val(localStorage.getItem("hour-13"))
     $("#hour-14 .description").val(localStorage.getItem("hour-14"))
     $("#hour-15 .description").val(localStorage.getItem("hour-15"))
     $("#hour-16 .description").val(localStorage.getItem("hour-16"))
     $("#hour-17 .description").val(localStorage.getItem("hour-17"))

     $("#currentDay").text(moment().format("MMMM Do, dddd"))

})