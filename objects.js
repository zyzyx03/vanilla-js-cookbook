function User(email, name){
    this.email = email
    this.name = name
    this.online = false
    // this.login = function(){
    //     console.log(this.email, 'has logged in')
    // }
}

User.prototype.login = function(){
    this.online = true
    console.log(this.email, 'has logged in')
}
User.prototype.logout = function(){
    this.online = false
    console.log(this.email, 'has logged out')
}

function Admin(...args){
    User.apply(this, args)
    this.role = 'super admin'
}

Admin.prototype = Object.create(User.prototype)

// If email match return false, if email dont match return true
Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email
    })
}

// Attach method to User prototype
var userOne = new User('ryu@ninjas.com', 'Ryu')
var userTwo = new User('ken@ninjas.com', 'Ken')
var admin = new Admin('wan@ninjas.com', 'wan')

var users = [userOne, userTwo, admin]

console.log(admin)
