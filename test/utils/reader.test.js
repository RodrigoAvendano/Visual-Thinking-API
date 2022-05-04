const Reader = require ("../../lib/utils/reader")

describe("Test for Reader Class Reader", ()=>{
    test("1. Read a Json file", ()=>{
        const partners = Reader.readJsonFile("visualpartners.json")
        const expected = [{
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "credits": 508,
            "enrollments": [
              "Visual Thinking Intermedio",
              "Visual Thinking Avanzado"
            ],
            "previousCourses": 1,
            "haveCertification": true
          }]
          expect(partners).toEqual(expect.arrayContaining(expected));  
    })
})