const display = document.querySelector("#text");
const buttons = document.querySelectorAll("button");

let isResult = false;

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") { 
      display.innerText = "";
      isResult = false;
    } else if (item.id == "equal") {
      if (!isResult && display.innerText != "") {
        display.innerText = eval(display.innerText);
        isResult = true;
      }
    } else {
      if (isResult) {
        display.innerText = "";
        isResult = false;
      }
      display.innerText += item.id;
    }
  };
});