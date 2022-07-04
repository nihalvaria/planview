export const rotate = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number, rotation?: number) => {
    if (rotation) {
        ctx.translate(centerX, centerY);
        ctx.rotate((Math.PI / 180) * (270 - rotation));
        ctx.translate(-centerX, -centerY);
    }
};
