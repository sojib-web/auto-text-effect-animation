const ContainerElement = document.querySelector(".container");

const careers = ["You Tuber", "Web Developer", "Freelancer", "Instructor"];
let careerIndex = 0;
let charaterIndex = 0;

const updateText = () => {
  // @ts-ignore
  charaterIndex++;

  const article = ["A", "E", "I", "O", "U"].includes(
    careers[careerIndex][0].toUpperCase()
  )
    ? "an"
    : "a";
  // @ts-ignore
  ContainerElement.innerHTML = ` <h1>I am ${article}
     ${careers[careerIndex].slice(0, charaterIndex)}</h1>`;

  if (charaterIndex === careers[careerIndex].length) {
    careerIndex++;
    charaterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(updateText, 400);
};

updateText();
