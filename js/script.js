function hitungLuas() {
    // Retrieve input values for Luas
    let alas = parseFloat(document.getElementById("alas").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);

    // Validate input for Luas
    if (isNaN(alas) || isNaN(tinggi)) {
        alert("Masukkan nilai numerik untuk alas dan tinggi!");
        return;
    }

    // Calculate Luas
    let luas = 0.5 * alas * tinggi;

    // Display formula and result for Luas
    let formulaLuas = `L = 1/2 x ${alas} x ${tinggi}`;
    let hasilLuas = `L = ${luas.toFixed(2)}`;

    document.getElementById("luas").innerHTML = `${formulaLuas}<br>${hasilLuas}`;
}

function hitungKeliling() {
    let sisiA = parseFloat(document.getElementById("sisi-a").value);
    let sisiB = parseFloat(document.getElementById("sisi-b").value);
    let sisiC = parseFloat(document.getElementById("sisi-c").value);

    // Validate input for Keliling
    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
        alert("Masukkan nilai numerik untuk semua sisi!");
        return;
    }

    // Calculate Keliling
    let keliling = sisiA + sisiB + sisiC;

    // Display formula and result for Keliling
    let formulaKeliling = `L = ${sisiA} + ${sisiB} + ${sisiC}`;
    let hasilKeliling = `L = ${keliling.toFixed(2)}`;

    document.getElementById("keliling").innerHTML = `${formulaKeliling}<br>${hasilKeliling}`;
}
