'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = new Set();
  collectionA.map((elementA,indexA) => {
    collectionB.map((elementB,indexB) => {
      if(elementA == elementB) {result.add(elementA);}

    })
  })
  return Array.from(result.keys());
}
