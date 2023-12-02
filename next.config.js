/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "coognhshievguktujckq.supabase.co"
        ]
    },
    experimental: {
        forceSwcTransforms: true,
    },
}

module.exports = nextConfig
