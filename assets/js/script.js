class TimeBlock {
    constructor(name, time, date) {
        this.name = name;
        this.time = time;
        this.date = date;
    }

    displayBlocks() {
        // Displays a timeblock 
        $(".container").append(`<div class=${this.name}> </div>`);
        $(`.${this.name}`).append(`<p id="time${this.name}">${this.name}</p>`);
        $(`.${this.name}`).append(`<input type="text" id="inputBox${this.name}">`);
        $(`.${this.name}`).append(`<button id="saveBtn${this.name}"><i class="fa fa-save"></i></button>`);
        // style div
        $(`.${this.name}`).css("display", "flex");
        $(`.${this.name}`).css("justify-content", "center");
        $(`.${this.name}`).css("margin-bottom", "5px");
        // style time
        $(`#time${this.name}`).css("border-top", "dotted");
        $(`#time${this.name}`).css("border-bottom", "dotted");
        $(`#time${this.name}`).css("margin", "0%");
        $(`#time${this.name}`).css("padding", "5px");
        $(`#time${this.name}`).css("padding-left", "40px");
        // style inputBox
        $(`#inputBox${this.name}`).css("padding", "25px");
        $(`#inputBox${this.name}`).css("border", "none");
        $(`#inputBox${this.name}`).css("padding-right", "70%");
        // style saveBtn
        $(`#saveBtn${this.name}`).css("padding-left", "4%");
        $(`#saveBtn${this.name}`).css("padding-right", "4%");
        $(`#saveBtn${this.name}`).css("background-color", "#06aed5");
        $(`#saveBtn${this.name}`).css("color", "white");
        $(`#saveBtn${this.name}`).css("border-top-right-radius", "10%");
        $(`#saveBtn${this.name}`).css("border-bottom-right-radius", "10%");
        // Checks if there is anything in localStorage
        var savedData = localStorage.getItem(this.name);
        if (savedData){
            console.log("True")
        }
    }

    statusColor() {
        // Change the color of the timeblock for the past, present or future
        var currentTime = moment().format("lll");
        var dowDateTime = moment(`${this.date} ${this.time}`);
        if (dowDateTime.isAfter(currentTime)) {
            $(`#inputBox${this.name}`).css("background-color", "lightgray");
        } else if (dowDateTime.isBefore(currentTime)) {
            $(`#inputBox${this.name}`).css("background-color", "rgb(255, 90, 90)");
        } else {
            $(`#inputBox${this.name}`).css("background-color", "rgb(244, 255, 91)");
        }
    }
    onClick () {
        var thName = this.name;
        var objs = {
            inputVal: $(`#inputBox${this.name}`).val(),
            date: this.date
        };
        $(`#saveBtn${this.name}`).click(function () {
            localStorage.setItem(thName,
                JSON.stringify(objs) 
            )
            console.log(objs)
            
        });
    }

}

var test = new TimeBlock("9am", "9:00 AM", moment().format("MMM D Y"));
test.displayBlocks()
test.statusColor()
test.onClick()

// Displays the current Day date
$('#currentDay').text(moment().format("MMMM Do YYYY"));

// TODO: Make the this.date save the date to localStorage when the saveBtn is clicked
// TODO: Make a hover for the Btn
