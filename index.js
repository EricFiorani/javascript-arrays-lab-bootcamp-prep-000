const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop("Garfield")
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift("Milo")
  return kittens
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  return kittens.slic(0, kittens.length - 1);
}
