const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener("DOMContentLoaded", () => {
  fetchTrainers()
})

function fetchTrainers() {
  fetch(TRAINERS_URL)
  .then(response => response.json())
  .then(trainerArray => {
    trainerArray.forEach(trainerObj => renderTrainer(trainerObj))
  })
}

{/* <div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div> */}

function renderTrainer(trainerObj) {
  
  // create card div
  let card = document.createElement("div")
  card.classList.add("card")
  card.dataset.id = trainerObj.id
  
  // create p 
  let p = document.createElement("p")
  p.innerText = trainerObj.name

  card.appendChild(p)

  // create button
  let btn = document.createElement('button');
  btn.dataset.trainerId = trainerObj.id
  btn.innerText = "Add Pokemon"

  // create ul
  let ul = document.createElement('ul')

  trainerObj.pokemons.forEach(pokemonObj => renderPokemon(pokemonObj))

}


function renderPokemon(pokemonObj) {
 
}