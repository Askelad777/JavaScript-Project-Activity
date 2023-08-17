const ATTACK_DMG = 10;
const STRNG_DMG = 18;
const MNTRS_DMG = 10;
const HEAL_VAL = 10;
let chosenMaxLife = 100;
let currentMonsterHealth = 100;
let currentPlayerHealth = 100;

adjustHealthBars(chosenMaxLife);

function attackHandler(){

  attackMode('normalMode');

}

function strongAttackHandler(){
  attackMode('hardMode');

}

function endRound(){
  const playerDamage = dealPlayerDamage(MNTRS_DMG);
  currentPlayerHealth -= playerDamage;

  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You won');

  }else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You lose ');
  }else if (currentMonsterHealth <= 0 && currentMonsterHealth <= 0){
    alert('You have a draw');
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
    endRound();

}

function attackMode(mode){

  let Maxdmg;

  if (mode === 'normalMode'){
    Maxdmg = ATTACK_DMG;
  }else if( mode ==='hardMode' ){
    Maxdmg = STRNG_DMG;
  }else{
    return;
  }

  const damage = dealMonsterDamage(ATTACK_DMG);
  currentMonsterHealth -= damage;
  endRound();

}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);