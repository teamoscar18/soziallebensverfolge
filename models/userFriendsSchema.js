// Model for the user friends

module.exports = (function userFriendsSchema() {

    var mongoose = require('../db').mongoose;
    var Schema = mongoose.Schema;
    require('./usersSchema');
    

    var friendsSchema = {
        useremail: {
            type: String,
            required: true
        },
        friendlist: [users]
    };

    var collectionName = 'userfriends';
    var users = mongoose.model('users');
    var userFriendsSchema = mongoose.Schema(friendsSchema);   
    var userFriends = mongoose.model(collectionName, userFriendsSchema);

    return userFriends;
})();