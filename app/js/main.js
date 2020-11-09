// ==========================================================================
// Initialisation
// ==========================================================================

// Core Functions 
data();

function dateTime(d) {

    var date = new Date(d);

    function day(d) {
        var day = d.getDay();

        if (day == 0) {
            return 'Sonntag';
        } else if (day == 1) {
            return 'Montag';
        } else if (day == 2) {
            return 'Dienstag';
        } else if (day == 3) {
            return 'Mittwoch';
        } else if (day == 4) {
            return 'Donnerstag';
        } else if (day == 5) {
            return 'Freitag';
        } else if (day == 6) {
            return 'Samstag';
        }
    }

    function month(d) {
        var m = d.getMonth();

        if (m == 0) {
            return 'Jan';
        } else if (m == 1) {
            return 'Feb';
        } else if (m == 2) {
            return 'Mär';
        } else if (m == 3) {
            return 'Apr';
        } else if (m == 4) {
            return 'Mai';
        } else if (m == 5) {
            return 'Jun';
        } else if (m == 6) {
            return 'Jul';
        } else if (m == 7) {
            return 'Aug';
        } else if (m == 8) {
            return 'Sep';
        } else if (m == 9) {
            return 'Okt';
        } else if (m == 10) {
            return 'Nov';
        } else if (m == 11) {
            return 'Dez';
        }
    }

    var dd = date.getDate();

    function time(d) {
        var h = d.getHours();
        var m = ('0'+d.getMinutes()).slice(-2);

        return h + ':' + m;
    }

    var dateObj = {
        day: day(date),
        month: month(date),
        date: dd,
        time: time(date)
    }

    return dateObj;
}

