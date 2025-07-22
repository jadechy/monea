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
                "lastmod": "2025-07-22T21:00:25.777Z"
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
                "lastmod": "2025-07-16T16:27:27.166Z"
            },
            {
                "loc": "/auth/login",
                "lastmod": "2025-07-22T21:00:25.775Z"
            },
            {
                "loc": "/auth/reset",
                "lastmod": "2025-07-16T16:27:27.161Z"
            },
            {
                "loc": "/groups/new",
                "lastmod": "2025-07-13T18:20:56.202Z"
            },
            {
                "loc": "/user",
                "lastmod": "2025-07-22T21:00:25.778Z"
            },
            {
                "loc": "/auth/forgot",
                "lastmod": "2025-07-16T16:27:27.159Z"
            },
            {
                "loc": "/groups",
                "lastmod": "2025-07-13T18:20:56.202Z"
            },
            {
                "loc": "/NotFoundView",
                "lastmod": "2025-07-16T16:27:27.158Z"
            },
            {
                "loc": "/auth/register",
                "lastmod": "2025-07-22T21:00:25.776Z"
            },
            {
                "loc": "/savings",
                "lastmod": "2025-07-16T16:27:27.166Z"
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
                "loc": "/user/invitation",
                "lastmod": "2025-07-17T19:40:43.286Z"
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
