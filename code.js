// Configuración de los 4 temas con sus imágenes locales, paletas, frases, iconos y mensajes de estado
const THEMES_CONFIG = {
    dungeon: {
        className: 'theme-dungeon',
        name: 'Dungeons & Dragons',
        bgImage: 'images/DungeonsAndDragons.png',
        defaultMusicUrl: 'https://youtu.be/RNAU_Tfk2rg?si=ifI_92ci2QT9vwqS',
        defaultMusicId: 'RNAU_Tfk2rg',
        title: 'Eldoria Pomodoro',
        subtitle: 'Gremio de Hechiceros',
        pillText: 'Pergamino de Enfoque',
        pillIcon: 'shield',
        brandIcon: 'local_fire_department',
        musicIcon: 'music_note',
        fabIcons: {
            challenge: 'military_tech',
            streak: 'auto_stories',
            aesthetics: 'auto_fix_high',
            settings: 'handyman'
        },
        modeIcons: {
            focus: 'token',
            short: 'hourglass_top',
            long: 'hotel'
        },
        modeLabels: {
            focus: 'Concentración',
            short: 'Descanso Breve',
            long: 'Descanso Largo'
        },
        stateLabels: {
            ready: 'Listo para invocar',
            running: 'Hechizo canalizándose...',
            paused: 'Conjuro congelado'
        },
        restStateLabels: {
            ready: 'Descanso en la taberna',
            running: 'Recuperando maná en la posada...',
            paused: 'Descanso interrumpido'
        },
        playIcon: 'play_arrow',
        quoteIcon: 'auto_stories',
        quote: '"La concentración se ha hecho, estudia el grimorio y no acabes maltrecho."'
    },
    manga: {
        className: 'theme-manga',
        name: 'Manga / Cyberpunk',
        bgImage: 'images/Anime.png',
        defaultMusicUrl: 'https://youtu.be/oCIzK6--3FM?si=aG7LetAawnStYevx',
        defaultMusicId: 'oCIzK6--3FM',
        title: 'Neo-Tokyo Focus',
        subtitle: 'Neural Sync Active',
        pillText: 'Cyber Matrix 99%',
        pillIcon: 'memory',
        brandIcon: 'terminal',
        musicIcon: 'graphic_eq',
        fabIcons: {
            challenge: 'rocket_launch',
            streak: 'calendar_month',
            aesthetics: 'tune',
            settings: 'settings'
        },
        modeIcons: {
            focus: 'bolt',
            short: 'battery_charging_full',
            long: 'power_settings_new'
        },
        modeLabels: {
            focus: 'Deep Hack',
            short: 'Cooling Down',
            long: 'Reboot System'
        },
        stateLabels: {
            ready: 'Core ready to overclock',
            running: 'Uploading to neural net...',
            paused: 'Bandwidth throttled'
        },
        restStateLabels: {
            ready: 'Cooling down systems',
            running: 'Ventilating processors, relax...',
            paused: 'Cooling paused'
        },
        playIcon: 'play_arrow',
        quoteIcon: 'code',
        quote: '"Tokyo nunca duerme, no pares hasta compilar tu destino."'
    },
    vampire: {
        className: 'theme-vampire',
        name: 'Vampire Gothic',
        bgImage: 'images/Gothic.png',
        defaultMusicUrl: 'https://youtu.be/OoqR5dEiNcY?si=EJwr1HkPW3cG9GZO',
        defaultMusicId: 'OoqR5dEiNcY',
        title: 'Sanguis Library',
        subtitle: 'Pacto de Sangre',
        pillText: 'Vigilia Nocturna',
        pillIcon: 'nightlight_round',
        brandIcon: 'favorite_border',
        musicIcon: 'album',
        fabIcons: {
            challenge: 'grade',
            streak: 'bookmark',
            aesthetics: 'palette',
            settings: 'settings_suggest'
        },
        modeIcons: {
            focus: 'lens_blur',
            short: 'dark_mode',
            long: 'bedtime'
        },
        modeLabels: {
            focus: 'Vigilia',
            short: 'Sombra Leve',
            long: 'Letargo Eterno'
        },
        stateLabels: {
            ready: 'El silencio aguarda',
            running: 'Consumiendo los granos del tiempo...',
            paused: 'El reloj de arena se detiene'
        },
        restStateLabels: {
            ready: 'Reposo en el sarcófago',
            running: 'Reposo en la cripta',
            paused: 'Letargo en pausa'
        },
        playIcon: 'play_arrow',
        quoteIcon: 'menu_book',
        quote: '"La eternidad pertenece a quienes dominan cada segundo de la penumbra."'
    },
    caveman: {
        className: 'theme-caveman',
        name: 'Primal / Caveman',
        bgImage: 'images/Primal.png',
        defaultMusicUrl: 'https://youtu.be/rtC9PDuE5ag?si=mqo84lkLQdSrzVCr',
        defaultMusicId: 'rtC9PDuE5ag',
        title: 'Kragor Primal',
        subtitle: 'Fuego de la Tribu',
        pillText: 'Hoguera Sagrada',
        pillIcon: 'whatshot',
        brandIcon: 'fireplace',
        musicIcon: 'campaign',
        fabIcons: {
            challenge: 'emoji_events',
            streak: 'wb_sunny',
            aesthetics: 'brush',
            settings: 'construction'
        },
        modeIcons: {
            focus: 'local_fire_department',
            short: 'eco',
            long: 'cabin'
        },
        modeLabels: {
            focus: 'Caza y Foco',
            short: 'Pausa al Fuego',
            long: 'Sueño de Caverna'
        },
        stateLabels: {
            ready: 'Piedra afilada y lista',
            running: 'Cazando la meta...',
            paused: 'Fuego en reposo'
        },
        restStateLabels: {
            ready: 'Calentando junto al fuego',
            running: 'Descansando la piel frente a la hoguera...',
            paused: 'Reposo junto a las brasas'
        },
        playIcon: 'play_arrow',
        quoteIcon: 'insights',
        quote: '"Mantén encendida la llama de tu esfuerzo y la tribu prevalecerá."'
    }
};