function fixtureItem(array) {

    var date = dateTime(array.utcDate);
    var match_status = array.status;

    if (match_status == "IN_PLAY") {

        $('.js-fixture').before(
            '<div class="c-fixture__game c-fixture__game--in-progress">' +
                '<div class= "c-fixture__date c-date" >' +
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">LIVE</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Home") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.homeTeam.name)[0].name + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.homeTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Away") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.awayTeam.name)[0].name + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.awayTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + '</div>' +
            '</div>'
        );

    } else if (match_status == "PAUSED") {

        $('.js-fixture').before(
            '<div class="c-fixture__game c-fixture__game--in-progress">' +
                '<div class= "c-fixture__date c-date" >' +
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">HT</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Home") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.homeTeam.name)[0].name + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.homeTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Away") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.awayTeam.name)[0].name + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.awayTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + '</div>' +
            '</div>'
        );

    }else if (match_status == "FINISHED") {

        $('.js-fixture').before(
            '<div class="c-fixture__game c-fixture__game--completed">' +
                '<div class= "c-fixture__date c-date" >' +
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">FT</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Home") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.homeTeam.name)[0].name + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.homeTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Away") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.awayTeam.name)[0].name + '</span>' +
                    '<span class="c-fixture__score js-score-text">' + array.score.fullTime.awayTeam + '</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + '</div>' +
            '</div>'
        );

    } else {

        $('.js-fixture').before(
            '<div class="c-fixture__game">' +
                '<div class= "c-fixture__date c-date" >' + 
                    '<span class="c-date__day">' + date.day + '</span>' +
                    '<span class="c-date__month">' + date.month + '</span>' +
                    '<span class="c-date__date">' + date.date + '</span>' +
                    '<span class="c-date__time">' + date.time + '</span>' +
                '</div >' +
                '<div class="c-fixture__team js-fixture-team-1">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Home") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.homeTeam.name)[0].name + '</span>' +
                    '<span class="c-fixture__score js-score-text">-</span>' +
                '</div>' +
                '<div class="c-fixture__vs">vs</div>' +
                '<div class="c-fixture__team js-fixture-team-2">' +
                    '<img class="js-team-img" src="' + kitImg(array.homeTeam.name, array.awayTeam.name, "Away") + '" />' +
                    '<span class="js-team-text">' + teamAbrev(array.awayTeam.name)[0].name + '</span>' +
                    '<span class="c-fixture__score js-score-text">-</span>' +
                '</div>' +
                '<div class="c-fixture__venue js-fixture-venue">' + '</div>' +
            '</div>'
        );
    }
}
function kitImg(homename,awayname,location){
    
    if (location == "Home") {
        if (homename == '1. FC Nürnberg') {
            return 'img/teams/Nuernberg/Home.png';

        } else if (homename == '1. FSV Mainz 05') {
            return 'img/teams/Mainz/Home.png';

        } else if (homename == 'Bayer 04 Leverkusen') {
            return 'img/teams/Leverkusen/Home.png';

        } else if (homename == 'BV Borussia 09 Dortmund') {
            return 'img/teams/Dortmund/Home.png';

        } else if (homename == 'Borussia Mönchengladbach') {
            return 'img/teams/Gladbach/Home.png';

        } else if (homename == 'Eintracht Frankfurt') {
            return 'img/teams/Frankfurt/Home.png';

        } else if (homename == 'FC Augsburg') {
            return 'img/teams/Augsburg/Home.png';

        } else if (homename == 'FC Bayern München') {
            return 'img/teams/Bayern/Home.png';

        } else if (homename == 'FC Schalke 04') {
            return 'img/teams/Schalke/Home.png';

        } else if (homename == 'TSV Fortuna 95 Düsseldorf') {
            return 'img/teams/Duesseldorf/Home.png';

        } else if (homename == 'Hannover 96') {
            return 'img/teams/Hannover/Home.png';

        } else if (homename == 'Hertha BSC') {
            return 'img/teams/Hertha/Home.png';

        } else if (homename == 'RB Leipzig') {
            return 'img/teams/Leipzig/Home.png';

        } else if (homename == 'SC Freiburg') {
            return 'img/teams/Freiburg/Home.png';

        } else if (homename == 'TSG 1899 Hoffenheim') {
            return 'img/teams/Hoffenheim/Home.png';

        } else if (homename == 'VfB Stuttgart') {
            return 'img/teams/Stuttgart/Home.png';

        } else if (homename == 'VfL Wolfsburg') {
            return 'img/teams/Wolfsburg/Home.png';

        } else if (homename == 'SV Werder Bremen') {
            return 'img/teams/Bremen/Home.png';
        }

    // Away Team Kit Switching

    } else if (location == "Away") {

        // 1. FC Nürnberg - White
        if (awayname == "1. FC Nürnberg") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Nuernberg/Home.png';
            } else {
                return 'img/teams/Nuernberg/Away.png';
            }

        // 1. FSV Mainz 05 - Blue
        } else if (awayname == "1. FSV Mainz 05") {
            if (homename == "FC Schalke 04" || homename == "Hertha BSC" || homename == "TSG 1899 Hoffenheim") {
                return 'img/teams/Mainz/Third.png';
            } else {
                return 'img/teams/Mainz/Away.png';
            }

        // Bayer Leverkusen - White
        } else if (awayname == "Bayer 04 Leverkusen") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Leverkusen/Third.png';
            } else {
                return 'img/teams/Leverkusen/Away.png';
            }

        // Borussia Dortmund - Red
        } else if (awayname == "BV Borussia 09 Dortmund") {
            if (homename == "SC Freiburg" || homename == "FC Bayern München" || homename == "1. FC Nürnberg" || homename == "1. FSV Mainz 05" || homename == "Hannover 96" || homename == "TSV Fortuna 95 Düsseldorf"){
                return 'img/teams/Dortmund/Home.png';
            } else {
                return 'img/teams/Dortmund/Away.png';
            }

        // Borussia Mönchengladbach - Black
        } else if (awayname == 'Borussia Mönchengladbach') {
            if (homename == "Eintracht Frankfurt" || homename == "Bayer Leverkusen") {
                return 'img/teams/Gladbach/Home.png';
            } else {
                return 'img/teams/Gladbach/Away.png';
            }

        // Eintracht Frankfurt - White
        } else if (awayname == "Eintracht Frankfurt") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Frankfurt/Third.png';
            } else {
                return 'img/teams/Frankfurt/Away.png';
            }

        // FC Augsburg - Green
        } else if (awayname == "FC Augsburg") {
            if (homename == "SV Werder Bremen" || homename == "VfL Wolfsburg") {
                return 'img/teams/Augsburg/Third.png';
            } else {
                return 'img/teams/Augsburg/Away.png';
            }

        // FC Bayern - Light Green
        } else if (awayname == "FC Bayern München") {
            return 'img/teams/Bayern/Away.png';

        // FC Schalke 04 - White
        } else if (awayname == "FC Schalke 04") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Schalke/Third.png';
            } else {
                return 'img/teams/Schalke/Away.png';
            }

        // Fortuna Düsseldorf - White
        } else if (awayname == "TSV Fortuna 95 Düsseldorf") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Duesseldorf/Third.png';
            } else {
                return 'img/teams/Duesseldorf/Away.png';
            }

        // Hannover 96 - Black
        } else if (awayname == "Hannover 96") {
            if (homename == "Eintracht Frankfurt" || homename == "Bayer Leverkusen") {
                return 'img/teams/Hannover/Third.png';
            } else {
                return 'img/teams/Hannover/Away.png';
            }

        // Hertha BSC - Black
        } else if (awayname == "Hertha BSC") {
            if (homename == "Eintracht Frankfurt" || homename == "Bayer 04 Leverkusen") {
                return 'img/teams/Hertha/Home.png';
            } else {
                return 'img/teams/Hertha/Away.png';
            }

        // RB Leipzig - Dark Blue (Black and Blue)
        } else if (awayname == "RB Leipzig") {
            if (homename == "Eintracht Frankfurt" || homename == "Bayer 04 Leverkusen" || homename == "FC Schalke 04" || homename == "Hertha BSC" || homename == "TSG 1899 Hoffenheim") {
                return 'img/teams/Leipzig/Home.png';
            } else {
                return 'img/teams/Leipzig/Away.png';
            }

        // SC Freiburg - Black
        } else if (awayname == "SC Freiburg") {
            if (homename == "Eintracht Frankfurt" || homename == "Bayer 04 Leverkusen") {
                return 'img/teams/Freiburg/Third.png';
            } else {
                return 'img/teams/Freiburg/Away.png';
            }

        // TSG 1899 Hoffenheim - White
        } else if (awayname == "TSG 1899 Hoffenheim") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Hoffenheim/Third.png';
            } else {
                return 'img/teams/Hoffenheim/Away.png';
            }

        // VfB Stuttgart - Red
        } else if (awayname == "VfB Stuttgart") {
            if (homename == "SC Freiburg" || homename == "FC Bayern München" || homename == "1. FC Nürnberg" || homename == "1. FSV Mainz 05" || homename == "Hannover 96" || homename == "TSV Fortuna 95 Düsseldorf"){
                return 'img/teams/Stuttgart/Third.png';
            } else {
                return 'img/teams/Stuttgart/Away.png';
            }

        // VfL Wolfsburg - White
        } else if (awayname == "VfL Wolfsburg") {
            if (homename == "VfB Stuttgart" || homename == "Borussia Mönchengladbach" || homename == "FC Augsburg" || homename == "RB Leipzig") {
                return 'img/teams/Wolfsburg/Third.png';
            } else {
                return 'img/teams/Wolfsburg/Away.png';
            }

        // Werder Bremen - Black
        } else if (awayname == "SV Werder Bremen") {
            if (homename == "Eintracht Frankfurt" || homename == "Bayer Leverkusen") {
                return 'img/teams/Bremen/Third.png';
            } else {
                return 'img/teams/Bremen/Away.png';
            }
        }
    }
}

