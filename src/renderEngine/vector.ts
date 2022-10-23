/**
 * ● 二维向量
 */
export class Vector2 {
    /**
     * ▷ x分量
     */
    public x: number;

    /**
     * ▷ y分量
     */
    public y: number;

    /**
     * ▶ 二维向量类
     * @param x X分量
     * @param y Y分量
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * ▶ 和另一个二维向量相加并将结果运算到自身
     * @param ovec 另一个二维向量
     */
    public add(ovec: Vector2): void {
        this.x += ovec.x;
        this.y += ovec.y;
    }

    /**
     * ▶ 和另一个二维向量相加并将结果以一个新向量的形式返回
     * @param ovec 另一个二维向量
     * @returns 一个新的二维向量
     */
    public addNew(ovec: Vector2): Vector2 {
        return new Vector2(this.x + ovec.x, this.y + ovec.y);
    }

    /**
     * ▶ 在当前方向上延长几倍并将结果运算到自身
     * @param rate 延长的倍数
     */
    public mult(rate: number): void {
        this.x *= rate;
        this.y *= rate;
    }

    /**
     * ▶ 在当前方向上延长几倍并将结果以一个新向量的形式返回
     * @param rate 延长的倍数
     */
    public multNew(rate: number): Vector2 {
        return new Vector2(this.x * rate, this.y * rate);
    }

    /**
     * ▶ 在当前方向上缩短几倍并将结果运算到自身
     * @param rate 缩短的倍数
     */
    public div(rate: number): void {
        this.x /= rate;
        this.y /= rate;
    }

    /**
     * ▶ 在当前方向上缩短几倍并将结果以一个新向量的形式返回
     * @param rate 缩短的倍数
     */
    public divNew(rate: number): Vector2 {
        return new Vector2(this.x / rate, this.y / rate);
    }

    /**
     * ▶ 返回向量的模
     * @returns 向量的模
     */
    public abs(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * ▶ 返回向量的旋转角
     * @returns 向量相对于x轴正方向的旋转角
     */
    public angle(): number {
        return Math.atan(this.y / this.x);
    }

    /**
     * ▶ 转换为单位向量，并将转换的结果运用于自身
     */
    public normal(): void {
        this.mult(1 / this.abs());
    }

    /**
     * ▶ 转换为单位向量，并将结果以一个新向量的形式返回
     * @returns 返回新的向量
     */
    public normalNew(): Vector2 {
        return new Vector2(
            this.x * (1 / this.abs()),
            this.y * (1 / this.abs())
        );
    }

    /**
     * ▶ 以顺时针方向为正将向量旋转特定的角度，并将运算结果运用于自身
     * @param angle 顺时针旋转的角度
     */
    public rotate(angle: number): void {
        let len = this.abs();
        let newAngle = this.angle() + angle;
        this.x = len * Math.cos(newAngle);
        this.y = len * Math.sin(newAngle);
    }

    /**
     * ▶ 以顺时针方向为正将向量旋转特定的角度，并将结果以一个新向量的形式返回
     * @param angle 顺时针旋转的角度
     * @returns 返回新的向量
     */
    public rotateNew(angle: number): Vector2 {
        let len = this.abs();
        let newAngle = this.angle() + angle;
        return new Vector2(len * Math.cos(newAngle), len * Math.sin(newAngle));
    }

    /**
     * ▶ 拷贝一份当前向量
     * @returns 当前向量的拷贝
     */
    public copy(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    /**
     * ▶ 创建Vector2
     * @param x 向量X分量
     * @param y 向量Y分量
     * @returns Vector2类型的向量
     */
    public static createVector2(x: number, y: number): Vector2 {
        return new Vector2(x, y);
    }
}