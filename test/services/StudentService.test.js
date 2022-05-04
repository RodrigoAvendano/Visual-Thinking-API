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
            {
                id: "6264d5d8878a117a9c57c5c4",
                name: "Claudia",
                email: "Howell@visualpartnership.xyz",
                credits: 227,
                enrollments: ["Visual Thinking Avanzado"],
                previousCourses: 5,
                haveCertification: true,
            },
        ];
        expect(mailList).toEqual(expect.arrayContaining(expected));
    });
});
