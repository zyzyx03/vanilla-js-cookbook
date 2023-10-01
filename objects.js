class User {
    constructor(email, userName){
        this.email = email
        this.name =  userName
    }
    login(){
        console.log(this.email, 'has logged in')
    }
    logout(){
        console.log(this.email, 'has logged out')
    }
}


var userOne = new User('ryu@ninjas.com', 'Ryu')
var userTwo = new User('ken@ninjas.com', 'Ken')

console.log(userOne.login())
console.log(userTwo.logout())

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constrcutor method