var Iniciante;
(function (Iniciante) {
    var quadrado = /** @class */ (function () {
        function quadrado() {
        }
        quadrado.main = function (args) {
            var leitor = prompt();
            var N = leitor.nextInt();
            for (var i = 1; i < 10000; i++) {
                {
                    if (i % N === 2)
                        console.log(i);
                }
                ;
            }
        };
        return quadrado;
    }());
    Iniciante.quadrado = quadrado;
    quadrado["__class"] = "Iniciante.quadrado";
})(Iniciante || (Iniciante = {}));
Iniciante.quadrado.main(null);