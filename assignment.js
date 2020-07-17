  /** First function feetToMile */

  function feetToMile(feet) {
      var Mile = feet / 5280;
      return Mile;
  }

  /** Secound function woodCalculator */

  function woodCalculator(chair, table, bed) {
      var woodForChair = chair * 1;
      var woodForTable = table * 3;
      var woodForBed = bed * 5;
      var totalNeededWood = woodForChair + woodForTable + woodForBed;
      return totalNeededWood;
  }

  /**Thard function brickCalculator */

  function brickCalculaltor(floor) {
      var needBrick = 1;
      var floorHeight = 0;
      for (var i = 1; i < floor; i++) {
          var total = floor[i];
          var needBrick = floor * floorHeight * 1000;
          if (floor >= 1 && floor <= 10) {
              var needBrick = floor * 15 * 1000;
              return needBrick;
          } else if (floor >= 11 && floor <= 20) {
              var needBrick = floor * 12 * 1000;
              return needBrick;
          } else {
              var needBrick = floor * 10 * 1000;
              return needBrick;
          }
      }
      return needBrick;
  }


  /** Forth function tinyFriend */

  function tinyFriend(name) {
      var smallName = name[0];
      for (var i = 0; i < name.length; i++) {
          var char = name[i];
      }
      if (char < smallName) {
          smallName = char;
      }
      return smallName;
  }