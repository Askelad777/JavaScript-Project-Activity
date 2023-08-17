;
const enteredHealthValue= prompt('Enter a maximum value of player\'s health and monster','200');
let chosenMaxLife = +enteredHealthValue;
const ATTACK_DMG = 10;
const STRNG_DMG = 18;
const MNTRS_DMG = 10;
const HEAL_VAL = 10;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTAC = 'PLAYER_STRONG_ATTACK';
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
  if(event === LOG_EVENT_PLAYER_ATTACK){
    logEntry = {
      event: event,
      value: value,
      target:'MONSTER',
      finalMonsterHealth: monsterhealth,
      finalPlayerHealth : playerHealth
    }
    battlelog.push(logEntry);
  }else if(event === LOG_EVENT_PLAYER_STRONG_ATTAC){
    logEntry = {
      event: event,
      value: value,
      target:'MONSTER',
      finalMonsterHealth: monsterhealth,
      finalPlayerHealth : playerHealth
    }
    battlelog.push(logEntry);
  }else if(event === LOG_EVENT_MONSTER_ATTACK){
    logEntry = {
      event: event,
      value: value,
      target:'PLAYER',
      finalMonsterHealth: monsterhealth,
      finalPlayerHealth : playerHealth
    }
    battlelog.push(logEntry);
  }else if(event === LOG_EVENT_PLAYER_HEAL){
    logEntry = {
      event: event,
      value: value,
      target:'PLAYER',
      finalMonsterHealth: monsterhealth,
      finalPlayerHealth : playerHealth
    }
    battlelog.push(logEntry);
  }else if(event === LOG_EVENT_GAME_OVER){
    logEntry = {
      event: event,
      value: value,
      finalMonsterHealth: monsterhealth,
      finalPlayerHealth : playerHealth
    }
    battlelog.push(logEntry);
  }

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

  let Maxdmg;
  let logEvent;
  if (mode === NormalMode){
    Maxdmg = ATTACK_DMG;
    logEvent = LOG_EVENT_PLAYER_ATTACK;
  }else if( mode === hardCore ){
    Maxdmg = STRNG_DMG;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTAC;

  }else{
    return;
  }

  const damage = dealMonsterDamage(ATTACK_DMG);
  currentMonsterHealth -= damage;
   writeToLog( LOG_EVENT_MONSTER_ATTACK,
              damage,
              currentMonsterHealth,
              currentPlayerHealth);
  endRound();

}

function eventLogHandler(){
  console.log(battlelog);
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', eventLogHandler);