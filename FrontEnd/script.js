const PLATFORM_ICONS = {
    // Redes Sociales
    twitter: { icon: 'https://www.google.com/s2/favicons?domain=twitter.com&sz=64', url: 'https://twitter.com' },
    x: { icon: 'https://www.google.com/s2/favicons?domain=x.com&sz=64', url: 'https://x.com' },
    instagram: { icon: 'https://www.google.com/s2/favicons?domain=instagram.com&sz=64', url: 'https://instagram.com' },
    facebook: { icon: 'https://www.google.com/s2/favicons?domain=facebook.com&sz=64', url: 'https://facebook.com' },
    reddit: { icon: 'https://www.google.com/s2/favicons?domain=reddit.com&sz=64', url: 'https://reddit.com' },
    tiktok: { icon: 'https://www.google.com/s2/favicons?domain=tiktok.com&sz=64', url: 'https://tiktok.com' },
    linkedin: { icon: 'https://www.google.com/s2/favicons?domain=linkedin.com&sz=64', url: 'https://linkedin.com' },
    pinterest: { icon: 'https://www.google.com/s2/favicons?domain=pinterest.com&sz=64', url: 'https://pinterest.com' },
    snapchat: { icon: 'https://www.google.com/s2/favicons?domain=snapchat.com&sz=64', url: 'https://snapchat.com' },
    // Streaming
    netflix: { icon: 'https://www.google.com/s2/favicons?domain=netflix.com&sz=64', url: 'https://netflix.com' },
    youtube: { icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64', url: 'https://youtube.com' },
    spotify: { icon: 'https://www.google.com/s2/favicons?domain=spotify.com&sz=64', url: 'https://spotify.com' },
    twitch: { icon: 'https://www.google.com/s2/favicons?domain=twitch.tv&sz=64', url: 'https://twitch.tv' },
    hbo: { icon: 'https://www.google.com/s2/favicons?domain=hbo.com&sz=64', url: 'https://hbo.com' },
    disney: { icon: 'https://www.google.com/s2/favicons?domain=disneyplus.com&sz=64', url: 'https://disneyplus.com' },
    apple_tv: { icon: 'https://www.google.com/s2/favicons?domain=tv.apple.com&sz=64', url: 'https://tv.apple.com' },
    paramount: { icon: 'https://www.google.com/s2/favicons?domain=paramountplus.com&sz=64', url: 'https://paramountplus.com' },
    hulu: { icon: 'https://www.google.com/s2/favicons?domain=hulu.com&sz=64', url: 'https://hulu.com' },
    crunchyroll: { icon: 'https://www.google.com/s2/favicons?domain=crunchyroll.com&sz=64', url: 'https://crunchyroll.com' },
    plex: { icon: 'https://www.google.com/s2/favicons?domain=plex.tv&sz=64', url: 'https://plex.tv' },
    mubi: { icon: 'https://www.google.com/s2/favicons?domain=mubi.com&sz=64', url: 'https://mubi.com' },
    vimeo: { icon: 'https://www.google.com/s2/favicons?domain=vimeo.com&sz=64', url: 'https://vimeo.com' },
    dailymotion: { icon: 'https://www.google.com/s2/favicons?domain=dailymotion.com&sz=64', url: 'https://dailymotion.com' },
    soundcloud: { icon: 'https://www.google.com/s2/favicons?domain=soundcloud.com&sz=64', url: 'https://soundcloud.com' },
    // Mensajería
    discord: { icon: 'https://www.google.com/s2/favicons?domain=discord.com&sz=64', url: 'https://discord.com' },
    whatsapp: { icon: 'https://www.google.com/s2/favicons?domain=whatsapp.com&sz=64', url: 'https://whatsapp.com' },
    telegram: { icon: 'https://www.google.com/s2/favicons?domain=telegram.org&sz=64', url: 'https://telegram.org' },
    slack: { icon: 'https://www.google.com/s2/favicons?domain=slack.com&sz=64', url: 'https://slack.com' },
    // Gaming
    steam: { icon: 'https://www.google.com/s2/favicons?domain=store.steampowered.com&sz=64', url: 'https://store.steampowered.com' },
    epic_games: { icon: 'https://www.google.com/s2/favicons?domain=epicgames.com&sz=64', url: 'https://epicgames.com' },
    roblox: { icon: 'https://www.google.com/s2/favicons?domain=roblox.com&sz=64', url: 'https://roblox.com' },
    minecraft: { icon: 'https://www.google.com/s2/favicons?domain=minecraft.net&sz=64', url: 'https://minecraft.net' },
    origin: { icon: 'https://www.google.com/s2/favicons?domain=origin.com&sz=64', url: 'https://origin.com' },
    gog: { icon: 'https://www.google.com/s2/favicons?domain=gog.com&sz=64', url: 'https://gog.com' },
    battle_net: { icon: 'https://www.google.com/s2/favicons?domain=battle.net&sz=64', url: 'https://battle.net' },
    // Apps
    duolingo: { icon: 'https://www.google.com/s2/favicons?domain=duolingo.com&sz=64', url: 'https://duolingo.com' },
    notion: { icon: 'https://www.google.com/s2/favicons?domain=notion.so&sz=64', url: 'https://notion.so' },
    trello: { icon: 'https://www.google.com/s2/favicons?domain=trello.com&sz=64', url: 'https://trello.com' },
    dropbox: { icon: 'https://www.google.com/s2/favicons?domain=dropbox.com&sz=64', url: 'https://dropbox.com' },
    // Tech
    google: { icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64', url: 'https://google.com' },
    github: { icon: 'https://www.google.com/s2/favicons?domain=github.com&sz=64', url: 'https://github.com' },
    microsoft: { icon: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=64', url: 'https://microsoft.com' },
    apple: { icon: 'https://www.google.com/s2/favicons?domain=apple.com&sz=64', url: 'https://apple.com' },
    // Compras / Servicios
    amazon: { icon: 'https://www.google.com/s2/favicons?domain=amazon.com&sz=64', url: 'https://amazon.com' },
    paypal: { icon: 'https://www.google.com/s2/favicons?domain=paypal.com&sz=64', url: 'https://paypal.com' },
    uber: { icon: 'https://www.google.com/s2/favicons?domain=uber.com&sz=64', url: 'https://uber.com' },
    airbnb: { icon: 'https://www.google.com/s2/favicons?domain=airbnb.com&sz=64', url: 'https://airbnb.com' },
    // Bancos
    banco_estado: { icon: 'https://www.google.com/s2/favicons?domain=bancoestado.cl&sz=64', url: 'https://www.bancoestado.cl' },
    bancoestado: { icon: 'https://www.google.com/s2/favicons?domain=bancoestado.cl&sz=64', url: 'https://www.bancoestado.cl' },
    // Otros
    gmail: { icon: 'https://www.google.com/s2/favicons?domain=gmail.com&sz=64', url: 'https://gmail.com' },
    zoom: { icon: 'https://www.google.com/s2/favicons?domain=zoom.us&sz=64', url: 'https://zoom.us' },
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
        mostrarTutorial();

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
                    <div class="platform-name">${cuenta.plataforma}${cuenta['2fa'] ? ' <span title="2FA activado"> 🔒 </span>' : ''}</div>
                    <div class="platform-usuario">${cuenta.usuario ? cuenta.usuario : cuenta.email}</div>
                    <div class="platform-ultimo-acceso">🕐 ${cuenta.ultimo_acceso}</div>
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

function mostrarTutorial() {
    if (localStorage.getItem('tutorial_visto')) return;
    document.getElementById('tutorial-checkbox').checked = false;
    document.getElementById('tutorial-overlay').classList.remove('hidden');
}

function cerrarTutorial() {
    if (document.getElementById('tutorial-checkbox').checked) {
        localStorage.setItem('tutorial_visto', '1');
    }
    document.getElementById('tutorial-overlay').classList.add('hidden');
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("email").addEventListener("keydown", (e) => {
        if (e.key === "Enter") buscarCuenta();
    });

    document.getElementById("tutorial-close").addEventListener("click", cerrarTutorial);
    document.getElementById("tutorial-ok").addEventListener("click", cerrarTutorial);
    document.getElementById("tutorial-overlay").addEventListener("click", (e) => {
        if (e.target === document.getElementById("tutorial-overlay")) cerrarTutorial();
    });
});