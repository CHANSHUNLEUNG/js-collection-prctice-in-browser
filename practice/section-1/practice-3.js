'use strict';

function collectSameElements(collectionA, objectB) {
  let result = new Set();
  collectionA.map((elementA,indexA) => {
    objectB["value"].map((elementB,indexB) => {
      if(elementA == elementB){result.add(elementA);}

    })

  })
  return Array.from(result.keys());
}
