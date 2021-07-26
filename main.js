const codelist = {
  北海道: "016000",
  青森: "020000",
  岩手: "030000",
  宮城: "040000",
  秋田: "050000",
  山形: "060000",
  福島: "070000",
  茨城: "080000",
  栃木: "090000",
  群馬: "100000",
  埼玉: "110000",
  千葉: "120000",
  東京: "130000",
  神奈川: "140000",
  新潟: "150000",
  富山: "160000",
  石川: "170000",
  福井: "180000",
  山梨: "190000",
  長野: "200000",
  岐阜: "210000",
  静岡: "220000",
  愛知: "230000",
  三重: "240000",
  滋賀: "250000",
  京都: "260000",
  大阪: "270000",
  兵庫: "280000",
  奈良: "290000",
  和歌山: "300000",
  鳥取: "310000",
  島根: "320000",
  岡山: "330000",
  広島: "340000",
  山口: "350000",
  徳島: "360000",
  香川: "370000",
  愛媛: "380000",
  高知: "390000",
  福岡: "400000",
  佐賀: "410000",
  長崎: "420000",
  熊本: "430000",
  大分: "440000",
  宮崎: "450000",
  鹿児島: "460100",
  沖縄: "471000",
};

// Jmap jQuery pluginの設定
$(document).ready(function () {
  $("#jmap").jmap({
    backgroundColor: "#6FCFDD", // 地図の背景色
    prefectureBackgroundColor: "#62B34C", // 地図の色
    // 都道府県が選択された際の処理
    onSelect: function (e, data) {
      getWeather(codelist[data.name]);
    },
  });
});

async function getWeather(code) {
  // データー取得
  const res = await fetch(
    `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${code}.json`
  );
  const json = await res.json();
  // DOM操作
  document.querySelector("h1").textContent = json.targetArea;
  document.querySelector("#time").textContent = json.reportDatetime
    .replace("T", " ")
    .replace("+09:00", "");
  document.querySelector("#text").innerHTML = json.text.replace(
    /\n\n/g,
    "<br>"
  );
}

getWeather(130000);
