'use strict';

const HashTable = require('../hash-table/index');
const util = require('util');
const students = require('../students');
const LinkedList = require('../linked-list/index');

const logFullObject = (input) => console.log(util.inspect(input, {showHidden: true, depth: null}));

const table = new HashTable();

beforeAll(() => {
  students.forEach(student => {
    table.set(student.name, student.github);
  })
  logFullObject(table._buckets)
})

describe('testing instantiation of Hash Table', () => {
  it('should confirm that the students are listed in the hash table', () => {
    expect(table._buckets[2].value.key).toEqual('Nicole');
    expect(table._buckets[3].value.key).toEqual('Bessie');
    table._buckets.forEach(item => {
      expect(item).toBeInstanceOf(LinkedList);
    })
  })
})

describe('testing we can get items from hashtable', () => {
  it('should return items successfully from hashtable', () => {
    students.forEach(student => {
      expect(table.get(student.name)).toEqual(student.github);
    })
  })
})

describe('testing we get error if we get something not in hashtable', () => {
  it('should return error for no item in hashtable', () => {
    expect(table.get('THIS IS A FAKE KEY')).toBeInstanceOf(Error);
  })
})

describe('testing that we can set a new item to the hashtable', () => {
  it('should show Brian Nations was added', () => {
    table.set('Brian Nations', 'bnates')
    expect(table._buckets[16].value.key).toEqual('Brian Nations');
  })
})

describe('testing that SET also updates an item if the key exists in hashtable', () => {
  it('should show that the item was changed', () => {
    table.set('Brian Nations', 'CHANGING VALUE');
    expect(table._buckets[16].value.htValue).toEqual('CHANGING VALUE')
  })
})

describe('testing that we can delete item from hashtable', () => {
  it('should delete items successfully', () => {
    expect(table.delete('Melanie')).toEqual('Successfully removed');
    expect(table._buckets[19].next).toEqual(null);
    expect(table.delete('Ahmed')).toEqual('Successfully removed');
    expect(table._buckets[19]).toEqual(null);
  })
})

describe('testing we get error for trying to delete item not in hashtable', () => {
  it('should return an error for no item in hashtable', () => {
    expect(table.delete('FAKE KEY')).toBeInstanceOf(Error);
  })
})



