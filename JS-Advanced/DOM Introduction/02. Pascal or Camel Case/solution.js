function solve() {
  let input = Array.from(document.getElementById("text").value.toLowerCase()).join('').split(' ');
  let currentCase = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  console.log(input)
  switch (currentCase) {
    case "Camel Case":
      let camel = []
      camel.push(input[0])
      input.slice(1).forEach(element => {
        let capitalized = element.charAt(0).toUpperCase() + element.slice(1)
        camel.push(capitalized);
      });
      result.textContent = camel.join('')
      break;
    case "Pascal Case":
      let pascal = []
      input.forEach(element => {
        let capitalized = element.charAt(0).toUpperCase() + element.slice(1)
        pascal.push(capitalized);
      });
      result.textContent = pascal.join('')
      break;
    default:
      result.textContent = "Error!"
      break;
  }
}