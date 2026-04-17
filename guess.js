const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");

let answer = Math.random(Math.random()*100)+1
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
    result.textContent = "猜測結果：數字太小!" ;
    }
    else if (answer  >  userGuess ) {
    result.textContent = "猜測結果：數字太大!";
    }

}

function setGameOver() {
        guessField.disabled = true; //停止輸入功能
        guessSubmit.disabled = true;    //停止按鈕功能
        result.textContent += "遊戲結束";
result.style.backgroundColor="red";
alert("遊戲結束");

}

guessSubmit.addEventListener("click", checkGuess);   //當按鈕被點擊，執行函式

