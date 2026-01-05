const numberOfPlayers = document.getElementById("numberOfPlayers")
const settingCont = document.querySelector(".settingsContainer")
const faSolid = document.querySelectorAll(".fa-solid")
const faVaqtinchaQuti = document.querySelectorAll(".VaqtinchaQuti")
const numberPlayers = document.querySelectorAll(".buttos");
const selectThem = document.querySelectorAll(".selectThem");
const gridSizeJS = document.querySelectorAll(".gridSizeJS");
const startGameButton = document.querySelector(".startButton")
const playingField = document.querySelector(".playingField")
const iconsClass = document.querySelectorAll(".iconsClass")
const icons6x6Contain = document.querySelector(".icons6x6Contain")
const icons4x4Contain = document.querySelector(".icons4x4Contain")
const totalOnePlayerContainer = document.querySelector(".totalOnePlayerContainer")
const timeTextBox = document.querySelector(".timeTextBox")
const movesTextBox = document.querySelector(".movesTextBox")
const totalAllPlayerContainer = document.querySelector(".totalAllPlayerContainer")
const playerOfNumberBox = document.querySelectorAll(".playerOfNumberBox")
const firstPlayerMoveTextBox = document.querySelector(".firstPlayerMoveTextBox")
const secondPlayerMoveTextBox = document.querySelector(".secondPlayerMoveTextBox")
const thirdPlayerMoveTextBox = document.querySelector(".thirdPlayerMoveTextBox")
const fourthPlayerMoveTextBox = document.querySelector(".fourthPlayerMoveTextBox")
const firstPlayerContainer = document.querySelector(".firstPlayerContainer")
const secondPlayerContainer = document.querySelector(".secondPlayerContainer")
const thirdPlayerContainer = document.querySelector(".thirdPlayerContainer")
const fourthPlayerContainer = document.querySelector(".fourthPlayerContainer")
const restartButton = document.querySelector(".restartButton")
const modalContainer = document.querySelector(".modalContainer")
const forOnePlayerModal = document.querySelector(".forOnePlayerModal")
const modalParda = document.querySelector(".modalParda")
const morePlayerModal = document.querySelector(".morePlayerModal")
const elapsedTextBox = document.querySelector(".elapsedTextBox")
const takenTextBox = document.querySelector(".takenTextBox")
const moreContentContainer = document.querySelectorAll(".moreContentContainer")
const players = [
    firstPlayerContainer,
    secondPlayerContainer,
    thirdPlayerContainer,
    fourthPlayerContainer
]


export {
    numberOfPlayers,
    numberPlayers,
    selectThem,
    gridSizeJS,
    iconsClass,
    startGameButton,
    settingCont,
    playingField,
    faSolid,
    icons6x6Contain,
    icons4x4Contain,
    faVaqtinchaQuti,
    totalOnePlayerContainer,
    timeTextBox,
    movesTextBox,
    totalAllPlayerContainer,
    playerOfNumberBox,
    firstPlayerMoveTextBox,
    secondPlayerMoveTextBox,
    thirdPlayerMoveTextBox,
    fourthPlayerMoveTextBox,
    firstPlayerContainer,
    secondPlayerContainer,
    thirdPlayerContainer,
    fourthPlayerContainer,
    players,
    restartButton,
    modalContainer,
    forOnePlayerModal,
    modalParda,
    morePlayerModal,
    elapsedTextBox,
    takenTextBox,
    moreContentContainer,
}