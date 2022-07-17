import { TPoint2D } from 'types';
import { removeDuplicatePoints } from './parse';

/**
 * Calculating the distance between two points, in 2d a plane.
 * √(x2 - x1)^2 + (y2 - y1)^2
 */
export const distanceBetweenTwoPoints = (x1: number, x2: number, y1: number, y2: number): number => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

/**
 * Calculating the maximum distance possible between array of points, in 2d plane.
 */
export const maximumDistanceBetweenTwoPoints = (points: TPoint2D[]): number => {
    let maximumDistance = -1;

    for (let a = 0; a < points.length; a++) {
        for (let b = 0; b < points.length; b++) {
            const distance = distanceBetweenTwoPoints(points[a].x, points[b].x, points[a].y, points[b].y);

            if (distance > maximumDistance) {
                maximumDistance = distance;
            }
        }
    }

    return maximumDistance;
};

/**
 * Calculating centroid / center of gravity of a convex polygon,
 *
 * p = [{x: 1, y:1}, {x:2, y:2}, {x:1, y:2}], where n = length of p
 *
 * c(p) = {
 *     x: ( p[0].x + p[1].x ... + p[n].x ) / n,
 *     y: ( p[0].y + p[1].y ... + p[n].y ) / n
 * }
 */
export function centroidOfPolygon(points: TPoint2D[]): TPoint2D {
    /**
     * Also we need to make sure that the points are unique,
     * This is because, in a closed shape usually the initial and final point may be the same,
     * Which in turn results to wrong centroid.
     */
    const uniquePoints = removeDuplicatePoints(points);
    const { length } = uniquePoints;
    return uniquePoints.reduce(
        (center, point, idx) => {
            center.x += point.x;
            center.y += point.y;

            if (idx === length - 1) {
                center.x /= length;
                center.y /= length;
            }

            return center;
        },
        { x: 0, y: 0 },
    );
}
