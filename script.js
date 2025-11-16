// ========================================
// COMPLETE JAVASCRIPT FOR HSC LEARNING PLATFORM
// Programming for the Web - Year 12
// ========================================

console.log('====================================');
console.log('JavaScript Learning Platform Loaded');
console.log('====================================');

// ========================================
// EXERCISE 1: Button Click & Simple Output
// ========================================
console.log('\n--- EXERCISE 1: Button Click & Output ---');

// Step 1: Get the button element from HTML using its ID
const btnShowMessage = document.getElementById('btn-show-message');
console.log('Button found:', btnShowMessage);

// Step 2: Get the output box where we'll display results
const output1 = document.getElementById('output-1');

// Step 3: Add event listener - "when clicked, run this function"
btnShowMessage.addEventListener('click', function() {
  const message = 'You clicked the button! Great job! 🎉';
  output1.innerHTML = '<p class="success">' + message + '</p>';
  console.log('Button clicked! Message displayed.');
});

// Step 4: Create a reset button to clear the message
const btnResetMessage = document.getElementById('btn-reset-message');
btnResetMessage.addEventListener('click', function() {
  output1.innerHTML = '<p>Your message will appear here...</p>';
  console.log('Output cleared!');
});


// ========================================
// EXERCISE 2: Variables & User Input
// ========================================
console.log('\n--- EXERCISE 2: Variables & User Input ---');

// Get the input box, button, and output
const inputName = document.getElementById('user-name');
const btnGreet = document.getElementById('btn-greet');
const output2 = document.getElementById('output-2');

// Add event listener to button
btnGreet.addEventListener('click', function() {
  // Get what user typed (the value property)
  const name = inputName.value;
  console.log('User typed:', name);
  
  // Check if user entered something
  if (name === '') {
    output2.innerHTML = '<p class="error">Please enter your name!</p>';
  } else {
    // Combine strings using + (concatenation)
    const greeting = 'Hello, ' + name + '! Nice to meet you! 👋';
    output2.innerHTML = '<p class="success">' + greeting + '</p>';
    console.log('Greeting shown:', greeting);
  }
});

// Reset button - clears input and output
const btnResetGreet = document.getElementById('btn-reset-greet');
btnResetGreet.addEventListener('click', function() {
  inputName.value = '';  // Clear the input
  output2.innerHTML = '<p>Greeting will appear here...</p>';
  console.log('Name input cleared');
});


// ========================================
// EXERCISE 3: Numbers & Arithmetic
// ========================================
console.log('\n--- EXERCISE 3: Numbers & Arithmetic ---');

const num1Input = document.getElementById('num-1');
const num2Input = document.getElementById('num-2');
const btnAdd = document.getElementById('btn-add');
const btnSubtract = document.getElementById('btn-subtract');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide = document.getElementById('btn-divide');
const output3 = document.getElementById('output-3');

// Create a reusable function for calculations
function performCalculation(operation) {
  // Convert text input to numbers using Number()
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);
  
  let result;
  
  // Use if/else to choose which operation
  if (operation === 'add') {
    result = num1 + num2;
  } 
  else if (operation === 'subtract') {
    result = num1 - num2;
  } 
  else if (operation === 'multiply') {
    result = num1 * num2;
  } 
  else if (operation === 'divide') {
    // Check for division by zero
    if (num2 === 0) {
      output3.innerHTML = '<p class="error">Cannot divide by zero! ⚠️</p>';
      console.log('Error: Division by zero');
      return;  // Stop the function
    }
    result = num1 / num2;
  }
  
  // Show result rounded to 2 decimal places
  const resultText = num1 + ' ' + operation + ' ' + num2 + ' = ' + result.toFixed(2);
  output3.innerHTML = '<p class="success">' + resultText + '</p>';
  console.log('Calculation:', resultText);
}

// Add event listeners to each math button
btnAdd.addEventListener('click', function() {
  performCalculation('add');
});

btnSubtract.addEventListener('click', function() {
  performCalculation('subtract');
});

btnMultiply.addEventListener('click', function() {
  performCalculation('multiply');
});

btnDivide.addEventListener('click', function() {
  performCalculation('divide');
});

// Reset button
const btnResetMath = document.getElementById('btn-reset-math');
btnResetMath.addEventListener('click', function() {
  num1Input.value = 0;
  num2Input.value = 0;
  output3.innerHTML = '<p>Calculation results will appear here...</p>';
  console.log('Calculator cleared');
});


// ========================================
// EXERCISE 4: Conditionals (If/Else)
// ========================================
console.log('\n--- EXERCISE 4: Conditionals (If/Else) ---');

