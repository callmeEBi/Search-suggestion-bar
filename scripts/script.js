let $ = document;
let suggestedWords = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Blogger",
  "Vehicles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to become Freelancer",
  "How to become Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];

let searchInput = $.querySelector(".search_box__input");
let suggestionWrapper = $.querySelector(".suggestion_wrapper");

searchInput.addEventListener("input", function () {
  let searchedWord = searchInput.value;
  let wordLength = searchedWord.length;
  suggestionWrapper.innerHTML = "";
  suggestedWords.forEach(function (item) {
    if (
      item.slice(0, wordLength).toLowerCase() === searchedWord.toLowerCase() &&
      searchInput.value
    ) {
      suggestionWrapper.insertAdjacentHTML(
        "beforeend",
        `<div class="suggestion"><strong>${item.slice(
          0,
          wordLength
        )}</strong>${item.slice(wordLength)}</div>`
      );
      let suggestion = $.querySelectorAll(".suggestion");
      let lastSuggestion = suggestion[suggestion.length - 1];
      setListenerToLastSuggestion(lastSuggestion);
    }
  });
  if (searchInput.value && suggestionWrapper.innerHTML == "") {
    suggestionWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="suggestion">${searchInput.value}</div>`
    );
  }
});

function setListenerToLastSuggestion(lastSuggestion) {
  lastSuggestion.addEventListener("click", function () {
    searchInput.value = lastSuggestion.textContent;
    suggestionWrapper.innerHTML = "";
  });
}
