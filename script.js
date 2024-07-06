let buttons = document.querySelectorAll("button");
console.log(buttons);
let inputField = document.getElementById("input");
let str = "";

buttons.forEach((particular_button) => {
  particular_button.addEventListener("click", () => {
    if (particular_button.value == "=") {
      try {
        str = eval(str);
        inputField.value = str;
        str = "";
      } catch (e) {
        inputField.value = "Error";
        str = "";
      }
    } else {
      console.log(particular_button.value);
      str = str + particular_button.value;
      inputField.value = str;
    }
  });
});
