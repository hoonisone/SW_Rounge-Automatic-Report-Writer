// [work]
const work_form = {
  name: "이름",
  data: "날짜",
  from: "시작시간",
  to: "종료시간",
  area: "활동장소",
};

const work_example = {
  name: "한명훈",
  data: "2021/07/26",
  from: "13:00",
  to: "18:00",
  area: "SW라운지",
};

// [activity]
const activity_form = {
  who: "활동자 이름",
  what: { title: "활동명", detail: "활동 상세 내용" },
  when: { data: "활동 날짜", time: "활동 시간" },
  image: "이미지 링크",
};

const activity_example = {
  who: "한명훈",
  what: {
    title: "3D 프린터 제작 과정 설명",
    detail:
      "3D 프린터 이미지 파일을 가져왔으나 기계를 사용할 줄 모르는 학생에게 관련 프로그램 및 장치 작동법을 설명했다.",
  },
  when: { data: "2021/07/26", time: "14:20" },
  image:
    "https://wp-blog.toss.im/wp-content/uploads/2020/07/3V5A3982-%E1%84%89%E1%85%A1%E1%84%87%E1%85%A9%E1%86%AB.jpg",
};

const report_data = {
  works: [work_example, work_example],
  activities: [activity_example, activity_example, activity_example],
  QAes: [],
};

function get_work_time(report_data) {
  var result = "";
  report_data["works"].forEach((work) => {
    result += `<br>* ${work["from"]} ~ ${work["to"]}`;
  });
  return result.slice(4);
}
function get_work_area(report_data) {
  var result = "";
  report_data["works"].forEach((work) => {
    result += `<br>* ${work["area"]}`;
  });
  return result.slice(4);
}
function get_activity(report_data) {
  var result = "";
  report_data["activities"].forEach((activity) => {
    result += `<br>* ${activity["what"]["title"]}`;
  });
  return result.slice(4);
}
function get_image(report_data) {
  const images = [];
  report_data["activities"].forEach((activity) => {
    images.push(activity["image"]);
  });
  return images;
}
function write_form(report_data) {
  const name = report_data["works"][0]["name"];
  const date = get_work_time(report_data);
  const area = get_work_area(report_data);
  const activity = get_activity(report_data);
  const images = get_image(report_data);
  const form = document.querySelector("#report");
  form.innerHTML = `        
    <div class="container">
        <div class="item center">
            <h2>SW 라운지 튜터 활동보고서</h2>
        </div>
        <div class="item center border b-c">활동시간</div>
        <div class="item v-m border">${date}</div>
        <div class="item center border b-c">활동장소</div>
        <div class="item v-m border">${area}</div>
        <div class="item center border b-c">활동</div>
        <div class="item v-m border">${activity}</div>
        <div class="item center border b-c">Q&A</div>
        <div class="item v-m border">Q&A 내용</div>
        <div class="item center border b-c">활동 사진</div>
        <div class="item center border"><img src="${images[0]}"></div>
        <div class="item center border"><img src="${images[1]}"></div>
        <div class="item center border"><h5>2021년 7월 26일<br />성명: ${name} (인)</h5></div>
        <div class="item center">
            <h3>제주대학교 SW융합교육원장 귀하</h3>
        </div>
    </div>`;
}

write_form(report_data);
