// created an object to store hour keys
let hourTexts = {
    '9': '',
    '10': '',
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
    //injects current date and time into header
    $('#currentDay').html(rightNow.format("MMM DD YYYY [at] hh:mm:ss a"));
    setInterval(function () {
        $('#currentDay').html(rightNow.format("MMM DD YYYY [at] hh:mm:ss a"));
        // when hour changes, updates the styles/classes of the present and next future timeblocks
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
    // Saves plans and hour to local storage
    $('.saveBtn').click(function () {
        const newText = $(this).siblings('.plans').val();
        const hour = $(this).parent().attr('id').split('hour')[1];
        //stores the time and text objects in local storage
        hourTexts[hour] = newText;
        localStorage.setItem("hourTexts", JSON.stringify(hourTexts));
    });

    // load saved hour texts from local storage and only displays if not null  
    const savedHourTexts = localStorage.getItem("hourTexts");
    if (savedHourTexts !== null) {
        hourTexts = JSON.parse(savedHourTexts);
    }
    const currentHour = rightNow.hour();
    // for key in object
    for (const hour in hourTexts) {
        const text = hourTexts[hour];
        const timeBlockTextEl = $(`#hour${hour} .plans`).eq(0);
        timeBlockTextEl.val(text);
        // update time block styles/class
        timeBlockTextEl.removeClass('future');
        timeBlockTextEl.removeClass('present');
        timeBlockTextEl.removeClass('past');
        // compares hour of plans to current hour and adds class as necessary
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
});

