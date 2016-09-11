export function divideArray(array, num){
    let divided = []
    while(array.length){
        divided.push(array.splice(0,num))
    }
    return divided
}