// Duraciones configurables (en minutos)
const DEFAULT_DURATIONS = {
    concentration: 25,
    short: 5,
    long: 15
};

let modeDurations = { ...DEFAULT_DURATIONS };

let currentThemeKey = 'manga';
let timer;
let timeLeft = modeDurations.concentration * 60;
let isRunning = false;
let currentMode = 'concentration';
let challengeAccepted = false;
let totalMinutesToday = 0;

let globalFocusMinutes = 0;
let globalBreakMinutes = 0;
let globalChallengesCount = 0;
const completedChallengesHistory = [];
const calendarMinutesPerDay = {};

// Propiedades personalizables del desafío
let challengeName = 'Desafío Diario';
let challengeGoalMinutes = 120;

// --- REPRODUCTOR YOUTUBE ---
let ytPlayer = null;
let isMusicPlaying = true;
let userManuallyPaused = false;
let userHasCustomUrl = false;
let currentYoutubeId = THEMES_CONFIG['manga'].defaultMusicId;

function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

window.onYouTubeIframeAPIReady = function() {
    ytPlayer = new YT.Player('youtube-player-hidden', {
        height: '200',   // YouTube recomienda mínimo 200x200
        width: '200',
        videoId: currentYoutubeId,
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: currentYoutubeId,
            controls: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            origin: window.location.origin   // útil sobre http(s)
        },
        events: {
            onReady: function(event) {
                event.target.setVolume(65);
                event.target.playVideo();
            },
            onError: function(e) {
                console.error('Error de YouTube:', e.data);
                // 100: no existe/privado · 101/150: inserción desactivada · 153: sin referer (file://)
                updateMusicUI(false);
                document.getElementById('music-error-alert').classList.add('visible');
            },
            onStateChange: function(event) {
                if (event.data === YT.PlayerState.PLAYING) {
                    isMusicPlaying = true;
                    updateMusicUI(true);
                } else if (event.data === YT.PlayerState.PAUSED) {
                    isMusicPlaying = false;
                    updateMusicUI(false);
                } else if (event.data === YT.PlayerState.ENDED) {
                    if (userHasCustomUrl) {
                        userHasCustomUrl = false;
                        loadThemeDefaultMusic(currentThemeKey, false);
                    } else {
                        event.target.playVideo();
                    }
                }
            }
        }
    });
};


