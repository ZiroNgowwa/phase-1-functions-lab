// Code your solution in this file!
function distanceFromHqInBlocks(Length) {
    if (Length > 42){
        return (Length -42);
    }
    else {
        return (42 - Length)
    }
}

function distanceFromHqInFeet(Length) {
    if (Length > 42) {
        return ( Length -42)*264;
    }
    else {
        return (42 - Length)*264
    }
}
function distanceTravelledInFeet(x,y) {
    if ( x>y) {
        return (x-y)*264;
    }
    else {
        return(y-x)*264;
    }
}

function calculatesFarePrice(start,destination) {
    let distance=distanceTravelledInFeet(start,destination)

    if ( distance <= 400) {
        return 0;
    }
    else if ( distance > 400 && distance <=2000) {
        return ( distance - 400) * 0.02;
    }
    else if ( distance > 2000 && distance <2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}