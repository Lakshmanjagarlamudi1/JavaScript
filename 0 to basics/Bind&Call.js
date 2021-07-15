const Lakshman = {
  firstName: "Lakshmi",
  lastName: "Narayana",
  mobile: 8888888888,
  gender: "Male",
  getInfo: function () {
    console.log(`  
      Name is ${this.firstName} ${this.lastName}
      Gender is ${this.gender}
      and His Mobile is ${this.mobile}
      `);
  },
};

const lakshman1 = {
  firstName: "Prabu",
  lastName: "Reddy",
  mobile: 999999999,
  gender: "Male",
};
var person = Lakshman.getInfo.bind(lakshman1);
person()
/* Here The lakshman1 details are grabbed the console file from lakshman usind bind prototype 
Bind is a method it only references the function that's it. It's doesn't perform anything. for the performance we have to call that function using call method
*/


/* We can also do it in another method using "call" keyword inplace of "bind"
call keyword will grabe the information and call it directly without using any call method.
Here we can see How the "call" keyword is work */

Lakshman.getInfo.call(lakshman1); 
/* Output is 
      Name is Prabu Reddy
      Gender is Male
      and His Mobile is 999999999
 */