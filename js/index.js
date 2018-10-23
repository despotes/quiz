(function() {
  var questions = [{
    question: "https://png.icons8.com/color/1600/monitor.png",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: ['monitor']
  }, {
    question: "https://www.officinainformaticaonline.it/1-large_default/tastiera-coolermaster-masterkeys-lite-l-rgb.jpg",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: ['tastiera']
  }, {
    question: "http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bf97.png",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: ['mouse']
  }, {
    question: "data:image/png;base64,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",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: ['chiavetta usb', 'chiave usb', 'usb', 'memory stick']
  }, {
    question: "https://assets.logitech.com/assets/64877/8/z200-stereo-speakers.png",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: ['altoparlanti', 'altoparlante', 'casse']
  }, {
    question: "http://www.tsukumo.co.jp/bto/pc/common/img/case/g-gear_69jd_1280x960.png",
    correctAnswer: ['chassis', 'case', 'desktop', 'cabinet']
  }, {
    question: "https://upload.wikimedia.org/wikipedia/commons/c/ca/CD-ROM.png",
    correctAnswer: ['cd-rom', 'cd', 'dvd', 'blu-ray', 'cdrom'] 
  }, {
    question: "https://cdn.pixabay.com/photo/2016/09/20/11/27/phone-1682317_960_720.png",
    correctAnswer: ['smartphone', 'cellulare', 'telefonino']
  }, {
    question: "https://brain-images-ssl.cdn.dixons.com/2/6/10140862/u_10140862.jpg",
    correctAnswer: ['microfono', 'microphone']
  }, {
    question: "https://images-na.ssl-images-amazon.com/images/I/71%2BCWR782-L._SX466_.jpg",
    correctAnswer: ['cuffie', 'headphone']
  }, {
    question: "https://banner2.kisspng.com/20180303/jgq/kisspng-laptop-hewlett-packard-enterprise-computer-vector-illustration-notebook-5a9a4cfdb15036.2137334815200616937263.jpg",
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
    
    var question = $('<img>', { src: questions[index].question });
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