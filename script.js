const quizQuestions = {
  questions: [
    {
      question: 'A six sided die and a twelve sided die are rolled and the ordered pairs are recorded. What is the number of possible outcomes?',
      answers: ['18', '12', '72', '6'],
      correctAnswer: '72'
    },
    {
      question: 'Cameron is forming a password containing 3 characters. He has decided that the first character will be a capital letter and the last character will be a digit. All other characters will be lowercase letters. How many unique passwords can Cameron form?',
      answers: ['39', '6760', '780', '4056000'],
      correctAnswer: '6760'
    },
    {
      question: 'Write n(n-1)(n-2)...(n-7) in factorial form.',
      answers: ['n!/(n-8)!', 'n!/6!', 'n!/7!', 'n!/(n-7)!'],
      correctAnswer: 'n!/(n-8)!'
    },
    {
      question: 'If 10 different books are to be arranged on a shelf, how many ways can this be done?',
      answers: ['3628800', '90', '10', '100'],
      correctAnswer: '3628800'
    },
    {
      question: 'How many ways are there to arrange either 4 or 5 toys from a basket of 12 toys?',
      answers: ['9', '106920', '79833600', '1129075200'],
      correctAnswer: '106920'
    },
    {
      question: 'In how many ways could four balls be selected, without regard to order, from a box containing nine differently coloured balls?',
      answers: ['126', '3024', '36', '6561'],
      correctAnswer: '126'
    },
    {
      question: 'A lottery ticket has six numbers selected from the numbers 1 through 49, without regard to order. How many combinations of six numbers are possible?',
      answers: ['13983816', '10068347520', '294', '55'],
      correctAnswer: '13983816'
    },
    {
      question: 'nC1 + nC2 + ... + nCn =',
      answers: ['2^n-1', '2^n', '(2^n) - 1', 'n^2'],
      correctAnswer: '(2^n) - 1'
    },
    {
      question: 'How many different sums of money can you make with three coins of different denominations?',
      answers: ['2^3', '3', '2^3 - 1', '3^2'],
      correctAnswer: '2^3 - 1'
    },
    {
      question: 'In how many ways could some candies be selected from a bag of six different candies, if there are two of each type of candy?',
      answers: ['3^6', '3^6 - 1', '2^6', '2^6 - 1'],
      correctAnswer: '3^6 - 1'
    },
    {
      question: 'Three men and four women are to be selected from a group of 10 men and 12 women. In how many ways could this be done?',
      answers: ['10P3 x 12P4', '10!4!', '10!/3! x 12!/4!', '10C3 x 12C4'],
      correctAnswer: '10C3 x 12C4'
    },
    {
      question: 'Fifteen non-collinear points are marked on a paper. How many triangles can be formed using any three points as vertices?',
      answers: ['45', '3375', '455', '2730'],
      correctAnswer: '455'
    },
    {
      question: '12C0 + 12C1 + ... + 12C12 =',
      answers: ['144', '2048', '4095', '4096'],
      correctAnswer: '4096'
    },
    {
      question: 'How many subsets does a set with seven different elements have?',
      answers: ['2^7', '2^7 - 1', '2 x 7', '7!'],
      correctAnswer: '2^7'
    },
    {
      question: 'In how many ways can you have a snack if you find an apple, a banana, an orange, a chocolate bar and a cookie on the kitchen counter?',
      answers: ['32', '25', '5', '31'],
      correctAnswer: '31'
    },
    {
      question: 'Which situation does not describe a uniform distribution?',
      answers: [
        'Cutting a card from a standard deck',
        'Rolling a 12-sided die',
        'Counting successes when rolling 6 dice',
        'A computer randomly generating a number between 1 and 100'
      ],
      correctAnswer: 'Counting successes when rolling 6 dice'
    },
    {
      question: 'A number is randomly chosen from 1 to 9. What is the expected outcome?',
      answers: ['5', '4.5', '45', '10'],
      correctAnswer: '5'
    },
    {
      question: 'A window manufacturer claims that the seals break on only 4% of its windows. What is the probability that, in a sample of 10 windows, no seals will break?',
      answers: ['1.04 x 10^(-14)', '0.4', '0.0665', '0.665'],
      correctAnswer: '0.665'
    },
    {
      question: 'Lin scores on 85% of her free throws. What is the expected waiting time before she misses the basket on a free throw?',
      answers: ['0.18', '0.13', '5.67', '8'],
      correctAnswer: '5.67'
    },
    {
      question: 'What is the expected outcome of a hypergeometric distribution in which 10 objects are selected from 40 objects, of which 8 are considered to be successes?',
      answers: ['5', '0.5', '2', '4'],
      correctAnswer: '2'
    },
    {
      question: 'Which situation does not describe a discrete random variable?',
      answers: [
        'The number of cell phones per household',
        'The number of kilometers traveled by car each month',
        'The number of students in a classroom',
        'The number of credit cards used by a person'
      ],
      correctAnswer: 'The number of kilometers traveled by car each month'
    },
    {
      question: 'A spinner has 8 sectors, each of which is sized based on their labeled number, from 1 to 8. Which statement is correct?',
      answers: [
        'This is a uniform distribution because it is a single trial',
        'This is a uniform distribution because each outcome is equally likely',
        'This is a non-uniform distribution because there is more than one trial',
        'This is a non-uniform distribution because the sectors have different sizes and therefore different probabilities'
      ],
      correctAnswer: 'This is a non-uniform distribution because the sectors have different sizes and therefore different probabilities'
    },
    {
      question: 'Which situation is not an example of a hypergeometric probability distribution?',
      answers: [
        'The number of times a number divisible by 3 comes up when a die is rolled 8 times',
        'The number of hearts in a 7-card hand',
        'The number of men on a 5-person judging panel, selected from 6 men and 5 women',
        'The number of defective light bulbs when 3 light bulbs are taken from a batch of 50 bulbs, 6 of which are defective'
      ],
      correctAnswer: 'The number of times a number divisible by 3 comes up when a die is rolled 8 times'
    },
    {
      question: 'Kajan repeatedly rolled a die and he was getting frustrated that he could not roll his favourite number, which is three. What is the probability that the first three occurred on the tenth roll?',
      answers: ['0.0323', '0.0269', '0.323', '8.269 x 10^(-8)'],
      correctAnswer: '0.0323'
    },
    {
      question: 'What is the expectation for the number of face cards when 10 cards are drawn, with replacement, from a standard deck?',
      answers: ['1.2', '12', '2.31', '0.43'],
      correctAnswer: '2.31'
    },
    {
      question: 'A coin is flipped, and a die is rolled. What is the probability of heads and rolling a six?',
      answers: ['2/3', '1/2', '1/6', '1/12'],
      correctAnswer: '1/12'
    },
    {
      question: 'Sophia collects stamps. Her stamp box contains 12 American, 14 Canadian, 10 British, and 8 Austrian stamps. If she selects a stamp without looking, what is the probability that it is not American?',
      answers: ['0.23', '0.032', '0.27', '0.73'],
      correctAnswer: '0.73'
    },
    {
      question: 'Sandor draws a card from a deck. He replaces the card, shuffles the deck and draws another card. What is the probability he draws a heart twice?',
      answers: ['1/4', '1/169', '1/16', '1/13'],
      correctAnswer: '1/16'
    },
    {
      question: 'Wilma went to a local bike shop. She bought the model she wanted with a choice of 7 blue, 3 red, and 2 green frames. Later the same day, Eduardo purchased one of the remaining models of the same bike. What is the probability that they both purchased blue bikes?',
      answers: ['7/22', '7/24', '49/144', '49/121'],
      correctAnswer: '7/22'
    },
    {
      question: 'A red die and a green die are rolled. Event A is rolling a sum of 8. Event B is rolling a 5 on the green die. There events are:',
      answers: [
        'Independent and mutually exclusive',
        'Dependent and mutually exclusive',
        'Independent and non-mutually exclusive',
        'Dependent and non-mutually exclusive'
      ],
      correctAnswer: 'Dependent and non-mutually exclusive'
    },
    {
      question: 'Adam and his brother are the oldest of three children in the family. What is the probability that their youngest sibling is also a boy?',
      answers: ['1/2', '2/3', '1/3', '1/8'],
      correctAnswer: '1/2'
    },
    {
      question: 'An example of two mutually exclusive events taken from a standard deck of card is:',
      answers: [
        'Aces and spades',
        'Hearts and spades',
        'Diamonds and face cards',
        'Clubs and odd numbered cards'
      ],
      correctAnswer: 'Hearts and spades'
    },
    {
      question: 'A candy bag contains 4 pieces of red licorice, 10 pieces of black licorice, and 6 pieces of green licorice. Glenda selects a piece at random. What is the probability that she either selects red or green licorice?',
      answers: ['0.2', '0.3', '0.5', '0.8'],
      correctAnswer: '0.5'
    },
    {
      question: 'The numbers of monitors sold by a computer store on 11 consecutive business days are listed. What are the mean, median, and mode for this set of data? 4, 10, 10, 11, 10, 10, 13, 30, 12, 20, 24',
      answers: [
        'Mean 14, median 11, mode 10',
        'Mean 10, median 11, mode 14',
        'Mean 17, median 14, mode 10',
        'Mean 11, median 14, mode 10'
      ],
      correctAnswer: 'Mean 14, median 11, mode 10'
    },
    {
      question: 'Which of the following is not a characteristic of the median?',
      answers: [
        'It is easy to define and easy to understand',
        'It is affected by the number of extreme values, but not by their value',
        'It can be computed when date are grouped when if the last group is open-ended',
        'It does not exist for some sets of data'
      ],
      correctAnswer: 'It does not exist for some sets of data'
    },
    {
      question: '"Most people drink two glasses of water" a day is an example of the use of:',
      answers: ['mean', 'median', 'mode', 'none of these'],
      correctAnswer: 'mode'
    },
    {
      question: 'Given Σ(xi - u)^2 = 78 and N = 80, what is the standard deviation?',
      answers: ['0.975', '0.987', '0.110', '0.994'],
      correctAnswer: '0.987'
    },
    {
      question: 'Which is the correct statement?',
      answers: [
        'The median is also known as the second quartile',
        'The first quartile is the median of the lower half of the data',
        'The third quartile is the median of the upper half of the data',
        'All three statements are correct'
      ],
      correctAnswer: 'All three statements are correct'
    },
    {
      question: 'If 5 is subtracted from each value in a set of data, then:',
      answers: [
        'The interquartile range would remain unchanged',
        'The interquartile range would decrease by 5',
        'The interquartile range would decrease by 2.5',
        'The interquartile range would increase by 5'
      ],
      correctAnswer: 'The interquartile range would remain unchanged'
    },
    {
      question: 'The number of building permits a town issued each day during a two-week period are listed. What are the mean, median, and mode for this set of data? 9, 13, 20, 19, 29, 13, 13, 13, 16, 25',
      answers: [
        'Mean 13, median 14.5, mode 17',
        'Mean 14.5, median 17, mode 13',
        'Mean 19, median 17, mode 13',
        'Mean 17, median 14.5, mode 13'
      ],
      correctAnswer: 'Mean 17, median 14.5, mode 13'
    },
    {
      question: 'Which of the following is not a characteristic of the mean?',
      answers: [
        'It is the most familiar and widely used measure of central tendency',
        'It is affected by the value of every piece of data',
        'It can be computed when data are grouped even if the last group is open-ended',
        'Its value can be influenced greatly by outliers'
      ],
      correctAnswer: 'It can be computed when data are grouped even if the last group is open-ended'
    },
    {
      question: 'Which of the following is not a characteristic of the mode?',
      answers: [
        'It is the least used measure of central tendency',
        'It is affected by the value of every piece of data',
        'It may not exist in some sets of data',
        'It is not affected by extreme values'
      ],
      correctAnswer: 'It is affected by the value of every piece of data'
    },
    {
      question: '“The average income of professional athletes is $1.3 million” is an example of the use of:',
      answers: ['mean', 'median', 'mode', 'none of these'],
      correctAnswer: 'mean'
    },
    {
      question: 'Given Σ(xi - x̄)^2 = 783.2 and N = 110, what is the sample standard deviation?',
      answers: ['2.681', '7.185', '2.668', '3.125'],
      correctAnswer: '2.681'
    },
    {
      question: 'If 10 is added to each value of a set of data, then:',
      answers: [
        'There would be no change to the box and whisker plot',
        'The box and whisker plot would be stretched by 10 units',
        'The box and whisker plot would shift 10 units left',
        'The box and whisker plot would shift 10 units right'
      ],
      correctAnswer: 'The box and whisker plot would shift 10 units right'
    },
    {
      question: 'What is an example of continuous data?',
      answers: [
        'Shirt sizes',
        'Class size',
        'Amount of water consumed in a day',
        'Number of taxicabs in a fleet'
      ],
      correctAnswer: 'Amount of water consumed in a day'
    },
    {
      question: 'Four municipalities share in the administration of an airport. The population are 45000, 19000, 14000, and 6000. If the airport commission consists of a stratified sample of municipalities with a total of 12 members, how many members should the smallest municipality contribute?',
      answers: ['1', '2', '3', '6'],
      correctAnswer: '1'
    },
    {
      question: 'A 60-kg person’s body mass index is 30. What is this person\'s height?',
      answers: ['1.8 m', '1.4 m', '1.5 m', '2.0 m'],
      correctAnswer: '1.4 m'
    },
    {
      question: 'When a random starting point is chosen, followed by every nth individual, this sampling method is ___',
      answers: [
        'Simple random sampling',
        'Cluster random sampling',
        'Stratified random sampling',
        'Systematic random sampling'
      ],
      correctAnswer: 'Systematic random sampling'
    },
    {
      question: 'Systematic random sampling is used to interview residents in 25% of 80 apartments in a building. The sampling interval would be',
      answers: ['4', '20', '5', '16'],
      correctAnswer: '4'
    },
    {
      question: 'International mathematics tests were administered in 10 countries chosen at random. In each country, 20 schools were chosen at random, and 30 students in each school were chosen at random. This sampling technique is known as',
      answers: ['Cluster', 'Systematic', 'Stratified', 'Multistage'],
      correctAnswer: 'Multistage'
    },
    {
      question: 'Tetyana obtains a list of all students in the school. She selects every 10th student from the list to take part in a survey. What type of sampling method has she used?',
      answers: ['Simple Random', 'Cluster', 'Systematic', 'Convenience'],
      correctAnswer: 'Systematic'
    },
    {
      question: 'A construction company employs electricals, carpenters, bricklayers, roofers, and general laborers. A committee of employees will be chosen to study a new profit-sharing plan. What is the most appropriate technique for sampling the employees?',
      answers: ['Simple Random', 'Stratified', 'Convenience', 'Voluntary'],
      correctAnswer: 'Stratified'
    },
    {
      question: 'A 1.8-m tall person\'s body mass index is 25. What is the person\'s mass?',
      answers: ['81kg', '45kg', '13.9kg', '112.5kg'],
      correctAnswer: '81kg'
    },
    {
      question: 'To get reactions about a particular new car, readers of a car magazine were asked to mail in their answers to a survey. Classify this sampling method',
      answers: ['Simple Random', 'Stratified', 'Convenience', 'Systematic', 'Voluntary Response'],
      correctAnswer: 'Voluntary Response'
    },
    
    {
      question: 'A grocery store owner wishes to know which of the three grocery stores in town is the most frequently visited by the residents of the town. Which of these is an example of a convenience sample?',
      answers: [
        'Set up a table at the town fair and talk to each passer by',
        'Send a letter to each household with a survey asking the householder to send it back',
        'Hire a market researcher to visit every tenth home in the town',
        'Pick names from the telephone book at random to be called'
      ],
      correctAnswer: 'Set up a table at the town fair and talk to each passer by'
    },
    {
      question: 'An r-value of -0.5 indicates',
      answers: [
        'No linear correlation',
        'A weak negative linear correlation',
        'A moderate negative linear correlation',
      ],
      correctAnswer: 'A moderate negative linear correlation'
    },
    {
      question: 'The town of Alphaville finds a positive correlation between the number of traffic wardens hired and the number of parking tickets written. Which conclusion is most likely?',
      answers: [
        'Hiring more traffic wardens causes more people to break the parking rules',
        'The relationship is accidental',
        'A common cause such as increasing population results in more wardens and more parking violations',
        'A jump in the number of parking violations has led to the hiring of more traffic wardens'
      ],
      correctAnswer: 'A common cause such as increasing population results in more wardens and more parking violations'
    },
    {
      question: 'A positive correlation exists between the price of artichokes at the local supermarket and the attendance at the local amateur theater. This is likely',
      answers: [
        'An accidental relationship',
        'A common cause relationship',
        'A presumed relationship',
        'A reverse cause and effect relationship'
      ],
      correctAnswer: 'An accidental relationship'
    },
    {
      question: 'Which set of data would probably show a strong positive linear correlation?',
      answers: [
        'Marks on history test and the heights of the students',
        'The number of defective light bulbs produced and the time of the day when they were manufactured',
        'The color of cars sold and the annual income of the car buyers',
        'The height of corn in a field and the amount of precipitation during the growing season'
      ],
      correctAnswer: 'The height of corn in a field and the amount of precipitation during the growing season'
    },
    {
      question: 'A set of data with a correlation coefficient of -0.55 has a',
      answers: [
        'Strong negative linear correlation',
        'Moderate negative linear correlation',
        'Weak negative linear correlation',
        'Little or no linear correlation'
      ],
      correctAnswer: 'Moderate negative linear correlation'
    },
    {
      question: 'For a cause and effect relationship between two variables, which statement must be true?',
      answers: [
        'The cause must precede the effect',
        'The cause may occur without the effect taking place',
        'The effect may occur without the cause taking place',
        'All of these are true'
      ],
      correctAnswer: 'The cause must precede the effect'
    },
    
    {
      question: 'Which set of data would probably show a strong positive linear correlation?',
      answers: [
        'Marks on history test and the heights of the students',
        'The number of defective light bulbs produced and the time of the day when they were manufactured',
        'The color of cars sold and the annual income of the car buyers',
        'The height of corn in a field and the amount of precipitation during the growing season'
      ],
      correctAnswer: 'The height of corn in a field and the amount of precipitation during the growing season'
    },
    {
      question: 'A set of data with a correlation coefficient of -0.55 has a',
      answers: [
        'Strong negative linear correlation',
        'Moderate negative linear correlation',
        'Weak negative linear correlation',
        'Little or no linear correlation'
      ],
      correctAnswer: 'Moderate negative linear correlation'
    },
    {
      question: 'For a cause and effect relationship between two variables, which statement must be true?',
      answers: [
        'The cause must precede the effect',
        'The cause may occur without the effect taking place',
        'The effect may occur without the cause taking place',
        'All of these are true'
      ],
      correctAnswer: 'The cause must precede the effect'
    },
    {
      question: 'Randy works at the animal shelter He has noticed a positive correlation between the number of cats available for adoption and the number of visitors in the shelter. This is likely:',
      answers: [
        'An accidental relationship',
        'A common cause relationship',
        'A presumed relationship',
        'A reverse cause and effect relationship'
      ],
      correctAnswer: 'A presumed relationship'
    },
    {
      question: 'What is the independent variable in a correlational study of amounts of sunlight and the heights of tomato plants?',
      answers: [
        'The types of tomato plants',
        'The heights of tomato plants',
        'The angle of the sun',
        'The number of hours of sunlight'
      ],
      correctAnswer: 'The number of hours of sunlight'
    },
    {
      question: 'Which set of data would probably show a strong negative linear correlation?',
      answers: [
        'Resale values of computers and their ages',
        'Heights of volleyball players can jump and the strength of their leg muscles',
        'Number of people at a water park and the air temperature',
        'Scores on a math test and the number of hours spent studying for a class'
      ],
      correctAnswer: 'Resale values of computers and their ages'
    },
   
  ]
};

