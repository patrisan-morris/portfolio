export async function loadLocale(lang) {
    let locale = {
        globals: '',
        skills: '',
    };

    switch(lang) {
        case 'en':
            locale.globals = await import('@locales/en/globals.json');
            locale.skills = await import('@locales/en/skills.json');
            break;
        case 'es':
            locale.globals = await import('@locales/es/globals.json');
            locale.skills = await import('@locales/es/skills.json');
            break;
        default:
            locale.globals = await import('@locales/es/globals.json');
            locale.skills = await import('@locales/es/skills.json');
            break;
    }

    return locale;
}