

// Data - Fixture/Results

function dataFixture() {

    // Variables
    var self = this;
    var matchday = [];
    self.matchesURI = "https://api.stattleship.com/basketball/nba/games";
    // self.matchdayURI = "https://api.stattleship.com/basketball/nba/games";

    self.ajax = function(uri, method, data) {
       var request = {
          url: uri,
          type: method,
          accepts: "application/json",
          cache: false,
          dataType: "json",
          data: JSON.stringify(data),
          headers: {
              "Authorization": "Token token=f5f4df6767513d417c5f8a80f6d84c64",
              "Content-Type": "application/json",
              "Accept": "application/vnd.stattleship.com; version=1"
            },
          error: function (jqXHR) {
                console.log("ajax error " + jqXHR.status);
          }
 
       };
 
       return $.ajax(request);
    }

    // Matchday
    // self.ajax(self.matchdayURI, 'GET').done(function(data){
    //     var competitions = data.competitions;

    //     for (i = 0; i < competitions.length; i++) {
    //         const comp = competitions[i];
            
    //         if (comp.id == 2002) {
    //             matchday.push(comp.currentSeason.currentMatchday);
    //         }
    //     }
    // });

    self.ajax(self.matchesURI, 'GET').done(function(data) {

        console.log(data);

        var matches = data.matches;
        var today = new Date;
        // var testDate = new Date('2018-04-24');
        var currentRound = [];
        var currentRoundNo = matchday[0];

        // $('.js-fixture-round').text(currentRoundNo + ". Spieltag");

        // for (i = 0; i < matches.length; i++) {
        //     const element = matches[i];
            
        //     if (element.matchday == currentRoundNo) {
        //         currentRound.push(element);
        //     }
        // }

        // for (i = 0; i < currentRound.length; i++) {
        //     const element = currentRound[i];

        //     fixtureItem(element);
        // }
    })
}
