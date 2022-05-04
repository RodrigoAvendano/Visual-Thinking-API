const Student = require("../../lib/controller/StudentController");

describe("Test for StudentController Class",()=>{
    test("1. Test for getStudentList method",()=>{
        const allStudents = Student.getStudentsList("visualpartners.json");
        const expected = [
            {
                "id": "6264d5d8dd1a0be4e249c662",
                "name": "Phillips",
                "email": "Camacho@visualpartnership.xyz",
                "credits": 973,
                "enrollments": [
                    "Visual Thinking Intermedio"
                ],
                "previousCourses": 8,
                "haveCertification": false
            },
        ];
        expect(allStudents).toEqual(expect.arrayContaining(expected));
    });

    test("2. Second test for getStudentList method",()=>{
        const allStudents = Student.getStudentsList("visualpartners.json");
        expect(allStudents.length).toBe(51);
    });
});