// var SubscribersInYoutube = function (subscriberName,subscriberAge){
//     this.subscriberName = subscriberName;
//     this.subscriberAge = subscriberAge;
//     this.getSubscriberAge = function(){
//         console.log(`Subcriber ${this.subscriberName} age is ${this.subscriberAge}`);
//     }
// }

// By using prototype

// SubscribersInYoutube.prototype.subscriptionId = function(){
//     console.log(`Subscriber name is ${this.subscriberName}`)
// }


// var lakshman = new SubscribersInYoutube("Lakshman",21)
// var lakshman1 = new SubscribersInYoutube("Lakshman1",21)
// var lakshman2 = new SubscribersInYoutube("Lakshman2",21)
// var lakshman3 = new SubscribersInYoutube("Lakshman3",21)
// lakshman.subscriptionId()
// lakshman1.subscriptionId()
// lakshman2.subscriptionId()
// lakshman3.subscriptionId()
// console.log()
// console.log(lakshman1.getSubscriberAge())
// console.log(lakshman2.getSubscriberAge())
// console.log(lakshman3.getSubscriberAge())

/********************************************************************************************** */
/********************************************************************************************** */

/*IIFE(Immediately Invoked Function Expression) is also called as  Self-Executing Anonymous Function */
//Example for self-Executing Anonymous Function
(function () {
    console.log("Hey Lakshman");
    console.log("How are you!")
})();