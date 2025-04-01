function Student (sName, sSurname, sYear, sMarks) {
    this.name = sName;
    this.surname = sSurname;
    this.birthYear = sYear;
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;
    this.marks = sMarks || [];

    this.age = function () {
        return 2025 - this.birthYear;
    };

    this.averageMark = function () {
        if ( this.marks.length === 0 ) return 0;
        let sum = this.marks.reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks.length
    };

    this.present = function () {
        if (this.attendanceIndex < 25) {
            this.attendance[this.attendanceIndex] = true;
            this.attendanceIndex++;
        } else {
            alert (`Can not mark more than 25 lessons!`)
        };
    };

    this.absent = function () {
        if (this.attendanceIndex < 25) {
            this.attendance[this.attendanceIndex] = false;
            this.attendanceIndex++;
        } else {
            alert (`Can not mark more than 25 lessons!`)
        };
    };

    this.summary = function () {
        let averageMark = this.averageMark();

        let totalLessons = this.attendance.filter(value => value !== null).length;
        let attended = this.attendance.filter(value => value === true).length;
        let averageAttendance = totalLessons > 0 ? attended / totalLessons : 0;

        if (averageMark > 90 && averageAttendance > 0.9) {
            return (`Молодец`);
        } else if (averageMark > 90 || averageAttendance > 0.9) {
            return (`Норм, но можешь лучше`);
        } else {
            return (`Редиска`);
        }
    };
};
