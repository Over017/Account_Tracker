// Mapa de íconos por plataforma (emoji como fallback universal)
const PLATFORM_ICONS = {
    steam: '🎮',
    discord: '💬',
    twitter: '🐦',
    x: '🐦',
    instagram: '📸',
    facebook: '📘',
    google: '🔍',
    github: '🐙',
    spotify: '🎵',
    netflix: '🎬',
    twitch: '🟣',
    youtube: '▶️',
    reddit: '🤖',
    tiktok: '🎵',
    linkedin: '💼',
    amazon: '📦',
    paypal: '💳',
    uber: '🚗',
    airbnb: '🏠',
    default: '🌐',
    corazon: '❤️'
    
};

function getPlatformIcon(plataforma) {
    const key = plataforma.toLowerCase().trim();
    for (const [name, icon] of Object.entries(PLATFORM_ICONS)) {
        if (key.includes(name)) return icon;
    }
    return PLATFORM_ICONS.default;
}

async function buscarCuenta() {
    const email = document.getElementById("email").value.trim();
    const resultadosContainer = document.getElementById("resultados");
    const section = document.getElementById("resultados-section");
    const badgeCount = document.getElementById("resultados-count");

    if (!email) return;

    // Mostrar sección y spinner
    section.classList.remove("hidden");
    badgeCount.textContent = '';
    resultadosContainer.innerHTML = `
        <div class="estado-buscando">
            <div class="spinner"></div>
            <p>Buscando cuentas para <strong>${email}</strong>...</p>
        </div>
    `;

    // Scroll suave hacia resultados
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    try {
        const response = await fetch(
            `https://account-tracker-56f3.onrender.com/buscar?email=${encodeURIComponent(email)}`
        );

        const data = await response.json();
        resultadosContainer.innerHTML = "";

        if (data.length === 0) {
            badgeCount.textContent = '0';
            resultadosContainer.innerHTML = `
                <div class="estado-vacio">
                    <p>No se encontraron cuentas asociadas a <strong>${email}</strong></p>
                </div>
            `;
            return;
        }

        badgeCount.textContent = data.length;

        data.forEach((cuenta, index) => {
            const icon = getPlatformIcon(cuenta.plataforma);
            const card = document.createElement("div");
            card.className = "result-card";
            card.style.animationDelay = `${index * 0.07}s`;
            card.innerHTML = `
                <div class="platform-icon">${icon}</div>
                <div class="platform-info">
                    <div class="platform-name">${cuenta.plataforma}</div>
                    <div class="platform-email">${cuenta.email}</div>
                </div>
                <div class="platform-badge">Activo</div>
            `;
            resultadosContainer.appendChild(card);
        });

    } catch (error) {
        badgeCount.textContent = '!';
        resultadosContainer.innerHTML = `
            <div class="estado-error">
                <p>❌ Error conectando con el backend. Intenta de nuevo.</p>
            </div>
        `;
        console.error(error);
    }
}

// También buscar al presionar Enter
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("email").addEventListener("keydown", (e) => {
        if (e.key === "Enter") buscarCuenta();
    });
});