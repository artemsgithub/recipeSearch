const apiKEY = '97ba41d7122f36333a5077ea77010267'
const appID = 'e51b639b'

const result = document.getElementById('result')
const form = document.getElementById('form')
const search = document.querySelector('.search')

const baseURL = `https://api.edamam.com/search?app_id=${appID}&app_key=${apiKEY}`

async function searchRecipes (searchTerm){
	const res = await fetch(`${baseURL}&q=${searchTerm}`)
	const data  = await res.json()
	console.log(data)
	displayResults(data)
}


function displayResults(data) {

	result.innerHTML = `<ul class="recipes">${data.hits.map(rec =>`
		<li>
			<div class="rec-title">
				<strong>${rec.recipe.label} from </strong> <span style="text-decoration:underline;">${rec.recipe.source} </span>
			</div>
			<div class="ingredients">
			<li>${rec.recipe.ingredientLines}</li>
			</div>
			<div id = instructions-link>
			<span class="instructions-links"><a href="${rec.recipe.url}" target="_blank"> See instructions </a></span>
			</div>
		</li>`).join('')
	}</ul>`

	}



form.addEventListener('submit', (e)=> {
	e.preventDefault()

	// Store term as variable, log to console for testing
	const searchTerm = search.value.trim()
	
	// Ensure there is input, alert otherwise 
	if (!searchTerm){
		alert('No soup for you! Enter a search term.')
	} else {
		searchRecipes(searchTerm)
	}
})


// rec.recipe.ingredientLines.forEach((line) => {
// 	`<li id="whatever"></li>`
// 	let whatever = document.getElementById('whatever')
// 	whatever.innerHTML = line
// })}

// ${rec.recipe.ingredientLines}

// set array length to figure 
// for (let i = 0; i < articles.length; i++){
		
// 	}