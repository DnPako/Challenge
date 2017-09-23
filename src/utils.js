// Split data into pages
export function chunkData(array = [], chunk) {
    const pagedData = {};
    const length = array.length;
    let temp, compt = 1;
    for(let i=0, j=length; i<j; i+=chunk){
        temp = array.slice(i,i+chunk);
        pagedData[compt] = temp;
        compt++;
    }
    return pagedData;
}
