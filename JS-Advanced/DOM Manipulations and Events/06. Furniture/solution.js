function solve() {

  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'))
  let boughtArea = document.querySelectorAll('textarea')[1]

  generateBtn.addEventListener("click", generate);
  buyBtn.addEventListener("click", buy)

  function generate() {
    const input = JSON.parse(document.querySelector("textarea").value)

    Array.from(input).forEach(element => {
      const table = document.querySelector(".table > tbody")
      const tr1 = document.createElement("tr")
      const td1 = document.createElement("td")
      const img = document.createElement("img")
      img.src = element.img

      td1.appendChild(img)
      table.appendChild(tr1)
      tr1.appendChild(td1)

      const td2 = document.createElement("td")
      const p2 = document.createElement("p")
      p2.textContent = element.name
      td2.appendChild(p2)
      tr1.appendChild(td2)

      const td3 = document.createElement("td")
      const p3 = document.createElement("p")
      p3.textContent = element.price
      td3.appendChild(p3)
      tr1.appendChild(td3)

      const td4 = document.createElement("td")
      const p4 = document.createElement("p")
      p4.textContent = element.decFactor
      td4.appendChild(p4)
      tr1.appendChild(td4)

      const td5 = document.createElement("td")
      const checkbox = document.createElement("input")
      checkbox.type = "checkbox"
      td5.appendChild(checkbox)
      tr1.appendChild(td5)

    });
  }

  function buy() {

    let items = []
    let bought = 0;
    let decFactorAvg = 0;
    let decFactorSum = 0;
    let counter = 0; // Number of bought

    //Bought furniture: {furniture1}, {furniture2}…
    //Total price: {totalPrice}
    //Average decoration factor: {decFactor}

    const table = document.querySelectorAll(".table > tbody > tr > td > input[type=checkbox]")

    Array.from(table).forEach(element => {
      const parent = element.parentElement.parentElement; //tr
      if (parent.children[parent.children.length-1].querySelector("input[type=checkbox]").checked) {
        const itemName = parent.children[1].querySelector("p").textContent
        items.push(itemName)

        const price = Number(parent.children[2].querySelector("p").textContent)
        bought += price

        const decfac = Number(parent.children[3].querySelector("p").textContent)
        decFactorSum += decfac
        counter++
      }

      decFactorAvg = decFactorSum / counter

      boughtArea.value = `Bought furniture: ${items.join(', ')}\nTotal price: ${bought.toFixed(2)}\nAverage decoration factor: ${decFactorAvg}`
      
    });

  }

}
