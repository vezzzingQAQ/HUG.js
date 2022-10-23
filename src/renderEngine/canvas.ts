import { Color } from "./color";
import { Point } from "./point";

/**
 * ● 画板类，提供各种绘图方法
 */
export class Canvas {
    /**
     * ▷ 画板DOM元素
     */
    public domElement: HTMLCanvasElement;

    /**
     * ▷ 画板2D渲染对象
     */
    public context: CanvasRenderingContext2D;

    /**
     * ▷ 画板实际宽度
     */
    public width: number;

    /**
     * ▷ 画板实际高度
     */
    public height: number;

    /**
     * ▷ 用户自定义的错误处理函数
     */
    private _handleErrorFn: null | (() => void);

    /**
     * ▶ 画板类，提供各种绘图方法
     * @param domElement canvasDOM元素
     */
    constructor(domElement: HTMLCanvasElement) {
        this.domElement = domElement;
        this.context = this.domElement.getContext("2d") as CanvasRenderingContext2D;
        this.context.fillStyle = "rgb(0,0,0)";
        this.context.strokeStyle = "rgb(255,255,255)";
        this.width = this.domElement.width;
        this.height = this.domElement.height;
        this._handleErrorFn = null;
    }

    /**
     * ▶ 通过path绘制图形
     * @param fn 绘制操作回调函数
     */
    private _drawShapes(fn: () => void): void {
        this.context.beginPath();
        fn();
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
    }

    /**
     * ▶ 根据回调函数绘制图形，并且还原绘图状态
     * @param fn 绘制操作回调函数
     */
    private _turnBackDraw(fn: () => void): void {
        let fillTemp = this.context.fillStyle;
        let strokeTemp = this.context.strokeStyle;
        fn();
        this.context.fillStyle = fillTemp;
        this.context.strokeStyle = strokeTemp;
    }

    /**
     * ▶ 注册错误处理函数
     * @param fn 用户自定义的错误处理函数
     */
    public registerErrorHandler(fn: () => void): void {
        this._handleErrorFn = fn;
    }

    /**
     * ▶ 设置背景颜色
     * @param color 背景颜色
     */
    public setBackgroundColor(color: Color): void {
        this._turnBackDraw(() => {
            this.context.fillStyle = color.toStyle();
            this._drawShapes(() => {
                this.context.rect(0, 0, this.width, this.height);
            });
            this.context.fill();
        });
    }

    /**
     * ▶ 设置填充颜色
     * @param color 背景颜色
     */
    public fill(color: Color): void {
        this.context.fillStyle = color.toStyle();
    }

    /**
     * ▶ 取消填充颜色
     */
    public noFill(): void {
        this.context.fillStyle = "transparent";
    }

    /**
     * ▶ 设置描边颜色
     * @param color 背景颜色
     */
    public stroke(color: Color): void {
        this.context.strokeStyle = color.toStyle();
    }

    /**
     * ▶ 取消描边颜色
     */
    public noStroke(): void {
        this.context.strokeStyle = "transparent";
    }

    /**
     * ▶ 指定描边宽度
     * @param weight 描边宽度
     */
    public strokeWeight(weight: number): void {
        this.context.lineWidth = weight;
    }

    /**
     * ▶ 指定描边的端点类型
     * @param cap 描边端点类型
     */
    public strokeCap(cap: CanvasLineCap): void {
        this.context.lineCap = cap;
    }

    /**
     * ▶ 指定描边的衔接类型
     * @param join 描边的衔接类型
     */
    public strokeJoin(join: CanvasLineJoin): void {
        this.context.lineJoin = join;
    }

    /**
     * ▶ 绘制长方形
     * @param positionX 左上角X坐标
     * @param positionY 左上角Y坐标
     * @param width 长度
     * @param height 宽度
     */
    public rect(positionX: number, positionY: number, width: number, height: number): void {
        this._drawShapes(() => {
            this.context.rect(positionX, positionY, width, height);
        });
    }

    /**
     * ▶ 绘制圆
     * @param positionX 圆心X坐标
     * @param positionY 圆心Y坐标
     * @param radius 半径
     */
    public circle(positionX: number, positionY: number, radius: number) {
        this._drawShapes(() => {
            this.context.ellipse(positionX, positionY, radius, radius, 0, 0, Math.PI * 2);
        });
    }

    /**
     * ▶ 绘制直线段
     * @param x1 起点X坐标
     * @param y1 起点Y坐标
     * @param x2 终点X坐标
     * @param y2 终点Y坐标
     */
    public line(x1: number, y1: number, x2: number, y2: number): void {
        this._drawShapes(() => {
            this.context.moveTo(x1, y1);
            this.context.lineTo(x2, y2);
        });
    }

    /**
     * ▶ 绘制闭合的多边形
     * @param pointList 点类数组
     */
    public poly(pointList: Array<Point>): void {
        this._drawShapes(() => {
            let startPoint = pointList[0];
            this._drawShapes(() => {
                this.context.moveTo(startPoint.x, startPoint.y);
                for (let i = 1; i < pointList.length; i++) {
                    this.context.lineTo(pointList[i].x, pointList[i].y);
                }
            });
        });
    }

    /**
     * ▶ 根据父DOM元素创建一个画板类
     * @param parentDom 画板的父元素【需要一个DIV】
     * @param rate 画板缩放比例
     * @returns 返回Canvas类
     */
    public static createCanvas(parentDom: HTMLDivElement, rate: number = 1): Canvas {
        let canvasDom = document.createElement("canvas");
        canvasDom.width = parentDom.offsetWidth * rate;
        canvasDom.height = parentDom.offsetHeight * rate;
        canvasDom.id = "vCanvas";
        canvasDom.style.margin = "0px";
        canvasDom.style.padding = "0px";
        canvasDom.style.width = `${parentDom.offsetWidth.toString()}px`;
        canvasDom.style.height = `${parentDom.offsetHeight.toString()}px`;
        canvasDom.style.boxSizing = "border-box";
        parentDom.appendChild(canvasDom);
        return new Canvas(canvasDom);
    }
}