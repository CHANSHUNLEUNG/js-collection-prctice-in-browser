'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = [];
  let collectionASet = new Set();
  collectionA.map((element,index) => {
    collectionASet.add(element);
  })
  Array.from(collectionASet.keys()).map((setElement,indexA) => {
    let count = 0;
    collectionA.map((elementA,indexB) => {
      if(elementA == setElement){count++;}
    })
    collectionC.push({"key": setElement, "count": count});
  })
  objectB["value"].map((elementB,indexB) => {
    collectionC.map((objectElementA,indexA) => {
      if(objectElementA["key"] == elementB){objectElementA["count"] -= parseInt(objectElementA["count"]/3);}
    })

  })
  return collectionC;
}
