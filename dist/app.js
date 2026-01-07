import { CheckWinner, nextPlayer, randomIconGenerator, randomNumberGenerator, startTimer } from "./functions.js";
import { elapsedTextBox, faSolid, faVaqtinchaQuti, firstPlayerContainer, firstPlayerMoveTextBox, forOnePlayerModal, fourthPlayerMoveTextBox, gridSizeJS, icons4x4Contain, icons6x6Contain, iconsClass, modalContainer, modalParda, moreContentContainer, morePlayerModal, movesTextBox, numberPlayers, playerOfNumberBox, secondPlayerMoveTextBox, selectThem, settingCont, startGameButton, takenTextBox, thirdPlayerMoveTextBox, timeTextBox, totalAllPlayerContainer, totalOnePlayerContainer } from "./html-elements.js";
// ===================== VARIABLES =====================
let playOBJ = {};
let onePlayerMoves = 0;
let players = [];
// Buttons active
numberPlayers.forEach((btn) => {
    btn.addEventListener("click", () => {
        numberPlayers.forEach((b) => b.classList.remove("buttonsActive"));
        btn.classList.add("buttonsActive");
    });
});
selectThem.forEach((btn) => {
    btn.addEventListener("click", () => {
        selectThem.forEach((b) => b.classList.remove("buttonsActive"));
        btn.classList.add("buttonsActive");
    });
});
gridSizeJS.forEach((btn) => {
    btn.addEventListener("click", () => {
        gridSizeJS.forEach((b) => b.classList.remove("buttonsActive"));
        btn.classList.add("buttonsActive");
    });
});
// ===================== START BUTTON =====================
startGameButton.addEventListener("click", (evt) => {
    settingCont.classList.add("liftUp");
    // numberOfPlayer
    numberPlayers.forEach((el) => {
        if (el.classList.contains("buttonsActive")) {
            playOBJ.numberOfPlayer = Number(el.textContent);
        }
    });
    // selectThem
    selectThem.forEach((el) => {
        if (el.classList.contains("buttonsActive")) {
            playOBJ.selectThem = el.textContent || undefined;
        }
    });
    // gridSize
    gridSizeJS.forEach((el) => {
        if (el.classList.contains("buttonsActive")) {
            playOBJ.gridSize = el.textContent || undefined;
        }
    });
    let result = [];
    if (playOBJ.selectThem === "Numbers" && playOBJ.gridSize === "4x4") {
        result = randomNumberGenerator(16);
        icons4x4Contain.classList.remove("hidden");
        icons6x6Contain.classList.add("hidden");
    }
    else if (playOBJ.selectThem === "Numbers" && playOBJ.gridSize === "6x6") {
        result = randomNumberGenerator(36);
        icons4x4Contain.classList.add("hidden");
        icons6x6Contain.classList.remove("hidden");
    }
    else if (playOBJ.selectThem === "Icons" && playOBJ.gridSize === "4x4") {
        result = randomIconGenerator(16);
        icons4x4Contain.classList.remove("hidden");
        icons6x6Contain.classList.add("hidden");
    }
    else {
        result = randomIconGenerator(36);
        icons4x4Contain.classList.add("hidden");
        icons6x6Contain.classList.remove("hidden");
    }
    let i = 0;
    let e = 1;
    if (playOBJ.gridSize === "4x4") {
        faSolid.forEach((ic) => {
            if (playOBJ.selectThem === "Numbers") {
                ic.textContent = String(result[i]);
            }
            else {
                ic.classList.add(`${result[i]}`);
            }
            i++;
        });
    }
    else {
        faVaqtinchaQuti.forEach((ic) => {
            if (playOBJ.selectThem === "Numbers") {
                ic.textContent = String(result[i]);
            }
            else {
                ic.classList.add(`${result[i]}`);
            }
            i++;
        });
    }
    if (playOBJ.numberOfPlayer === 1) {
        totalOnePlayerContainer.classList.remove("hidden");
        startTimer();
    }
    else if (playOBJ.numberOfPlayer) {
        totalAllPlayerContainer.classList.remove("hidden");
        playerOfNumberBox.forEach((el) => {
            if (e <= playOBJ.numberOfPlayer) {
                el.classList.remove("hidden");
                players.push({
                    player: e,
                    isActive: false,
                    totalMoves: 0,
                    correctAnswers: 0,
                });
            }
            e++;
        });
        firstPlayerContainer.classList.add("iconActive");
    }
});
let selectedCards = [];
let tempPlayersMoves = 0;
let defaultClasses = 0;
let tempMoreContentContainer = 1;
let max = -Infinity;
let indexes = [];
iconsClass.forEach((el) => {
    el.addEventListener("click", () => {
        var _a;
        if (el.classList.contains("iconActive"))
            return;
        if (selectedCards.length === 2)
            return;
        el.classList.add("iconActive");
        const icon = el.querySelector("i");
        if (!icon)
            return;
        selectedCards.push({
            card: el,
            text: ((_a = icon.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "",
            classes: Array.from(icon.classList),
            num: el.dataset.num || ""
        });
        if (selectedCards.length === 2) {
            onePlayerMoves += 1;
            movesTextBox.textContent = String(onePlayerMoves);
            if (playOBJ.numberOfPlayer > 1) {
                nextPlayer();
                players[tempPlayersMoves].totalMoves += 1;
                if (tempPlayersMoves === 0)
                    firstPlayerMoveTextBox.textContent = String(players[tempPlayersMoves].totalMoves);
                else if (tempPlayersMoves === 1)
                    secondPlayerMoveTextBox.textContent = String(players[tempPlayersMoves].totalMoves);
                else if (tempPlayersMoves === 2)
                    thirdPlayerMoveTextBox.textContent = String(players[tempPlayersMoves].totalMoves);
                else if (tempPlayersMoves === 3)
                    fourthPlayerMoveTextBox.textContent = String(players[tempPlayersMoves].totalMoves);
            }
            if (CheckWinner(selectedCards)) {
                defaultClasses += 1;
                if (playOBJ.numberOfPlayer > 1) {
                    players[tempPlayersMoves].correctAnswers += 1;
                }
                iconsClass.forEach((el2) => {
                    if (el2.dataset.num === selectedCards[0].num || el2.dataset.num === selectedCards[1].num) {
                        el2.classList.add("IconDefault");
                        el2.classList.remove("iconActive");
                    }
                });
                selectedCards = [];
                // ONE PLAYER MODAL
                if (playOBJ.numberOfPlayer === 1) {
                    const limit = playOBJ.gridSize === "4x4" ? 8 : 18;
                    if (defaultClasses === limit) {
                        modalContainer.classList.remove("hidden");
                        forOnePlayerModal.classList.remove("hidden");
                        modalParda.classList.remove("hidden");
                        elapsedTextBox.textContent = timeTextBox.textContent;
                        takenTextBox.textContent = String(onePlayerMoves);
                    }
                }
                // MULTIPLAYER MODAL
                if (playOBJ.numberOfPlayer > 1) {
                    const limit = playOBJ.gridSize === "4x4" ? 8 : 18;
                    if (defaultClasses === limit) {
                        modalContainer.classList.remove("hidden");
                        modalContainer.classList.add("morePlayer");
                        morePlayerModal.classList.remove("hidden");
                        modalParda.classList.remove("hidden");
                        moreContentContainer.forEach((elMC, i) => {
                            var _a;
                            if (tempMoreContentContainer <= playOBJ.numberOfPlayer) {
                                elMC.classList.remove("hidden");
                            }
                            let tempPairs = elMC.querySelector(".pairsTextBox");
                            tempPairs.textContent = `${players[tempMoreContentContainer - 1].correctAnswers} Pairs`;
                            tempMoreContentContainer++;
                            players.forEach((item, index) => {
                                if (item.correctAnswers > max) {
                                    max = item.correctAnswers;
                                    indexes = [index];
                                }
                                else if (item.correctAnswers === max) {
                                    indexes.push(index);
                                }
                            });
                            if (indexes.includes(i)) {
                                elMC.classList.add("winnerContainer");
                                (_a = elMC.querySelector(".winner")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
                            }
                        });
                    }
                }
            }
            else {
                setTimeout(() => {
                    iconsClass.forEach((el2) => el2.classList.remove("iconActive"));
                    selectedCards = [];
                }, 300);
            }
            if (playOBJ.numberOfPlayer > 1) {
                tempPlayersMoves++;
                if (tempPlayersMoves > (playOBJ.numberOfPlayer - 1))
                    tempPlayersMoves = 0;
            }
        }
    });
});
