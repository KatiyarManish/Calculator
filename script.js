let textScreen = document.querySelector(".textview");

function insert(num) {
  textScreen.value = textScreen.value + num;
}

function equals() {
  try {
    textScreen.value = eval(textScreen.value);
  } catch {
    textScreen.value = "error!";
    setTimeout(() => {
      textScreen.value = "";
    }, 2000);
  }
}

function clean() {
  textScreen.value = "";
}

function back() {
  textScreen.value = textScreen.value.slice(0, -1);
}
