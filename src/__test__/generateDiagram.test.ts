import { generateDiagram } from '../generateDiagram';

describe('generateDiagram', () => {
    it('works', () => {
        expect(generateDiagram(1, 1)).toEqual(2);
    });
});