function unlockAudio() {
    if (ytPlayer && typeof ytPlayer.getPlayerState === 'function') {
        if (!userManuallyPaused && ytPlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
            ytPlayer.playVideo();
        }
        document.removeEventListener('click', unlockAudio);
    }
}
document.addEventListener('click', unlockAudio);

document.addEventListener('click', function unlockAudioOnFirstInteraction() {
    if (ytPlayer && typeof ytPlayer.getPlayerState === 'function') {
        const state = ytPlayer.getPlayerState();
        if (!userManuallyPaused && state !== YT.PlayerState.PLAYING) {
            ytPlayer.playVideo();
        }
    }
}, { once: true });

function extractYouTubeID(url) {
    if (!url || typeof url !== 'string') return null;
    const trimmed = url.trim();
    const regExp = /^(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[?&].*)?$/;
    const match = trimmed.match(regExp);
    return match ? match[1] : null;
}

function toggleMusicMenu() {
    const dropdown = document.getElementById('music-dropdown');
    const toggleBtn = document.getElementById('btn-music-toggle');
    dropdown.classList.toggle('active');
    toggleBtn.classList.toggle('open');
}

function changeYoutubeTrack() {
    const input = document.getElementById('youtube-url-input');
    const errorBox = document.getElementById('music-error-alert');
    const videoId = extractYouTubeID(input.value);

    if (!videoId) {
        errorBox.classList.add('visible');
        return;
    }

    errorBox.classList.remove('visible');
    currentYoutubeId = videoId;
    userHasCustomUrl = true;
    userManuallyPaused = false;

    if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
        ytPlayer.loadVideoById({
            videoId: currentYoutubeId
        });
        ytPlayer.playVideo();
    }
    updateMusicUI(true);
}

function restoreDefaultTrack() {
    userHasCustomUrl = false;
    loadThemeDefaultMusic(currentThemeKey, true);
}

function loadThemeDefaultMusic(themeKey, forcePlay) {
    const cfg = THEMES_CONFIG[themeKey];
    if (!cfg) return;

    currentYoutubeId = cfg.defaultMusicId;
    const input = document.getElementById('youtube-url-input');
    if (input) input.value = cfg.defaultMusicUrl;

    const errorBox = document.getElementById('music-error-alert');
    if (errorBox) errorBox.classList.remove('visible');

    if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
        ytPlayer.loadVideoById({
            videoId: currentYoutubeId
        });
        if (forcePlay) {
            userManuallyPaused = false;
            ytPlayer.playVideo();
            updateMusicUI(true);
        }
    }
}

function toggleYoutubePlayback() {
    if (!ytPlayer || typeof ytPlayer.getPlayerState !== 'function') return;

    const state = ytPlayer.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
        userManuallyPaused = true;
        ytPlayer.pauseVideo();
        updateMusicUI(false);
    } else {
        userManuallyPaused = false;
        ytPlayer.playVideo();
        updateMusicUI(true);
    }
}

function adjustVolume(val) {
    const volumeVal = parseInt(val, 10);
    document.getElementById('volume-pct-val').textContent = `${volumeVal}%`;
    if (ytPlayer && typeof ytPlayer.setVolume === 'function') {
        ytPlayer.setVolume(volumeVal);
    }
}

function updateMusicUI(playing) {
    const badge = document.getElementById('music-status-badge');
    const playPauseIcon = document.getElementById('icon-music-playpause');
    const playPauseText = document.getElementById('text-music-playpause');

    if (playing) {
        badge.textContent = 'Sonando';
        playPauseIcon.textContent = 'pause';
        playPauseText.textContent = 'Pausar canción';
    } else {
        badge.textContent = 'En pausa';
        playPauseIcon.textContent = 'play_arrow';
        playPauseText.textContent = 'Reanudar';
    }
}
// --- FIN REPRODUCTOR YOUTUBE ---

function init() {
    updateTimerDisplay();
    updateSettingsUI();
    loadCalendar();
    updateGlobalCountersUI();
    updateChallengeUIState();
    changeTheme('manga');
    loadYouTubeAPI();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateSettingsUI() {
    document.getElementById('val-concentration').textContent = `${modeDurations.concentration}m`;
    document.getElementById('val-short').textContent = `${modeDurations.short}m`;
    document.getElementById('val-long').textContent = `${modeDurations.long}m`;

    document.getElementById('btn-dec-concentration').disabled = modeDurations.concentration <= 25;
    document.getElementById('btn-dec-short').disabled = modeDurations.short <= 1;
    document.getElementById('btn-dec-long').disabled = modeDurations.long <= 1;
}

function adjustDuration(mode, delta) {
    const minAllowed = mode === 'concentration' ? 25 : 1;
    const newVal = modeDurations[mode] + delta;

    if (newVal < minAllowed) return;

    modeDurations[mode] = newVal;
    updateSettingsUI();

    if (currentMode === mode && !isRunning) {
        timeLeft = modeDurations[mode] * 60;
        updateTimerDisplay();
    }
}

function resetAllTimers() {
    showResetConfirmation();
}

function showResetConfirmation() {
    const modal = document.getElementById('confirm-modal');
    document.getElementById('modal-title').textContent = '¿Reiniciar Contadores?';
    document.getElementById('modal-desc').textContent = 'Se restablecerán los valores predeterminados de todos los temporizadores.';
    
    const buttonsContainer = document.getElementById('modal-buttons-container');
    buttonsContainer.innerHTML = `
        <button class="modal-btn-confirm" onclick="confirmResetAll(true)">Continuar</button>
        <button class="modal-btn-cancel" onclick="confirmResetAll(false)">Volver</button>
    `;
    modal.style.display = 'flex';
}

function confirmResetAll(confirmation) {
    document.getElementById('confirm-modal').style.display = 'none';
    if (confirmation) {
        clearInterval(timer);
        isRunning = false;

        if (currentMode !== 'concentration') {
            setContainerBlur(true);
        }

        modeDurations = { ...DEFAULT_DURATIONS };
        updateSettingsUI();

        timeLeft = modeDurations[currentMode] * 60;
        updateTimerDisplay();

        document.getElementById('icon-play-btn').textContent = 'play_arrow';
        document.getElementById('text-play-btn').textContent = 'Iniciar';
        updateStateLabel('ready');
    }
}

function updateStateLabel(stateType) {
    const cfg = THEMES_CONFIG[currentThemeKey];
    const labelEl = document.getElementById('timer-state-label');
    if (!labelEl) return;

    if (currentMode === 'concentration') {
        labelEl.textContent = cfg.stateLabels[stateType];
    } else {
        labelEl.textContent = cfg.restStateLabels[stateType];
    }
}

function setContainerBlur(enableBlur) {
    const container = document.querySelector('.container');
    if (!container) return;
    if (enableBlur) {
        container.style.setProperty('--container-blur', '3px');
    } else {
        container.style.setProperty('--container-blur', '0px');
    }
}

function toggleTimer() {
    const playIcon = document.getElementById('icon-play-btn');
    const playText = document.getElementById('text-play-btn');

    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        playIcon.textContent = 'play_arrow';
        playText.textContent = 'Iniciar';
        updateStateLabel('paused');

        if (currentMode !== 'concentration') {
            setContainerBlur(true);
        }
    } else {
        if (currentMode !== 'concentration') {
            setContainerBlur(false);
        }

        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();

                if (timeLeft % 60 === 0) {
                    const todayKey = getTodayDateKey();
                    if (currentMode === 'concentration') {
                        globalFocusMinutes++;
                        
                        // Racha de días almacena y muestra los minutos de Concentración SIEMPRE (independiente de desafío)
                        calendarMinutesPerDay[todayKey] = (calendarMinutesPerDay[todayKey] || 0) + 1;
                        loadCalendar();

                        // La sección "Minutos hoy" del desafío solo suma si el desafío está aceptado
                        if (challengeAccepted) {
                            totalMinutesToday = calendarMinutesPerDay[todayKey]; // o mantenidos en desafío
                            updateTotalMinutes();
                            
                            // Verificar meta del desafío personalizado
                            if (totalMinutesToday >= challengeGoalMinutes && !window.challengeCompletedToday) {
                                window.challengeCompletedToday = true;
                                globalChallengesCount++;
                                
                                // Registrar en el historial para el tooltip
                                const now = new Date();
                                const dateStr = now.toLocaleDateString();
                                const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                                completedChallengesHistory.push({
                                    name: challengeName,
                                    duration: challengeGoalMinutes,
                                    date: dateStr,
                                    time: timeStr
                                });
                                updateChallengesTooltipUI();
                                updateGlobalCountersUI();
                                
                                // Al completarse: se resetea el contador de "Minutos hoy" a 0, vuelve por defecto el desafío no aceptado
                                totalMinutesToday = 0;
                                challengeAccepted = false;
                                challengeName = 'Desafío Diario';
                                challengeGoalMinutes = 120;
                                document.getElementById('input-challenge-name').value = challengeName;
                                document.getElementById('input-challenge-goal').value = challengeGoalMinutes;
                                document.getElementById('challenge-display-title').textContent = challengeName;
                                document.getElementById('meta-minutes-val').textContent = challengeGoalMinutes;
                                updateChallengeUIState();
                                updateTotalMinutes();
                                loadCalendar();

                                showThematicModal('¡Desafío Completado!', `¡Has superado el desafío "${completedChallengesHistory[completedChallengesHistory.length - 1].name}" con éxito!`);
                            }
                        }
                    } else {
                        globalBreakMinutes++;
                    }
                    updateGlobalCountersUI();
                }
            } else {
                clearInterval(timer);
                isRunning = false;
                playIcon.textContent = 'play_arrow';
                playText.textContent = 'Iniciar';
                updateStateLabel('ready');

                if (currentMode !== 'concentration') {
                    setContainerBlur(true);
                }

                showThematicModal('¡Tiempo Cumplido!', 'El ciclo actual ha finalizado correctamente.');
            }
        }, 1000);
        isRunning = true;
        playIcon.textContent = 'pause';
        playText.textContent = 'Pausar';
        updateStateLabel('running');
    }
}

