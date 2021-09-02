//error handling variable
const emptyError = document.getElementById('empty-value');
// Load Data from API
const loadOpenLibrary = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value
    //clear search input
    searchField.value = '';
    //handle empty search
    if (searchText === '') {
        emptyError.innerText = 'Search field can not be empty';
    }
    else {
        fetch(`https://openlibrary.org/search.json?q=${searchText}`)
            .then(res => res.json())
            .then(data => displayOpenLibrary(data))
    }
};

// Display data into UI
const displayOpenLibrary = data => {
    const dataDocs = data.docs;
    //show total number of results
    const totalResults = document.getElementById('total-results');
    totalResults.innerText = `Total Results Found: ${data.numFound}`;
    totalResults.style.backgroundColor = 'Purple';
    //display search result
    const searchResult = document.getElementById('search-result');
    // clear search results
    searchResult.textContent = '';
    emptyError.innerText = '';
    if (searchResult === '') {
        emptyError.innerText = 'Search field can not be empty';
    };

    // image data catching
    dataDocs.forEach(dataDoc => {
        const coverUrl = `https://covers.openlibrary.org/b/id/${dataDoc.cover_i}-M.jpg`
        const div = document.createElement('div');
        // console.log(doc.author_name);
        div.innerHTML = `
        <div class="card h-100">
            <img src="${coverUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-text">Book Name: ${dataDoc.title}</h4>
                <h6 class="card-title">Author Name: ${dataDoc.author_name}</h6>
                <p class="card-text">First Publish: ${dataDoc.first_publish_year}</p>
                <p class="card-text">Publisher: ${dataDoc.publisher}</p>
             </div >
        </div >
    `
        searchResult.appendChild(div);
    });
};

