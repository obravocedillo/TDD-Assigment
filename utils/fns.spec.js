const { describe, test, expect } = require("@jest/globals");
const { fiveItemsList, twoItemsList, tenItemsList } = require('../mocks/list');
const { getSize, clearList, addElement, itemExist, getElementByIndex, searchIndex, removeIndex } = require('../utils/fns')

describe('List manipulation function testing', () => {
    // List size
    test('it should return the size of the list with 5 items', () => {
        expect(getSize(fiveItemsList)).toEqual(5);
    })

    test('it should return the size of the list with 2 items', () => {
        expect(getSize(twoItemsList)).toEqual(2);
    })

    test('it should return the size of the list with 10 items', () => {
        expect(getSize(tenItemsList)).toEqual(10);
    })
    // List size

    // Clear list
    test('it should empty an array with 5 items', () => {
        expect(clearList(fiveItemsList)).toEqual([]);
    })

    test('it should empty an array with 2 items', () => {
        expect(clearList(twoItemsList)).toEqual([]);
    })

    test('it should empty an array with 10 items', () => {
        expect(clearList(tenItemsList)).toEqual([]);
    })
    // Clear list 

    //Add element
    test('it should and a new item to an array with 5 items', () => {
        const addItemResult = addElement(fiveItemsList, 6);
        expect(addItemResult).toEqual([1,2,3,4,5,6]);
        expect(addItemResult.length).toEqual(6);
    })

    test('it should and a new item to an array with 2 items', () => {
        const addItemResult = addElement(twoItemsList, 3);
        expect(addItemResult).toEqual([1,2,3]);
        expect(addItemResult.length).toEqual(3);
    })

    test('it should and a new item to an array with 10 items', () => {
        const addItemResult = addElement(tenItemsList, 11);
        expect(addItemResult).toEqual([1,2,3,4,5,6,7,8,9,10,11]);
        expect(addItemResult.length).toEqual(11);
    })
    //Add element

    //Check if item exist
    test('it should return true the item is in the list', () => {
        const findItemResult = itemExist(fiveItemsList, 4);
        expect(findItemResult).toBeTruthy();
    })

    test('it should return true the item is in the list', () => {
        const findItemResult = itemExist(twoItemsList, 2);
        expect(findItemResult).toBeTruthy();
    })

    test('it should return false the item is not in the list', () => {
        const findItemResult = itemExist(tenItemsList, 12);
        expect(findItemResult).toBeFalsy()
    })
    //Check if item exist

    //Get element by index
    test('it should return 3 the item in the index 2 is 3', () => {
        const findItemResult = getElementByIndex(fiveItemsList, 2);
        expect(findItemResult).toEqual(3);
    })

    test('it should return 2 the item in the index 1 is 2', () => {
        const findItemResult = getElementByIndex(twoItemsList, 1);
        expect(findItemResult).toEqual(2);
    })

    test('it should return -1 the item is not in the list', () => {
        const findItemResult = getElementByIndex(tenItemsList, 14);
        expect(findItemResult).toEqual('Out of bounds');
    })
    //Get element by index

    //Seach index of element
    test('it should return -1 the item is not in the list', () => {
        const indexResult = searchIndex(fiveItemsList, 8);
        expect(indexResult).toEqual(-1);
    })

    test('it should return 1 the item 1 is in the position 0', () => {
        const indexResult = searchIndex(twoItemsList, 1);
        expect(indexResult).toEqual(0);
    })

    test('it should return 10 the item 10 is in the position 9', () => {
        const indexResult = searchIndex(tenItemsList, 10);
        expect(indexResult).toEqual(9)
    })
    //Seach index of element

    //Delete element in the index 
    test('it should return [1,2,4,5,6] the element at position 2 was deleted', () => {
        const deleteResult = removeIndex(fiveItemsList, 2);
        expect(deleteResult).toEqual([1,2,4,5,6]);
    })

    test('it should return [1,2,3] no element exist in position 5', () => {
        const deleteResult = removeIndex(twoItemsList, 5);
        expect(deleteResult).toEqual([1,2,3]);
    })

    test('it should return [2,3,4,5,6,7,8,9,10,11] the element at position 0 was deleted', () => {
        const deleteResult = removeIndex(tenItemsList, 0);
        expect(deleteResult).toEqual([2,3,4,5,6,7,8,9,10,11]);
    })
    //Delete element in the index 
})