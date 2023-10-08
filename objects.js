class User {
    constructor(email, userName){
        this.email = email
        this.name =  userName
        this.score = 0
    }
    login(){
        console.log(this.email, 'has logged in')
        return this
    }
    logout(){
        console.log(this.email, 'has logged out')
        return this
    }
    updateScore(){
        this.score ++
        console.log(this.email, 'score is now', this.score)
        return this
    }
}

class Admin extends User{
    sudo(){
        console.log("I'am Super Power")
        return this
    }
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}



var userOne = new User('ryu@ninjas.com', 'Ryu')
var userTwo = new User('ken@ninjas.com', 'Ken')

// This is method chaining
userOne.login().updateScore().updateScore().logout()

// Testing out class inheritence
var superUper = new Admin('super@ninjas.com', 'Super')

// Array of Users
let users = [userOne, userTwo, superUper]

// Testing out new extended method
superUper.login().sudo().deleteUser(userOne)

console.log(users)





// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constrcutor method