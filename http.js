function sendpost(url, data) {
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", url);
  form.setAttribute("content-type", "application/json");
  document.acceptCharset = "urf-8";

  data.forEach(([key, value]) => {
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", value);
    form.appendChild(hiddenField);
  });
  document.body.appendChild(form);
  form.submit();
}

export { sendpost };
