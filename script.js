let display = document.getElementById('display');

function press(num) {
    display.value += num;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function drawGraph() {
    const fnInput = document.getElementById('functionInput').value;
    const trace = {
        x: [],
        y: [],
        mode: 'lines',
        type: 'scatter'
    };
    try {
        for (let x = -20; x <= 20; x += 0.1) {
            const y = eval(fnInput.replace(/x/g, `(${x})`));
            if (!isNaN(y)) {
                trace.x.push(x);
                trace.y.push(y);
            }
        }
        const data = [trace];
        const layout = {
            title: 'Function Plot',
            xaxis: { title: 'x' },
            yaxis: { title: 'f(x)' }
        };
        Plotly.newPlot('plot', data, layout);
    } catch (error) {
        alert("There was an error processing your function. Please check the syntax.");
    }
}
