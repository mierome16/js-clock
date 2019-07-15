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