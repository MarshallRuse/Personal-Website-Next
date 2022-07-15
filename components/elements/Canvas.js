import React, { useEffect, useRef, useState } from "react";

const Canvas = (props) => {
    const { draw, width = "100%", height = "100%", fps = 30, establishCanvasWidth, establishContext, ...rest } = props;
    const [context, setContext] = useState(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const resizeCanvas = (context) => {
            const canvas = context.canvas;
            const { width, height } = canvas.getBoundingClientRect();

            if (canvas.width !== width || canvas.height !== height) {
                const { devicePixelRatio: ratio = 1 } = window;
                canvas.width = width * ratio;
                canvas.height = height * ratio;
                if (establishCanvasWidth) {
                    establishCanvasWidth(canvas.width);
                }
                context.scale(ratio, ratio);
                return true;
            }
            return false;
        };

        if (canvasRef.current) {
            const cnvs = canvasRef.current;
            const ctx = cnvs.getContext("2d");
            setContext(ctx);
            if (establishContext) {
                establishContext(ctx);
            }
            resizeCanvas(ctx);
        } else {
            setContext(null);
            if (establishContext) {
                establishContext(null);
            }
        }
    }, [establishContext]);

    useEffect(() => {
        let animationFrameId, fpsInterval, startTime, now, then, elapsed;

        if (context) {
            const render = () => {
                animationFrameId = window.requestAnimationFrame(render);
                now = Date.now();
                elapsed = now - then;
                if (elapsed > fpsInterval) {
                    // Get ready for next frame by setting then=now, but also adjust for your
                    // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
                    then = now - (elapsed % fpsInterval);
                    draw();
                }
            };
            const startRendering = (fps) => {
                fpsInterval = 1000 / fps;
                then = Date.now();
                startTime = then;
                render();
            };
            startRendering(fps);
        }

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw, context, fps]);

    return <canvas ref={canvasRef} {...rest} style={{ display: "block", position: "absolute", width, height }} />;
};

export default Canvas;
