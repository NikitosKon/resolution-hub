export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Resolution Hub",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://resolutionhub.net"
  ).replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "help@resolutionhub.net",
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/helpgrailed",
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
    "EHxggE9ENAwY5nP_j56kUtT7wa0E5bzLBarM0KWnAcM",
} as const;
