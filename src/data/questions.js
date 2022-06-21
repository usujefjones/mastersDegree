export const questions = [
		{
		questionId: 1,
		questionText: '4 + 6 * 2 = ?',
		imageSrc: '',
		answerType: 'EDIT_CONTROL',
		multipleChoiceAnswers: [''],
		answer: '16'
	},
	{
		questionId: 2,
		questionText: '(14 + 6) * 2 = ?',
		imageSrc: '',
		answerType: 'EDIT_CONTROL',
		multipleChoiceAnswers: [''],
		answer: '40'
	},
	{
		questionId: 3,
		questionText: '(3 + 12)/3 + ½ = ?',
		imageSrc: '',
		answerType: 'SINGLE_MULT_CHOICE',
		multipleChoiceAnswers: ['4 1/2', '5 1/2', '6', '6 1/2'],
		answer: '5 1/2'
	},
	{
		questionId: 4,
		questionText: '140 &#247; 5 * 2 – 2 = 54',
		imageSrc: '',
		answerType: 'TRUE_FALSE',
		multipleChoiceAnswers: [''],
		answer: 'true'
	},
	{
		questionId: 5,
		questionText: '4<sup>3</sup> - 60 = ? ', //To do superscript
		imageSrc: '',
		answerType: 'SINGLE_MULT_CHOICE',
		multipleChoiceAnswers: ['4', '5', '60', '6'],
		answer: '4'
	},
	{
		questionId: 6,
		questionText: '6.\tIn a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake?',
		imageSrc: 'lilypad',
		answerType: 'EDIT_CONTROL',
		multipleChoiceAnswers: [''],
		answer: '47',
		explanation: 'With all the talk of doubling and halves, your brain jumps to the conclusion that to solve the problem of when the lily patch covers half the lake, all you have to do is divide the number of days it took to fill the lake (48) in half. It\'s understandable but wrong.\n' +
			'The problem says that the patch DOUBLES in size every day, which means that on any day, the lily patch was half the size the day before. So if the patch reaches the entire size of the lake on the 48th day, it means the lily pad was half the size of the lake on day 47.\n'
	},
	{
		questionId: 7,
		questionText: 'What is the number of the parking spot covered by the car?',
		imageSrc: 'parkingspace',
		answerType: 'EDIT_CONTROL',
		multipleChoiceAnswers: [''],
		answer: '87'
	},
	{
		questionId: 8,
		questionText: 'Which number is equivalent to 3<sup>4</sup> &#247; 3<sup>2</sup>?',
		imageSrc: '',
		answerType: 'SINGLE_MULT_CHOICE',
		multipleChoiceAnswers: ['2','9','81','729'],
		answer: '9'
	},
	{
		questionId: 9,
		questionText: '9 - 3 &#247; 1/3 + 1 = ?',
		imageSrc: '',
		answerType: 'EDIT_CONTROL',
		multipleChoiceAnswers: [''],
		answer: '1'
	},
	{
		questionId: 10,
		questionText: '',
		imageSrc: 'triangles',
		answerType: 'SINGLE_MULT_CHOICE',
		multipleChoiceAnswers: ['18','9', '12', '15'],
		answer: '18'
	},
	{
		questionId: 11,
		questionText: 'Solve for x:</br></br>  115 + (-5x) = 0',
		imageSrc: '',
		answerType: 'SINGLE_MULT_CHOICE',
		multipleChoiceAnswers: ['3', '4', '-0', '-3'],
		answer: '-3'
	},
	{
		questionId: 12,
		questionText: '1.92 &#247; 3 = ?',
		imageSrc: '',
		answerType: 'SINGLE_MULT_CHOICE',
		multipleChoiceAnswers: ['6.4', '4.6', '1.89', '0.64'],
		answer: '0.64'
	},
	{
		questionId: 13,
		questionText: '6 &#247; 2(1 + 2) = ?',
		imageSrc: '',
		answerType: 'EDIT_CONTROL',
		multipleChoiceAnswers: [''],
		answer: '9',
		explanation: 'Using PEMDAS (an acronym laying out the order in which you solve it: "parenthesis, exponents, multiplication, division, addition, subtraction"), you would first solve the addition inside of the parentheses (1 + 2 = 3), and from there finish the equation as it\'s written from left to right.'
	},
	{
		questionId: 14,
		questionText: 'What is the next number in the series; 1, 4, 9, 16, 25, ... ? ',
		imageSrc: '',
		answerType: 'EDIT_CONTROL',
		multipleChoiceAnswers: [''],
		answer: '36',
		explanation: 'Squares of numbers: 2pwr2 = 4, 3pwr2 = 9, 4pwr2 = 16, 5pwr2 = 5, 6pwr2 = 36'
	},
	{
		questionId: 15,
		questionText: 'What is the volume of a cube that has sides of 4cm?',
		imageSrc: '',
		answerType: 'SINGLE_MULT_CHOICE',
		multipleChoiceAnswers: ['46', '64', '16', '32'],
		answer: '64'
	},
	{
		questionId: 16,
		questionText: 'What is the area of a room that is 12 feet wide and 9 feet long?',
		imageSrc: '',
		answerType: 'EDIT_CONTROL',
		multipleChoiceAnswers: [''],
		answer: '108'
	},
	{
		questionId: 17,
		questionText: 'Solve for x:</br></br>  6 x + 4 = 40',
		imageSrc: '',
		answerType: 'SINGLE_MULT_CHOICE',
		multipleChoiceAnswers: ['6', '0.6', '-6', '10'],
		answer: '6'
	},
	{
		questionId: 18,
		questionText: 'Solve for x:</br></br>  x + (x + 5) = 29',
		imageSrc: '',
		answerType: 'EDIT_CONTROL',
		multipleChoiceAnswers: [''],
		answer: '12'
	},
	{
		questionId: 19,
		questionText: 'Solve for x:</br></br>  3x + 1 = 43',
		imageSrc: '',
		answerType: 'TRUE_FALSE',
		multipleChoiceAnswers: [''],
		answer: '14'
	},
	{
		questionId: 20,
		questionText: 'Solve for x:</br></br> 5x + 4x – 10 =  71',
		imageSrc: '',
		answerType: 'EDIT_CONTROL',
		multipleChoiceAnswers: [''],
		answer: '9'
	},
]