// Constructs the ladder Items
function ladderItem(array, number) {
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('span').text(teamAbrev(array.team.name)[0].name);  
    $('.c-ladder__item-' + number + ' div.c-ladder__team').children('img').attr('src', teamImg(array.team.name));  
    $('.c-ladder__item-' + number + ' div.c-ladder__played').text(array.playedGames);
    $('.c-ladder__item-' + number + ' div.c-ladder__wins').text(array.won);
    $('.c-ladder__item-' + number + ' div.c-ladder__losses').text(array.lost);
    $('.c-ladder__item-' + number + ' div.c-ladder__draws').text(array.draw);
    $('.c-ladder__item-' + number + ' div.c-ladder__points-for').text(array.goalsFor);
    $('.c-ladder__item-' + number + ' div.c-ladder__points-against').text(array.goalsAgainst);
    $('.c-ladder__item-' + number + ' div.c-ladder__percentage').text(array.goalDifference);
    $('.c-ladder__item-' + number + ' div.c-ladder__points').text(array.points);
}
function roundCalc(d) {
   var currentDate = new Date(d);
   var month = currentDate.getMonth();
   var date = currentDate.getDate();
   var year = currentDate.getFullYear();

   // Gameday 1
   if (year == "2018" && month <= 7 && date <= 27) {
       return 1;

   // Gameday 2    
   } else if (year == "2018" && month == 7 && date <= 31 || year == "2018" && month == 8 && date == 2){
       return 2;

   // Gameday 3    
   } else if (year == "2018" && month == 8 && date <= 16){
      return 3;

   // Gameday 4    
   } else if (year == "2018" && month == 8 && date <= 23){
      return 4;

   // Gameday 5    
   } else if (year == "2018" && month == 8 && date <= 26){
      return 5;

   // Gameday 6    
   } else if (year == "2018" && month == 8 && date <= 30){
      return 6;

   // Gameday 7    
   } else if (year == "2018" && month == 9 && date <= 7){
      return 7;

   // Gameday 8    
   } else if (year == "2018" && month == 9 && date <= 21){
      return 8;

   // Gameday 9    
   } else if (year == "2018" && month == 9 && date <= 28){
      return 9;

   // Gameday 10    
   } else if (year == "2018" && month == 9 && date <= 31 || year == "2018" && month == 10 && date <= 4){
      return 10;

   // Gameday 11    
   } else if (year == "2018" && month == 10 && date <= 11){
      return 11;

   // Gameday 12    
   } else if (year == "2018" && month == 10 && date <= 25){
      return 12;

   // Gameday 13    
   } else if (year == "2018" && month == 10 && date <= 31 || year == "2018" && month == 11 && date <= 3){
      return 13;

   // Gameday 14    
   } else if (year == "2018" && month == 11 && date <= 9){
      return 14;

   // Gameday 15    
   } else if (year == "2018" && month == 11 && date <= 16){
      return 15;

   // Gameday 16    
   } else if (year == "2018" && month == 11 && date <= 19){
      return 16;

   // Gameday 17    
   } else if (year == "2018" && month == 11 && date <= 23){
      return 17;

   // Gameday 18    
   } else if (year == "2019" && month == 0 && date <= 20){
      return 18;

   // Gameday 19
   } else if (year == "2019" && month == 0 && date <= 27){
      return 19;

   // Gameday 20
   } else if (year == "2019" && month == 0 && date <= 31 || year == "2019" && month == 1 && date <= 3){
      return 20;

   // Gameday 21
   } else if (year == "2019" && month == 1 && date <= 10){
      return 21;

   // Gameday 22
   } else if (year == "2019" && month == 1 && date <= 18){
      return 22;

   // Gameday 23
   } else if (year == "2019" && month == 1 && date <= 25){
      return 23;

   // Gameday 24
   } else if (year == "2019" && month == 1 && date <= 25){
      return 24;

   // Gameday 25
   } else if (year == "2019" && month == 1 && date <= 31 || year == "2019" && month == 2 <= 3){
      return 25;

   // Gameday 26
   } else if (year == "2019" && month == 2 && date <= 11){
      return 26;

   }
}
function teamAbrev(array){
    var team = array;

    if (team == 'Eintracht Frankfurt') {
        return [{
            code: 'SGE',
            name: 'Frankfurt'
        }];
    } else if (team == 'BV Borussia 09 Dortmund') {
        return [{
            code: 'BVB',
            name: 'Dortmund'
        }];
    } else if (team == 'VfB Stuttgart') {
        return [{
            code: 'STU',
            name: 'Stuttgart'
        }];
    } else if (team == 'FC Schalke 04') {
        return [{
            code: 'S04',
            name: 'Schalke'
        }];
    } else if (team == '1. FC Nürnberg') {
        return [{
            code: 'FCN',
            name: 'Nürnberg'
        }];
    } else if (team == 'SV Werder Bremen') {
        return [{
            code: 'SVW',
            name: 'Bremen'
        }];
    } else if (team == 'Hertha BSC') {
        return [{
            code: 'BSC',
            name: 'Berlin'
        }];
    } else if (team == 'Hannover 96') {
        return [{
            code: 'HAN',
            name: 'Hannover'
        }];
    } else if (team == "Borussia Mönchengladbach") {
        return [{
            code: 'BMG',
            name: 'Gladbach'
        }];
    } else if (team == "FC Bayern München") {
        return [{
            code: 'MUN',
            name: 'Bayern'
        }];
    } else if (team == "TSV Fortuna 95 Düsseldorf") {
        return [{
            code: 'DUS',
            name: 'Düsseldorf'
        }];
    } else if (team == "Bayer 04 Leverkusen") {
        return [{
            code: 'B04',
            name: 'Leverkusen'
        }];
    } else if (team == "SC Freiburg") {
        return [{
            code: 'SCF',
            name: 'Freiburg'
        }];
    } else if (team == "VfL Wolfsburg") {
        return [{
            code: 'WOB',
            name: 'Wolfsburg'
        }];
    } else if (team == "1. FSV Mainz 05") {
        return [{
            code: 'MAI',
            name: 'Mainz'
        }];
    } else if (team == "TSG 1899 Hoffenheim") {
        return [{
            code: 'TSG',
            name: 'Hoffenheim'
        }];
    } else if (team == "FC Augsburg") {
        return [{
            code: 'AUG',
            name: 'Augsburg'
        }];
    } else if (team == "RB Leipzig") {
        return [{
            code: 'RBL',
            name: 'Leipzig'
        }];
    } 
}

