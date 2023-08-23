var getRandomPet = function () {
    if (Math.random() > 0.5) {
        return { swim: function () { return console.log("swimming"); } };
    }
    else {
        return {
            fly: function () { return console.log('Flying'); },
            walk: function () { return console.log('Walking'); }
        };
    }
};
// const isFish = (pet: Fish | Bird): boolean => {
//   return "swim" in pet;
// };
var isFish = function (pet) {
    return "swim" in pet;
};
var pet = getRandomPet();
// if(isFish(pet)){
//   console.log("It's a fish!")
// } else {
//   console.log("It's a bird!")
// }
if (isFish(pet)) {
    console.log("It's a fish!");
    pet.swim;
}
else {
    console.log("It's a bird!");
    pet.fly;
}
