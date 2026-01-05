import { CheckWinner, doubleRandomGenerator, nextPlayer, randomIconGenerator, randomNumberGenerator, startTimer } from "./functions.js";
import { elapsedTextBox, faSolid, faVaqtinchaQuti, firstPlayerContainer, firstPlayerMoveTextBox, forOnePlayerModal, fourthPlayerContainer, fourthPlayerMoveTextBox, gridSizeJS, icons4x4Contain, icons6x6Contain, iconsClass, modalContainer, modalParda, moreContentContainer, morePlayerModal, movesTextBox, numberPlayers, playerOfNumberBox, playingField, restartButton, secondPlayerContainer, secondPlayerMoveTextBox, selectThem, settingCont, startGameButton, takenTextBox, thirdPlayerContainer, thirdPlayerMoveTextBox, timeTextBox, totalAllPlayerContainer, totalOnePlayerContainer } from "./html-elements.js"

let playOBJ = {};
let onePlayerMoves = 0;
let players = []

// Buttons active
numberPlayers.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        numberPlayers.forEach((b) => b.classList.remove("buttonsActive"))
        btn.classList.add("buttonsActive")
    })
})

selectThem.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        selectThem.forEach((b) => b.classList.remove("buttonsActive"))
        btn.classList.add("buttonsActive")
    })
})

gridSizeJS.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        gridSizeJS.forEach((b) => b.classList.remove("buttonsActive"))
        btn.classList.add("buttonsActive")
    })
})


// Start Button
startGameButton.addEventListener("click", (evt) => {
    settingCont.classList.add("liftUp")
    numberPlayers.forEach((el) => {
        if (el.classList.contains("buttonsActive")) {
            playOBJ.numberOfPlayer = el.textContent
        }
    })
    selectThem.forEach((el) => {
        if (el.classList.contains("buttonsActive")) {
            playOBJ.selectThem = el.textContent
        }
    })
    gridSizeJS.forEach((el) => {
        if (el.classList.contains("buttonsActive")) {
            playOBJ.gridSize = el.textContent
        }
    })

    let result;
    

    if (playOBJ.selectThem == "Numbers" && playOBJ.gridSize == "4x4") {
        result = randomNumberGenerator(16);
        icons4x4Contain.classList.remove("hidden")
        icons6x6Contain.classList.add("hidden")
    } else if (playOBJ.selectThem == "Numbers" && playOBJ.gridSize == "6x6") {
        result = randomNumberGenerator(36);
        icons4x4Contain.classList.add("hidden")
        icons6x6Contain.classList.remove("hidden")
    } else if (playOBJ.selectThem == "Icons" && playOBJ.gridSize == "4x4") {
        result = randomIconGenerator(16)
        icons4x4Contain.classList.remove("hidden")
        icons6x6Contain.classList.add("hidden")
    } else {
        result = randomIconGenerator(36)
        icons4x4Contain.classList.add("hidden")
        icons6x6Contain.classList.remove("hidden")
    }
    
    let i = 0;
    let e = 1
    if (playOBJ.gridSize == "4x4") {
        faSolid.forEach((ic) => {
            if (playOBJ.selectThem == "Numbers") {
                ic.textContent = result[i]
            } else {
                ic.classList.add(`${result[i]}`)
            };
            i++;
        })
    } else {
        faVaqtinchaQuti.forEach((ic) => {
            if (playOBJ.selectThem == "Numbers") {
                ic.textContent = result[i]
            } else {
                ic.classList.add(`${result[i]}`)
            };
            i++;
        })
    }

    if (playOBJ.numberOfPlayer == 1) {
        totalOnePlayerContainer.classList.remove("hidden")
        startTimer()
    } else {
        totalAllPlayerContainer.classList.remove("hidden")
        playerOfNumberBox.forEach((el) => {
            if (e <= playOBJ.numberOfPlayer) {
                el.classList.remove("hidden")
                players.push(
                    {
                        player: e,
                        isActive: false,
                        totalMoves: 0,
                        correctAnswers: 0,
                    }
                )
            }
            e++;
        })
        
        firstPlayerContainer.classList.add("iconActive")
        
    }       
    }
)

let selectedCards = [];
let tempPlayersMoves = 0;
let defaultClasses = 0;
let tempMoreContentContainer = 1;
let max = 0;
let indexes = [];

