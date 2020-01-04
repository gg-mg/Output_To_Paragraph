
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");
  
  
  
  $(document).ready(function() { 
    
       
    
       alert(myFather.age);
    
        $("p#demo").append("<li><span class='contact'>" +  "My father last name is " + myFather.lastName + ". My mother is " + myMother.age + "</span></li>");
        $("p#demo").append("<li><span class='contact'>" +  "My father first name is " + myFather.firstName + ". My mother last name is " + myMother.lastName + "</span></li>");
       
       
        event.preventDefault();
    }); 