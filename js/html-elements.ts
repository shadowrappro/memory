const numberOfPlayers = document.getElementById("numberOfPlayers") as HTMLUListElement;
const settingCont = document.querySelector(".settingsContainer") as HTMLDivElement;
const faSolid = document.querySelectorAll(".fa-solid") as NodeListOf<HTMLElement>;
const faVaqtinchaQuti = document.querySelectorAll(".VaqtinchaQuti") as NodeListOf<HTMLElement>;
const numberPlayers = document.querySelectorAll(".buttos") as NodeListOf<HTMLLIElement>;
const selectThem = document.querySelectorAll(".selectThem") as NodeListOf<HTMLSpanElement>;
const gridSizeJS = document.querySelectorAll(".gridSizeJS") as NodeListOf<HTMLSpanElement>;
const startGameButton = document.querySelector(".startButton") as HTMLButtonElement;
const playingField = document.querySelector(".playingField") as HTMLDivElement;
const iconsClass = document.querySelectorAll(".iconsClass") as NodeListOf<HTMLSpanElement>;
const icons6x6Contain = document.querySelector(".icons6x6Contain") as HTMLDivElement;
const icons4x4Contain = document.querySelector(".icons4x4Contain") as HTMLDivElement;
const totalOnePlayerContainer = document.querySelector(".totalOnePlayerContainer") as HTMLDivElement;
const timeTextBox = document.querySelector(".timeTextBox") as HTMLSpanElement;
const movesTextBox = document.querySelector(".movesTextBox") as HTMLSpanElement;
const totalAllPlayerContainer = document.querySelector(".totalAllPlayerContainer") as HTMLDivElement;
const playerOfNumberBox = document.querySelectorAll(".playerOfNumberBox") as NodeListOf<HTMLDivElement>;
const firstPlayerMoveTextBox = document.querySelector(".firstPlayerMoveTextBox") as HTMLSpanElement;
const secondPlayerMoveTextBox = document.querySelector(".secondPlayerMoveTextBox") as HTMLSpanElement;
const thirdPlayerMoveTextBox = document.querySelector(".thirdPlayerMoveTextBox") as HTMLSpanElement;
const fourthPlayerMoveTextBox = document.querySelector(".fourthPlayerMoveTextBox") as HTMLSpanElement;
const firstPlayerContainer = document.querySelector(".firstPlayerContainer") as HTMLDivElement;
const secondPlayerContainer = document.querySelector(".secondPlayerContainer") as HTMLDivElement;
const thirdPlayerContainer = document.querySelector(".thirdPlayerContainer") as HTMLDivElement;
const fourthPlayerContainer = document.querySelector(".fourthPlayerContainer") as HTMLDivElement;
const restartButton = document.querySelector(".restartButton") as HTMLButtonElement;
const modalContainer = document.querySelector(".modalContainer") as HTMLDivElement;
const forOnePlayerModal = document.querySelector(".forOnePlayerModal") as HTMLDivElement;
const modalParda = document.querySelector(".modalParda") as HTMLDivElement;
const morePlayerModal = document.querySelector(".morePlayerModal") as HTMLDivElement;
const elapsedTextBox = document.querySelector(".elapsedTextBox") as HTMLSpanElement;
const takenTextBox = document.querySelector(".takenTextBox") as HTMLSpanElement;
const moreContentContainer = document.querySelectorAll(".moreContentContainer") as NodeListOf<HTMLSpanElement>
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