function renderNumLists () {
    for (var i = 0; i < 11; i++) {
        friendList = [];
        for (var j = 0; j < 11; j++) {
            friendList.push(Math.floor(Math.random() * 5) + 1).toString();
        }
        console.log(friendList)
    }

}

renderNumLists();