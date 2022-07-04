const marker_points = {
    width: 500,
    height: 500,
    rotation: 0,
    autoScale: true,
    centerOrigin: true,
    backgroundColor: '#009dff',
    sections: [
        {
            name: "Parent Section",
            backgroundColor: '#B39DDB',
            points: [
                { x: 300, y: 300 },
                { x: -300, y: 300 },
                { x: -300, y: -300 },
                { x: 300, y: -300 },
            ],
        },
    ],
};

export default marker_points;
