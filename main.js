const Scorpion = {
    name: 'SONYA',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: [''],
    attack() {
        console.log(this.name + ' Fight')
    }
}


const Sonya = {
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: [''],
    attack() {
        console.log(this.name + ' Fight')
    }
}

const arenas = document.querySelector('.arenas');

const createPlayer = (className, heroesObject) => {

    //Create player
    const player = document.createElement('div');
    player.classList.add(className);

    //Create progress bar
    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar')

    //Create live
    const live = document.createElement('div')
    live.classList.add('live')
    live.style.width = `${heroesObject.hp}%`;

    //Create name
    const name = document.createElement('div')
    name.classList.add('name');
    name.innerText = heroesObject.name;

    //Create character
    const character = document.createElement('div');
    character.classList.add('character')

    //Create image
    const img = document.createElement('img')
    img.src = heroesObject.img;


    character.appendChild(img)

    progressbar.appendChild(live)
    progressbar.appendChild(name)

    player.appendChild(progressbar)
    player.appendChild(character)

    arenas.appendChild(player)
};

createPlayer('player1', Sonya)

createPlayer('player2', Scorpion)