const ageInput = document.getElementById('age-input');
const btnCheckAge = document.getElementById('btn-check-age');
const output4 = document.getElementById('output-4');

function checkAgeEligibility() {
  const age = Number(ageInput.value);
  console.log('Age entered:', age);
  
  // Validate input
  if (age === 0 || isNaN(age)) {
    output4.innerHTML = '<p class="error">Please enter a valid age!</p>';
    return;
  }
  
  let message = '';
  let className = '';
  
  // Nested if/else for age ranges
  if (age < 13) {
    message = '🎮 You are ' + age + ' years old. Too young for most activities.';
    className = 'warning';
  } 
  else if (age >= 13 && age < 16) {
    message = '🎬 You are ' + age + ' years old. You can watch PG movies!';
    className = 'info';
  } 
  else if (age >= 16 && age < 18) {
    message = '🎞️ You are ' + age + ' years old. You can watch M movies!';
    className = 'success';
  } 
  else if (age >= 18) {
    message = '🎥 You are ' + age + ' years old. You are an adult!';
    className = 'success';
  }
  
  output4.innerHTML = '<p class="' + className + '">' + message + '</p>';
  console.log('Eligibility:', message);
}

// Click button to check
btnCheckAge.addEventListener('click', checkAgeEligibility);

// Also allow Enter key to trigger check
ageInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkAgeEligibility();
  }
});

// Reset button
const btnResetAge = document.getElementById('btn-reset-age');
btnResetAge.addEventListener('click', function() {
  ageInput.value = 0;
  output4.innerHTML = '<p>Eligibility result will appear here...</p>';
});


// ========================================
// EXERCISE 5: Loops & Lists
// ========================================
console.log('\n--- EXERCISE 5: Loops & Lists ---');

const loopCountInput = document.getElementById('loop-count');
const btnGenerateList = document.getElementById('btn-generate-list');
const output5 = document.getElementById('output-5');

function generateList() {
  const count = Number(loopCountInput.value);
  console.log('Generating list with', count, 'items');
  
  // Validate input
  if (count === 0 || isNaN(count) || count < 1 || count > 10) {
    output5.innerHTML = '<p class="error">Please enter a number between 1 and 10!</p>';
    return;
  }
  
  let listHTML = '<ul>';
  
  // FOR LOOP: repeat code a set number of times
  // for (start; condition; increment)
  for (let i = 1; i <= count; i++) {
    listHTML += '<li>Item number ' + i + '</li>';
    console.log('Added item', i);
  }
  
  listHTML += '</ul>';
  
  output5.innerHTML = '<p class="info">Generated ' + count + ' items:</p>' + listHTML;
  console.log('List complete with', count, 'items');
}

btnGenerateList.addEventListener('click', generateList);

// Reset button
const btnResetList = document.getElementById('btn-reset-list');
btnResetList.addEventListener('click', function() {
  loopCountInput.value = 5;
  output5.innerHTML = '<p>List will appear here...</p>';
});


// ========================================
// EXERCISE 6: Functions (Reusable Code)
// ========================================
console.log('\n--- EXERCISE 6: Functions (Reusable Code) ---');

const wordInput = document.getElementById('word-input');
const btnAnalyzeWord = document.getElementById('btn-analyze-word');
const output6 = document.getElementById('output-6');

// Helper function 1: Count letters
function countLetters(word) {
  return word.length;
}

// Helper function 2: Check if palindrome
function isPalindrome(word) {
  const lowerWord = word.toLowerCase();
  // Split into array, reverse, join back to string
  const reversedWord = lowerWord.split('').reverse().join('');
  return lowerWord === reversedWord;
}

// Helper function 3: Count vowels
function countVowels(word) {
  let vowelCount = 0;
  
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || 
        letter === 'o' || letter === 'u') {
      vowelCount++;
    }
  }
  
  return vowelCount;
}

// Helper function 4: Count consonants
function countConsonants(word) {
  let consonantCount = 0;
  
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    // Check if it's a letter AND not a vowel
    if (/[a-z]/.test(letter) && 
        letter !== 'a' && letter !== 'e' && letter !== 'i' && 
        letter !== 'o' && letter !== 'u') {
      consonantCount++;
    }
  }
  
  return consonantCount;
}

