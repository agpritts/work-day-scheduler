var timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var tasks = $("textarea");
var saveBtn = $(".saveBtn")
var displayTime = function() {
    var time = moment().format('LL');
    $("#currentDay").html(time)
}

$(document).ready(function() {
    displayTime();
});

$("h4").each(function(index) {
    $(this).text(timeArray[index]);
});

$("textarea").each(function(index) {
    if (index + 8 < moment().hours()) {
        $(this).addClass("past")
    }
    else if (index + 8 === moment().hours()) {
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }
    /* var loadTask = localStorage.getItem($(this).data("hour"));
    console.log(loadTask);
    $(this).text(loadTask); */
});

var saveTasks = function(event) {
    event.preventDefault();
    localStorage.setItem($(this).siblings("h4").attr("id"), $(this).siblings("textarea").val());
};

saveBtn.on("click", saveTasks)