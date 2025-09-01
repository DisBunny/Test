var choices = document.getElementById("choices");

var questions = {
  "text": "Nobles or Rogues?",
  "choices": [{
      "label": "Nobles",
      "path": 1,
      "question": {
        "text": "Power, Elemental, or Immaterial?", //1 a
        "choices": [{
            "label": "Power",
            "path": 11,
            "question": {
              "text": "Storm or Inferno?", //1 a
              "choices": [{
                  "label": "Storm",
                  "path": 111
                },
                {
                  "label": "Inferno",
                  "path": 112
                },
                {
                  "label": "Will",
                  "path": 113
                },
              ]
            }
          },
          {
            "label": "Elemental",
            "path": 12,
            "question": {
              "text": "Mountain, Tides, or Sky?", //1 a
              "choices": [{
                  "label": "Mountain",
                  "path": 121
                },
                {
                  "label": "Tides",
                  "path": 122
                },
                {
                  "label": "Sky",
                  "path": 123
                },
              ]
            }
          },
          {
            "label": "Immaterial",
            "path": 13,
            "question": {
              "text": "Prism or Night?", //1 a
              "choices": [{
                  "label": "Prism",
                  "path": 131
                },
                {
                  "label": "Will",
                  "path": 132
                },
                {
                  "label": "Night",
                  "path": 133
                },
              ]
            }
          },
        ]
      }
    },
    {
      "label": "Rogues",
      "path": 2,
      "question": {
        "text": "Humanities, Fundamentals, or Will?", //1 b
        "choices": [{
            "label": "Humanities",
            "path": 21,
            "question": {
              "text": "Ambition, Dream, or Verity?", //1 a
              "choices": [{
                  "label": "Ambition",
                  "path": 211
                },
                {
                  "label": "Dream",
                  "path": 212
                },
                {
                  "label": "Verity",
                  "path": 213
                },
              ]
            }
          },
          {
            "label": "Fundamentals",
            "path": 22,
            "question": {
              "text": "Space, Time, or Nova?", //1 a
              "choices": [{
                  "label": "Space",
                  "path": 221
                },
                {
                  "label": "Time",
                  "path": 222
                },
                {
                  "label": "Nova",
                  "path": 223
                },
              ]
            }
          },
          {
            "label": "Will",
            "path": 23,
            "question": {
              "text": "How do you express your Will?", //1 c
              "choices": [{
                  "label": "Hacker",
                  "path": 231
                },
                {
                  "label": "Modification",
                  "path": 232
                },
                {
                  "label": "Artillery",
                  "path": 233
                },
              ]
            }
          },
        ]
      }
    },
    {
      "label": "Will",
      "path": 3,
      "question": {
        "text": "What kind of Will?", //1 a
        "choices": [{
            "label": "Placeholder",
            "path": 31,
            "question": {
              "text": "What breed of Bluebird?", //1 a
              "choices": [{
                  "label": "Blue",
                  "path": 311
                },
                {
                  "label": "grey",
                  "path": 312
                },
                {
                  "label": "yellow",
                  "path": 313
                },
              ]
            }
          },
          {
            "label": "Robin",
            "path": 32,
            "question": {
              "text": "What breed of Robin?", //1 a
              "choices": [{
                  "label": "Black",
                  "path": 321
                },
                {
                  "label": "White",
                  "path": 322
                },
                {
                  "label": "Red",
                  "path": 323
                },
              ]
            }
          },
          {
            "label": "Parrot",
            "path": 33,
            "question": {
              "text": "What breed of Parrot?", //1 a
              "choices": [{
                  "label": "Multi Color",
                  "path": 331
                },
                {
                  "label": "Red",
                  "path": 332
                },
                {
                  "label": "Green",
                  "path": 333
                },
              ]
            }
          },
        ]
      }
    },
  ]
};

var quizComplete = false,
  answers = [],
  currentObj = questions;

$(document).ready(function() {
  updateQuestion();

  if (!quizComplete) {

    $('.choices').on('click', '.choice', function() {

      value = $(this).attr('value');
      answers.push($(this).html());
      //currentQuestion++;

      if (currentObj.choices[value].question) {
        currentObj = currentObj.choices[value].question;
      } else {
        quizComplete = true;
        alert("quizComplete answers : " + answers);
        answers = [];
        currentObj = questions;
      }
      updateQuestion();

    });

  }
});

// Question generator
function updateQuestion() {

  var question = currentObj.text;
  var questionText = $(document).find(".container > .question");
  var choiceList = $(document).find(".container > .choices");
  var numChoices = currentObj.choices.length;
  
 
  // Set question text
  $(questionText).text(question);

  // Clear current choices and update with new ones
  $(".choice").remove();
  $("button").addClass(".choice");

  var choice, path;
  for (i = 0; i < numChoices; i++) {
    choice = currentObj.choices[i].label;
    path = currentObj.choices[i].path;
    $('<div class="choice" value=' + i + '>' + choice + '</div>').appendTo(choiceList);
  }
//answer button maybe
}

//Animates buttons on hover
 $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });