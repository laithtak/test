// Function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "Example Data" };
            resolve(data);
        }, 1000);
    });
}

// Using the Promise
fetchData()
    .then(data => {
        console.log("Data fetched:", data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
