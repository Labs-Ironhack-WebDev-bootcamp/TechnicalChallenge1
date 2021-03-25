let numberCount = () => {
  for (i = 1; i <= 100; i++) {
    i % 3 == 0 && i % 5 == 0
      ? document.write("cyberclick", "<br>")
      : i % 3 == 0
      ? document.write("cyber", "<br>")
      : i % 5 == 0
      ? document.write("click", "<br>")
      : document.write(i, "<br>");
  }
};


document.getElementById("btn").addEventListener("click", numberCount);
