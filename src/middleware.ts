import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  // Enforce trailing slash removal (except root /)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    const cleanPath = url.pathname.slice(0, -1);
    return context.redirect(`${cleanPath}${url.search}`, 301);
  }

  return next();
});
