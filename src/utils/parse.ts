import { TPoint2D, TSectionsConfig } from 'types';

/**
 * Returns all the points of sections in an array.
 */
export const getAllPoints = (sections: TSectionsConfig[]) => {
    return sections.reduce((acc: TPoint2D[], section) => [...acc, ...section.points], []);
};

/**
 * Removing duplicates from the TPoint2D array.
 */
export const removeDuplicatePoints = (points: TPoint2D[]): TPoint2D[] => {
    const uniquePointsArray: TPoint2D[] = [];
    const uniquePointsObj: Record<string, boolean> = {};
    points.forEach(point => {
        const key = `${point.x}-${point.y}`;
        if (!uniquePointsObj[key]) {
            uniquePointsArray.push(point);
            uniquePointsObj[key] = true;
        }
    });
    return uniquePointsArray;
};
