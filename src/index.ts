interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
  walk: () => void;
}

const getRandomPet = (): Fish | Bird => {
  if (Math.random() > 0.5) {
    return { swim: () => console.log("swimming")}
  } else {
    return {
      fly: () => console.log('Flying'),
      walk: () => console.log('Walking')
    }
  }
}

// const isFish = (pet: Fish | Bird): boolean => {
//   return "swim" in pet;
// };

const isFish = (pet: Fish | Bird): pet is Fish => {
  return "swim" in pet;
};

const pet = getRandomPet()

// if(isFish(pet)){
//   console.log("It's a fish!")
// } else {
//   console.log("It's a bird!")
// }

if(isFish(pet)){
  console.log("It's a fish!")
  pet.swim
} else {
  console.log("It's a bird!")
  pet.fly
}