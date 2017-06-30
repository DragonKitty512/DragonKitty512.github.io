function sayThatWasEasy() {
var thatWasEasy = new Audio("that_was_easy (2).mp3");
thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress (DelegateKeypress)

function DelegateKeypress (event) {
    if (event.charCode == 32) {
        $("#easy").trigger("click");
    }
}