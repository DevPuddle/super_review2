//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(height, stance, powerLevel, stamina) {
    this.height = height
    this.stance = stance
    this.powerLevel = powerLevel
    this.stamina = stamina

    this.kick = function(){
        console.log('Swoop!')
    }
    this.punch = function(){
        console.log('Hiiyaahh!')
    }
    this.special = function(){
        console.log('Hiidduukeen!')
    }
}

let chunLi = new StreetFighter('5\'9','SouthPaw', '100%', 90 )