/**
* Split data into pages
* @method chunkData
* @param {Array} array - Array of data
* @param {chunk} number - number of results
* @return {Object} data split based on page number
*/
export function chunkData(array = [], chunk) {
    const pagedData = {};
    const length = array.length;
    let temp, compt = 1;// Temporary page of data and counter for page number

    for(let i=0, j=length; i<j; i+=chunk){
        temp = array.slice(i,i+chunk);
        pagedData[compt] = temp;
        compt++;
    }
    return pagedData;
}
