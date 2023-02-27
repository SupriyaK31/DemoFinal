console.log('person1: Show Ticket');
console.log('person2: Show Ticket');
const preMovie=async()=>{
    const promiseWifeBringingTickets= new Promise((resolve,reject)=>setTimeout(()=>resolve('ticket'),3000));
    const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
    const addButter=new Promise((resolve,reject)=>resolve('Butter'));
    const getColdDrink=new Promise((resolve,reject)=>resolve('Cold Drink'));
    let ticket=await promiseWifeBringingTickets;
    let[popcorn,butter,coldDrink]=await Promise.all([getPopcorn,addButter,getColdDrink]);
    console.log(`${popcorn},${butter},${coldDrink}`);
/*    console.log('wife: I have a Tickets');
    console.log('Husband: we should go in');
    console.log('Wife:No i am hungry');
    let popcorn=await getPopcorn;
    console.log('Hunband: I got some Popcorn');
    console.log('Husband: we should go in');
    console.log('Wife:I need butter on my Popcorn');
    let butter=await addButter;
    console.log('Hunband: I got some butter on Popcorn');
    console.log('Husband: Any thing else');
    console.log('Wife:I need Cold Drink');
    let coldDrink=await getColdDrink;
    console.log('Hunband: I got Cold Drink');
    console.log('Wife: lets go we are getting late');
    console.log('Husband:Lets Go');*/
return ticket;
}



preMovie().then((m)=>console.log(`Person 3: Shows ${m}`))