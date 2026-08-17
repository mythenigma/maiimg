const deprecatedPrefixes = [
  '/dec',
  '/doc',
  '/file',
  '/free',
  '/mai',
  '/pdf',
];

const deprecatedExactPaths = new Set([
  '/blog/en/professional-photo-sharing-for-businesses',
  '/blog/en/professional-photo-sharing-for-businesses.html',
  '/blog/en/photo-sharing-workflow-comparison-for-marketing-teams',
  '/blog/en/photo-sharing-workflow-comparison-for-marketing-teams.html',
  '/blog/en/why-your-business-needs-qr-code-image-strategy',
  '/blog/en/why-your-business-needs-qr-code-image-strategy.html',
  '/blog/en/image-optimization-techniques',
  '/blog/en/image-optimization-techniques.html',
  '/blog/en/photo-copyright-licensing-guide',
  '/blog/en/photo-copyright-licensing-guide.html',
  '/blog/en/photo-backup-strategies-guide',
  '/blog/en/photo-backup-strategies-guide.html',
  '/blog/en/mobile-photo-sharing-trends-2025',
  '/blog/en/mobile-photo-sharing-trends-2025.html',
  '/blog/en/secure-pdf-document-sharing-qr-codes',
  '/blog/en/secure-pdf-document-sharing-qr-codes.html',
]);

function isDeprecatedPrefix(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';

  return deprecatedPrefixes.some((prefix) => (
    normalizedPath === prefix || normalizedPath.startsWith(`${prefix}/`)
  ));
}

export async function onRequest(context) {
  const { pathname } = new URL(context.request.url);

  if (isDeprecatedPrefix(pathname) || deprecatedExactPaths.has(pathname)) {
    return new Response('Gone\n', {
      status: 410,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Robots-Tag': 'noindex, nofollow, noarchive',
      },
    });
  }

  return context.next();
}
