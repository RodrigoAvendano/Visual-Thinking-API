class StudentService{

    static getAllStudents(students){
        const mystudents = students;
        return mystudents;        
    }

    static getEmail(students){
        const myStudents = StudentService.getAllStudents(students);
        const arrayMail = [];
        myStudents.filter((student)=>{
            const check = student.haveCertification;
            if(check){
                const obj = {name : student.name,
                    email : student.email, 
                    certification : student.haveCertification};
                arrayMail.push(obj);
            }
        });
        return arrayMail;
    }

    static getCredits(students){
        const myStudents = StudentService.getAllStudents(students);
        const arrayCredits = [];
        myStudents.filter((student)=>{
            const check = student.credits;
            if(check > 500){
                const obj = {name : student.name,
                    credits : student.credits};
                arrayCredits.push(obj);
            }
        });
        return arrayCredits;

    }
}

module.exports = StudentService;