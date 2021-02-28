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
                $("#hair").text(data.results[0].appearance["hair-color"])
                $("#height").text(data.results[0].appearance["height"])
                $("#race").text(data.results[0].appearance["race"])
                $("#combat").text(data.results[0].powerstats.combat)
                $("#durability").text(data.results[0].powerstats.durability)
                $("#intelligence").text(data.results[0].powerstats.intelligence)
                $("#power").text(data.results[0].powerstats.power)
                $("#speed").text(data.results[0].powerstats.speed)
                $("#strength").text(data.results[0].powerstats.strength)
                $("#ga").text(data.results[0].connections["group-affiliation"])
                $("#publisher").text(data.results[0].biography.publisher)
                $("#fa").text(data.results[0].biography["first-appearance"])
                $("#work").text(data.results[0].work.occupation)
                $("#picture").attr("src", data.results[0].image.url);
            },

            (error) => {
                console.log("bad request: ", error)
            }

        )

}

$('form').on("submit", handleGetData)

function toggleDrop() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }