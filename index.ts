import { Canvas } from "./src/renderEngine/canvas";
import { Point } from "./src/renderEngine/point";
import { RGB, RGBA } from "./src/Simplified/simple";

// 拾取页面中的DOM画布元素e
let canvasParentDom = document.querySelector("#vcanvasparent") as HTMLDivElement;
var H_Canvas: Canvas = Canvas.createCanvas(canvasParentDom, 2);

H_Canvas.setBackgroundColor(RGB(0, 0, 0));

H_Canvas.fill(RGB(255, 255, 0));
H_Canvas.stroke(RGB(255, 255, 255));
H_Canvas.rect(100, 200, 200, 300);

H_Canvas.strokeWeight(10);
H_Canvas.strokeJoin("round");
H_Canvas.strokeCap("round");
H_Canvas.fill(RGBA(255, 0, 0, 100));

H_Canvas.circle(400, 400, 200);

H_Canvas.line(600, 600, 800, 800);

H_Canvas.noFill();
H_Canvas.poly([
    Point.createPoint(900, 140),
    Point.createPoint(800, 400),
    Point.createPoint(700, 300),
    Point.createPoint(600, 420),
    Point.createPoint(500, 510),
    Point.createPoint(400, 1600),
])

