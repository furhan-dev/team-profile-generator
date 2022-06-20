const Intern = require('../lib/Intern');

let internData;
let intern;

beforeAll(() => {
    internData = ["Furhan Jr", "0.5", "student@furhan.dev", "4/20/15", "University of Waterloo"];
});

beforeEach(() => {
    intern = new Intern(...internData);
});

describe('Intern constructor', () => {
    it('verify constuctor', () => {
        expect(intern).toBeInstanceOf(Intern);
    });
});

describe('getSchool', () => {
    it('verify school', () => {
        expect(intern.getSchool()).toStrictEqual("University of Waterloo");
    });
});