iconsClass.forEach((el) => {
    el.addEventListener("click", () => {
        if (el.classList.contains("iconActive")) return;

        if (selectedCards.length === 2) return;

        el.classList.add("iconActive");

        const icon = el.querySelector("i");

        selectedCards.push({
            card: el,
            text: icon.textContent.trim(),
            classes: [...icon.classList],
            num: el.dataset.num,
        });

        if (selectedCards.length === 2) {
            
            onePlayerMoves += 1;
            
            movesTextBox.textContent = onePlayerMoves;
            
            if (playOBJ.numberOfPlayer > 1) {
                nextPlayer()
                players[tempPlayersMoves].totalMoves += 1;                
                // O'yinchilarning urinishlarini ui'ga chiqarish
                if (tempPlayersMoves == 0) {
                    firstPlayerMoveTextBox.textContent = players[tempPlayersMoves].totalMoves
                } else if (tempPlayersMoves == 1) {
                    secondPlayerMoveTextBox.textContent = players[tempPlayersMoves].totalMoves
                } else if (tempPlayersMoves == 2) {
                    thirdPlayerMoveTextBox.textContent = players[tempPlayersMoves].totalMoves
                } else if (tempPlayersMoves == 3) {
                    fourthPlayerMoveTextBox.textContent = players[tempPlayersMoves].totalMoves
                }
            }


            // To'g'ri yoki noto'g'ri ekanini tekshirish
            if (CheckWinner(selectedCards)) {
                defaultClasses += 1

                console.log(defaultClasses);
                if (playOBJ.numberOfPlayer > 1) {
                    players[tempPlayersMoves].correctAnswers += 1;
                }
                iconsClass.forEach((el) => {
                    if (el.dataset.num === selectedCards[0].num || el.dataset.num === selectedCards[1].num) {
                        el.classList.add("IconDefault")
                        el.classList.remove("iconActive")
                    }
                })
                selectedCards = [];

                if (playOBJ.gridSize == "4x4" && playOBJ.numberOfPlayer == 1) {
                    if (defaultClasses == 8) {
                        modalContainer.classList.remove("hidden")
                        forOnePlayerModal.classList.remove("hidden")
                        modalParda.classList.remove("hidden")
                        
                        elapsedTextBox.textContent = timeTextBox.textContent
                        takenTextBox.textContent = onePlayerMoves;
                    }                    
                }
                if (playOBJ.gridSize == "6x6" && playOBJ.numberOfPlayer == 1) {
                    if (defaultClasses == 18) {
                        modalContainer.classList.remove("hidden")
                        forOnePlayerModal.classList.remove("hidden")
                        modalParda.classList.remove("hidden")
                        
                        elapsedTextBox.textContent = timeTextBox.textContent
                        takenTextBox.textContent = onePlayerMoves;
                    }
                }

                if (playOBJ.gridSize == "4x4" && playOBJ.numberOfPlayer > 1) {
                    if (defaultClasses == 8) {
                        modalContainer.classList.remove("hidden")
                        modalContainer.classList.add("morePlayer")
                        morePlayerModal.classList.remove("hidden")
                        modalParda.classList.remove("hidden")

                        moreContentContainer.forEach((el) => {
                            if (tempMoreContentContainer <= playOBJ.numberOfPlayer) {
                                el.classList.remove("hidden")
                            }

                            let tempPairs =  el.querySelector(".pairsTextBox")
                            tempPairs.textContent = `${players[tempMoreContentContainer -1].correctAnswers} Pairs` 

                            tempMoreContentContainer++
                        })
                    }
                }
                if (playOBJ.gridSize == "6x6" && playOBJ.numberOfPlayer > 1) {
                    if (defaultClasses == 18) {
                        modalContainer.classList.remove("hidden")
                        modalContainer.classList.add("morePlayer")
                        morePlayerModal.classList.remove("hidden")
                        modalParda.classList.remove("hidden")

                        moreContentContainer.forEach((el) => {
                            if (tempMoreContentContainer <= playOBJ.numberOfPlayer) {
                                el.classList.remove("hidden")
                            }

                            let tempPairs =  el.querySelector(".pairsTextBox")
                            tempPairs.textContent = `${players[tempMoreContentContainer -1].correctAnswers} Pairs` 

                            tempMoreContentContainer++;
                        
                            players.forEach((item, index) => {
                                if (item.correctAnswer > max) {
                                    max = item.correctAnswers;
                                    indexes = [index];
                                } else if (item.correctAnswers === max) {
                                    indexes.push(index);
                                }
                            });

                            indexes.forEach((index) => {
                                if ((tempMoreContentContainer - 1) == index) {
                                    el.classList.add("winnerContainer")
                                    let tempWinner = el.querySelector(".winner")
                                    tempWinner.classList.remove("hidden")
                                }
                            })
                        })
                    }
                }
            } else {
                setTimeout(() => {
                    iconsClass.forEach((el) => el.classList.remove("iconActive"))
                    selectedCards = [];
                }, 300)
            }

            if (playOBJ.numberOfPlayer > 1) {
                tempPlayersMoves++;
                if (tempPlayersMoves > (playOBJ.numberOfPlayer - 1)) {
                    tempPlayersMoves = 0;
                }
            }
        }
    });
});

// Restart
// restartButton.addEventListener("click", () => {
//     startGameButton.click()
//     onePlayerMoves = 0
//     movesTextBox.textContent = onePlayerMoves;
//     iconsClass.forEach((el) => {
//         el.classList.remove("IconDefault")
//     })
// })