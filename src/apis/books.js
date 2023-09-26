export function getBooksAPI() {
    return fetch ("https://localhost:4000/books")
    .then ((res) => res.json ())
    .then ((data) => data);
}

export function addBookAPI (book) {
    try {
        console.log (JSON.stringify(book));
        return fetch ("https://localhost:4000/books",{
            method: "POST",
            headers:{
                "Contect-Type" : "application/json",
            },
            body: JSON.stringify (book),
        })
        .then((res) => res.json ())
        .then ((data) => data);
    } catch (err) {
        console.log(err);
    }
}

export function updateBookAPI (book) {
    try {
       
        return fetch ('https://localhost:4000/books/' + book.id, {
            method: "UPDATE",
            headers:{
                "Contect-Type" : "application/json",
            },
            body: JSON.stringify (book),
        })
        .then((res) => res.json ())
        .then ((data) => data);
    } catch (err) {
        console.log(err);
    }
}


export function deleteBookAPI (id) {
    try {
        console.log (JSON.stringify(id));
        return fetch ("https://localhost:4000/books/" +id,{
            method: "DELETE",
            headers:{
                "Contect-Type" : "application/json",
            },
            body: JSON.stringify (id),
        })
        .then((res) => res.json ())
        .then ((data) => data);
    } catch (err) {
        console.log(err);
    }
}


