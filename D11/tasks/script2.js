export class polygon {
    constructor(shapName){
            this.area=0,
            this.name=shapName
    }
}

export class rectangle extends polygon{
    constructor(height,width){
        super("Rectangle");
        this.height = height;
        this.width = width;
    }
    #calcArea(){
        this.area = this.height * this.width
    }
    displayData(){
        this.#calcArea();
        console.log(`Name: ${this.name}`);
        console.log(`Height: ${this.height}`);
        console.log(`Width: ${this.width}`);
        console.log(`Area: ${this.area}`);
    }
}


export class circle extends polygon{
    constructor(radius){
        super("Circle");
        this.radius = radius;
    }
    #calcArea(){
        this.area = (Math.PI * (this.radius ** 2)).toFixed(3); 
    }
    displayData(){
        this.#calcArea();
        console.log(`Name: ${this.name}`);
        console.log(`Radius: ${this.radius}`);
        console.log(`Area: ${this.area}`);
    }
}


export class square extends polygon{
    constructor(side){
        super("Square");
        this.side = side;
    }
    #calcArea(){
        this.area = this.side * this.side;
    }
    displayData(){
        this.#calcArea();
        console.log(`Name: ${this.name}`);
        console.log(`Side: ${this.side}`);
        console.log(`Area: ${this.area}`);
    }
}

export class triangle extends polygon{
    constructor(base,height){
        super("Triangle");
        this.base = base;
        this.height = height;
    }
    #calcArea(){
        this.area = (this.base / 2) * this.height; 
    }
    displayData(){
        this.#calcArea();
        console.log(`Name: ${this.name}`);
        console.log(`Base: ${this.base}`);
        console.log(`Height: ${this.height}`);
        console.log(`Area: ${this.area}`);
    }
}