'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = [];
  let containMinusCollection = [];
  let notContainMinusCollection = [];
  let charSet = new Set();
  collectionA.map((element,index) => {
    if(element.includes('-')){
      containMinusCollection.push({"key": element.split("-")[0],"count": element.split("-")[1]});
      charSet.add(element.split("-")[0]);
    }
    else{
      charSet.add(element);
    }
  })

  let collectionASet = new Set();
  collectionA.map((element,index) => {
    collectionASet.add(element);
  })
  Array.from(collectionASet.keys()).map((setElement,indexA) => {
    let count = 0;
    collectionA.map((elementA,indexB) => {
      if(elementA == setElement && !elementA.includes('-')){
        count++;
      }
    })
    notContainMinusCollection.push({"key": setElement, "count": count});
  })



  Array.from(charSet.keys()).map((elementA,indexA) => {
    let count = 0;
    containMinusCollection.map((elementB,indexB) => {
      if(elementB["key"] == elementA){count+=elementB["count"];}
    })
    notContainMinusCollection.map((elementB,indexB) => {
      if(elementB["key"] == elementA){count+=elementB["count"];}
    })
    collectionC.push({"key":elementA,"count":count});
  })



  objectB["value"].map((elementB,indexB) => {
    collectionC.map((objectElementA,indexA) => {
      if(objectElementA["key"] == elementB){objectElementA["count"] -= parseInt(objectElementA["count"]/3);}
    })

  })
  return collectionC;
}
