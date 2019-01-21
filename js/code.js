var s=["█","▓","▒","░","█","▓","▒","░","█","▓","▒","░","<",">","/"];
//baffle('#menutitle', { characters: s }).start().text(currentText => 'pavlos baritakis').reveal(5000, 1000);
baffle('#menutitle', { characters: s }).start().text(function (currentText) { return 'pavlos baritakis'; }).reveal(5000, 1000);
