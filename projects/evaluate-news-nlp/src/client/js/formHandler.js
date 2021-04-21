function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test?'+ new URLSearchParams({
        formText: formText
    }))
    .then(function(data){
       return data.json()
    }).then( function(x){
        console.log(x.subjectivity)
        document.getElementById('results').innerHTML = x.subjectivity + " " + x.agreement+ " " + x.irony
    })


}

export { handleSubmit }
