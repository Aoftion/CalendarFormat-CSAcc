document.addEventListener("DOMContentLoaded", function(event) { 
    let calendar = calendarFormat();
    console.log("calendar :", calendar.calendarDate()); // without inputeDateTime
    var inputDateTime = "01/02/2016 23:24:01"
    
    document.getElementById('demoDateTime').innerHTML = inputDateTime ;
    
    // compareCalendar(inputDateTime)
    // compareGetGroup(inputDateTime)
    // compareNextGroup(inputDateTime)
    // comparePrevGroup(inputDateTime)
});
