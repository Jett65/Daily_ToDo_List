// Displays the current Day date
$('#currentDay').text(moment().format("dddd MMMM Do"));

/* Adds the input of the timeblock to localStorage
    and sets the current value of the input to what is
    contained in localStorage*/
var localSave = JSON.parse(localStorage.getItem("9am"));

if (localSave) {
    $("#inputFiled").val(localSave);
}

$('#saveBtn').click(function () {
    localStorage.setItem("9am",
        JSON.stringify($("#inputFiled").val()));
});

// Change the color of the timeblock
if 

// Duplicate the timeBlocks
/*for (var i = 0; i < 2; i++) {
    $(document).ready(function() {
        $(".container").clone().appendTo("body");
        $("#time").textContent = 10
    });
}
$(".container").clone().appendTo("body");*/

// make it duplacate nine

/*<div class="container">
      <p id="time">9am</p>
      <input type="text" id= "inputFiled">
      <button id="saveBtn">

        <i class="fa fa-save"></i>
      </button>
    </div>*/

// 