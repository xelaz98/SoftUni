function toggle() {
    let extraInfo = document.getElementById("extra");
    let button = document.getElementsByClassName("button")[0];
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
        button.textContent = "Less"
      } else {
        extraInfo.style.display = "none";
        button.textContent = "More"
      }
}