// Applies the correct team image to the referenced team code.
function teamImg(team) {
    if (team == '1. FC Nürnberg') {
        return 'img/teams/Nuernberg/Logo.png';
    } else if (team == '1. FSV Mainz 05') {
        return 'img/teams/Mainz/Logo.png';
    } else if (team == 'Bayer 04 Leverkusen') {
        return 'img/teams/Leverkusen/Logo.png';
    } else if (team == 'BV Borussia 09 Dortmund') {
        return 'img/teams/Dortmund/Logo.png';
    } else if (team == 'Borussia Mönchengladbach') {
        return 'img/teams/Gladbach/Logo.png';
    } else if (team == 'Eintracht Frankfurt') {
        return 'img/teams/Frankfurt/Logo.png';
    } else if (team == 'FC Augsburg') {
        return 'img/teams/Augsburg/Logo.png';
    } else if (team == 'FC Bayern München') {
        return 'img/teams/Bayern/Logo.png';
    } else if (team == 'FC Schalke 04') {
        return 'img/teams/Schalke/Logo.png';
    } else if (team == 'TSV Fortuna 95 Düsseldorf') {
        return 'img/teams/Duesseldorf/Logo.png';
    } else if (team == 'Hannover 96') {
        return 'img/teams/Hannover/Logo.png';
    } else if (team == 'Hertha BSC') {
        return 'img/teams/Hertha/Logo.png';
    } else if (team == 'RB Leipzig') {
        return 'img/teams/Leipzig/Logo.png';
    } else if (team == 'SC Freiburg') {
        return 'img/teams/Freiburg/Logo.png';
    } else if (team == 'TSG 1899 Hoffenheim') {
        return 'img/teams/Hoffenheim/Logo.png';
    } else if (team == 'VfB Stuttgart') {
        return 'img/teams/Stuttgart/Logo.png';
    } else if (team == 'VfL Wolfsburg') {
        return 'img/teams/Wolfsburg/Logo.png';
    } else if (team == 'SV Werder Bremen') {
        return 'img/teams/Bremen/Logo.png';
    }
}


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


