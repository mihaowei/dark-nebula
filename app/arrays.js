exports = (typeof window === 'undefined') ? global : window;


exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
    // why does the above work but the below does not?
    // return arr.push(item);
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    // var answer = _.countBy(arr)[item];
    // return answer;
    // both of these methods (above and below) work!
    var itemCount = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        itemCount++;
      }
    }
    return itemCount;
  },

  duplicates : function(arr) {
    // var dupsArray = [];
    // for (var i = 0; i < arr.length; i++) {
    //   if (arr.indexOf(arr[i]) < i) {
    //     if (!dupsArray.includes(arr[i])) {
    //       dupsArray.push(arr[i]);
    //     }
    //   }
    // }
    // return dupsArray;
    // code above and below both work
    var newArr = [];
    var itemCount = 0;
    for (var i = 0; i < arr.length; i++) {
      itemCount = 0;
      for (var n = (i+1); n < arr.length; n++) {
        if (arr[i] == arr[n]) {
          itemCount++;
            }
          }
          if ((itemCount > 0) && (!newArr.includes(arr[i]))) {
            newArr.push(arr[i]);
        }
      }
    return newArr;
  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] ** 2;
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        newArr.push(i);
      }
    }
    return newArr;
  }
};
