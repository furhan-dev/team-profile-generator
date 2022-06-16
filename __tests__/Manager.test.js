const Manager = require('../lib/Manager');

let managerData;
let manager;

beforeAll(() => {
    managerData = ["Big Boss", "001", "boss@furhan.dev", "666"];
});

beforeEach(() => {
    manager = new Manager(...managerData);
});

describe('Manager constructor', () => {
    it('verify constuctor', () => {
        expect(manager).toBeInstanceOf(Manager);
    });
});

describe('getRole', () => {
    it('verify role', () => {
        expect(manager.getRole()).toStrictEqual("Manager");
    });
});