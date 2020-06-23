// chapter #21-25 task#1
//    var firstName= prompt("emter user firstname ");
//    var lastName= prompt("enter user lastname");
//    var fullName= firstName+ lastName;
//    document.write("welcome to "+" "+ fullName);

// chapter #21-25 task#2
  // var mobiledModel = prompt("enter your favorite mobile phone model");
  // var str= mobiledModel.length;
  // document.write("My favorite phone is:"+" "+ mobiledModel +"<br>" +
  //                 "length of string:"+" " + str);

// chapter #21-25 task#3
// var word = "pakistani";
// var str = word.indexOf("n");
// document.write("String: Pakistani" +"<br>"+
//                "index of 'n':"+" " +str);

// chapter #21-26 task#4
//  var txt="Hello world";
//  var str = txt.lastIndexOf("l")
//  document.write("String: Hellow World" +"<br>"+
//                  "lastindex of 'l': "+" "+str);


// chapter #21-25 task#5
// var word="Pakistani";
// var postion = word.charAt("3");
// document.write("String: Pakistani"+"<br>"+
//                 "Character at index 3:"+" "+postion); 

// chapter #21-25 task#6
// var str1 = "Farrukh ";
// var str2 = "Zaman";
// var res = str1.concat(str2);
// document.write("Welcome to"+" "+res);


// chapter #21-25 task#7
//  var txt="Hyderabad ";
//  var res= txt.replace("Hyderabad ", "Islamabad");
//  document.write("City:" +" " + txt + "<br>"+
//  "After replacement:"+" "+ res);

//chapter #21-25 task#8
// var message="Ali and Sami are best friend. They play cricket and football together";
// var res= message.replace(/and/g , "&");
// document.write(res);

//chapter #21-25 task#9
//  var str ="472";
//  var num = Number("472");
//  document.write("Value:" +" " + num  +"<br>"+
//                  "Type:" +" " + "string"   + "<br>" +
//                  "Value:" +" " + str   + "<br>" +
//                    "Type:"+" " + "number"    + "<br>" );


//chapter #21-25 task#10
// var txt = prompt("enter any word in small letters");
// var upper= txt.toUpperCase();
// document.write("User input:" +" "+ txt+"<br>" +
//                "Upper case:"+" "+ upper);

//chapter #21-25 task#11
// var txt= prompt("Enter any Word");
//  var firstchar=txt.slice(0, 1);
//  firstchar=firstchar.toUpperCase();
//  var otherchar=txt.slice(1);
//  otherchar=otherchar.toLowerCase();
//  var upper= firstchar +otherchar;
//   document.write("User input:"+" "+ txt +"<br>"+
//                   "Title case:"+" "+ upper);

//chapter #21-25 task#12
    // var num=35.36;
    // var without = num.toString().replace(".", "");
    //  document.write("Number:"+" "+num +"<br>"+
    //                "Result:"+" "+without);
//chapter #21-25 task#13
// i tried my best to solve this task and i could not do that i also searched fron net a lot but i could not d0.

// chapter #21-25 task#14

// var  A =["cake","apple","cookie", "chips", "patties"];
// var search = prompt("Welcome to Buzdar Bakery. What do you want to order Sir/Ma'am");
//     search = search.toLowerCase()
//    if (A.indexOf(search) !== -1) {
//    	document.write(search + " " + "is avaiable at index 2 in our bakery");
//    }
// else{
//     	document.write("We are sorry" +  " " + search + " " + "is not avaiable in our bakery");
//     }
  
//chapter #21-25 task#15
// i tried my best to solve this task and i could not do that i also searched fron net a lot but i could not d0.

// chapter #21-25 task#16
// var university ="University of Karachi";
// university= university.split('');
// for ( var i = 0 ; i < university.length; i++){
// document.write(university[i] + "<br>");
// }


//chapter#21-25 task#17
// var user = prompt("user enter input");
// var char=user.charAt(user.length-1);
// document.write("User input:m"+" "+user +"<br>"+
//                "Last character of input:"+" " + char);



// chapter #21-25 task#18
  // var txt ="the quick brown fox jumps over the lazy dog ";
  // document.write("Text:"+" "+txt+"<br>");
  // document.write("There are"+" "+ txt.match(/the/g).length+" "+"occurance(s) of word 'the' ");



// chapter # 26-30 task#1
// var num = prompt("enter any postive number");
// var roud = Math.round(num); 
// var floor= Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("number:" +" "+  num +"<br>"+
//                "round off: " + " " +roud+ "<br>"+
//                 "floor value:" + " " + floor +"<br>"+
//                 "ceil value:" + " " + ceil);

// chapter # 26-30 task#2
// var num = prompt("enter any negative floating point number");
// var roud = Math.round(num);
// var floor= Math.floor(num);
// var ceil = Math.ceil(num);
// document.write("number:" +" "+  num +"<br>"+
//                "round off: " + " " +roud+ "<br>"+
//                 "floor value:" + " " + floor +"<br>"+
//                 "ceil value:" + " " + ceil);

