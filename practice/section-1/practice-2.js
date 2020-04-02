'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = new Set();
  collectionA.map((elementA,indexA) => {
    collectionB.map((elementBCollection,indexB) => {
      elementBCollection.map((elementB,indexC) => {
        if(elementA == elementB) {result.add(elementA);}
      })
    })

  })
  return Array.from(result.keys());
}
