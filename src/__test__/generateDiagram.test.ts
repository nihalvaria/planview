import { generateDiagram } from '../generateDiagram';
import { TDiagramConfig } from '../types';

describe('generateDiagram', () => {
    it('works', () => {
        const relative_points: TDiagramConfig = {
            width: 500,
            height: 500,
            backgroundColor: '#009dff',
            sections: [
                {
                    name: 'Room 1',
                    rotation: 75,
                    backgroundColor: '#CFD8DC',
                    points: [
                        { x: 100, y: 340 },
                        { x: 250, y: 340 },
                        { x: 250, y: 150 },
                        { x: 100, y: 150 },
                        { x: 100, y: 340 },
                    ],
                },
            ],
        };

        expect(generateDiagram(relative_points)).toEqual(
            expect.objectContaining({
                diagram: expect.any(String),
            }),
        );
    });
});
