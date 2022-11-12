
let hourTexts = {
    '9': '',
    '10':'',
    '11': '',
    '12': '',
    '13': '',
    '14': '',
    '15': '',
    '16': '',
    '17': '',
}

// Displays current date and time
let rightNow = dayjs();
let before = rightNow;

//executes Jquery only once entire page loads
$(document).ready(function () {
    $('#currentDay').html(rightNow);
    setInterval(function(){
        $('#currentDay').html(rightNow.format("MMM DD YYYY [at] hh:mm:ss a"));
        // when hour changes, update the styles/classes of the present and next future timeblocks
        if (rightNow.hour() > before.hour()) {
            // edge case: make sure before hour is valid between 9am to 5pm
            if (before.hour() >= 9 && before.hour() <= 17) {
                const timeBlockTextBefore = $(`#hour${before.hour()} .plans`).eq(0);
                timeBlockTextBefore.removeClass("present");
                timeBlockTextBefore.addClass("past");
            }
            // edge case: make sure rightnow hour is valid between 9am to 5pm
            if (rightNow.hour() >= 9 && rightNow.hour() <= 17) {
                const timeBlockTextNow = $(`#hour${rightNow.hour()} .plans`).eq(0);
                timeBlockTextNow.removeClass("future");
                timeBlockTextNow.addClass("present");
            }
        }

        // update the before and new now
        before = rightNow;
        rightNow = rightNow.add(1, 's');
        
    }, 1000);



    // adds click listener to save button
    // for text -indicates "this" is a sibling of the save button called "plans" which is the class in the text input area
    // for time - indicates "this" is the parent of the save button with an attribute of "id" which stores the time value as part of the "id"
    // text stores the user input plans, time stores the "id" of each time block div which contains the hour of each time block
    $('.saveBtn').click(function () {
        const newText = $(this).siblings('.plans').val();
        const hour = $(this).parent().attr('id').split('hour')[1];
        //stores the time and text objects in local storage
        hourTexts[hour] = newText;
        localStorage.setItem("hourTexts", JSON.stringify(hourTexts));
    });

    //retrieves plans input from local storage which also contains time value we want to parse and split
    
    // load saved hour texts from before
    const savedHourTexts = localStorage.getItem("hourTexts"); 
    if (savedHourTexts !== null){
        hourTexts = JSON.parse(savedHourTexts);
    }
    const currentHour = rightNow.hour();// dayjs().hour();
    // for key in object
    for (const hour in hourTexts) {
        const text = hourTexts[hour];
        const timeBlockTextEl = $(`#hour${hour} .plans`).eq(0);
        timeBlockTextEl.val(text);
        // update time block styles/class
        timeBlockTextEl.removeClass('future');
        timeBlockTextEl.removeClass('present');
        timeBlockTextEl.removeClass('past');

        const hourInteger = parseInt(hour);
        if (hourInteger < currentHour) {
            timeBlockTextEl.addClass('past');
        }
        else if (hourInteger === currentHour) {
            timeBlockTextEl.addClass('present');
        }
        else {
            timeBlockTextEl.addClass('future');
        }
    }




    // $('#hour9 .plans').val(localStorage.getItem("hour9"));
    // $('#hour10 .plans').val(localStorage.getItem("hour10"));
    // $('#hour12 .plans').val(localStorage.getItem("hour11"));
    // $('#hour13 .plans').val(localStorage.getItem("hour12"));
    // $('#hour14 .plans').val(localStorage.getItem("hour13"));
    // $('#hour15 .plans').val(localStorage.getItem("hour14"));
    // $('#hour15 .plans').val(localStorage.getItem("hour15"));
    // $('#hour16 .plans').val(localStorage.getItem("hour16"));
    // $('#hour17 .plans').val(localStorage.getItem("hour17"));

    // function compareTime() {
    //     let currentHour = dayjs().hour();

    //     $('.time-block').each(function () {
    //         let timeCode = parseInt($(this).attr('id').split('hour')[1]);

    //         if (timeCode < currentHour) {
    //             $(this).removeClass('future');
    //             $(this).removeClass('present');
    //             $(this).addClass('past');
    //         }
    //         else if (timeCode === currentHour) {
    //             $(this).removeClass('past');
    //             $(this).removeClass('future');
    //             $(this).addClass('present');
    //         }
    //         else {
    //             $(this).removeClass('past');
    //             $(this).removeClass('present');
    //             $(this).addClass('future');
    //         }
    //     })
    // }
});

