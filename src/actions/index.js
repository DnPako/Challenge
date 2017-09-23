import { DISPLAY_DATA, FILTER_DATA, NEXT_DATA } from './types';
import { feed } from '../config';
import { chunkData } from '../utils';
import _ from 'lodash';

export function displayData(results = 10) {
    const pages = chunkData(feed.data, results);
    return {
        type: DISPLAY_DATA,
        payload: pages
    };
}

export function filterData({search, checked, results}) {
    let data = feed.data;
    if(search !== ''){
        data =  data.filter(element => {
            if(element.description !== null && element.description.includes(search))
                return element;
        });
    }else{
        data = feed.data;
    }
    if(checked){
        data = data.filter(element => {
            if(element.user.metadata.connections.likes.total > 10) {
                return element;
            }
        });
    }
    const pages = chunkData(data, results);
    return {
        type: FILTER_DATA,
        payload: pages
    };
}

export function nextData(data, actualPage) {
    let page = _.size(data);
    if(page > actualPage){
        page = actualPage+1;
    }
    return {
        type: NEXT_DATA,
        payload: page
    }
}
