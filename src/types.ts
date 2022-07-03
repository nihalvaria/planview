export type TPoint2D = {
    x: number;
    y: number;
};

export type TSectionsConfig = {
    name?: string;
    rotation?: number;
    backgroundColor?: string;
    points: TPoint2D[];
};

export type TDiagramConfig = {
    width: number;
    height: number;
    rotation?: number;
    backgroundColor?: string;
    sections: TSectionsConfig[];
};

export type TDiagramResult = {
    diagram: string;
};

export type TGenerateDiagram = (diagramConfig: TDiagramConfig) => TDiagramResult;
