# is-operator

### Is operator

From what I can tell, Is operator is used to add guidelines or type to conditionals in functions. Perhaps there are more uses, but the example given makes sense.

We have two interfaces and a function that uses them:

```typescript
interface Fish {
  swim: () => void
}

interface Bird {
  fly: () => void
  walk: () => void
}

const getRandomPet = (): Fish | Bird => {
  if (Math.random() > 0.5) {
    return { swim: () => console.log('swimming') }
  } else {
    return {
      fly: () => console.log('Flying'),
      walk: () => console.log('Walking')
    }
  }
}
```

The one interface creates a Fish with a swim funciton, the second a bird who can fly and walk. The function getRandomPet get's a random pet. To note, as Fish and Bird types can be assigned to the return of getRandomPet, we can access the swim, walk, and fly features of the two interfaces.

#### Here it is

We can use the "Is" operator to dictate what kind of logic should be passed on if a certain type **is** passed into a function. In the case below, in the "isFish" function, we say that if the "pet **is** Fish" return swim in the pet (because the fish has swim). In the conditional following, we could not specify pet.fly before telling typescript that if the pet was a fish to do a thing, because a pet could still possibly be a Bird or a Fish.

```typescript
const isFish = (pet: Fish | Bird): pet is Fish => {
  return 'swim' in pet
}

const pet = getRandomPet()

if (isFish(pet)) {
  console.log("It's a fish!")
  pet.swim
} else {
  console.log("It's a bird!")
  pet.fly
}
```
