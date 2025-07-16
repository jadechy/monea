const sources = [
    {
        "sourceType": "user",
        "fetch": "/api/__sitemap__/urls"
    },
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/",
                "lastmod": "2025-07-16T12:04:33.362Z"
            },
            {
                "loc": "/terms",
                "lastmod": "2025-07-13T18:20:56.203Z"
            },
            {
                "loc": "/privacy",
                "lastmod": "2025-07-13T18:20:56.203Z"
            },
            {
                "loc": "/user/edit",
                "lastmod": "2025-07-13T18:21:43.103Z"
            },
            {
                "loc": "/auth/login",
                "lastmod": "2025-07-13T18:21:43.097Z"
            },
            {
                "loc": "/auth/reset",
                "lastmod": "2025-07-13T18:21:43.098Z"
            },
            {
                "loc": "/groups/new",
                "lastmod": "2025-07-13T18:20:56.202Z"
            },
            {
                "loc": "/user",
                "lastmod": "2025-07-13T18:21:43.103Z"
            },
            {
                "loc": "/auth/forgot",
                "lastmod": "2025-07-13T18:21:43.097Z"
            },
            {
                "loc": "/auth/confirm",
                "lastmod": "2025-07-13T18:20:56.197Z"
            },
            {
                "loc": "/groups",
                "lastmod": "2025-07-13T18:20:56.202Z"
            },
            {
                "loc": "/NotFoundView",
                "lastmod": "2025-07-13T18:21:43.097Z"
            },
            {
                "loc": "/auth/register",
                "lastmod": "2025-07-13T18:21:43.098Z"
            },
            {
                "loc": "/savings",
                "lastmod": "2025-07-13T18:21:43.103Z"
            },
            {
                "loc": "/oauth/callback",
                "lastmod": "2025-07-13T18:20:56.203Z"
            },
            {
                "loc": "/user/middleware",
                "lastmod": "2025-07-13T18:20:56.204Z"
            },
            {
                "loc": "/groups/middleware",
                "lastmod": "2025-07-13T18:20:56.202Z"
            },
            {
                "loc": "/savings/middleware",
                "lastmod": "2025-07-13T18:20:56.203Z"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
