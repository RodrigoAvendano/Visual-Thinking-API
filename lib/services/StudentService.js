class StudentService{

    static getAllStudents(students){
        const mystudents = students;
        return mystudents;        
    }

    static getEmail(students){
        const myStudents = StudentService.getAllStudents(students);
        const certification = myStudents.filter((student)=>{
            const check = student.haveCertification;
            if(check){
                const email = student.email;
                return email;
            }
        });
        return certification;
    }

    static getCredits(students){
        const myStudents = StudentService.getAllStudents(students);
        const credits = myStudents.filter((student)=>{
            const check = student.credits;
            if(check > 500){
                return check;
            }
        });
        return credits;

    }
}

module.exports = StudentService;