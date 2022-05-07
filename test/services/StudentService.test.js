const Reader = require("../../lib/utils/reader");
const StudentService = require("../../lib/services/StudentService");

describe("Test for StudentService class", () => {
    test("1. Testing getAllStudents method", () => {
        const studentList = Reader.readJsonFile("visualpartners.json");
        const partnerList = StudentService.getAllStudents(studentList);
        const totalPartners = partnerList.length;
        expect(totalPartners).toBe(51);
    });

    test("2. Testing getEmail method", () => {
        const studentList = Reader.readJsonFile("visualpartners.json");
        const mailList = StudentService.getEmail(studentList);
        const expected = [
            {"certification": true, "email": "Benton@visualpartnership.xyz", "name": "Constance"},
        ];
        expect(mailList).toEqual(expect.arrayContaining(expected));
    });

    test("3. Testing getCredits method", () => {
        const studentList = Reader.readJsonFile("visualpartners.json");
        const creditList = StudentService.getCredits(studentList);
        const expected = [
            {"credits": 552, "name": "Richards"},
        ];
        expect(creditList).toEqual(expect.arrayContaining(expected));
    });
});