// Main analysis function
function analyzeWord() {
  const word = wordInput.value.trim();
  
  if (word === '') {
    output6.innerHTML = '<p class="error">Please enter a word!</p>';
    return;
  }
  
  console.log('Analyzing word:', word);
  
  // Call helper functions
  const letters = countLetters(word);
  const vowels = countVowels(word);
  const consonants = countConsonants(word);
  const palindrome = isPalindrome(word);
  
  // Build HTML to display results
  let resultHTML = '<p class="info"><strong>Analysis of "' + word + '":</strong></p>';
  resultHTML += '<ul>';
  resultHTML += '<li>Total letters: <span class="bold">' + letters + '</span></li>';
  resultHTML += '<li>Vowels: <span class="bold">' + vowels + '</span></li>';
  resultHTML += '<li>Consonants: <span class="bold">' + consonants + '</span></li>';
  
  if (palindrome) {
    resultHTML += '<li>🎉 <span class="success bold">This is a PALINDROME!</span></li>';
  } else {
    resultHTML += '<li>Not a palindrome</li>';
  }
  
  resultHTML += '</ul>';
  
  output6.innerHTML = resultHTML;
  console.log('Analysis complete');
}

btnAnalyzeWord.addEventListener('click', analyzeWord);

// Allow Enter key
wordInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    analyzeWord();
  }
});

// Reset button
const btnResetWord = document.getElementById('btn-reset-word');
btnResetWord.addEventListener('click', function() {
  wordInput.value = '';
  output6.innerHTML = '<p>Word analysis will appear here...</p>';
});


// ========================================
// EXERCISE 7: Arrays & Iteration
// ========================================
console.log('\n--- EXERCISE 7: Arrays & Iteration ---');

const gradeInput = document.getElementById('student-grade');
const btnAddGrade = document.getElementById('btn-add-grade');
const btnShowStats = document.getElementById('btn-show-stats');
const output7 = document.getElementById('output-7');
const btnResetGrades = document.getElementById('btn-reset-grades');

// Create an empty array to store grades
let grades = [];
console.log('Grades array created:', grades);

function addGrade() {
  const grade = gradeInput.value.toUpperCase();
  
  if (grade === '') {
    output7.innerHTML = '<p class="error">Please enter a grade (A, B, C, D, or F)!</p>';
    return;
  }
  
  // Valid grades array
  const validGrades = ['A', 'B', 'C', 'D', 'F'];
  
  // Check if grade is valid using indexOf
  if (validGrades.indexOf(grade) === -1) {
    output7.innerHTML = '<p class="error">Invalid grade! Enter A, B, C, D, or F only.</p>';
    return;
  }
  
  // Add grade to array using push()
  grades.push(grade);
  gradeInput.value = '';
  
  output7.innerHTML = '<p class="success">Grade ' + grade + ' added! Total: ' + 
                      grades.length + '</p>';
  console.log('Grade added. Array now:', grades);
}

function showStatistics() {
  if (grades.length === 0) {
    output7.innerHTML = '<p class="error">No grades added yet!</p>';
    return;
  }
  
  console.log('Calculating statistics for:', grades);
  
  // Count each grade type
  let countA = 0, countB = 0, countC = 0, countD = 0, countF = 0;
  
  // Loop through grades array
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] === 'A') countA++;
    else if (grades[i] === 'B') countB++;
    else if (grades[i] === 'C') countC++;
    else if (grades[i] === 'D') countD++;
    else if (grades[i] === 'F') countF++;
  }
  
  // Calculate percentages
  const total = grades.length;
  const percentA = ((countA / total) * 100).toFixed(1);
  const percentB = ((countB / total) * 100).toFixed(1);
  const percentC = ((countC / total) * 100).toFixed(1);
  const percentD = ((countD / total) * 100).toFixed(1);
  const percentF = ((countF / total) * 100).toFixed(1);
  
  // Find most common grade
  const counts = [countA, countB, countC, countD, countF];
  const maxCount = Math.max(...counts);
  
  let mostCommon = '';
  if (maxCount === countA) mostCommon = 'A';
  else if (maxCount === countB) mostCommon = 'B';
  else if (maxCount === countC) mostCommon = 'C';
  else if (maxCount === countD) mostCommon = 'D';
  else if (maxCount === countF) mostCommon = 'F';
  
  // Build statistics HTML
  let statsHTML = '<p class="info"><strong>Grade Statistics (Total: ' + total + '):</strong></p>';
  statsHTML += '<ul>';
  statsHTML += '<li>A: ' + countA + ' (' + percentA + '%)</li>';
  statsHTML += '<li>B: ' + countB + ' (' + percentB + '%)</li>';
  statsHTML += '<li>C: ' + countC + ' (' + percentC + '%)</li>';
  statsHTML += '<li>D: ' + countD + ' (' + percentD + '%)</li>';
  statsHTML += '<li>F: ' + countF + ' (' + percentF + '%)</li>';
  statsHTML += '</ul>';
  statsHTML += '<p class="highlight">Most common grade: <span class="bold">' + mostCommon + '</span></p>';
  
  output7.innerHTML = statsHTML;
  console.log('Statistics displayed');
}

