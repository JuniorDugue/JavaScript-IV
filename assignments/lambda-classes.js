// CODE here for your Lambda Classes
class Person{
  constructor(info){
      this.name = info.name;
      this.age = info.age;
      this.location = info.location;
      this.gender = info.gender;
  }
  speak(){
      return `Hello my name is ${this.name}, I am from ${this.location}.`
  }
}
class Instructor extends Person{
  constructor(teach){
      super(teach);
      this.specialty = teach.specialty;
      this.favLanguage = teach.favLanguage;
      this.catchPhrase = teach.catchPhrase;
  }
  demo(subject){
      return `Today we are learning about ${subject}`
  }
  grade(student, subject){

      return `${student.name} receives a perfect score on ${subject}`
  }
}

class Student extends Person{
  constructor(learn){
      super(learn);
      this.previousBackground = learn.previousBackground;
      this.className = learn.className;
      this.favSubjects = learn.favSubjects; //array
  }
  listsSubjects(){
      return this.favSubjects;
  }
  PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject){
      return `${this.name} has begun sprint challenge on ${subject}`;
  }
}
class Project_Manager extends Instructor{
  constructor(guide){
      super(guide);
      this.gradClassName = guide.gradClassName;
      this.favInstructor = guide.favInstructor;
  }
  standUp(channel){
      return `${this.name} announces to ${channel}, @channel standup time!`;
  }
  debugsCode(student, subject){
      return `${this.name} debugs ${student.name}'s code on ${subject}`
  }
}

const josh = new Instructor({
  'name' : 'Josh',
  'location' : 'Arizona',
  'age' : 35,
  'gender' : 'male',
  'favLanguage' : 'C++',
  'catchPhrase' : 'Yoyoyo',
})

const alice = new Student({
  'name' : 'Alice',
  'location' : 'New York',
  'age' : 28,
  'gender' : 'female',
  'previousBackground' : 'paralegal',
  'className' : 'CS11',
  'favSubjects' : ['python' , 'ruby' , 'c#']  
})

const pamela = new Project_Manager({
  'name' : 'Pamela',
  'location' : 'Michigan',
  'age' : 41,
  'gender' : 'female',
  'gradClassName' : 'CS3',
  'favInstructor' : 'Ryan',
})
const mary = new Instructor({
  'name' : 'Mary',
  'location' : 'Alabama',
  'age' : 48,
  'gender' : 'female',
  'catchPhrase' : 'Howdy\'dowdy',
  'favLanguage' : 'Java',
})
const james = new Student({
  'name' : 'James',
  'location' : 'Alaska',
  'age' : 24,
  'gender' : 'male',
  'previousBackground' : 'car salesman',
  'className' : 'CS11',
  'favSubjects': ['c++' , 'javascript', 'html']  
})
const andrew = new Project_Manager({
  'name' : 'Andrew',
  'location' : 'Nebraska',
  'age' : 35,
  'gender' : 'male',
  'gradClassName' : 'CS5',
  'favInstructor' : 'Mary',
})
// person: name, age, location, gender, speak()
// instructor: specialty, favLanguage, catchPhrase, demo(), grade ()
// student: previousBackground, className, favSubjects, listsSubjects(), PRAssignment(), sprintChallenge()
// project_manager: gradClassName, favInstructor, standUp(), debugsCode()

console.log(james.name)
console.log(james.listsSubjects())
console.log(mary.grade(james, 'python'))
console.log(alice.PRAssignment('java'))
console.log(josh.speak())
console.log(andrew.speak())
console.log(mary.demo('React'))
console.log(alice.sprintChallenge('c#'))
console.log(pamela.standUp('channel2'))
console.log(pamela.debugsCode(alice,'javascript'))
