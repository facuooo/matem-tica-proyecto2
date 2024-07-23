function calcular() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);

    if (isNaN(a) || isNaN(b)) {
        alert('Por favor ingrese valores válidos para A y B.');
        return;
    }

    let raiz = -b / a;
    let ordenada = b;
    let pendiente = a;
    let tipoPendiente = pendiente > 0 ? 'creciente' : pendiente < 0 ? 'decreciente' : 'constante';

    document.getElementById('raiz').innerText = `Raíz: ${raiz}`;
    document.getElementById('ordenada').innerText = `Ordenada al origen: ${ordenada}`;
    document.getElementById('pendiente').innerText = `Pendiente: ${pendiente} (${tipoPendiente})`;
}
