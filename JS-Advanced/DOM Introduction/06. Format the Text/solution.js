function solve() {
    let textField = document.getElementById("input").value;
    let sentences = textField.split(".")
    let outputText = []
    let outputField = document.getElementById("output");

    for (i = 0;i < sentences.length; i++) {
        if (sentences[i].length < 2) {
            sentences.splice(i, 1);
        }
    }

    if (sentences.length >= 3) {
        if (Math.round(sentences.length % 3) == 0) {
            for (i = 0;i < Math.round(sentences.length / 3); i++) {
                outputText.push([])
            }
        } else {
            for (i = 0;i < Math.round(sentences.length / 3); i++) {
                outputText.push([])
            }

            outputText.push([]) // Additional array for the remainder
        }
    } else {
        outputText.push([])
    }

    //console.log(outputText)

    outputText.forEach(arr => {
        while (arr.length < 3 & sentences.length > 0) {
            arr.push(sentences.shift() + ".")
        }
    });

    outputText.forEach(arr => {
        outputField.innerHTML += `<p> ${arr.join('')} </p>`
    });

}