function getTodayDateKey() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function updateGlobalCountersUI() {
    document.getElementById('global-focus-minutes').textContent = globalFocusMinutes;
    document.getElementById('global-break-minutes').textContent = globalBreakMinutes;
    document.getElementById('global-challenges-count').textContent = globalChallengesCount;
}

function updateChallengesTooltipUI() {
    const listContainer = document.getElementById('challenges-tooltip-list');
    if (!listContainer) return;

    if (completedChallengesHistory.length === 0) {
        listContainer.innerHTML = `<span class="tooltip-empty">Ningún desafío completado aún</span>`;
        return;
    }

    let html = '';
    completedChallengesHistory.forEach(item => {
        html += `
            <div class="tooltip-item">
                <div class="tooltip-item-name">${item.name}</div>
                <div class="tooltip-item-details">
                    <span>${item.duration} min</span>
                    <span>${item.date} - ${item.time}</span>
                </div>
            </div>
        `;
    });
    listContainer.innerHTML = html;
}

function resetTimer() {
    showResetConfirmation();
}

function selectMode(mode) {
    if (isRunning) {
        showConfirmation(mode);
    } else {
        changeMode(mode);
    }
}

function showConfirmation(newMode) {
    const modal = document.getElementById('confirm-modal');
    document.getElementById('modal-title').textContent = '¿Interrumpir el Hechizo?';
    document.getElementById('modal-desc').textContent = 'El temporizador está activo. Cambiar de modo reiniciará tu tiempo actual.';
    
    const buttonsContainer = document.getElementById('modal-buttons-container');
    buttonsContainer.innerHTML = `
        <button class="modal-btn-confirm" onclick="confirmChange(true)">Continuar</button>
        <button class="modal-btn-cancel" onclick="confirmChange(false)">Volver</button>
    `;
    modal.style.display = 'flex';
    window.currentModeToChange = newMode;
}

