import { getMovies } from './isFilter.js';

const programmingLanguages = [
    { name: 'Python', value: 'Python' },
    { name: 'JavaScript', value: 'JavaScript' },
    { name: 'Java', value: 'Java' },
    { name: 'C++', value: 'C++' },
    { name: 'Ruby', value: 'Ruby' }
];

describe('Filters element of array', () => {
    test('I want to find "Java"', () => {
        expect(getMovies('Java', programmingLanguages)).toEqual([
            { name: 'JavaScript', value: 'JavaScript' },
            { name: 'Java', value: 'Java' }
        ]);
    });

    test('I want to find "script"', () => {
        expect(getMovies('script', programmingLanguages)).toEqual([
            { name: 'JavaScript', value: 'JavaScript' }
        ]);
    });

    test('I want to find "JS"', () => {
        expect(getMovies('JS', programmingLanguages)).toEqual([]);
    });

    test('I want to find nothing', () => {
        expect(getMovies('', programmingLanguages)).toEqual(
            programmingLanguages
        );
    });

    test('I want to find "Java" without second parameter', () => {
        expect(getMovies('Java')).toEqual([]);
    });
});
