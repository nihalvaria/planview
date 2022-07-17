import { TGenerateDiagram, TPoint2D } from 'types';
import { fillColor } from './utils/styling';
import { rotate, autoScaleDiagram } from './utils/transform';

export const generateDiagram: TGenerateDiagram = diagramConfig => {
    const canvas: HTMLCanvasElement = document.createElement('canvas');

    const { height, width } = diagramConfig;
    canvas.height = height;
    canvas.width = width;

    const center: TPoint2D = {
        x: height / 2,
        y: width / 2,
    };

    const autoScale = diagramConfig.autoScale || false;
    const centerOrigin = diagramConfig.centerOrigin || false;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    ctx.rect(0, 0, width, height);

    fillColor(ctx, diagramConfig.backgroundColor);
    rotate(ctx, center, diagramConfig.rotation);

    const { sections } = autoScale ? autoScaleDiagram(diagramConfig, center) : diagramConfig;

    sections.forEach(section => {
        ctx.beginPath();
        section.points.forEach(point => {
            if (centerOrigin) {
                point.x += center.x;
                point.y += center.y;
            }
            ctx.lineTo(point.x, point.y);
        });
        fillColor(ctx, section.backgroundColor);
        ctx.stroke();
    });

    return { diagram: canvas.toDataURL() };
};