function confirmChange(confirmation) {
    document.getElementById('confirm-modal').style.display = 'none';
    if (confirmation && window.currentModeToChange) {
        changeMode(window.currentModeToChange);
    }
    delete window.currentModeToChange;
}

function showThematicModal(title, text) {
    const modal = document.getElementById('confirm-modal');
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-desc').textContent = text;
    
    const buttonsContainer = document.getElementById('modal-buttons-container');
    buttonsContainer.innerHTML = `
        <button class="modal-btn-confirm" onclick="closeThematicModal()" style="width:100%;">Aceptar</button>
    `;
    modal.style.display = 'flex';
}

function closeThematicModal() {
    document.getElementById('confirm-modal').style.display = 'none';
}

function changeMode(newMode) {
    currentMode = newMode;
    clearInterval(timer);
    isRunning = false;
    
    setContainerBlur(true);

    document.getElementById('icon-play-btn').textContent = 'play_arrow';
    document.getElementById('text-play-btn').textContent = 'Iniciar';
    
    timeLeft = modeDurations[newMode] * 60;
    
    updateTimerDisplay();
    updateButtonStyles();
    updateStateLabel('ready');
}

function updateButtonStyles() {
    const concentrationBtn = document.getElementById('concentration-btn');
    const shortBreakBtn = document.getElementById('short-break-btn');
    const longBreakBtn = document.getElementById('long-break-btn');
    
    concentrationBtn.classList.remove('active');
    shortBreakBtn.classList.remove('active');
    longBreakBtn.classList.remove('active');
    
    switch(currentMode) {
        case 'concentration':
            concentrationBtn.classList.add('active');
            break;
        case 'short':
            shortBreakBtn.classList.add('active');
            break;
        case 'long':
            longBreakBtn.classList.add('active');
            break;
    }
}

function toggleSection(sectionId) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(sec => sec.classList.remove('active'));

    const fabButtons = document.querySelectorAll('.fab-button');
    fabButtons.forEach(btn => btn.classList.remove('active'));

    const targetSection = document.getElementById(sectionId + '-section');
    const targetFab = document.getElementById('btn-fab-' + sectionId);

    if (targetSection) {
        targetSection.classList.add('active');
    }
    if (targetFab) {
        targetFab.classList.add('active');
    }
}

// Función para abrir/cerrar el menú desplegable de edición
function toggleChallengeEditMenu() {
    const editContainer = document.getElementById('challenge-edit-container');
    if (editContainer) {
        editContainer.classList.toggle('open');
    }
}

// Funciones para modificar nombre y meta del desafío
function updateChallengeName(val) {
    challengeName = val.trim() || 'Desafío Diario';
    document.getElementById('challenge-display-title').textContent = challengeName;
}

function updateChallengeGoal(val) {
    const parsed = parseInt(val, 10);
    challengeGoalMinutes = isNaN(parsed) || parsed < 1 ? 1 : parsed;
    document.getElementById('meta-minutes-val').textContent = challengeGoalMinutes;
}

function updateChallengeUIState() {
    const editBtn = document.getElementById('btn-edit-toggle');
    const editContainer = document.getElementById('challenge-edit-container');
    const iconBtn = document.getElementById('icon-challenge-btn');

    if (challengeAccepted) {
        if (editBtn) editBtn.style.display = 'none';
        if (editContainer) editContainer.classList.remove('open');
        if (iconBtn) iconBtn.style.display = 'inline-block';
    } else {
        if (editBtn) editBtn.style.display = 'flex';
        if (iconBtn) iconBtn.style.display = 'none';
    }
}

// Aceptar Desafío (oculta el botón de editar, bloquea la edición y activa la suma en minutos hoy)
function acceptChallenge() {
    challengeAccepted = true;
    updateChallengeUIState();
    showThematicModal('Desafío Aceptado', `¡Has aceptado el desafío "${challengeName}"! La configuración ha quedado fijada y los minutos de hoy comienzan a contabilizarse.`);
}

