// onclick function start here
const clicked = () => {
    // getting input value
    const searchFieldElement = document.getElementById('search-field');
    const inputValue = searchFieldElement.value;
    searchFieldElement.value = '';
  
    // getting server data
    fetch(`https://openlibrary.org/search.json?q=${inputValue}`)
      .then(res => res.json())
      .then(data => searchResult(data.docs));
    // adding data to local server
  
    // getting parentElement for storing data
    const parentElement = document.getElementById('parent-element')
    // Emptying the parentElement
    parentElement.textContent= '';
    const searchResult = data => {
      data.forEach(book => {
        
  
  
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div class="card">
          <div class="row g-0">
            <div class="col-md-4">
              <div id="imageDad" class="image-div">
              <img  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="img-fluid" alt="">
              </div>
              
             
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${book.title} </h5>
                <p class="card-text">By ${book.author_name}</p>
                <small>First public year ${book.first_publish_year}</small>
                <p class="card-text"> ${book.publisher}</p>
              </div>
            </div>
          </div>
  
        </div>`
  
        parentElement.appendChild(div);
  
        const bookFound = parentElement.childElementCount;
  
        const resultFoundElement = document.getElementById('result-found');
        if(bookFound!==0){
        resultFoundElement.innerText = `Total result found : (${bookFound})`;
        }
        else if(bookFound ===0){
          resultFoundElement.innerText = `No result found`;
  
        }
      });
    }
  }
  
  