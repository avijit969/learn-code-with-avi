/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'


const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "img.icons8.com"
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com'
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};
const withMDX = createMDX({
    // Add markdown plugins here, as desired
})
export default withMDX(nextConfig)