// chapter # 26-30 task#3
//   var num = prompt("enter the value of any number");
//   var absolute=Math.abs(num);
//    document.write("The absolute value of " +" "+num+" "+"is"+" "+absolute);

// chapter # 26-30 task#4
//  var diceRoll= Math.floor(Math.random()*6)+1;
//  document.write("random dice value :"+" "+diceRoll);

// chapter # 26-30 task#5
// var Heads =  prompt("enter heads username");
// var taisuser = prompt("enter tails username");
//  var toss= Math.random()
//  var floor = Math.floor(toss);
//  if (floor === 0){
//      document.write("random coin value:"+" " + Heads)
//  }
// chapter # 26-30 task#6
//   var random= prompt("Take any random number between 1 and 100")
//   var floor = Math.floor((Math.random()*100)+1);
//   document.write("random number beween 1 and 100:" +" "+ random)
// var flip;
// flip=Math.floor(Math.random()*2);
// if(flip <1){
//   document.write("2"+"<br>"+"random coin value: Heads")
// }else{
//   document.write("1"+"<br>"+"random coin value: Tails")
// }

// chapter#25-30 task#7
// var num= prompt("Enter your wait");
// document.write("The wait of user:"+" "+num);


// chapter # 26-30 task#8
// var num = +prompt("enter a number between 1 and 10");
// var scretNumer= 5;
// if (num === 5 ){
//     alert(" congratulate the user.")
//     }
//     else {
//         alert("try again!")
//     };


// chapter 31-34 task#1
//  var d =new Date();
//  document.write(d);

// chapter 31-34 task#2
// var arr=["January","Febuary","March","April","June","July","August","September","October","November","December"];
// var de=new Date();
// var monthIs=arr[theMonth];
// alert("Current Month:"+" "+monthIs);


// chapter 31-34 task#3
// var dayNames=["Sun","Mon","Tue","Thu","Fri","Sat"];
// var now= new Date();
// var dayIs=now.getDay();
// var result= dayNames[dayIs];
// alert("Today is:"+" "+result);


// chapter 31-34 task#4
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
//  if(""===""){
//    document.write("It's Fun Day");
//  }
//  else{
//    document.write("It 's working day")
//  }


// chapter31-34 task#5
// var a=new Date();
// var theDate=a.getDate();
// if(theDate<16){
//   alert("First fifteen days of the month");
//   }
//   else{
//     alert("Last days of month")
//   }

// chapter31-34 task#

// var d = new Date();
// var dmili= d.getTime();
// var diff= (dmili/1000/60);
// document.write("Current Date"+d+"<br>");
// document.write("Elapsed milliseconds since January 1, 1970: "+" "+dmili+"<br>");
// document.write("Elapsed minutes since january 1, 1970:"+" "+diff);

// chapter31-34 task#7
// var a = new Date();
// var b=a.getHours();
// if (b<12){
//   document.write("It's AM");
//   }
//   else{
//     document.write("It's PM");
//   }


// chapter31-34 task#8
// var day= new Date();
// day.setMonth(11);
// day.setDate(31);
// day.setFullYear(2020);
// day.setHours(00);
// day.setMinutes(00);
// day.setSeconds(00);
// document.write("Later Date:"+" "+day);


// chapter31-34 task#9
//  var date1=new Date("April. 25.2020");
//  var date2= new Date();
//  var diff = date2.getTime()-date1.getTime();
//  var noDays= diff/(1000*60*60*24);
//  var accu= Math.floor(noDays);
//  document.write(accu +" "+"days have passed since Ist Ramdan, 2020");


// chapter31-34 task#10
// var startTime, endTime;
// startTime=new Date("January, 1, 2015");
// endTime= new Date();
// document.write("On reference date "+endTime+"<br>")
// var timeDiff=endTime-startTime;
// timeDiff /= 1000;
// var sec= Math.round(timeDiff);
// document.write( sec+" "+"seconds had passed since beginning of 2015");

// chapter 31-34 task#11
//  var event= new Date();
//  document.write("Current Date is:"+" "+event+"<br>");
//  event.setHours(9);
//  document.write("1 houes ago, It was"+" "+event);


// chapter31-34 task#12
// var currentDate= new Date();
// document.write("Current Date:"+" "+currentDate+"<br>");
// currentDate.setFullYear(1920);
// document.write("100 year back, it was "+" "+currentDate);


// chapter31-34 task#13
// var age = prompt("Enter your age");
// document.write("Your age is:"+" "+age +"<br>");
// var eve = new Date();
// var yearIs = eve.getFullYear() - age;
// document.write("Your Birth Year is:"+ " " + yearIs);



// chapter 31-34 task#14
// document.write("<h1>K-Electric Bill</h1>"+"<br>")
// var custName="ABC Customer";
// var units=410;
// var charge=16;
// var lateCh= 350;
// var month="Febuary";
// var netAmount=units*charge;
// var grossAmount=lateCh+netAmount;
// document.write("Customer Name:"+" "+custName+"<br>"+
//                "Month:"+" "+month+"<br>"+
//                 "Number of units:"+""+units+"<br>"+
//                 "Charges per units:"+" "+charge+"<br>"+
//                 "Net Amount Payable(Within Due Date):"+" "+netAmount+"<br>"+
//                 "Gross Amount Payable(After Due Date):"+"" +grossAmount);

