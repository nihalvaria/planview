const fillColor = (ctx: CanvasRenderingContext2D, color: string | undefined) => {
    if (color) {
        ctx.fillStyle = color;
        ctx.fill();
    }
};

export default fillColor;
