export function resolvePage(name: string) {
    const [module, page] = name.split('::');

    const pagePath = name.includes('::')
        ? `../../modules/${module.toLowerCase()}/resources/js/pages/${page}.tsx`
        : `./pages/${module}.tsx`;

    const pages = name.includes('::')
        ? import.meta.glob('../../modules/**/resources/js/pages/*.tsx')
        : import.meta.glob('./pages/**/*.tsx');

    if (!pages[pagePath]) {
        const errorMessage = `Page not found: ${pagePath}`;
        console.error(errorMessage);

        throw new Error(errorMessage);
    }

    return typeof pages[pagePath] === 'function'
        ? pages[pagePath]()
        : pages[pagePath];
}
