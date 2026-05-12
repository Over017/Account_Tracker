const PLATFORM_ICONS = {
    steam: { icon: 'https://www.google.com/s2/favicons?domain=store.steampowered.com&sz=64', url: 'https://store.steampowered.com' },
    discord: { icon: 'https://www.google.com/s2/favicons?domain=discord.com&sz=64', url: 'https://discord.com' },
    twitter: { icon: 'https://www.google.com/s2/favicons?domain=twitter.com&sz=64', url: 'https://twitter.com' },
    x: { icon: 'https://www.google.com/s2/favicons?domain=x.com&sz=64', url: 'https://x.com' },
    instagram: { icon: 'https://www.google.com/s2/favicons?domain=instagram.com&sz=64', url: 'https://instagram.com' },
    facebook: { icon: 'https://www.google.com/s2/favicons?domain=facebook.com&sz=64', url: 'https://facebook.com' },
    google: { icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64', url: 'https://google.com' },
    github: { icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=64', url: 'https://github.com' },
    spotify: { icon: 'https://www.google.com/s2/favicons?domain=spotify.com&sz=64', url: 'https://spotify.com' },
    netflix: { icon: 'https://www.google.com/s2/favicons?domain=netflix.com&sz=64', url: 'https://netflix.com' },
    twitch: { icon: 'https://www.google.com/s2/favicons?domain=twitch.tv&sz=64', url: 'https://twitch.tv' },
    youtube: { icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64', url: 'https://youtube.com' },
    reddit: { icon: 'https://www.google.com/s2/favicons?domain=reddit.com&sz=64', url: 'https://reddit.com' },
    tiktok: { icon: 'https://www.google.com/s2/favicons?domain=tiktok.com&sz=64', url: 'https://tiktok.com' },
    linkedin: { icon: 'https://www.google.com/s2/favicons?domain=linkedin.com&sz=64', url: 'https://linkedin.com' },
    amazon: { icon: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=64', url: 'https://amazon.com' },
    paypal: { icon: 'https://www.google.com/s2/favicons?domain=paypal.com&sz=64', url: 'https://paypal.com' },
    uber: { icon: 'https://www.google.com/s2/favicons?domain=uber.com&sz=64', url: 'https://uber.com' },
    airbnb: { icon: 'https://www.google.com/s2/favicons?domain=airbnb.com&sz=64', url: 'https://airbnb.com' },
    corazon: { icon: '❤️', url: null },
    default: { icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64', url: null }
};

function getPlatformData(plataforma) {
    const key = plataforma.toLowerCase().trim();
    for (const [name, data] of Object.entries(PLATFORM_ICONS)) {
        if (key.includes(name)) return data;
    }
    return PLATFORM_ICONS.default;
}

async function buscarCuenta() {
    const email = document.getElementById("email").value.trim();
    const resultadosContainer = document.getElementById("resultados");
    const section = document.getElementById("resultados-section");
    const badgeCount = document.getElementById("resultados-count");

    if (!email) return;

    section.classList.remove("hidden");
    badgeCount.textContent = '';
    resultadosContainer.innerHTML = `
        <div class="estado-buscando">
            <div class="spinner"></div>
            <p>Buscando cuentas para <strong>${email}</strong>...</p>
        </div>
    `;

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
            const platformData = getPlatformData(cuenta.plataforma);
            const isEmoji = platformData.icon.includes('❤') || !platformData.icon.startsWith('http');
            const iconHTML = isEmoji
                ? `<span style="font-size:1.5rem">${platformData.icon}</span>`
                : `<img src="${platformData.icon}" alt="${cuenta.plataforma}" style="width:28px;height:28px;border-radius:4px;">`;

            const card = document.createElement("div");
            card.className = "result-card" + (platformData.url ? " clickable" : "");
            card.style.animationDelay = `${index * 0.07}s`;

            if (platformData.url) {
                card.style.cursor = "pointer";
                card.addEventListener("click", () => {
                    window.open(platformData.url, "_blank");
                });
            }

            card.innerHTML = `
                <div class="platform-icon">${iconHTML}</div>
                <div class="platform-info">
                    <div class="platform-name">${cuenta.plataforma}</div>
                    <div class="platform-email">${cuenta.email}</div>
                </div>
                <div class="platform-badge ${cuenta.estado === 'activo' || cuenta.estado === 'activa' ? '' : 'inactivo'}">
                    ${cuenta.estado === 'activo' || cuenta.estado === 'activa' ? 'Activo' : 'Inactivo'}
                </div>
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

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("email").addEventListener("keydown", (e) => {
        if (e.key === "Enter") buscarCuenta();
    });
});