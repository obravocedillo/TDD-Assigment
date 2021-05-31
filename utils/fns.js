/**
 * 
 * @param {*} list - Array, type doesnt matter
 * @returns the length of the array used in the params
 */
function getSize(list){
    return list.length;
}

/**
 * 
 * @returns an empty list
 */
function clearList(){
    return []
}

/**
 * 
 * @param {*} list - Array
 * @param {*} item - New item that will be added to the array
 * @returns a list with the item added
 */
function addElement(list, item){
    list.push(item);
    return list;
}

/**
 * 
 * @param {*} list - Array
 * @param {*} item  - Item to be found in the array
 * @returns true or false depending if the item was found
 */
function itemExist(list, item){
    for(const listItem of list){
        if(listItem === item){
            return true;
        }
    } 
    return false;
}

/**
 * 
 * @param {*} list - Array
 * @param {*} index - Position of the item in the array that will be returned
 * @returns The item in the index passed in the parameters or 'Out of bounds' if the item is not in the bounds
 */
function getElementByIndex(list, index){
    for(let i=0; i<list.length; i+=1){
        if(i === index){
            return list[i];
        }
    }
    return 'Out of bounds';
}

/**
 * 
 * @param {*} list - Array
 * @param {*} item - Item to be found
 * @returns The index where the item was found or -1 if the item was not found
 */
function searchIndex(list, item){
    for(const [listItemIndex,listItem] of list.entries()){
        if(listItem === item){
            return listItemIndex;
        }
    } 
    return -1;
}

/**
 * 
 * @param {*} list - Array
 * @param {*} index - Index of the element that wants to be deleted
 * @returns - A list with the selected item deleted
 */
function removeIndex(list, index){
    for(let i=0; i<list.length; i+=1){
        if(i === index){
            list.splice(index, 1);
            break;
        }
    }
    return list;
}

module.exports = {
    getSize,
    clearList,
    addElement,
    itemExist,
    getElementByIndex,
    searchIndex,
    removeIndex
}