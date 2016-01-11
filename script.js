$(function() {
  var Hat = function() {
  	var students= ["Abdel-Malik","Ahmed","Anthony",
      "Bruno","Flavien","Florent","Jeanne d'Arc","Jérôme",
      "Jousna","Juliette","Karine","Kevin","KevinC",
      "Marc","Nadège","Ryad","Simon","Adel","Mohammed",
      "Sarah","Yannic","Yannick"];
    //duplication de students
    var tab2 = students.slice();

    this.teams  = function(nb) {
      //duplication de students
      var studentsC = students.slice();
      var tab = [];
      while(studentsC.length > 0) {
        if(studentsC.length < nb)
          nb = studentsC.length;

        var subTab = [];
        for (var i = 0; i < nb; i++) {
          var pos = Math.floor(Math.random() * studentsC.length);            subTab.push(studentsC[pos]);
          //suppression de l'élément en position pos
          studentsC.splice(pos, 1);
        }
        tab.push(subTab);
      }
      return tab;
    }

    this.chance = function(nb) {
      var tab = [];
      for (var i = 0; i < nb; i++) {
        var pos = Math.floor(Math.random() * tab2.length);
        tab.push(tab2[pos]);
        tab2.splice(pos, 1);
      }
      return tab;
    }
  };

  var h = new Hat();
  $('#guess').on("keypress", function(e) {
    var nb = $('#guess').val();
    if(e.which == 13) { // KeyCode de la touche entrée
      var res = h.chance(nb);
      $(".resultat").val(res);
      this.value = '';
    }
  });
  $('.guess2').on("keypress", function(e) {
    var nb = $('.guess2').val();
    if(e.which == 13) { // KeyCode de la touche entrée
      var res = h.teams(nb);
      $(".resultat").val(res);
      alert(text);
      this.value = '';
    }
  });
  /*var tab = h.teams(3);
  h.chance(2);*/
})
