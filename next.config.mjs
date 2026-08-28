/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  /*
    Seit der Mehrsprachigkeit liegt jede Seite unter einem Sprachpraefix.
    Die alten Adressen ohne Praefix leiten dauerhaft auf die englische
    Fassung, damit bestehende Links und Lesezeichen nicht ins Leere laufen.

    Bewusst eine ausdrueckliche Liste statt einer allgemeinen Regel: ein
    Muster wie "/:path*" wuerde auch robots.txt, sitemap.xml und die
    Symbole im /public-Ordner mitnehmen.
  */
  async redirects() {
    const paths = ['about', 'contact', 'for-brands', 'for-creators', 'legal-notice', 'privacy']
    return [
      { source: '/', destination: '/en', permanent: true },
      ...paths.map((p) => ({
        source: `/${p}`,
        destination: `/en/${p}`,
        permanent: true,
      })),
    ]
  },
}

export default nextConfig