btnAddGrade.addEventListener('click', addGrade);
btnShowStats.addEventListener('click', showStatistics);

// Allow Enter key
gradeInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addGrade();
  }
});

// Reset button
btnResetGrades.addEventListener('click', function() {
  grades = [];
  gradeInput.value = '';
  output7.innerHTML = '<p>Grade statistics will appear here...</p>';
  console.log('Grades cleared');
});


// ========================================
// EXERCISE 8: DOM Manipulation & Styling
// ========================================
console.log('\n--- EXERCISE 8: DOM Manipulation & Styling ---');

const bgColorSelect = document.getElementById('bg-color');
const btnChangeStyle = document.getElementById('btn-change-style');
const output8 = document.getElementById('output-8');
const btnResetStyle = document.getElementById('btn-reset-style');

function changeStyle() {
  // Get selected color variable
  const colorVariable = bgColorSelect.value;
  
  // Get actual color value from CSS variables
  const root = document.documentElement;
  const colorValue = getComputedStyle(root).getPropertyValue(colorVariable).trim();
  
  console.log('Color variable:', colorVariable, 'Value:', colorValue);
  
  // Change background color
  output8.style.backgroundColor = colorValue;
  
  // Change text color based on background
  if (colorVariable === '--color-dark') {
    output8.style.color = 'white';
  } else {
    output8.style.color = '#2c3e50';
  }
  
  // Add styling effects
  output8.style.border = '3px solid black';
  output8.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
  
  // Add animation
  output8.classList.remove('fade-in');
  output8.classList.add('fade-in');
  
  // Update content
  output8.innerHTML = '<p><strong>Style Updated! ✨</strong></p>' +
                      '<p>This box now has a new appearance!</p>' +
                      '<p>Color variable: <code>' + colorVariable + '</code></p>';
  
  console.log('Style changed');
}

// Listen for button click
btnChangeStyle.addEventListener('click', changeStyle);

// Also change style when dropdown changes (no button needed)
bgColorSelect.addEventListener('change', changeStyle);

// Reset button
btnResetStyle.addEventListener('click', function() {
  output8.style.backgroundColor = '';
  output8.style.color = '';
  output8.style.border = '';
  output8.style.boxShadow = '';
  output8.classList.remove('fade-in');
  output8.innerHTML = '<p>This box will change its appearance!</p>';
  bgColorSelect.value = '--color-light';
  console.log('Styles reset');
});


// ========================================
// EXERCISE 9: Keyboard Events
// ========================================
console.log('\n--- EXERCISE 9: Keyboard Events ---');

const textCounter = document.getElementById('text-counter');
const charCountSpan = document.getElementById('char-count');
const wordCountSpan = document.getElementById('word-count');

// Listen for typing - 'input' event fires every time text changes
textCounter.addEventListener('input', function() {
  const text = textCounter.value;
  
  // Count characters
  const charCount = text.length;
  charCountSpan.textContent = charCount;
  
  // Count words
  let wordCount = 0;
  if (text.trim() !== '') {
    // Split by spaces to count words
    wordCount = text.trim().split(' ').length;
  }
  wordCountSpan.textContent = wordCount;
  
  console.log('Characters:', charCount, 'Words:', wordCount);
});

// Listen for specific keys
textCounter.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    textCounter.value = '';
    charCountSpan.textContent = '0';
    wordCountSpan.textContent = '0';
    console.log('Input cleared with Escape key');
  }
});


// ========================================
// EXERCISE 10: Interactive Quiz
// ========================================
console.log('\n--- EXERCISE 10: Interactive Quiz ---');

// Define quiz questions
const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    correct: 0
  },
  {
    question: "Which of these is a JavaScript data type?",
    options: [
      "Integer",
      "Boolean",
      "Character",
      "Alphabet"
    ],
    correct: 1
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Complex Style Sheets"
    ],
    correct: 1
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunc() {}",
      "def myFunc() {}",
      "func myFunc() {}",
      "create function myFunc()"
    ],
    correct: 0
  },
  {
    question: "What is an array?",
    options: [
      "A type of variable",
      "A list that can store multiple values",
      "A mathematical formula",
      "A CSS property"
    ],
    correct: 1
  }
];

