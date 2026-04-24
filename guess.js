const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const guesses = document.querySelector(".guesses");
const restartBtn = document.querySelector(".restartBtn");


let answer = Math.floor( Math.random()*100)+1
console.log("隨機數字是否會介於0~100：", answer);


let countNum =0;   //廣域變數
function checkGuess() {
    countNum++;
    count.textContent = "猜測次數："+countNum;
    //guessField.focus();       //游標焦點預設在輸入欄位裡
    const userGuess = Number(guessField.value);  //取得欄位值，並轉為數字
    if  (  answer === userGuess ) {
    result.textContent = "猜測結果：Congratulations!" ;
    setGameOver();
    }
    else if (answer  < userGuess ) {
    result.textContent = "猜測結果：數字太大!" ;
    }
    else if (answer  >  userGuess ) {
    result.textContent = "猜測結果：數字太小!";
    }
    guesses.textContent += userGuess+" " ;
    guessField.value = "";
    guessField.focus();
}

function initGame() {
    // 1. 重設計數器
    countNum = 0;
    count.textContent = "猜測次數：0";

    // 2. 重新產生隨機數字
    answer = Math.floor(Math.random() * 100) + 1;
    console.log("新隨機數字：", answer);

    // 3. 清除顯示文字與樣式
    result.textContent = "猜測結果：";
    result.style.backgroundColor = ""; // 移除結束時變紅的背景色
    guesses.textContent = "";

    // 4. 啟用輸入欄位並清空值，同時恢復送出按鈕
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";

    // 5. 讓游標直接回到輸入框方便回答
    guessField.focus();
}


function setGameOver() {
        guessField.disabled = true; //停止輸入功能
        guessSubmit.disabled = true;    //停止按鈕功能
        result.textContent += "遊戲結束";
result.style.backgroundColor="red";
alert("遊戲結束");

}

guessSubmit.addEventListener("click", checkGuess);   //當按鈕被點擊，執行函式
restartBtn.addEventListener("click", initGame);

