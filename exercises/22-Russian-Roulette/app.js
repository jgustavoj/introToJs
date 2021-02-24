var bulletPosition = 4;
console.log(bulletPosition)

const spinChamber = () => {
    var chamberPosition = Math.floor((Math.random() * 6) + 1);
        return chamberPosition;
}
let spinChamberResult = spinChamber()
console.log(spinChamberResult)

const fireGun = (spinnerPosition) => {
    if(bulletPosition == spinChamberResult){
        return ("You're dead!");

    } else {
        return ("Keep playing!")
    }

};

console.log(fireGun())