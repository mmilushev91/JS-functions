const createBooking = function(
  flightNum,
  
  //ES6 default parameters
  passengers = 1,
  
  //parameters can be used for expresions as long as order is respected
  price = 199 * passengers
  ) {
  // ES5 for setting default parameters
  // passengers = passengers || 1;
  // price = price || 199;
  
    const booking = {
      //advanced object literals
      flightNum,
      passengers,
      price,
    }
    
    console.log(booking)
    bookings.push(booking)
  }

const bookings = []

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

//undefined can be used for skipping parameter and adding value to the desired paramenter
createBooking('LH123', undefined, 1000);
