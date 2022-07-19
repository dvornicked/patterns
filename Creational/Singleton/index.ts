class MyMap {
  private static instanse: MyMap

  map: Map<number, string> = new Map()

  clean() {
    this.map = new Map()
  }

  private constructor() {}

  static get(): MyMap {
    if (!MyMap.instanse) {
      MyMap.instanse = new MyMap()
    }
    return MyMap.instanse
  }
}

class ServiceA {
  addMap(key: number, value: string) {
    const myMap = MyMap.get()
    myMap.map.set(key, value)
  }
}

class ServiceB {
  logAndClear(key: number) {
    const myMap = MyMap.get()
    console.log(myMap.map.get(key))
    myMap.clean()
  }
}

new ServiceA().addMap(0, 'Zero')
new ServiceB().logAndClear(0)