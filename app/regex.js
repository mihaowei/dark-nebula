exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var numberCheck = /\d/;
    return numberCheck.test(str);
  },

  containsRepeatingLetter : function(str) {
    var dupCheck = /([a-z])\1/gi;
    return dupCheck.test(str);
  },

  endsWithVowel : function(str) {
    var vowelCheck = /[aeiou]$/i;
    return vowelCheck.test(str);
  },

  captureThreeNumbers : function(str) {
    var myRegex = /\d{3}/;
    if (myRegex.test(str)) {
      return myRegex.exec(str)[0];
    } else {
      return false;
    }
  },

  matchesPattern : function(str) {
    var myRegex = /^\d{3}\W\d{3}\W\d{4}$/;
    return myRegex.test(str);
  },

  isUSD : function(str) {
    var myRegex = /(?=.)^\$(([1-9][0-9]{0,2}(,[0-9]{3})*))?(\.[0-9]{2})?$/;
    return myRegex.test(str);
  }
};
