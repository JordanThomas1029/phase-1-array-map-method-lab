const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  let text = tutorials.map((swap) => swap.split(" "));
  let array = [];
  let newtext = text.map(function (tutor) {
    console.log(tutor);
    tutor.map(function (element) {
      array.push(element[0].charAt(0).toUpperCase() + element[0].slice(1));
    });
    //return tutor[0].charAt(0).toUpperCase() + tutor[0].slice(1);
  });
  return array;
}
