import { TGenerateDiagram } from 'types';

export const generateDiagram: TGenerateDiagram = diagramConfig => {
    const canvas: HTMLCanvasElement = document.createElement('canvas');

    canvas.width = diagramConfig.width || 100;
    canvas.height = diagramConfig.height || 100;

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.rect(0, 0, canvas.width, canvas.height);

    return { diagram: canvas.toDataURL() };
};
