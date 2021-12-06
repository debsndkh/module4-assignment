(function () {
    var names = ["Debo", "Hen", "Sintia", "Vina", "Glen", "Mercy", "Justin", "Allen", "Josh", "Tere"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        ByeSpeaker(names[i]);
      }
      else {
        HelloSpeaker(names[i]);
      }
    }
    })();