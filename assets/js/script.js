class TimeBlock {
    constructor(time, localSave, status) {
        this.time = time;
        this.localSave = localSave;
        this.status = status;
    }

    displayBlocks() {
        // Displays a timeblock 
        $(".container").append(`<div class=${this.time}> </div>`)
        $(`.${this.time}`).append(`<p id="time${this.time}">${this.time}</p>`);
        $(`.${this.time}`).append(`<input type="text" id="inputBox${this.time}">`);
        $(`.${this.time}`).append(`<button id="saveBtn${this.time}"><i class="fa fa-save"></i></button>`);
        // style 
        $(`.${this.time}`).css("display", "flex");
        $(`.${this.time}`).css("justify-content", "center");
        $(`.${this.time}`).css("margin-bottom", "5px");
        // style time
        $(`#time${this.time}`).css("border-top", "dotted");
        $(`#time${this.time}`).css("border-bottom", "dotted");
        $(`#time${this.time}`).css("margin", "0%");
        $(`#time${this.time}`).css("padding-right", "5px");
        $(`#time${this.time}`).css("padding-bottom", "5px");
        // style inputBox
        $(`#inputBox${this.time}`).css("padding", "25px");
        $(`#inputBox${this.time}`).css("border", "none");
        $(`#inputBox${this.time}`).css("padding-right", "70%");
        // style saveBtn
        $(`#saveBtn${this.time}`).css("padding-left", "4%");
        $(`#saveBtn${this.time}`).css("padding-right", "4%");
        $(`#saveBtn${this.time}`).css("background-color", "#06aed5");
        $(`#saveBtn${this.time}`).css("color", "white");
        $(`#saveBtn${this.time}`).css("border-top-right-radius", "10%");
        $(`#saveBtn${this.time}`).css("border-bottom-right-radius", "10%");

        // TODO: make the <p> longer
    }
    statusColor() {
        // Change the color of the timeblock for the past, present or future
        $(`#inputBox${this.time}`).css("background-color", "lightgray");
        // TODO: Check time and make element proper color
    }
}

var test = new TimeBlock("9am", "","");
test.displayBlocks();
test.statusColor();

var test2 = new TimeBlock("10am", "","");
test2.displayBlocks();
test2.statusColor();


// Displays the current Day date
$('#currentDay').text(moment().format("dddd MMMM Do"));