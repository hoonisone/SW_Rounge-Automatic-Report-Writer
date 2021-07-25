function splitKakaoTextIntoMessage(data) {
  const re = /\[[^\n\[\]]*\]\s\[오[전|후]\s\d:\d{2}\]/g;
  const messages = [...data.matchAll(re)];
  const idxes = [];
  messages.forEach((message) => {
    idxes.push(message.index);
  });
  idxes.push(data.length);
  messages.splice(0, messages.length);
  for (var i = 0; i < idxes.length - 1; i++) {
    messages.push(data.substring(idxes[i], idxes[i + 1]));
  }
  return messages;
}

function splitKaKaoMassageIntoMessageElements(kakaoMessage) {
  const messageElements = {};
  const first = kakaoMessage.indexOf("]");
  const second = kakaoMessage.indexOf("]", first + 1);
  const end = kakaoMessage.length;
  messageElements["name"] = kakaoMessage.substring(1, first);
  messageElements["date"] = kakaoMessage.substring(first + 3, second);
  messageElements["content"] = kakaoMessage.substring(second + 1, end);
  messageElements["password"] = "1234";
  messageElements["kakao"] = true;
  return messageElements;
}

function convertKakaoMessageIntoComentsJson(data) {
  data = splitKakaoTextIntoMessage(data);
  for (var i = 0; i < data.length; i++) {
    data[i] = splitKaKaoMassageIntoMessageElements(data[i]);
  }
  return data;
}

export { convertKakaoMessageIntoComentsJson };
