const path = require("path");
const { components } = require("./src/plugins/components");

module.exports = {
  title: "LinkedIn Growth Tool",
  tagline: "Extend LinkedIn Ads",
  url: "https://cranky-perlman-9f39ab.netlify.app/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Jeffail",
  projectName: "LinkedIn Growth Tool",
  customFields: {
    /*  components: {
      inputs: components("inputs"),
      processors: components("processors"),
      conditions: components("conditions"),
      outputs: components("outputs"),
      caches: components("caches"),
      rate_limits: components("rate_limits"),
      buffers: components("buffers"),
      metrics: components("metrics"),
      tracers: components("tracers")
    } */
  },
  themeConfig: {
    prism: {
      theme: require("./src/plugins/prism_themes/github"),
      darkTheme: require("./src/plugins/prism_themes/monokai")
    },
    colorMode: {
      defaultMode: "light"
    },
    image: "img/og_img.png",
    metadatas: [{ name: "twitter:card", content: "summary" }],
    navbar: {
      title: "LinkedIn Growth Tool",
      logo: {
        alt: "LIGE",
        src: "img/logo.svg"
      },
      items: [
        { to: "docs/about", label: "Docs", position: "left" },
        { to: "cookbooks", label: "Cookbooks", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        { to: "videos", label: "Videos", position: "left" },
        { to: "community", label: "Community", position: "right" },
        {
          href: "https://github.com/BenHadman/LinkedIn-Growth-Tool",
          position: "right",
          className: "header-download-link header-icon-link",
          "aria-label": "Download"
        },
        {
          href: "https://github.com/BenHadman/LinkedIn-Growth-Tool/",
          position: "right",
          className: "header-github-link header-icon-link",
          "aria-label": "GitHub repository"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting started",
              to: "docs/guides/getting_started"
            },
            {
              label: "Videos",
              to: "videos"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Join the chat",
              to: "community"
            },
            {
              label: "GitHub",
              href: "https://github.com/BenHadman/LinkedIn-Growth-Tool"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Get in touch",
              to: "community"
            },
            {
              label: "Mascot",
              to: "blobfish"
            }
          ]
        }
      ],
      copyright: `Copyright ?? ${new Date().getFullYear()} Ben Hadman.`
    },
    algolia: {
      apiKey: "358e5d3135579871ceecd50c6cb7ce9e",
      indexName: "benthos"
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/BenHadman/LinkedIn-Growth-Tool"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
        blog: {
          feedOptions: {
            type: "all"
          }
        }
      }
    ]
  ],
  plugins: [
    path.resolve(__dirname, "./src/plugins/cookbooks"),
    path.resolve(__dirname, "./src/plugins/redirects")
  ]
};
