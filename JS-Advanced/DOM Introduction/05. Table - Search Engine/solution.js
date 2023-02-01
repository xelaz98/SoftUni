function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let table = document.querySelectorAll('tbody tr');
      let search = document.getElementById("searchField").value;

      Array.from(table).forEach(function (cell) {
            console.log(cell.textContent)
            if (cell.textContent.includes(search)) {
               cell.classList.add('select');
               return;
            } else {
               cell.classList.remove('select');
               return;
            }
         });

   }
}


/*
function search() {

   let allTowns = Array.from(document.querySelectorAll('#towns li'));
   let elements = document.getElementById("towns").children;
   let search = document.getElementById("searchText");
   let result = document.getElementById("result");
   let matches = 0;
   //console.log(typeof(towns))

   allTowns.forEach(town => {
      let haveMatch = 0;
      if (town.textContent.includes(search.value)) {
         haveMatch = 1;
         elements.item(allTowns.indexOf(town)).style.textDecoration = "underline";
         elements.item(allTowns.indexOf(town)).style.fontWeight = "bold";
      }

      if (haveMatch === 1) {
         matches++;
      } else {
         elements.item(allTowns.indexOf(town)).style.textDecoration = "none";
         elements.item(allTowns.indexOf(town)).style.fontWeight = "normal";
      }
   });

   result.textContent = `${matches} matches found`

}*/
