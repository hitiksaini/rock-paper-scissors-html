let score = [0, 0];

function updateplayerscore() {
  score[0] = score[0] + 1;
  document.querySelector('.score').innerHTML = `Score-> you : ${score[0]} / Computer : ${score[1]}`;
}

function updatecompscore() {
  score[1] = score[1] + 1;
  document.querySelector('.score').innerHTML = `Score-> you : ${score[0]} / Computer : ${score[1]}`;
}



document.getElementById('buttonR').addEventListener('click', chooseRock);

function chooseRock() {



  let playerchoice = 'Rock'

  let computerchoice = ['Rock', 'Paper', 'Sciscoors', 'Lizard', 'Spock']

  let compchoice = Math.floor(Math.random() * 5);

  if (computerchoice[compchoice] === 'Rock') {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Rock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = `THIS IS A DRAW`;
    console.log(`THIS IS A DRAWW`)
  } else if (computerchoice[compchoice] === 'Paper') {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Rock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'Computer wins';
    console.log('Computer wins')
    updatecompscore()


  } else if ([compchoice] === 'Sciscoors') {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Rock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
    updateplayerscore()
  } else if ([compchoice] === 'Lizard') {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Rock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
    updateplayerscore()

  } else {


    document.querySelector('.yourchoice').innerHTML = `Your Choice is Rock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
    updateplayerscore()


  }

}

document.getElementById('buttonP').addEventListener('click', choosePaper);

function choosePaper() {


  let playerchoice = 'Paper'

  let computerchoice = ['Rock', 'Paper', 'Sciscoors', 'Lizard', 'Spock']

  let compchoice = Math.floor(Math.random() * 5);

  if (computerchoice[compchoice] === 'Rock') {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Paper---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = `You win`;

    console.log(`You win`)
    updateplayerscore()
  } else if (computerchoice[compchoice] === 'Paper') {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Paper---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'This is a draw';
    console.log('This is a draw')
  } else if (computerchoice[compchoice] === 'Lizard') {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Paper---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'Computer wins';
    updatecompscore();
    console.log('This is a draw')


  } else if (computerchoice[compchoice] === 'Spock') {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Paper---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('YOu win')
    updateplayerscore();


  } else {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Paper---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'Computer wins';
    console.log('Computer wins')
    updatecompscore()
  }


}

document.getElementById('buttonS').addEventListener('click', chooseSciss);

function chooseSciss() {


  let playerchoice = 'Scisscors'

  let computerchoice = ['Rock', 'Paper', 'Scisscors', 'Lizard', 'Spock']

  let compchoice = Math.floor(Math.random() * 5);

  if (computerchoice[compchoice] === 'Rock') {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Scisscors---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = `Computer wins`;

    console.log(`Computer wins`)
    updatecompscore()
  } else if (computerchoice[compchoice] === 'Paper') {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Scisscors---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';

    console.log('You win')
    updateplayerscore()
  } else if (computerchoice[compchoice] === 'Lizard') {


    document.querySelector('.yourchoice').innerHTML = `Your Choice is Scissors---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
    updateplayerscore();
  } else if (computerchoice[compchoice] === 'Spock') {


    document.querySelector('.yourchoice').innerHTML = `Your Choice is Scisscors---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = `Computer wins`;

    console.log(`Computer wins`)
    updatecompscore()

  } else {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Scisscors---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'This is a draw';
    console.log('Draw')
  }


}
document.getElementById('buttonSpock').addEventListener('click', chooseSpock);

function chooseSpock() {



  let playerchoice = 'Spock'

  let computerchoice = ['Rock', 'Paper', 'Scisscors', 'Lizard', 'Spock']

  let compchoice = Math.floor(Math.random() * 5);

  if (computerchoice[compchoice] === 'Rock') {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Spock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
    updateplayerscore();

  } else if (computerchoice[compchoice] === 'Scisscors') {


    document.querySelector('.yourchoice').innerHTML = `Your Choice is Spock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
    updateplayerscore();
  } else if (computerchoice[compchoice] === 'Lizard') {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Spock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = `Computer wins`;

    console.log(`Computer wins`)
    updatecompscore()



  } else if (computerchoice[compchoice] === 'Paper') {


    document.querySelector('.yourchoice').innerHTML = `Your Choice is Spock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = `Computer wins`;

    console.log(`Computer wins`)
    updatecompscore()

  } else {


    document.querySelector('.yourchoice').innerHTML = `Your Choice is Spock---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'This is a draw';
    console.log('Draw')


  }

}

document.getElementById('buttonL').addEventListener('click', chooseLizard);

function chooseLizard() {



  let playerchoice = 'Lizard'

  let computerchoice = ['Rock', 'Paper', 'Scisscors', 'Lizard', 'Spock']

  let compchoice = Math.floor(Math.random() * 5);

  if (computerchoice[compchoice] === 'Spock') {


    document.querySelector('.yourchoice').innerHTML = `Your Choice is Lizard---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
    updateplayerscore();

  } else if (computerchoice[compchoice] === 'Paper') {


    document.querySelector('.yourchoice').innerHTML = `Your Choice is Lizard---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'You win';
    console.log('You win')
    updateplayerscore();

  } else if (computerchoice[compchoice] === 'Rock') {


    document.querySelector('.yourchoice').innerHTML = `Your Choice is Lizard---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = `Computer wins`;

    console.log(`Computer wins`)
    updatecompscore()
  } else if (computerchoice[compchoice] === 'Scisscors') {


    document.querySelector('.yourchoice').innerHTML = `Your Choice is Lizard---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = `Computer wins`;

    console.log(`Computer wins`)
    updatecompscore()

  } else {

    document.querySelector('.yourchoice').innerHTML = `Your Choice is Lizard---- Computer chose ${computerchoice[compchoice]}`
    document.querySelector('.message').innerHTML = 'This is a draw';
    console.log('Draw')


  }

}
