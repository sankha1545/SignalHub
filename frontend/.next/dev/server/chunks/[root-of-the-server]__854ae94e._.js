module.exports = [
"[externals]/crypto [external] (crypto, cjs, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[externals]/crypto [external] (crypto, cjs)");
    });
});
}),
"[project]/frontend/node_modules/https-proxy-agent/dist/index.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/[root-of-the-server]__a36f2d48._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/frontend/node_modules/https-proxy-agent/dist/index.js [app-route] (ecmascript)");
    });
});
}),
"[project]/frontend/node_modules/node-fetch/src/index.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/9e883_node-fetch_src_utils_multipart-parser_cefa5f9d.js",
  "server/chunks/9e883_d6304d7a._.js",
  "server/chunks/[root-of-the-server]__87f6e720._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/frontend/node_modules/node-fetch/src/index.js [app-route] (ecmascript)");
    });
});
}),
];