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

    test("3. Test for getStudentsEmail method",()=>{
        const allStudents = Student.getStudentsEmail("visualpartners.json");
        const expected = [
            {
                "id": "6264d5d8878a117a9c57c5c4",
                "name": "Claudia",
                "email": "Howell@visualpartnership.xyz",
                "credits": 227,
                "enrollments": [
                    "Visual Thinking Avanzado"
                ],
                "previousCourses": 5,
                "haveCertification": true
            },
        ];
        expect(allStudents).toEqual(expect.arrayContaining(expected));
    });
});