const { Circle, Square, Triangle } = require('./shapes');

// Helper function to remove whitespace and newlines for easier comparison
const normalizeSvg = (svg) => svg.replace(/\s+/g, '');

describe('Shape Classes', () => {
    test('Circle renders correctly', () => {
        const circle = new Circle('ABC', 'red', 'blue');
        const expectedSvg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="blue" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>
        </svg>
        `;
        expect(normalizeSvg(circle.render())).toBe(normalizeSvg(expectedSvg));
    });

    test('Square renders correctly', () => {
        const square = new Square('XYZ', 'green', 'yellow');
        const expectedSvg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="yellow" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">XYZ</text>
        </svg>
        `;
        expect(normalizeSvg(square.render())).toBe(normalizeSvg(expectedSvg));
    });

    test('Triangle renders correctly', () => {
        const triangle = new Triangle('123', 'blue', 'red');
        const expectedSvg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="red" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">123</text>
        </svg>
        `;
        expect(normalizeSvg(triangle.render())).toBe(normalizeSvg(expectedSvg));
    });
});