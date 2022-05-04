const Reader = require("../../lib/utils/reader")
const StudentService = require("../../lib/services/StudentService")

describe("Test for StudentService class",()=>{
    test("1. Testing getAllStudents method",()=>{
        const studentList = Reader.readJsonFile("visualpartners.json")
        const partnerList = StudentService.getAllStudents(studentList)
        const totalPartners = partnerList.length
        expect(totalPartners ).toBe(51)
    })
})