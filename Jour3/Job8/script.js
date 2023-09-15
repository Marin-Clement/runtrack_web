const dataContainer = document.getElementById('data');

function displayData(data) {
    dataContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        dataContainer.innerHTML = `<p>An error occurred: ${error.message}</p>`;
    });
