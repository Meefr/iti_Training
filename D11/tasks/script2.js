export class polygon {
    constructor(shapName){
            this.area=0,
            this.name=shapName
    }
    toString(){
        console.log(`Name: ${this.name}`);
        console.log(`Area: ${this.area}`);
    }
}

export class rectangle extends polygon{
    constructor(height,width){
        super("Rectangle");
        this.height = height;
        this.width = width;
    }
    #calcArea(){
        this.area = this.height * this.width;
    }
    toString(){
        this.#calcArea();
        super.toString();
        console.log(`Height: ${this.height}`);
        console.log(`Width: ${this.width}`);
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
    toString(){
        this.#calcArea();
        super.toString();
        console.log(`Radius: ${this.radius}`);      
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
    toString(){
        this.#calcArea();
        super.toString();
        console.log(`Side: ${this.side}`);
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
    toString(){
        this.#calcArea();
        super.toString();
        console.log(`Base: ${this.base}`);
        console.log(`Height: ${this.height}`);
    }
}