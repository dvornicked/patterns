interface IPen {
  color: string
}

class Micron implements IPen {
  color: string

  constructor(color: string) {
    this.color = color
  }

  brand = 'Micron'
}

class Pilot implements IPen {
  color: string

  constructor(color: string) {
    this.color = color
  }

  name = 'Pilot'
}

abstract class PenFactory {
  abstract createPen(color: string): IPen
  print(...data: any[]) {
    console.log(data)
  }
}

class MicronFactory extends PenFactory {
  createPen(color: string) {
    return new Micron(color)
  }
}

class PilotFactory extends PenFactory {
  createPen(color: string) {
    return new Pilot(color)
  }
}

const micronFactory = new MicronFactory()
const micronPigma = micronFactory.createPen('Black')
micronFactory.print(micronPigma.brand)