// Get quiz elements
const btnSubmitAnswer = document.getElementById('btn-submit-answer');
const btnNextQuestion = document.getElementById('btn-next-question');
const btnResetQuiz = document.getElementById('btn-reset-quiz');
const output10 = document.getElementById('output-10');

// Quiz state variables
let currentQuestion = 0;
let score = 0;
let answered = false;
let selectedAnswer = null;

function displayQuestion() {
  const question = quizData[currentQuestion];
  answered = false;
  selectedAnswer = null;
  
  // Display question
  const questionElement = document.getElementById('quiz-question');
  questionElement.textContent = 'Question ' + (currentQuestion + 1) + ' of ' + 
                                 quizData.length + ': ' + question.question;
  
  // Create options
  const optionsElement = document.getElementById('quiz-options');
  optionsElement.innerHTML = '';
  
  // Loop through options and create radio buttons
  for (let i = 0; i < question.options.length; i++) {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    
    radio.type = 'radio';
    radio.name = 'answer';
    radio.value = i;
    
    radio.addEventListener('change', function() {
      selectedAnswer = parseInt(this.value);
      console.log('Answer selected:', selectedAnswer);
    });
    
    label.appendChild(radio);
    label.appendChild(document.createTextNode(' ' + question.options[i]));
    label.style.display = 'block';
    label.style.margin = '10px 0';
    label.style.cursor = 'pointer';
    
    optionsElement.appendChild(label);
  }
  
  // Show submit button
  btnSubmitAnswer.style.display = 'inline-block';
  btnSubmitAnswer.disabled = false;
  btnNextQuestion.style.display = 'none';
  
  console.log('Question displayed:', currentQuestion + 1);
}

function checkAnswer() {
  if (selectedAnswer === null) {
    output10.innerHTML = '<p class="error">Please select an answer!</p>';
    return;
  }
  
  const question = quizData[currentQuestion];
  const isCorrect = (selectedAnswer === question.correct);
  
  if (isCorrect) {
    score++;
    output10.innerHTML = '<p class="success">✅ Correct!</p>';
    console.log('Correct! Score:', score);
  } else {
    output10.innerHTML = '<p class="error">❌ Wrong!</p>' +
                        '<p>The correct answer was: <span class="bold">' + 
                        question.options[question.correct] + '</span></p>';
    console.log('Wrong! Correct answer was:', question.options[question.correct]);
  }
  
  answered = true;
  btnSubmitAnswer.style.display = 'none';
  btnNextQuestion.style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestion++;
  
  if (currentQuestion < quizData.length) {
    displayQuestion();
    output10.innerHTML = '<p>New question ready. Select an answer!</p>';
  } else {
    displayQuizEnd();
  }
}

function displayQuizEnd() {
  const percentage = ((score / quizData.length) * 100).toFixed(0);
  
  let message = '';
  if (percentage >= 80) {
    message = '🏆 Excellent! You scored ' + percentage + '%!';
  } else if (percentage >= 60) {
    message = '👍 Good job! You scored ' + percentage + '%!';
  } else {
    message = '📚 Keep studying! You scored ' + percentage + '%!';
  }
  
  const quizElement = document.getElementById('quiz-question');
  quizElement.textContent = 'Quiz Complete!';
  
  const optionsElement = document.getElementById('quiz-options');
  optionsElement.innerHTML = '';
  
  btnSubmitAnswer.style.display = 'none';
  btnNextQuestion.style.display = 'none';
  btnResetQuiz.style.display = 'inline-block';
  
  output10.innerHTML = '<p class="success"><strong>' + message + '</strong></p>' +
                       '<p>You got ' + score + ' out of ' + quizData.length + 
                       ' questions correct!</p>';
  
  console.log('Quiz finished! Final score:', score, 'Percentage:', percentage + '%');
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;
  selectedAnswer = null;
  
  output10.innerHTML = '<p>Click "Submit Answer" to start!</p>';
  
  btnSubmitAnswer.style.display = 'inline-block';
  btnNextQuestion.style.display = 'none';
  btnResetQuiz.style.display = 'none';
  
  displayQuestion();
  console.log('Quiz reset');
}

// Add event listeners
btnSubmitAnswer.addEventListener('click', checkAnswer);
btnNextQuestion.addEventListener('click', nextQuestion);
btnResetQuiz.addEventListener('click', resetQuiz);

// Start quiz
displayQuestion();

// ========================================
// COMPLETION MESSAGE
// ========================================
console.log('\n====================================');
console.log('✅ All exercises loaded successfully!');
console.log('Try clicking buttons on the page to see JavaScript in action.');
console.log('Open Console (F12) to see debug messages.');
console.log('====================================\n');
