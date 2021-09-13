function stringCompression (str) {
    let output = '';
    let count = 0;
    let i = 0
    for (i; i < str.length; i++) {
      count++;
      if (str[i] != str[i+1]) {
        output += str[i] + count;
        count = 0;
      }
    }
    return output;
  }