function counter (){
    let noOfclicks = 0
    return function(){
       console.log(noOfclicks++);
   }
 }
 
 let clicks = counter();
 clicks()
 clicks()
 clicks()
 
 let order = {
   orderId:"123456",
   productName: "Laptop",
   quantity:2
 }
 
 const getnestedInfo = ({orderId,productName,quantity})=>{
   return `YOUR orderId is ${orderId},product name is ${productName} and quantity is ${quantity}`
 }
  console.log(getnestedInfo(order))
 //3.
 const cart = shopping();
 console.log(`Cart Item : `,cart)
 
 
 function shopping(){
    let cart = [];
 
    function addToCart(name,productId,price,quantity)
   {
            const existingItem = cart.find(item => item.productId === productId)
            if(existingItem){
                existingItem.quantity += quantity;
            }
            else{
             cart.push({productId,name,price,quantity});
            }
    }
   function deleteItemFromCart(productId){
     cart = cart.filter(item => item.productId !== productId)
   }
    function getCartItems() {
     return cart;
 }
   
  
 
     return{
      addToCart,
      getCartItems,
      deleteItemFromCart
     
   }
      
 
 }
 
 const bag = shopping();
 bag.addToCart("apple",1,230,3)
 bag.addToCart("banana",2,10,2)
 bag.addToCart("apple",1,230,3)
 bag.addToCart("banana",2,10,2)
 bag.deleteItemFromCart(1)
 
 console.log(bag.getCartItems());
 //6.
 function createPlaylist(playlistName='Mood Swings'){
   const songs =[]
       function addSongs(SongName,artistName){
            songs.push({SongName,artistName})
            console.log(`Created playlist ${playlistName}  Song : ${SongName} By ${artistName}`);
            
       }
 function listSongs(){
    if (songs.length === 0){
     console.log(`playlist ${playlistName} is empty`);
     
    }else{
     console.log(`songs of playlist${playlistName} are`);
     songs.forEach((song,index)=>{
       console.log(`${index+1} : ${song.SongName} ${song.artistName}`);
       
     })
     
    }
    
 }
 return{
  addSongs,
   listSongs
 }
 }
 
 let myFav = createPlaylist()
 myFav.addSongs('CHERI CHERI','MODERN TALKING')
 myFav.addSongs('SHRI KRISHNA GOVIND HARE MURARI ','JUBIN NAUTILYA')
 
 myFav.listSongs();
 
 
 
 
 