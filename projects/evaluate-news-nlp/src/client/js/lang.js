function check_language(){
    let languages =['en',	'es',	'fr'	,'it'	,'pt'	,'ca']

    var language = document.getElementById("lang");
    var selectedValue = language.value;
    if(languages.includes(selectedValue)) {
        alert("You have choosen "+selectedValue+" as a language")
    }
}

export{
    check_language
}