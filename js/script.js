function handleGetData(event) {
    event.preventDefault();


    const characterName = $("#search").val()
    $.ajax({
            url: `https://www.superheroapi.com/api.php/3959057974126526/search/${characterName}`})
        .then(
            (data) => {
                console.log(data);
                $("#name").text(data.results[0].name)
                $("#fullName").text(data.results[0].biography["full-name"])
                $("#eye").text(data.results[0].appearance["eye-color"])
                $("#gender").text(data.results[0].appearance["gender"])
                $("#intelligence").text(data.results[0].powerstats.intelligence)
                $("#picture").attr("src", data.results[0].image.url);
            },

            (error) => {
                console.log("bad request: ", error)
            }

        )

}

$('form').on("submit", handleGetData)