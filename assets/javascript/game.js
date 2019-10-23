
var crystal = {
    blue:
    {
        name: "blue", value: 0
    },
    red:
    {
        name: "red", value: 0
    },
    purple:
    {
        name: "purple", value: 0
    },
    green:
    {
        name: "green", value: 0
    },
};

var currentscore = 0;
var targetscore = 0;
var wins = 0;
var losses = 0;

var getrandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startgame = function () {

    var currentscore = 0;

    targetscore = getrandom(19, 120);

    crystal.blue.value = getrandom(1, 12);
    crystal.red.value = getrandom(1, 12);
    crystal.purple.value = getrandom(1, 12);
    crystal.green.value = getrandom(1, 12);

    $("#yourscore").html(currentscore);
    $("#targetscore").html("Target Score: " + targetscore);

    console.log("------------");
    console.log("target score: " + targetscore);
    console.log("blue: " + crystal.blue.value + " | red: " + crystal.red.value + " | purple: " + crystal.purple.value + " | green: " + crystal.green.value)


};

var addvalues = function (crystal) {

    currentscore = currentscore + crystal.value;
    $("#yourscore").html(currentscore);
    check();

    console.log("your score: " + currentscore);
}

var check = function () {
    if (currentscore > targetscore) {
        alert("you lost :/");
        losses++;
        $("#losses").html("losses: " + losses);
    }
    else if (currentscore == targetscore) {
        alert("YAY you won!!!");
        wins++;
        $("#wins").html("wins: " + wins);
    }
}

$("#blue").on("click", function () {
    addvalues(crystal.blue);
});
$("#red").on("click", function () {
    addvalues(crystal.red);
});
$("#purple").on("click", function () {
    addvalues(crystal.purple);
});
$("#green").on("click", function () {
    addvalues(crystal.green);
});

startgame();

