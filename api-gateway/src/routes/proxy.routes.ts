import {Router} from "express";
import {createProxyMiddleware} from "http-proxy-middleware";
import {SERVICES} from "../config/services.config";

const router = Router();

// Проксирование запросов к auth-сервису
router.use(
    "/auth",
    createProxyMiddleware({
        target: SERVICES.AUTH,
        changeOrigin: true,
        pathRewrite: { "^/auth": "" },
        on: {
            proxyReq: (proxyReq, req, res) => {
                console.log(
                    `[Gateway] ProxyReq → ${req.method} ${req.url} -> ${proxyReq.getHeader(
                        "host"
                    )}${proxyReq.path}`
                );
            },
            proxyRes: (proxyRes, req, res) => {
                console.log(
                    `[Gateway] ProxyRes ← ${req.method} ${req.url} <- ${proxyRes.statusCode}`
                );
            },
            error: (err, req, res) => {
                console.error(
                    `[Gateway] Proxy Error for ${req.method} ${req.url}:`,
                    err.message
                );
            },
        },
    })
);

// Проксирование запросов к profile-сервису
// router.use(
//     "/profile",
//     authenticateJWT, // проверка токена
//     createProxyMiddleware({
//         target: SERVICES.PROFILE,
//         changeOrigin: true,
//         pathRewrite: { "^/profile": "" }
//     })
// );

export default router;
