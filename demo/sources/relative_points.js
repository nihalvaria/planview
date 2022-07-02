export const relative_points = {
    width: 500,
    height: 500,
    backgroundColor: '#009dff',
    sections: [
        {
            name: "Parent Section",
            rotation: 75,
            isParentSection: true,
            backgroundColor: '#B39DDB',
            points: [
                { x: 150, y: 150 },
                { x: 150, y: 350 },
                { x: 350, y: 350 },
                { x: 350, y: 150 },
                { x: 150, y: 150 },
            ],
        },
        {
            name: "Child Section",
            rotation: 75,
            backgroundColor: '#5E35B1',
            points: [
                { x: 160, y: 160 },
                { x: 160, y: 200 },
                { x: 200, y: 200 },
                { x: 200, y: 160 },
                { x: 160, y: 160 },
            ],
        }
    ]
};
