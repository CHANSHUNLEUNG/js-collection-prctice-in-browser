'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let cloneCollectionA = collectionA.slice();
  objectB["value"].map((elementB,indexB) => {
    cloneCollectionA.map((objectElementA,indexA) => {
      if(objectElementA["key"] == elementB){objectElementA["count"] -= parseInt(objectElementA["count"]/3);}
    })

  })
  return cloneCollectionA;
}
