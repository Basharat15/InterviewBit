import Category from "../models/Category";
import SubCategory from "../models/SubCategory";
import Question from "../models/Question";
import Answere from "../models/Answeres";

export const CATEGORIES = [
  new Category('c1', 'Javascript', 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png'),
  new Category('c2', 'Data Structure', 'https://assets.leetcode.com/static_assets/others/DS_II.png'),
  new Category('c3', 'Angular', 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png'),
  new Category('c4', 'Jquery', 'https://icon-library.com/images/jquery-icon-png/jquery-icon-png-8.jpg'),
  new Category('c5', 'C', 'https://i.pinimg.com/originals/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.png'),
  new Category('c6', 'PHP', 'https://i.dlpng.com/static/png/6622045_preview.png'),
  new Category('c7', 'C#', 'https://www.freeiconspng.com/uploads/c-logo-icon-18.png'),
  new Category('c8', 'Web API', 'https://dotnettrickscloud.blob.core.windows.net/uploads/CourseImages/becomeanaspnetwebapideveloper-mobile.png'), 
];

export const SUBCATEGORIES = [
  new SubCategory('sc1','c1','JS For Fresher'),
  new SubCategory('sc2','c1','JS For Intermediate'),
  new SubCategory('sc31','c1','JS ForExperienced'),
  new SubCategory('sc3','c2','DS For Fresher'),
  new SubCategory('sc4','c2','DS For Experienced'),
  new SubCategory('sc5','c3','Angular For Fresher'),
  new SubCategory('sc6','c3','Angular For Experienced'),
  new SubCategory('sc7','c4','JQ For Fresher'),
  new SubCategory('sc8','c4','JQ For Experienced'),
  new SubCategory('sc9','c5','C For Fresher'),
  new SubCategory('sc10','c5','C For Experienced'),
  new SubCategory('sc11','c6','Php For Fresher'),
  new SubCategory('sc12','c6','Php For Experienced'),
  new SubCategory('sc13','c7','C# For Fresher'),
  new SubCategory('sc14','c7','C# For Experienced'),
  new SubCategory('sc15','c8','WA For Fresher'),
  new SubCategory('sc16','c8','WA For Experienced'),
  new SubCategory('sc17','c9','H For Fresher'),
  new SubCategory('sc18','c9','H For Experienced'),
]

export const QUESTIONS = [
  new Question('q1','sc1','Javascript Datatypes', 'What are the different data types present in javascript?'),
  new Question('q2','sc1','Hosting In Javascript', 'Explain Hoisting in javascript'),
  new Question('q3','sc1','Javascript Debugger', 'Why do we use the word “debugger” in javascript?'),
  new Question('q4','sc1','Difference "==" / "==="', 'Difference between “ == “ and “ === “ operators'),
  new Question('q5','sc1','Var / Let', 'Difference between var and let keyword in javascript'),
  new Question('q6','sc2','Implicit Type Coercion', 'Explain Implicit Type Coercion in javascript.'),
  new Question('q7','sc2','Statically Typed /Dynamic Typed', 'Is javascript a statically typed or a dynamically typed language?'),
  new Question('q8','sc2','NaN In Javascript', 'What is NaN property in JavaScript?'),
  new Question('q9','sc2','Passed by value/refference', 'Explain passed by value and passed by reference'),
  new Question('q10','sc2','Imidiately Invoked', 'What is an Immediately Invoked Function in JavaScript?'),
  new Question('q11','sc3','Strict mode in Javascript', 'What do you mean by strict mode in javascript and characteristics of javascriptstrict-mode?'),
  new Question('q12','sc3','Higher Order Function', 'Explain Higher Order Functions in javascript.'),
  new Question('q13','sc3','"this" Keyword', 'Explain “this” keyword.'),
  new Question('q14','sc3','Self Invoking', 'What do you mean by Self Invoking Functions?'),
  new Question('q15','sc3','Methods', 'Explain call(), apply() and, bind() methods.'),
  new Question('q16','sc4','NaN In Javascript', 'What is NaN property in JavaScript?'),
  new Question('q17','sc4','Passed by value/refference', 'Explain passed by value and passed by reference'),
  new Question('q18','sc4','Imidiately Invoked', 'What is an Immediately Invoked Function in JavaScript?'),
  new Question('q19','sc4','Strict mode in Javascript', 'What do you mean by strict mode in javascript and characteristics of javascriptstrict-mode?'),
  new Question('q20','sc4','Higher Order Function', 'Explain Higher Order Functions in javascript.'),
]

export const ANSWERES = [
  new Answere('a1','q1','DataTypes',['1.Primitive Type',' String',
  ' It represents a series of characters and is written with quotes.A string can be represented using a single or a double quote.',
'Number '], 'DataTypes Example'),
  new Answere('a2','q2','Hosting','Hosting Explanation', 'Hosting Example'),
  new Answere('a3','q3','Debugger','Debugger Explanation', 'Debugger Example'),
  new Answere('a4','q4','Difference','Difference Explanation', 'Difference Example'),
  new Answere('a5','q5','Var/let','Var/let Explanation', 'Var/letmExample')
]
