// Code your solution in this file!
function distanceFromHqInBlocks (pickup){
    return Math.abs(pickup - 42);
}

function distanceFromHqInFeet(pickup){
    return Math.abs(distanceFromHqInBlocks(pickup) * 264)
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264)
  }

  /*`calculatesFarePrice`: Given the same starting and ending block as the
  previous test (_hint hint_), return the fare for the customer. The first four
  hundred feet are free. For a distance between 400 and 2000 feet, the price is
  2 cents per foot (not including 400, which are free!). Then Scuber charges a
  flat fare of $25 for a distance over 2000 feet and under 2500 feet.
  Finally, Scuber does not allow any rides over 2500 feet — the function returns
  `'cannot travel that far'` if a ride over 2500 feet is requested.

  ```js
*/

  function calculatesFarePrice(start, destination) { 
    if (distanceTravelledInFeet(start, destination) <= 400){
        return 0
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet (start, destination) <= 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    }
    else if(distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500){
        return 25
    }
    return 'cannot travel that far'
  }