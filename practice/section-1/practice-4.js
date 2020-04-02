'use strict';

function collectSameElements(collectionA, objectB) {
  let result = new Set();
  collectionA.map((objectA,objectIndexA) => {
    objectB["value"].map((elementB,index) => {
      if(objectA["key"] == elementB){result.add(elementB);}
    })
  })
  return Array.from(result.keys());
}
