var quote = [
  [
    `It's about what YOU are going to do with the short time you have left on this earth.`,
    `Hugh Macleod`,
  ],

  [`Anger is the ultimate destroyer of your own peace of mind.`, `Dalai Lama`],

  [
    `When we have respect for ourselves and others, we gravitate towards connections that encourage that.`,
    `Simeon Lindstrom`,
  ],

  [
    `Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot.`,
    `Wayne Gretzky`,
  ],

  [
    `Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.`,
    `Michelle Obama`,
  ],

  [`Make the decision, make another. Remake one past, you cannot.`, `Yoda`],

  [
    `If you want to see a rainbow you have to learn to see the rain.`,
    `Paulo Coelho`,
  ],
];

var currentQuote = "";
var currentAuthor = "";
var randomQuote = "";

$(document).ready(function () {
  function getNewQuote() {
    randomQuote = Math.floor(Math.random() * quote.length);
    currentQuote = quote[randomQuote][0];
    currentAuthor = quote[randomQuote][1];
    $(".quote").text(`"` + currentQuote + `"`);
    $(".author").text(currentAuthor);
    console.log(currentQuote);
    console.log(randomQuote);
  }

  getNewQuote();

  $(".quote-btn").on("click", getNewQuote);
});
