$(document).ready(function() {
    $("container").clone().appendTo("body");
})

// Displays the current Day date
$('#currentDay').text(moment().format("dddd MMMM Do"));

$('#saveBtn').click(function () {
    console.log("Btn Clicked")
});

