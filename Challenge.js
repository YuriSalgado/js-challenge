var Challenge = function() {
    this.input = "";
    this.output = "";
};
 
Challenge.prototype = {
    longestWord: function(input) {
        // code
        var pattern = /(\w+)/g;
        var extract = input.match(pattern);
        result = extract.sort(function (e, f) { 
            return e.length < f.length; 
        });

        return result.shift();
    },
 
    firstReverse: function(input) {
        // code option 1 (simple, but fail)
        return input.split('').reverse().join('');
        // code option 2 (better, but need? - https://github.com/mathiasbynens/esrever tks)
        // return input.reverse(str)
    }
};
 
// log helper
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
    // the call challenge for the creative challenge
    var challenge = new Challenge();
 
    challenge.output = challenge.longestWord("fun&!! time");
    log.add("longestWord result: " + challenge.output);
    
    challenge.output = challenge.firstReverse("Stay Strong!");
    log.add("firstReverse result: " + challenge.output);
 
    log.show();
}