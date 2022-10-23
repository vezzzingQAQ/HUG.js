/**
 * ○ Color接口
 */
export abstract class Color {
    /**
     * ▶ 转化为能被contex2D对象识别的css语句
     */
    abstract toStyle(): string;

    /**
     * ▶ 返回RGB格式的颜色数据
     * @param r R分量【0-255】
     * @param g G分量【0-255】
     * @param b B分量【0-255】
     * @returns RGBAColor:Color
     */
    public static createRGBColor(r: number, g: number, b: number): RGBAColor {
        return new RGBAColor(r, g, b, 255);
    }

    /**
     * ▶ 返回RGBA格式的颜色数据
     * @param r R分量【0-255】
     * @param g G分量【0-255】
     * @param b B分量【0-255】
     * @param a A分量【0-255】
     * @returns RGBAColor:Color
     */
    public static createRGBAColor(r: number, g: number, b: number, a: number): RGBAColor {
        return new RGBAColor(r, g, b, a);
    }
}

/**
 * ● RGBA颜色
 */
class RGBAColor implements Color {
    /**
     * ▷ r分量【0-255】
     */
    public r: number;

    /**
     * ▷ g分量【0-255】
     */
    public g: number;

    /**
     * ▷ b分量【0-255】
     */
    public b: number;

    /**
     * ▷ a分量【0-255】
     */
    a: number;

    /**
     * ▶ RGB颜色类，提供颜色操作等功能
     * @param r r分量
     * @param g g分量
     * @param b b分量
     * @param a a分量
     */
    constructor(r: number, g: number, b: number, a: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /**
     * ▶ 将RGB颜色转化为能被contex2D对象识别的css语句
     */
    public toStyle(): string {
        return `rgba(${this.r.toString()},${this.g.toString()},${this.b.toString()},${(this.a / 255).toString()})`;
    }
}