function addUp(num) {
    x = 0;
    while (num >= 0) {
      x += num;
      num--;
    }
    return x;
  }

  console.log(addUp(1));

  