window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code


 // Loop through the products data
 for(let i=0; i < json.length;i++){

   // Create a variable to store each ride details in memory
   let rideElements=json[i]

   //Create variables to store data needed to decide Noober service level

   let luxuryRequest=rideElements.purpleRequested
   let passengerCount=rideElements.numberOfPassengers

   //create a variable to print the level of service requested by the customer
   let serviceLevel

   //if purple requested, return Noober Purple. If purple not requested and more than 3 passengers, return Noober XL. Return Noober X for all other cases. FIgure out which ride is requested and store it in memory.
 
   if (luxuryRequest == true) {
     serviceLevel=`Noober Purple`
   } else if (passengerCount > 3) {
     serviceLevel=`Noober XL`
   } else {serviceLevel=`Noober X`}

   //create element to insert in the DOM
   let element = document.querySelector(`.rides`)

   //insert element with html data for all 100 passengers, formatted with tailwind
   element.insertAdjacentHTML(`beforeend`,
   `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
   <i class="fas fa-car-side"></i>
   <span>${serviceLevel}</span>
 </h1>

 <div class="border-4 border-gray-900 p-4 my-4 text-left">
   <div class="flex">
     <div class="w-1/2">
       <h2 class="text-2xl py-1">${rideElements.passengerDetails.first} ${rideElements.passengerDetails.last}</h2>
       <p class="font-bold text-gray-600">${rideElements.passengerDetails.phoneNumber}</p>
     </div>
     <div class="w-1/2 text-right">
       <span class="rounded-xl bg-gray-600 text-white p-2">
       ${rideElements.numberOfPassengers} passengers
       </span>
     </div>
   </div>
   <div class="mt-4 flex">
     <div class="w-1/2">
       <div class="text-sm font-bold text-gray-600">PICKUP</div>
       <p>${rideElements.pickupLocation.address}</p>
       <p>${rideElements.pickupLocation.city}, ${rideElements.pickupLocation.state} ${rideElements.pickupLocation.zip}</p>
     </div>
     <div class="w-1/2">
       <div class="text-sm font-bold text-gray-600">DROPOFF</div>
       <p>${rideElements.dropoffLocation.address}</p>
       <p>${rideElements.dropoffLocation.city}, ${rideElements.dropoffLocation.state} ${rideElements.dropoffLocation.zip}</p>
     </div>
   </div>
 </div>`)
 }

})