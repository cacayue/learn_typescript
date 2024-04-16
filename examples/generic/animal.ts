class BeeKeeper {
  BeeTag: string

  constructor() {
    
  }
}

class LionKeeper {
  nameTags: string

  constructor() {
    
  }
}

class Animal {
  numLengs: number
}

class Bee extends Animal{
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: LionKeeper
}

function creatInstance<T extends Animal>(c: new() => T): T{
  return new c();
}

creatInstance(Lion).keeper.nameTags;
creatInstance(Bee).keeper.BeeTag