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


var userOne = new User('ryu@ninjas.com', 'Ryu')
var userTwo = new User('ken@ninjas.com', 'Ken')

// This is method chaining
userOne.login().updateScore().updateScore().logout()

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constrcutor method