// Saltar desafío (vuelve a mostrar el botón de editar, oculta el icono, desactiva la suma del desafío actual pero mantiene la racha)
function skipChallenge() {
    challengeAccepted = false;
    window.challengeCompletedToday = false;
    updateChallengeUIState();

    showThematicModal('Desafío Pospuesto', 'Botón de edición habilitado. Los minutos acumulados en tu racha se mantienen, pero no se sumarán al desafío actual hasta aceptar de nuevo.');
}

function updateTotalMinutes() {
    const todayKey = getTodayDateKey();
    // Si el desafío está aceptado, mostramos los minutos correspondientes a la fecha actual
    document.getElementById('total-minutes').textContent = challengeAccepted ? (calendarMinutesPerDay[todayKey] || 0) : 0;
}

function loadCalendar() {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    calendar.innerHTML = '';
    
    for (let day = 1; day <= daysInMonth; day++) {
        const dayStr = String(day).padStart(2, '0');
        const monthStr = String(month + 1).padStart(2, '0');
        const dateKey = `${year}-${monthStr}-${dayStr}`;
        const accumulatedMins = calendarMinutesPerDay[dateKey] || 0;

        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        dayElement.innerHTML = `
            <span class="cal-day-num">${day}</span>
            <span class="cal-day-mins">${accumulatedMins}m</span>
        `;
        
        if (accumulatedMins > 0 || day < today.getDate()) {
            dayElement.style.background = `var(--badge-bg)`;
            dayElement.style.borderColor = `var(--badge-border)`;
        }
        
        calendar.appendChild(dayElement);
    }
    updateTotalMinutes();
}

function changeTheme(themeKey) {
    if (!THEMES_CONFIG[themeKey]) return;
    currentThemeKey = themeKey;
    const cfg = THEMES_CONFIG[themeKey];

    document.body.className = cfg.className;
    document.body.style.backgroundImage = `url('${cfg.bgImage}')`;

    const dropdown = document.getElementById('theme-dropdown');
    if (dropdown && dropdown.value !== themeKey) {
        dropdown.value = themeKey;
    }

    document.getElementById('theme-title').textContent = cfg.title;
    document.getElementById('theme-subtitle').textContent = cfg.subtitle;
    document.getElementById('theme-logo-icon').querySelector('i').textContent = cfg.brandIcon;

    document.getElementById('icon-fab-challenge').textContent = cfg.fabIcons.challenge;
    document.getElementById('icon-fab-streak').textContent = cfg.fabIcons.streak;
    document.getElementById('icon-fab-aesthetics').textContent = cfg.fabIcons.aesthetics;
    document.getElementById('icon-fab-settings').textContent = cfg.fabIcons.settings;
    document.getElementById('icon-settings-header').textContent = cfg.fabIcons.settings;

    document.getElementById('icon-music-btn').textContent = cfg.musicIcon;

    document.getElementById('icon-mode-focus').textContent = cfg.modeIcons.focus;
    document.getElementById('icon-mode-short').textContent = cfg.modeIcons.short;
    document.getElementById('icon-mode-long').textContent = cfg.modeIcons.long;

    document.getElementById('label-mode-focus').textContent = cfg.modeLabels.focus;
    document.getElementById('label-mode-short').textContent = cfg.modeLabels.short;
    document.getElementById('label-mode-long').textContent = cfg.modeLabels.long;

    document.getElementById('text-theme-pill').textContent = cfg.pillText;
    document.getElementById('icon-theme-pill').textContent = cfg.pillIcon;

    document.getElementById('theme-quote').textContent = cfg.quote;
    document.getElementById('icon-quote').textContent = cfg.quoteIcon;
    
    if (isRunning) {
        updateStateLabel('running');
    } else {
        const playText = document.getElementById('text-play-btn').textContent;
        if (playText === 'Pausar') {
            updateStateLabel('paused');
        } else {
            updateStateLabel('ready');
        }
    }

    if (!userHasCustomUrl) {
        loadThemeDefaultMusic(themeKey, true);
    }

    document.querySelectorAll('.theme-option').forEach(el => el.classList.remove('selected'));
    const activeOption = document.getElementById('opt-' + themeKey);
    if (activeOption) {
        activeOption.classList.add('selected');
    }

    loadCalendar();
}

window.onload = function() {
    init();
    updateChallengeUIState();
};