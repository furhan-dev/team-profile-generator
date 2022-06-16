const Engineer = require('../lib/Engineer');

let engineerData;
let engineer;

beforeAll(() => {
    engineerData = ["Furhan", "003", "me@furhan.dev", "furhan-dev"];
});

beforeEach(() => {
    engineer = new Engineer(...engineerData);
});

describe('Engineer constructor', () => {
    it('verify constuctor', () => {
        expect(engineer).toBeInstanceOf(Engineer);
    });
});

describe('getGithub', () => {
    it('verify github', () => {
        expect(engineer.getGithub()).toStrictEqual("furhan-dev");
    });
});