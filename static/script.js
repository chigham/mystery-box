const title = document.querySelector("h1");
const titleButton = document.getElementById("title-button");

const apiUrl = "https://health.aws.amazon.com/public/currentevents";

titleButton.addEventListener("click", () => {
    if (title.style.color === "purple") {
        title.style.color = "red";
    } else {
        title.style.color = "purple";
    }
    
    let result = callAwsApi();
});

async function callAwsApi () {
    await fetch(apiUrl, {mode: "no-cors"})  // cors fails, no-cors "works" (200) but returns opaque result
        .then(response => {
            console.log("made it this far");
            // Result is not ok if mode is cors (default)
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.headers.values;//.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}