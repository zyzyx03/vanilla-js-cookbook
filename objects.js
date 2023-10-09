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

// Attach method to User prototype

var userOne = new User('ryu@ninjas.com', 'Ryu')
var userTwo = new User('ken@ninjas.com', 'Ken')

console.log(userOne)
userTwo.login()
