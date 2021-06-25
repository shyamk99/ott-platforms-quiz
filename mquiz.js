var pos=0,test, test_status, question, choice, choices, chA, chB, chC, correct=0;
var quiz=[
    {
    'question':'When was Netflix founded?',
    'a':'1997',
    'b':'2001',
    'c':'2000',
    'answer':'A'
},
{
    'question':'What was the most-watched series on Netflix in 2019?',
    'a':'Lucifier',
    'b':'Money Heist',
    'c':'Stranger Things',
    'answer':'C'
},
{'question':'How much money did the gang manage to steal from the Royal Mint of Spain in Money Heist?',
'a':'2.5 billion Euro',
    'b':'2.4 billion Euro',
    'c':'2.3 billion Euro',
    'answer':'B'

},
{'question':'Where was the first place Eleven went after escape in stranger things?',
'a':'Mike basement',
    'b':'Benny Burgers',
    'c':'Jim Hopper House',
    'answer':'B'


},
{'question':'What is the other name of Loki, a character in Marvel movies ?',
'a':'God of War',
    'b':'God of Asgard',
    'c':'God of Mischief',
    'answer':'C'


}];
function get(x){
    return document.getElementById(x);
  }
  
  function renderQuestion(){
    test = get("test");
    if(pos >= quiz.length){
      test.innerHTML = "<h2>You got "+correct+" of "+quiz.length+" questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
    
      pos = 0;
      correct = 0;
    
      return false;
    }
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+quiz.length;
    
    question = quiz[pos].question;
    chA = quiz[pos].a;
    chB = quiz[pos].b;
    chC = quiz[pos].c;
    
    test.innerHTML = "<h3>"+question+"</h3>";

    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }
  function checkAnswer(){

    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    
    if(choice == quiz[pos].answer){
      
      correct++;
    }
    
    pos++;

    renderQuestion();
  }
  
  window.addEventListener("load", renderQuestion);


