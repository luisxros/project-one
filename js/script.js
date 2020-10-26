function handleGetData(event) {
    event.preventDefault();


    const characterName = $("#search").val()
    $.ajax({
            url: `https://www.superheroapi.com/api.php/3959057974126526/search/${characterName}`})
        .then(
            (data) => {
                console.log(data);
                $("#name").text(data.results[0].name)
            },

            (error) => {
                console.log("bad request: ", error)
            }

        )

}

$('form').on("submit", handleGetData)