// Load Data from API 
const loadOpenLibrary = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value
    ////clear search input
    searchField.value = '';
    // data fetch
    fetch(`http://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => displayOpenLibrary(data.docs))

};
loadOpenLibrary()
// Display data into UI
const displayOpenLibrary = docs => {
    // console.log(docs);
    const searchResult = document.getElementById('search-result');
    // clear search results
    searchResult.textContent = '';
    // data catching
    docs.forEach(doc => {
        console.log(doc)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
            <img src=" " class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">${doc.edition_key.first_publish_year}</p>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
             </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
    </div>
    `
        searchResult.appendChild(div);
    });
};

