export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/image_sources/",
        },
        sitemap: "https://chaosd2.com/sitemap.xml"
    }
}