const createQuestions = ({ questions }) => {
  let score=0
  questions.forEach((q, index) => {

    let questionDiv = document.createElement('div');
    questionDiv.id='question-div';
    questionDiv.style.marginTop='30px'
    let qText = document.createElement('p');
    qText.innerHTML = `${index+1}. ${q.question}`;
    questionDiv.append(qText);

    q.answers.forEach(answer => {
      let label = document.createElement('label');
      let radioButton = document.createElement('input');
      radioButton.type = 'radio';
      radioButton.name = 'question' + index;
      radioButton.value = answer;
      radioButton.onclick = () => checkQuestion(answer, q.correctAnswer,questionDiv);
      label.style.marginLeft="10px";
      label.appendChild(radioButton);
      label.appendChild(document.createTextNode(answer));
      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement('br'));
    });

    document.body.appendChild(questionDiv);

  });

};
let score = 0;
let scoreDisplay = document.createElement('div');
scoreDisplay.id = 'score-display';
document.body.appendChild(scoreDisplay);
const checkQuestion = (userAnswer, correctAnswer,question) => {
  
  if (userAnswer === correctAnswer) {
    question.style.backgroundColor='#00ff00'
    score++
   
  } else {
    question.style.backgroundColor='#ff0000';

  }
  scoreDisplay.innerHTML = `${score}/${quizQuestions.length}`;

};

// Example usage:
createQuestions(
  quizQuestions
);
