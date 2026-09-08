/**
 * The host that actually serves this site.
 *
 * Every relative URL in the metadata resolves against this, so a wrong value
 * silently breaks link previews on LinkedIn, WhatsApp and X while the page
 * itself keeps loading normally — which is what makes it easy to miss.
 *
 * When a custom domain is wired up, change this one line.
 */
export const SITE_URL = "https://eyad-ahmed-kamal.vercel.app";

export const SITE_NAME = "Eyad Ahmed Portfolio";
