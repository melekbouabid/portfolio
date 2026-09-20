/**
 * Inline script injected at the top of <body>, before React hydrates.
 *
 * It only sets <html lang>, which cannot wait for the post-hydration effect: a
 * wrong lang attribute is a real accessibility defect (screen readers pick the
 * wrong voice). The visible copy still waits for hydration — see
 * components/providers/language-provider.tsx for why that trade-off is correct.
 *
 * Because this mutates an attribute React also controls, <html> must carry
 * suppressHydrationWarning. Same mechanism next-themes uses for dark mode.
 */
export const LANG_STORAGE_KEY = "melek.lang";

export const LANG_BOOTSTRAP = `(function(){try{var s=localStorage.getItem('${LANG_STORAGE_KEY}');var l=(s==='en'||s==='fr')?s:((navigator.language||'fr').toLowerCase().indexOf('en')===0?'en':'fr');document.documentElement.lang=l;}catch(e){}})();`;
