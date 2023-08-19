
const enteredHealthValue= prompt('Enter a maximum value of player\'s health and monster','200');
let chosenMaxLife = +enteredHealthValue;
const ATTACK_DMG = 10;
const STRNG_DMG = 18;
const MNTRS_DMG = 10;
const HEAL_VAL = 10;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';
let currentMonsterHealth = +enteredHealthValue;
let currentPlayerHealth = +enteredHealthValue;
let  hasBonusLife= true;
let battlelog = [];


const NormalMode = 'normalMode'; // normal mode = 1
const hardCore = 'hardMode'; // hard mode = 2


if(isNaN(+enteredHealthValue) || chosenMaxLife <= 0){
  chosenMaxLife = 100;
}
adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterhealth,playerHealth){
  let logEntry;


  switch(event){
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry = {
      event: event,
      value: value,
      target:'MONSTER',
      finalMonsterHealth: monsterhealth,
      finalPlayerHealth : playerHealth
    }
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry = {
      event: event,
      value: value,
      target:'MONSTER',
      finalMonsterHealth: monsterhealth,
      finalPlayerHealth : playerHealth
    }
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
      event: event,
      value: value,
      target:'PLAYER',
      finalMonsterHealth: monsterhealth,
      finalPlayerHealth : playerHealth
    }                                    
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry = {
      event: event,
      value: value,
      target:'PLAYER',
      finalMonsterHealth: monsterhealth,
      finalPlayerHealth : playerHealth
    }
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
      event: event,
      value: value,
      finalMonsterHealth: monsterhealth,
      finalPlayerHealth : playerHealth
    }
      break;
    default:
      logEntry = {};
  }

  // if(event === LOG_EVENT_PLAYER_ATTACK){
  //   logEntry = {
  //     event: event,
  //     value: value,
  //     target:'MONSTER',
  //     finalMonsterHealth: monsterhealth,
  //     finalPlayerHealth : playerHealth
  //   }
  //   battlelog.push(logEntry);
  // }else if(event === LOG_EVENT_PLAYER_STRONG_ATTACK){
  //   logEntry = {
  //     event: event,
  //     value: value,
  //     target:'MONSTER',
  //     finalMonsterHealth: monsterhealth,
  //     finalPlayerHealth : playerHealth
  //   }
  //   battlelog.push(logEntry);
  // }else if(event === LOG_EVENT_MONSTER_ATTACK){
  //   logEntry = {
  //     event: event,
  //     value: value,
  //     target:'PLAYER',
  //     finalMonsterHealth: monsterhealth,
  //     finalPlayerHealth : playerHealth
  //   }
  //   battlelog.push(logEntry);
  // }else if(event === LOG_EVENT_PLAYER_HEAL){
  //   logEntry = {
  //     event: event,
  //     value: value,
  //     target:'PLAYER',
  //     finalMonsterHealth: monsterhealth,
  //     finalPlayerHealth : playerHealth
  //   }
  //   battlelog.push(logEntry);
  // }else if(event === LOG_EVENT_GAME_OVER){
  //   logEntry = {
  //     event: event,
  //     value: value,
  //     finalMonsterHealth: monsterhealth,
  //     finalPlayerHealth : playerHealth
  //   }
  //   battlelog.push(logEntry);
  // }


  battlelog.push(logEntry);

}


function reset (){
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function attackHandler(){

  attackMode(NormalMode);

}

function strongAttackHandler(){
  attackMode(hardCore);

}

function endRound(){

  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MNTRS_DMG);
  currentPlayerHealth -= playerDamage;
  writeToLog( LOG_EVENT_MONSTER_ATTACK,
              playerDamage,
              currentMonsterHealth,
              currentPlayerHealth);

  if(currentPlayerHealth <= 0 && hasBonusLife){
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You consumed your bonus life');
  }


  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You won');
         writeToLog( LOG_EVENT_MONSTER_ATTACK,
              'Player Won',
              currentMonsterHealth,
              currentPlayerHealth);

  }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You lose ');
         writeToLog( LOG_EVENT_MONSTER_ATTACK,
              'Monster Won',
              currentMonsterHealth,
              currentPlayerHealth);
  }else if (currentMonsterHealth <= 0 && currentMonsterHealth <= 0){
    alert('You have a draw');
     writeToLog( LOG_EVENT_MONSTER_ATTACK,
              'A draw',
              currentMonsterHealth,
              currentPlayerHealth);
  }

  if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0){
    reset();
  }
}

function healPlayerHandler(){
  let healValue;
  if(currentPlayerHealth >= chosenMaxLife - HEAL_VAL){
    alert('You cannot heal more than your health points');
    healValue = chosenMaxLife - currentPlayerHealth;
  }else{
    healValue = HEAL_VAL;
  }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
     writeToLog( LOG_EVENT_PLAYER_HEAL,
              healValue,
              currentMonsterHealth,
              currentPlayerHealth);
    endRound();

}

function attackMode(mode){

  let Maxdmg = mode === NormalMode ? ATTACK_DMG : STRNG_DMG;
  let logEvent = mode === NormalMode? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;


  const damage = dealMonsterDamage(Maxdmg);
  currentMonsterHealth -= damage;
   writeToLog( logEvent,
              damage,
              currentMonsterHealth,
              currentPlayerHealth);
  endRound();

}

function eventLogHandler(){
  console.log(battlelog);
}


function printLogHandler(){

  for(let i = 0; i < 3; i++){
    console.log('----------------');
  }

  let j = 3;
  do{
    console(j);
    j++;
  }while(j < 3);

  // for(let i = 10; i > 0){
  //   i--;
  //   console.log(i);
  // }
  // for(let i = 0; i < battlelog.length; i++){
  //   console.log(battlelog[i]);
  // }

  let i = 0;
  for(const logEntry of battlelog){
    console.log(logEntry);
    for(const key in logEntry){
      console.log(`${key} => ${logEntry[key]}`);
    }
  }
  i++;
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);