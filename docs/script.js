var timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var tasks = $("textarea");
var saveBtn = $(".saveBtn")

var displayTime = function() {
    var time = moment().format('dddd, MMMM Do');
    $("#currentDay").html(time)
};

$(document).ready(function() {
    displayTime();
    loadTask();
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
});

var loadTask = function() {
    var storage = window.localStorage
    storage.getItem($)
    for (var i = 0; i < storage.length; i++) {
        storage.key(i);
        var cKey = storage.key(i);
        var texty = cKey + "M";
        $("#" + texty).append(storage.getItem(cKey));
    }
};

var saveTasks = function(event) {
    event.preventDefault();
    localStorage.setItem($(this).siblings("h4").attr("id"), $(this).siblings("textarea").val());
};

saveBtn.on("click", saveTasks);
