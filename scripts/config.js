function openPlayerConfiguration(event) {
  editedPlayer= +event.target.dataset.playerid;
  configOverlay.style.display = "block";
  backdropElement.style.display = "block";
}
function closeConfigBtn() {
  configOverlay.style.display = "none";
  backdropElement.style.display = "none";
  formSubmission.firstElementChild.classList.remove("error");
  displayErrormsg.textContent = "";
  formSubmission.firstElementChild.lastElementChild.value=''
}
function userFormSubmission(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredplayerName = formData.get("username").trim();
  if (enteredplayerName === "") {
    event.target.firstElementChild.classList.add("error");
    displayErrormsg.textContent = "please enter a valid name";
    return;
  }
  const updatedPlayerData = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerData.children[1].textContent = enteredplayerName;
  players[editedPlayer - 1].Name = enteredplayerName;
  closeConfigBtn();
}
