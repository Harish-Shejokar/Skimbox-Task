// In builder pattern instead of inserting all data at constructor we made small funciton and then add that data to that Instance or Object 

// method - 1
class User{
    constructor(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    setAddress(adress) {
        this.adress = adress;
    }
    setPhone(age) {
        this.age = age;
    }
}


const u1 = new User("harry");
u1.setAddress("Nagpur")
u1.setPhone("238873289")
console.log(u1);

class NewUser{
    constructor(name, { address, phone, age } = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.age = age;
        this.address = address;
    }

}
const u2 = new NewUser("garry", { address: "Nagpur", age: 23 });
console.log(u2);
import React from 'react'

const BuilderPattern = () => {
  return (
    <div>
      <h1>BuilderPattern</h1>
    </div>
  )
}

export default BuilderPattern