//
// Data
// ====
function dataLadder() { 

    var self = this;

    self.ajax = function(uri, method, data) {
       var request = {
          url: uri,
          type: method,
          accepts: "application/json",
          cache: false,
          dataType: "json",
          data: JSON.stringify(data),
          headers: {"X-Auth-Token": "5c8b70988e784fca8186b93d38b1bae7"},
          error: function (jqXHR) {
                console.log("ajax error " + jqXHR.status);
          }
 
       };
 
       return $.ajax(request);
    }
    
    self.tasksURI = "https://api.football-data.org/v2/competitions/2002/standings";

    self.ajax(self.tasksURI, 'GET').done(function(data) {
        // console.log(data);

        var ladder = data.standings[0].table;
        console.log(ladder);

        // Construct the Ladder
        for (i = 0; i < ladder.length; i++) {
            const element = ladder[i];
            ladderItem(element, i+1);
        }
    })

}

function data() {
   // dataFixture();
   // dataLadder();

}
//
// Layout - Vertically Centered
// ==========================================================================

// ***
// This function vertically centers an object element within 
// its parent element by calculating the height of the parent,
// the height of the child and adding padding to the top and 
// bottom of the child element.
//
// Parent Element
// --------------
// The parent element must be a jQuery object.
// eg: $('.o-vert-center')
//
// Child Element
// -------------
// The child element must be a direct child of the parent and
// be passed through the function with only its classname.
// eg: '.o-vert-center__object'
// *

function vertCenter(element, child) {

    var parentHeight = element.parent().height();
    // This will give the element the same height
    // and line-height as it's parent container.
    element.css({
        'height': parentHeight + 'px',
        'line-height': parentHeight + 'px'
    });
    
    element.children(child).css({
        'height': element.children(child).height(),
        'padding-top': ( parentHeight - element.children(child).height() )/2 + 'px',
        'padding-bottom': ( parentHeight - element.children(child).height() )/2 + 'px'
    });
}

function clearStyles(element, child) {
    element.attr('style', '');
    child.attr('style', '');
}

// Function applied to the following parent/child classes:
// vertCenter($('.o-vert-center'), '.o-vert-center__object');

// On window resize clear previous styles then re-run the function.
$(window).on('resize', function() {
    // clearStyles($('.o-vert-center'), $('.o-vert-center__object'));
    // vertCenter($('.o-vert-center'), '.o-vert-center__object');
});


//
// UI - Buttons
// ==========================================================================

// Variables
// var gitButton = document.getElementById('js-button-github');

// gitButton.addEventListener('click', function(){
//     window.open('https://github.com/Toshibot/webapp-boilerplate', '_blank');
// });
