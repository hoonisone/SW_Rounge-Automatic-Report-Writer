import { sendpost } from "./http.js";
import { convertKakaoMessageIntoComentsJson } from "./kakao.js";

function Name(name) {
  return `<label for="disabledTextInput" class="form-label"><h3>${name}</h3></label>`;
}
function essential(string) {
  return string + ` (<span style="color:red;">*</span>)`;
}
function Input(name, essentialFlag) {
  return `      
    <div class="input-container">
        ${name ? `<p>${essentialFlag ? essential(name) : name}</p>` : ``}
        <input type="text" id="disabledTextInput" class="form-control input" placeholder="값을 입력하세요">
    </div>`;
}
function Selector(name, elements, essentialFlag) {
  var text = `
  <div class="input-container">
  ${name ? `<p>${essentialFlag ? essential(name) : name}</p>` : ``}
  <select class="form-select input" aria-label="Default select example">
  <option selected value="">Select</option>
  `;
  elements.forEach((element) => {
    text += `<option value="1">${element}</option>`;
  });
  text += `</select></div>`;
  return text;
}
function Question() {
  return `
    <div class="card card-body">
      <div>${Name("Question")}</div>
      <div class="item">${Input("Title", true)}</div>
      <div class="item">${Input("Writer", true)}</div>
      <div class="item">${Input("Content", true)}</div>
      <div class="item">${Input("Password", true)}</div>
    </div>`;
}
function Filter() {
  return `   
    <div class="card card-body">
      <div>${Name("Fileter")}</div>
      <div>${Selector(
        "Language",
        ["C", "C++", "Java", "Python", "Java Script", "HTML", "Go", "else.."],
        true
      )}</div>   
      <div>${Input("keyword1", true)}</div>
      <div>${Input("keyword2", true)}</div>
      <div>${Input("keyword3", true)}</div>
      </div>
    <div style="clear:both;"></div>`;
}
function Kakao() {
  return `
    <div class="card card-body">
      <div>${Name("Kakao")}</div>
      ${Input("kakao massage")}
    </div>`;
}
function Comment() {
  return `
    <div class="card card-body">
      <div>${Name("Kakao")}</div>
      ${Input("kakao massage")}
    </div>`;
}
function Button() {
  return `<button id="submit-button" class="btn btn-primary" style="width:100%" onClick="submit()">submit</button>`;
}
function Form() {
  return `
    <div style="margin:20px; width:700px">
    <div>${Question()}</div>
    <div>${Filter()}</div>
    <div>${Kakao()}</div>
    <div>${Button()}</div>
    </div>`;
}

function extractInput() {
  const keys = [
    "title",
    "writer",
    "content",
    "password",
    "language",
    "keyword1",
    "keyword2",
    "keyword3",
    "kakaoMessage",
  ];
  const tags = document.querySelectorAll(".input");
  console.log(tags[0]);
  console.log(tags[0].value);
  const data = [];
  for (var i = 0; i < tags.length; i++) {
    data[keys[i]] = tags[i].value;
  }
  console.log(data);
  return data;
}

window.submit = function submit() {
  const data = extractInput();
  console.log(data["kakaoMessage"]);
  data["kakaoMessage"] = convertKakaoMessageIntoComentsJson(
    data["kakaoMessage"]
  );
  //sendpost("http://192.168.90.115:8080/enroll", data);
};

export { Form };
