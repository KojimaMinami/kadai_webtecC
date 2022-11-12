function clock() {
    var now = new Date();
    var hour = now.getHours(); // 時
    var min = now.getMinutes(); // 分
    var sec = now.getSeconds(); // 秒

    // 数値が1桁の場合、頭に0を付けて2桁で表示する指定
    if (hour < 10) { hour = "0" + hour; }
    if (min < 10) { min = "0" + min; }
    if (sec < 10) { sec = "0" + sec; }

    // フォーマット①
    var clock = ' ' + hour + ': ' + min + ': ' + sec + ' ';

    document.getElementById('RealtimeClockArea').innerHTML = clock.toLocaleString(); // div id="clock-01"


    // 1000ミリ秒ごとに処理を実効
    window.setTimeout("clock()", 1000);
}
window.onload = clock;
