(function() {
  var questions = [{
    question: "images/monitor.png",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: ['monitor']
  }, {
    question: "images/tastiera.jpg",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: ['tastiera']
  }, {
    question: "images/mouse.png",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: ['mouse']
  }, {
    question: "images/chiavetta-usb.png",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: ['chiavetta usb', 'chiave usb', 'usb', 'memory stick']
  }, {
    question: "images/altoparlanti.png",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: ['altoparlanti', 'altoparlante', 'casse']
  }, {
    question: "images/case.png",
    correctAnswer: ['chassis', 'case', 'desktop', 'cabinet']
  }, {
    question: "images/CD-ROM.png",
    correctAnswer: ['cd-rom', 'cd', 'dvd', 'blu-ray', 'cdrom'] 
  }, {
    question: "images/smartphone.png",
    correctAnswer: ['smartphone', 'cellulare', 'telefonino']
  }, {
    question: "images/microfono.jpg",
    correctAnswer: ['microfono', 'microphone']
  }, {
    question: "images/cuffie.jpg",
    correctAnswer: ['cuffie', 'headphone']
  }, {
    question: "images/laptop.jpg",
    correctAnswer: ['laptop', 'computer portatile', 'portatile']
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }

  
    
    // If no user selection, progress is stopped
    if (!selections[questionCounter]) {
      alert('Non hai dato nessuna risposta!');
    } else {
      questionCounter++;
      displayNext();
      $('#answer').focus();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Domanda ' + (index + 1) + ': <br> Come si chiama questo? </h2>');
    qElement.append(header);
    
    var question = $('<img>', { src: "https://despotes.github.io/quiz/" + questions[index].question });
    question.css({width: "50%", margin: "10px auto", display: 'block' });
    qElement.append(question);
    
    var answerField = $('<input>', {type: 'text', name: 'answer'+ questionCounter, id: 'answer' , autocomplete: 'off', autofocus: "true"});
    answerField.css({width: '50%', display: 'block', margin: 'auto'});
    answerField.addClass('form-control');
    qElement.append(answerField);

    answerField.keyup( function() {
      selections[questionCounter] = this.value;
      console.log(selections);
    });
    
    return qElement;
  }

  // Check if a word is inside the Correct Answer Array
  function checkAnswer(word, answerArray) {
    
    const newWord = word.toLowerCase()
    
    for (answer of answerArray)
      if (answer === newWord)
        return true
    
    return false
  }


  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = $('#answer').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);

        // get focus on the input field when loading the new Question
        quiz.append(nextQuestion).fadeIn('fast', function() {  
            $('#answer').focus();
        });
        
        if (selections[questionCounter]) {
          $('input[name=' + 'answer' + questionCounter +']').val(selections[questionCounter]);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
          
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      } else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (let i = 0; i < selections.length; i++) {
      if (checkAnswer(selections[i], questions[i].correctAnswer)) {
        numCorrect++;
      }
    }
    
    score.append('Hai risposto correttamente a ' + numCorrect + ' domande su ' +
                 questions.length + '!!!');
    return score;
  }
})();