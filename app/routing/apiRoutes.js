var friends = require('../data/friends.js');

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        
        var bestMatch = {
            name: "",
            photo: "",
            difference: 1000
        };
        
        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {
            totalDifference = 0;

            for ( var j = 0; j < friends[i].scores.length; j++) {
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                console.log(totalDifference <= bestMatch.difference);
                if (totalDifference <= bestMatch.difference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.difference = totalDifference;
                }
            }
        }

        console.log(bestMatch)

        friends.push(userData);

        res.json(bestMatch);
    });
}