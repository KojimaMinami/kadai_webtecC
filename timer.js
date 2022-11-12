const clock = () => {
    // 現在の日時・時刻の情報を取得
    const d = new Date();

    // 年
    let year = d.getFullYear();
    // 月
    let month = d.getMonth() + 1;
    // 日
    let date = d.getDate();
    // 曜日
    let dayNum = d.getDay();
    const weekday = ["日", "月", "火", "水", "木", "金", "土"];
    let day = weekday[dayNum];
    // 時
    let hour = d.getHours();
    // 分
    let min = d.getMinutes();
    // 秒
    let sec = d.getSeconds();

    // 1桁の場合は0を足して2桁に
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // 日付・時刻の文字列を作成
    let today = `今日は${year}年${month}月${date}日(${day})です！`;
    let time = `現在 ${hour}時${min}分${sec}秒 です！`;

    // 文字列を出力
    document.querySelector(".clock-date").innerText = today;
    document.querySelector(".clock-time").innerText = time;
};

// 1秒ごとにclock関数を呼び出す
setInterval(clock, 1000);