setInterval(function() {
    let d = new Date ()
    let hr = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    if (hr == 0) {
        hr == 12
    } if (hr > 12) {
        hr = hr - 12
    }
    hr = (hr < 10) ? '0' + hr : hr;
    min = (min < 10) ? '0' + min : min;
    sec = (sec < 10) ? '0' + sec : sec;

    var time = `${hr}:${min}:${sec}`

    $(".clock").html(time)
}, 1000)

setInterval(function() {
    let d = new Date ()
    let hr = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    if (hr == 0) {
        hr == 12
    } if (hr > 12) {
        hr = hr - 12
    }

    // Number(`0${hr}`).toString(16)
    hr = (hr < 10) ? Number('0').toString(16) + hr.toString(16) : "" + hr.toString(16);
    min = (min < 10) ? Number('0').toString(16) + min.toString(16) : "" + min.toString(16);
    sec = (sec < 10) ? Number('0').toString(16) + sec.toString(16) : "" + sec.toString(16);


    let bgcolor = '#' +hr+min+sec

    console.log(bgcolor)

    $('body').css('background-color', bgcolor)
}, 3000)

