/**
 * ● 二维点
 */
export class Point {
    /**
     * ▷ x坐标
     */
    public x: number;

    /**
     * ▷ y坐标
     */
    public y: number;

    /**
     * ▶ 点类
     * @param x X坐标
     * @param y Y坐标
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * ▶ 创建Point
     * @param x 点的X坐标
     * @param y 点的Y坐标
     * @returns Point类型的点
     */
    public static createPoint(x: number, y: number): Point {
        return new Point(x, y);
    }
}