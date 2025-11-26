//Display action based on traffic light color

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question("Enter the color: ", function(light) {
switch(light) {
    case "red":
        console.log("Stop")
        break
    case "yellow":
        console.log("Get Ready")
        break
    case "green":
        console.log("Go")
        break
    default:
        console.log("Invalid color")
}
readline.close()
}
)
