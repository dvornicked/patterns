"use strict";
class Micron {
    constructor(color) {
        this.brand = 'Micron';
        this.color = color;
    }
}
class Pilot {
    constructor(color) {
        this.name = 'Pilot';
        this.color = color;
    }
}
class PenFactory {
    print(...data) {
        console.log(...data);
    }
}
class MicronFactory extends PenFactory {
    createPen(color) {
        return new Micron(color);
    }
}
class PilotFactory extends PenFactory {
    createPen(color) {
        return new Pilot(color);
    }
}
const micronFactory = new MicronFactory();
const micronPigma = micronFactory.createPen('Black');
micronFactory.print(micronPigma.brand);
