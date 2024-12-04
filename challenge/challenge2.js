const Speed = prompt('input speed')
CarSpeed = (Speed) => {
if (Speed < 70) {
    return 'ok'
}
else {
    const demeritPoint =Math.floor((Speed-70)/5)
    if (demeritPoint > 12) {
        return 'License suspended'
    }
    else {
        return `Points: ${demeritPoint}`
    }
}
}
console.log(CarSpeed(Speed));