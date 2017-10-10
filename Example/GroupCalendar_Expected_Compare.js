function expectedCalendar(){
    let rc = []
    rc.push("01/02/2016")
    rc.push("23:24:01")
    rc.push("01/02/2016 23:24:01")
    rc.push(new Date( 2016, 1, 01, 23, 24, 01 ).toString())

    return rc
}

function actualCalendar(epouchTime){
    let calendar = calendarFormat(epouchTime, expectedDateForm="dd-mm-yyyy", expectedTimeForm="hh:mm:ss");
    let ac = []
    ac.push(calendar.calendarDate())
    ac.push(calendar.calendarTime())
    ac.push(calendar.calendarDateTime())
    ac.push(calendar.calendarObject.toString())
    
    return ac
}

function compareCalendar(epouchTime){
    let expected = expectedCalendar();
    let actual = actualCalendar(epouchTime);
    let mapCalendar = new Map()
    for(let i = 0; i<expected.length; i++ ){
        mapCalendar.set( expected[i], expected[i]===actual[i] ? "true" : "false" )
        console.log( expected[i], " === " , actual[i], " => ", mapCalendar.get(expected[i] ) )
    }
    return mapCalendar
}
