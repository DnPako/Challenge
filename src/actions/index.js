import { DISPLAY_DATA, FILTER_DATA, NEXT_DATA } from './types';
import { feed } from '../config';
import { chunkData } from '../utils';
import _ from 'lodash';

/**
* Action to display data on first mount
* @method displayData
* @param {Number} results - number of results to display
* @return {Object} object to be sent to the reducer
*                   The payload is data split
*/
export function displayData(results = 10) {
    const pages = chunkData(feed.data, results);
    return {
        type: DISPLAY_DATA,
        payload: pages
    };
}

/**
* Action to filter data
* @method filterData
* @param {Object} ------ - object containing elements to filter with
* @param {String} search - term searched on description
* @param {bool} checked - videos from users that have more than 10 likes
* @param {Number} results - number of results to display
* @return {Object} object to be sent to the reducer
*                   The payload is data split
*/
export function filterData({search, checked, results}) {
    let { data } = feed;

    if(search !== ''){ //Videos after search
        data =  data.filter(element => element.description !== null && element.description.includes(search) && element);
    }else{ //All videos in case of deleting searched term
        data = feed.data;
    }

    if(checked){ //videos from users that have more than 10 likes
        data = data.filter(element => element.user.metadata.connections.likes.total > 10 && element);
    }

    const pages = chunkData(data, results);
    return {
        type: FILTER_DATA,
        payload: pages
    };
}

/**
* Action to pass the next page of data
* @method nextData
* @param {Object} data - data split on pages from state
* @param {Number} actualPage - number of actual page from state
* @return {Object} object to be sent to the reducer
*                   The payload is next page to display or the last one
*/
export function nextData(data, actualPage) {
    let page = _.size(data);// Number of last page
    if(page > actualPage){
        page = actualPage+1;
    }
    return {
        type: NEXT_DATA,
        payload: page
    }
}
