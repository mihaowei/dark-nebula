exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {

  // reduceString: function(str, amount) {
  //   var newString = str.split("");
  //   for (var i = 0; i < newString.length; i++) {
  //     if (newString[i] == newString[i + amount]) {
  //       newString.splice(i, 1);
  //       i--
  //     }
  //   }
  //   return newString.join("");
  // },

  reduceString: function(str, amount) {
    var strArray = str.split('');
    var dupArray = [];
    var newArray = [];
    for (var i = 0; i < strArray.length; i++) {
      if (strArray[i] === strArray[i + 1]) {
        dupArray.push(strArray[i]);
      } else {
        dupArray.push(strArray[i]);
        dupArray = dupArray.slice(0, amount);
        newArray = newArray.concat(dupArray);
        dupArray = [];
      }
    }
    return newArray.join('');
  },

  // wordWrap: function(str, cols) {
  //   debugger
  //   var newArr = [];
  //   var newStr = str.split(" ");
  //   // var subStringArr = [];
  //   for (var i = 0; i < newStr.length; i++) {
  //     var substring = newStr[i].split("");
  //     if (substring.length <= (cols+1) ) {
  //       newArr.push(newStr[i]);
  //     }
  //   }
  //   for (var i = 0; i < newArr.length; i++) {
  //     if (newArr[i].length < 3) {
  //       newArr[i] = newArr[i] + " " + newArr[i+1];
  //     }
  //   }
  //   return newArr.join("\n");
  //
  // },


  wordWrap: function(string, cols) {
    var formattedStr = string.split('');
    var counter = 0;
    for (var n = 0; n < formattedStr.length; n++) {
      if (formattedStr[n] !== " ") {
        counter++;
      }
      if ((counter >= 3) && (formattedStr[n] === " ")) {
        formattedStr[n] = "\n";
        counter = 0;
      }
    }
    return formattedStr.join('');
  },

  reverseString: function(str) {
  //   var revStr = '';
  //   for (var i = str.length - 1; i >= 0; i--) {
  //   revStr += str[i];
  //   };
  // return revStr;
  // }

    return str.split('').reverse().join('');
  },

};
