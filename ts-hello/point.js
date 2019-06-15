"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
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
    Point.prototype.draw = function () {
        console.log('X : ' + this._x + ' Y : ' + this._y);
    };
    return Point;
}());
exports.Point = Point;
