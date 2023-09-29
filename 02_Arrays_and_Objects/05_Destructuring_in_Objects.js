const course = {
    courseName: "JavaScript",
    videos: 50,
    courseInstructor: "Hitesh Choudhary"
}

//old way to access data
console.log(course.courseName);  //JavaScript

//using destructuring
const {courseName} = course
console.log(courseName);  //JavaScript

//if you think declare name in too long you can change in short name
const {courseInstructor: instructor} = course
console.log(instructor);  //Hitesh Choudhary