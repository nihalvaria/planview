import { TDiagramConfig, TPoint2D } from 'types';
import { getAllPoints } from './parse';
import { centroidOfPolygon, maximumDistanceBetweenTwoPoints } from './calculate';

export const rotate = (ctx: CanvasRenderingContext2D, center: TPoint2D, rotation?: number) => {
    if (rotation) {
        ctx.translate(center.x, center.y);
        ctx.rotate((Math.PI / 180) * (270 - rotation));
        ctx.translate(-center.x, -center.y);
    }
};

export const autoScaleDiagram = (diagramConfig: TDiagramConfig, center: TPoint2D): TDiagramConfig => {
    // Calculating the drawing area of the diagram,
    const drawingArea = diagramConfig.height * (diagramConfig.drawingArea || 0.8);

    // Get all the points of all the sections
    const allPoints = getAllPoints(diagramConfig.sections);

    // Get maximum possible distance between two points from all the sections
    const maximumDistance = maximumDistanceBetweenTwoPoints(allPoints);

    // Calculating the scale factor, to make the diagram fit in the drawing area
    const scaleFactor = drawingArea / maximumDistance;

    // Getting the centroid of the diagram
    const centroid = centroidOfPolygon(allPoints);

    // The coordinates for the centroid of the scaled diagram.
    const centroidPoint: TPoint2D = {
        x: center.x + centroid.x * scaleFactor,
        y: center.y + centroid.y * scaleFactor,
    };

    // The offset to add to make diagram centerd in the drawing area.
    const offset: TPoint2D = {
        x: center.x - centroidPoint.x,
        y: center.y - centroidPoint.y,
    };

    const sections = diagramConfig.sections.map(section => ({
        ...section,
        points: section.points.map(point => ({
            x: point.x * scaleFactor + offset.x,
            y: point.y * scaleFactor + offset.y,
        })),
    }));

    return { ...diagramConfig, sections };
};