// chapter35-38 task#1
// function currenrtTd(){
//  var d= new Date();
//  document.write(d);
// }
// currenrtTd();

// chapter35-38 task#2
// function greeting (){
//   var user1=prompt("Enter First Name");
//   var user2=prompt("Enter Last Name");
//   document.write("Welcome"+" "+user1+" "+user2);
// }
// greeting();

// chapter35-38 task#3
// function add(){
//   var num1=+prompt("Enter First Num");
//   var num2=+prompt("Enter Second Num");
//   var result= num1+num2;
//   document.write(result);

// }
// add();

// chapter35-38 task#4;
// function calculator(){
//   var num1 = +prompt("Enter First Num");
//   var opr = prompt("Enter Operator Sign ")
//   var num2 = +prompt("Enter Second Num");
//   if(opr ==="+"){
//     document.write(num1+num2)
//   } 
//   else if(opr ==="%"){
//     document.write(num1%num2)
//   }
//   else if(opr ==="-"){
//     document.write(num1-num2)
//   }
//    else if(opr ==="*"){
//     document.write(num1*num2)
//   }
//    else if(opr ==="/"){
//     document.write(num1/num2)
//   }

// }
// calculator();

// chapter 35-38 task#5
// function square(number){
//   return number*number;
// }
// var result= square(5);
// document.write ("The Square is:" +" "+result); 


// chapter35-38 task#6
// function factorialize (num){
//   if (num<0){
//     return -1
//   }
//   else if (num==0){
//     return 1;
//   }
// else{
//   return(num*factorialize(num-1));
// }
// }
// var result= factorialize(5)
// document.write(result);


// chapter 35-38 task#7
// var start = +prompt("Enter first number");
// var end = +prompt("Enter end number")
// function range( start, end, increment){
//        var result=[];
//        if(increment== undefined)
//          increment= 1;       
//      numLoops=Math.abs((end-start)/increment)+1 ;
//      for (var i=0; i<numLoops; i++){
//         result.push(start);
//         start +=increment
//      }
//      return result;
//       }
//       document.write(range(start, end));



// chapter35-38 task#8
  // function pythagprean (height, width){
  // var sideA=prompt("Enter Base Here");
  // var sideB=prompt("Enter Perpendicular Here");
  // return(Math.sqrt(Math.pow(sideA, 2)+Math.pow(sideB, 2)));
  // }
  //  var res = pythagprean();
  //  document.write(res);

  // chapter 35-38 task#9
    //  function area(height, width){
    //       document.write(height*width);
    //  }
    
    //  function Area(height, width){
    //    var height=5;
    //    var width=6;
    //    var result= height*width;
    //    document.write(result);
    //  }
    //  Area();

    // chapter35-38 task#10
    // function palindrome(word){
    //   var word=prompt("Enter a word");
    //   var check="";
    //   for( var i =word.length -1; i >=0; i--){
    //     check +=word[i];
    //     if(word===check){
    //       document.write(word + " " +"is a palindrome word")
    //     }
    //   }
    // }
    // palindrome("civic");
    // chapter 35-38 task#11
      //  function capital_letter(str){
      //    str= str.split(" ");
      //    for(var i=0, x=str.length; i <x; i++){
      //      str[i]= str[i][0].toUpperCase()+str[i].substr(1);
      //    }
      //    return str.join(" ");
      //  }
      // document.write("EXAMPLE STRING:"+" "+"the quick brown fox"+"<br>"+
      // "EXPECTED OUTPUT:"+" "+capital_letter("the quick brown fox"))
    //chapter35-38 task#12
    // function longest_string(str_ara){
    //   var max=str_ara[0].length;
    //   str_ara.map(v => max=Math.max(max,v.length));
    //   result= str_ara.filter(v =>v.length == max);
    //   return result;
    // }
    // document.write("EXAMPLE STRING:"+" "+"'Web Development Tutorial' "+"<br>"+
    //                "EXPECTED OUTPUT:"+" "+longest_string(['Web','Development','Tutorial']));


    //chapter 35-38 task#13
    // function stringLetter(a,b){
    //   var a ="Development";
    //   var b = "e";
    //   for(var i=0; i < a.length; i++){
    //     if (a[i].indexOf("e") !==-1){
    //       document.write(a[i]);
    //     }
    //   }
    // }
    // stringLetter();

    // chapter 35-38 task#14
    // function calcCircumference(r){
    //   var result = 2*3.142*10;
    //   var result1 =Math.floor(result);
    //   document.write("The circumference is:"+" "+result1+" <br>")
    // }
    // calcCircumference();
    // function calcArea(r){
    //   var ans = 3.142*10*10;
    //   var ans1= Math.floor(ans);
    //   document.write("The area is:"+" "+ans1)
    // }
    // calcArea();

    