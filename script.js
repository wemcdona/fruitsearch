const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const suggestionsList = document.querySelector('#suggestions-list');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = fruit.filter((fruitName) =>
	fruitName.toLowerCase().includes(str.toLowerCase()));


	return results;
}

function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);
	showSuggestions(results);
}

function showSuggestions(results) {
suggestionsList.innerHTML = '';

//if (results.length === 0){
//	suggestionsList.style.dislplay = 'none';
//	return;
//}
//suggestionsList.style.display = 'block';
results.forEach((result) => {
	const listItem = document.createElement('li');
	listItem.textContent = result;
	suggestionsList.appendChild(listItem);
});
}

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.textContent;
		//suggestionsList.style.display = 'none';
	}
}

function boldSuggestion(e){
	if(e.target.tagName === 'LI'){
		e.target.style.display = 'block';
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('hover', boldSuggestion);