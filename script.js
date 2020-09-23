const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('question');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

//keep track of current card
let currentActiveCard = 0;

//array to store DOM cards
const cardsEl = [];

//store card data
const cardsData = [
	{ question: 'what must a variable begin with?', answer: 'A letter, $ ot _' },
	{ question: 'what is a variable', answer: 'container for a piece of data' },
	{ question: 'example of case sensitive variable', answer: 'thisIsAVariable' },
];

//create all cards
function createCards() {
	cardsData.forEach((data, index) => createCard(data, index));
}

//create single card in DOM
function createCard(data, index) {
	const card = document.createElement('div');
	card.classList.add('card');
	if (index === 0) {
		card.classList.add('active');
	}
	card.innerHTML = `<div class="inner-card">
  <div class="inner-card-front">
    <p>
      ${data.question}
    </p>
  </div>
  <div class="inner-card-back">
    <p>
      ${data.answer}
    </p>
  </div>
</div>`;
	card.addEventListener('click', () => card.classList.toggle('show-answer'));
	//add to DOM cards
	cardsEl.push(card);
	cardsContainer.appendChild(card);
	updateCurrentText();
}

//shoe numer of cards
function updateCurrentText() {
	currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

createCards();

//event listeneers
//className overrides classes, not just adds
nextBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card left'

  currentActiveCard = currentActiveCard + 1

  if(currentActiveCard > cardsEl.length - 1){
    currentActiveCard = cardsEl.length - 1
  }

  cardsEl[currentActiveCard].className = 'card active'
  updateCurrentText()
});

prevBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card right'
  currentActiveCard = currentActiveCard - 1

  if(currentActiveCard < 0){
    currentActiveCard = 0
  }

  cardsEl[currentActiveCard].className = 'card active'
  updateCurrentText()
});
