const buttonGift = document.getElementById("gift");
const content = document.getElementById("pre-content");
const title = document.getElementById("title");

const url = "https://api.adviceslip.com/advice";

let resetButton = document.getElementById("resetButton");
let nextAdviceButton = document.getElementById("nextAdvice");

function createButtons() {
  if (!resetButton) {
    resetButton = document.createElement("button");
    resetButton.id = "resetButton";
    resetButton.textContent = "Início";
    document.body.appendChild(resetButton);
    resetButton.onclick = function () {
      window.location.reload();
    };
  }

  if (!nextAdviceButton) {
    nextAdviceButton = document.createElement("button");
    nextAdviceButton.id = "nextAdvice";
    nextAdviceButton.textContent = "Próximo";
    document.body.appendChild(nextAdviceButton);
    nextAdviceButton.onclick = apiAdvice;
  }
}

function googleTranslateInit(){
  new google.translate.TranslateElement(
    {pageLanguage: 'en'},
    'google_translate_element'
  );
}      



const apiAdvice = function () {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const adviceText =  data.slip.advice;
      const maxLength = 110;

      if(adviceText.length > maxLength){
        content.innerText = adviceText.slice(0, maxLength) + '...';
      }else{
      content.innerText = `"${adviceText}"`
      }

      buttonGift.style.display = "none";
      title.style.display = "none";

      createButtons();

      googleTranslateInit()

});
};

buttonGift.onclick = apiAdvice;
