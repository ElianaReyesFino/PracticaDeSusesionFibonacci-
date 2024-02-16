
    // verificar si es numerico
    function isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }
    // Ver que funcione hasta numero dado fibonacci
    function getFibonacciSeries(number) {
        let fibonacciSeries = [0, 1];

        for (let i = 2; i < number; i++) {
            fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
        }

        return fibonacciSeries;
    }
    // PArte de la series
    function generateFibonacciSeries() {
        // Obtener el valor del campo de entrada
        const numberInput = document.getElementById("numberInput").value;
    // Verificar si el valor es numérico
        if (!isNumeric(numberInput)) {
            alert("Por favor, ingrese un número válido.");
            return;
        }

        //debe ser entero...
        const number = parseInt(numberInput, 10);

        const fibonacciSeries = getFibonacciSeries(number);

        // Resultado
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = `Serie de Fibonacci para ${number} números: ${fibonacciSeries.join(", ")}`;
    }