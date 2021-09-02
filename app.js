// Load Data from API 
const loadOpenLibrary = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value
    ////clear search input
    searchField.value = '';
    // data fetch
    fetch(`https://openlibrary.org/search.json?q=${searchText}`)
        .then(res => res.json())
        .then(data => displayOpenLibrary(data.docs))
};
// loadOpenLibrary()
// Display data into UI
const displayOpenLibrary = docs => {
    // console.log(docs);
    const searchResult = document.getElementById('search-result');
    // clear search results
    searchResult.textContent = '';
    // data catching
    docs.forEach(doc => {
        const coverUrl = `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        console.log(coverUrl)
        // console.log(doc.author_name['0']);
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${coverUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-text">Books Name: ${doc.title} ${doc.text.length[4]}</h4>
                <h6 class="card-title">Author Name: ${doc.author_name}</h6>
                <p class="card-text">First Publish: ${doc.first_publish_year}</p>
                <p class="card-text">Publisher: ${doc.publisher}</p>
             </div >
    <div class="card-footer">
        <small class="text-muted"></small>
    </div>
    </div >
    `
        searchResult.appendChild(div);
    });
};

