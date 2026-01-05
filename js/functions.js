import { players, timeTextBox } from "./html-elements.js";
import { iconsName } from "./icons.js";

export function randomNumberGenerator(length) {
    let tempLen = length / 2
    let randomNumberArr = []
    let tempNum = []
    while(randomNumberArr.length !== tempLen) {
        let randomNum = (Math.floor(Math.random() * 99) + 1);
        if (!tempNum.includes(randomNum)) {
            randomNumberArr.push(randomNum)
        }
        tempNum.push(randomNum)
    }
    
    return doubleRandomGenerator(randomNumberArr)
}

export function randomIconGenerator(length) {
    let tempLen = length / 2
    let randomIconArr = []
    let tempIndex = []
    while (randomIconArr.length !== tempLen) {
        const randomIndex = Math.floor(Math.random() * iconsName.length)
        if(!tempIndex.includes(randomIndex)){
            randomIconArr.push(iconsName[randomIndex])  
        }
        tempIndex.push(randomIndex)
    }
    return doubleRandomGenerator(randomIconArr)
}

export function doubleRandomGenerator(arr) {
    const result = arr.reduce((acc, item) => {
        acc.push(item, item);
        return acc
    }, [])

    return mixingFunction(result)
}

export function mixingFunction(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  return arr
}

export function CheckWinner(obj) {
    let result = false;
    if (obj[0].text === obj[1].text && obj[0].classes.join() === obj[1].classes.join()) {
        result = true
        
    }

    
    return result
}

export function startTimer() {
  let seconds = 0;

  setInterval(() => {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    sec = sec < 10 ? "0" + sec : sec;

    timeTextBox.textContent = `${min}:${sec}`;
    seconds++;
  }, 1000);
}

export function nextPlayer() {
    const activeIconIndex = players.findIndex(el => el.classList.contains("iconActive"));

    if (activeIconIndex === -1) return

    players[activeIconIndex].classList.remove("iconActive");
    
    const nextIconIndex = (activeIconIndex + 1) % players.length;
    players[nextIconIndex].classList.add("iconActive")
}