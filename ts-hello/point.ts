export class Point{
    constructor(private _x?: number, private _y?: number){
        this._x = _x;
        this._y = _y;
    }

    /*  =>--- in vogue constructor ---<= 
    
    private x: number;
    private y: number;

    contructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    
    */

    draw(){
        console.log('X : '+ this._x + ' Y : '+ this._y);
    }

    /*   =>-- Getter and Setter --<=
    get x(){
        return this._x;
    }

    set x(value){
        if(value < 0)
            throw new Error('Value can not be less than 0');

        this._x = value;
    } 
    let point = new Point(1, 2);
    point.x = 7;
    let X = point.x;
    */
}