# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: The term parameters refers to any declaration within the parentheses and arguments are the real values passed to the function.

  Researched answer: The term parameter refers to any declaration within the parentheses following the method/function name in a method/function declaration or definition. The term argument refers to any expression within the parentheses of a method/function call.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: it iterates through an array and returns a new array of the same length. I guess the value is required and the parameter is optional.

  Researched answer: The .map() function iterates through an array and returns a new array of the same length.
  1: The value of the Array at the current iteration is (required)
  2: The index of the Array at the current iteration is (optional)
  3: The Array the higher-order function was called on is (optional)


3. What is object destructuring?

  Your answer: It allows to take something like an array and unpack their values into individual variables.

  Researched answer: Destructuring assignment is that it allows you to take something like an array or an object and unpack their values into individual variables.

  This is probably the most immediately useful type of destructuring. When destructuring an object you are essentially taking the properties of an object and breaking them out into individual, recallable variables.



4. What is the difference between a function and a method?

  Your answer: a function is a piece of code that can be use many times, a method is a piece of code that is associated with an object

  Researched answer: A function is a piece of code that is called by name. It can be passed data to operate on (the parameters) and can optionally return data (the return value). All data that is passed to a function is explicitly passed.

  A method is a piece of code that is called by a name that is associated with an object. In most respects it is identical to a function except for two key differences:

   1: A method is implicitly passed the object on which it was called.

   2: A method is able to operate on data that is contained within the class (remembering that an object is an instance of a class - the class is the definition, the object is an instance of that data).




5. What is the difference between a class and an object?

  Your answer: A class is a blueprint from which you can create the instance and an object is the instance of the class.

  Researched answer:

  Class is a blueprint or template from which objects are created. Object is a real world entity such as pen, laptop, mobile, bed, keyboard, mouse, chair etc. Class is a group of similar objects. Object is a physical entity.



6. STRETCH: What is hoisting in JavaScript?


  Your answer: I guess it would be a way of selecting a data in javaScript.

  Researched answer: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance:
Inheritance in Java is a concept that acquires the properties from one class to other classes; for example, the relationship between father and son. In Java, a class can inherit attributes and methods from another class. The class that inherits the properties is known as the sub-class or the child class.

2. React:React is JavaScript library for creating user interfaces. Everything in React is a component. React components are independent and reusable pieces of code. Class components serve a similar purpose as functions, but work in isolation and returns markup via a render function.

3. React state:

avaScript classes manage both data and behavior. In a React class component, the data is managed in a special object called state. State can be updated via class methods and therefore change what appears in the browser.


4. React lifecycle methods:

The lifecycles break down into 3 main phases:

Mounting - When a component is put into the DOM

Updating - When something in the component is updated (i.e. the state object)

Unmounting - When a component is removed from the DOM
Notice that inside of each group are keywords. Some are familiar to you, some not so much. These, you might have guessed, refer to methods that are available to us in class components.

The placement of these keywords are important, they indicate at what phase(s) the corresponding method is run.
Additionally, each is subdivided into:
Render phase
Commit phase

5. DOM:
ReactDOM is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing the following methods and a few more.
