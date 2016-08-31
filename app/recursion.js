exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    // Optional Challenge
  },


  // base case , condition when method stops calling itself
  //   the goal of the recursive method

  // reduction step
  //   call the method again, getting closer to the base case

  // the key to writing recursion is to figure out the base case

  // factorials
  // count down
  // n! = n*(n-1)!

  // search directory function
  //   declare list array to push files into for later return
  //   make a list to hold files
  //   look through the directory
  //     if you find a file
  //       add to list
  //     if you find a directory
  //       call search dir for the directory
  //       and the list it returns to main file list at beginning of method
  //
  //
  // return list at end of method
  // base case is file

  // - file
  // - dir
  //   - file
  // - dir
  // - file
  //   - dir
  //     - file

  permute: function(arr) {
    // Optional Challenge
  },

  fibonacci: function(n) {
     if (n <= 2) {
       return 1;
     } else {
       return this.fibonacci(n-2) + this.fibonacci(n-1);
     }
  },

  validParentheses: function(n) {
    // Optional Challenge

  }
};
