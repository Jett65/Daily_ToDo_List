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
        $(`.${this.name}`).css("margin-bottom", "3px");
        // style time
        $(`#time${this.name}`).css("border-top", "dotted");
        $(`#time${this.name}`).css("border-bottom", "dotted");
        $(`#time${this.name}`).css("border-right", "solid");
        $(`#time${this.name}`).css("aline-content", "center");
        $(`#time${this.name}`).css("margin", "0%");
        $(`#time${this.name}`).css("padding", "5px");
        $(`#time${this.name}`).css("padding-left", "40px");
        $(`#time${this.name}`).css("min-width", "90px");
        // style inputBox
        $(`#inputBox${this.name}`).css("padding", "25px");
        $(`#inputBox${this.name}`).css("border", "none");
        $(`#inputBox${this.name}`).css("width", "70%");
        // style saveBtn
        $(`#saveBtn${this.name}`).css("padding-left", "4%");
        $(`#saveBtn${this.name}`).css("padding-right", "4%");
        $(`#saveBtn${this.name}`).css("background-color", "#06aed5");
        $(`#saveBtn${this.name}`).css("color", "white");
        $(`#saveBtn${this.name}`).css("border-top-right-radius", "10%");
        $(`#saveBtn${this.name}`).css("border-bottom-right-radius", "10%");
        // Checks if there is anything in localStorage
        var savedData = localStorage.getItem(this.name);
        if (savedData) {
            var pareedData = JSON.parse(savedData);
            $(`#inputBox${this.name}`).val(pareedData["inputVal"]);
        }
    }

    statusColor() {
        // Change the color of the timeblock for the past, present or future
        var ti = moment().format("h:mm A");
        var da = moment().format("MMM DD YYYY");
        var currentTime = moment(`${da} ${ti}`);
        var dateWithTime = moment(`${this.date} ${this.time}`);
        var nextHour = moment(`${da} ${moment(dateWithTime).add(1, 'hour').format('h:00 A')}`);
        if ($(`#inputBox${this.name}`).val() == "") {
            $(`#inputBox${this.name}`).css("background-color", "lightgray");
        } else {
            if (dateWithTime.isAfter(currentTime)) {
                $(`#inputBox${this.name}`).css("background-color", "lightgreen");
            } else if (currentTime.isBetween(dateWithTime, nextHour) || currentTime.isSame(dateWithTime)) {
                $(`#inputBox${this.name}`).css("background-color", "rgb(244, 255, 91)");

            } else if (dateWithTime.isBefore(currentTime)) {
                $(`#inputBox${this.name}`).css("background-color", "rgb(255, 90, 90)");
            }
            console.log(dateWithTime)
        }
    }

    onClick() {
        // Called to check if the batten is clicked
        var thName = this.name;
        var thDate = this.date;
        $(`#saveBtn${this.name}`).click(function () {
            var objs = {
                inputVal: $(`#inputBox${thName}`).val(),
                date: thDate
            };
            localStorage.setItem(thName,
                JSON.stringify(objs)
            );
            location.reload();
        });
    }
}


// Displays the current Day date
$('#currentDay').text(moment().format("MMMM Do YYYY"));

// Displays the time blocks ----

function callTieBlock(inst) {
    // Calls the time functions for the given instance of  timeBlock\
    inst.displayBlocks();
    inst.statusColor();
    inst.onClick();
}

//gets the current date
var date = moment().format("MMM DD YYYY");

// TimeBlock instancies
var nineAM = new TimeBlock("9am", "9:00 AM", date,);
callTieBlock(nineAM);
var tenAM = new TimeBlock("10am", "10:00 AM", date,);
callTieBlock(tenAM);
var elevenAM = new TimeBlock("11am", "11:00 AM", date,);
callTieBlock(elevenAM);
var twelvePM = new TimeBlock("12am", "12:00 PM", date,);
callTieBlock(twelvePM);
var onePM = new TimeBlock("1pm", "1:00 PM", date,);
callTieBlock(onePM);
var twoPM = new TimeBlock("2pm", "2:00 PM", date,);
callTieBlock(twoPM);
var threePM = new TimeBlock("3pm", "3:00 PM", date,);
callTieBlock(threePM);
var fourPM = new TimeBlock("4pm", "5:00 PM", date,);
callTieBlock(fourPM);
var fivePM = new TimeBlock("5pm", "5:00 PM", date,);
callTieBlock(fivePM);