async function buscarCuenta() {

    const email =
        document.getElementById("email").value;

    const resultados =
        document.getElementById("resultados");

    resultados.innerHTML = "<p>Buscando...</p>";

    try {

        const response = await fetch(
            `https://account-tracker-56f3.onrender.com/buscar?email=${email}`
        );

        const data = await response.json();

        resultados.innerHTML = "";

        if(data.length === 0) {

            resultados.innerHTML =
                "<p>No se encontraron cuentas</p>";

            return;
        }

        data.forEach(cuenta => {

            resultados.innerHTML += `
                <div class="result-card">
                    <h3>${cuenta.plataforma}</h3>
                    <p>${cuenta.email}</p>
                </div>
            `;
        });

    } catch(error) {

        resultados.innerHTML =
            "<p>Error conectando con backend</p>";

        console.error(error);
    }
}