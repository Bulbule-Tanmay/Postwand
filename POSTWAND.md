# Postwand

Postwand is a rebranded fork of [Postiz](https://github.com/gitroomhq/postiz-app)
(AGPL-3.0). The code is unchanged apart from the product name, logo, favicon,
page titles and user-facing text.

## Build and run

```bash
docker compose -f docker-compose.postwand.yaml up -d --build
```

This builds the image from `Dockerfile.dev` (first build takes a while) and
starts Postwand on http://localhost:4007. Set the URLs and secrets in
`docker-compose.postwand.yaml` before using it for real.

## Where the branding lives

| What | Where |
| --- | --- |
| Sidebar / auth logos (React) | `apps/frontend/src/components/new-layout/logo.tsx`, `apps/frontend/src/components/ui/logo-text.component.tsx` |
| Static logos and favicon | `apps/frontend/public/` (`logo.svg`, `logo-text.svg`, `postiz.svg`, `postiz-text.svg`, `postiz-fav.png`, `favicon.*`) |
| Page titles | `apps/frontend/src/app/**/page.tsx` |
| UI text (all languages) | `libraries/react-shared-libraries/src/translation/locales/*/translation.json` |
| Browser extension | `apps/extension/manifest*.json`, `apps/extension/public/icon-*.png` |

## License

This project stays under the AGPL-3.0 license (see `LICENSE`). If you let other
people use a modified version over a network, you must offer them the source
code of your version. Keep the license and copyright notices in place.
