const { listPaths, listDeprecatedPaths } = require("./src/plugins/components");

let inputs_docs = listPaths("inputs");
//let processors_docs = listPaths("processors");
//let outputs_docs = listPaths("outputs");
//let caches_docs = listPaths("caches");
//let rate_limits_docs = listPaths("rate_limits");
//let buffers_docs = listPaths("buffers");
//let metrics_docs = listPaths("metrics");
//let tracers_docs = listPaths("tracers");

module.exports = {
  docs: [
    {
      type: "doc",
      id: "intro"
    },
    {
      type: "category",
      label: "Background",
      items: ["google_sheets_appscript/google_sheets"]
    } /*
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/getting_started",
        {
          type: "category",
          label: "Bloblang",
          items: [
            "guides/bloblang/about",
            "guides/bloblang/walkthrough",
            "guides/bloblang/functions",
            "guides/bloblang/methods",
            "guides/bloblang/arithmetic",
            "guides/bloblang/advanced"
          ]
        },
        "guides/monitoring",
        "guides/performance_tuning",
        "guides/sync_responses",
        {
          type: "category",
          label: "Cloud Credentials",
          items: ["guides/cloud/aws", "guides/cloud/gcp"]
        },
        {
          type: "category",
          label: "Serverless",
          items: ["guides/serverless/about", "guides/serverless/lambda"]
        },
        {
          type: "category",
          label: "Streams Mode",
          items: [
            "guides/streams_mode/about",
            "guides/streams_mode/using_config_files",
            "guides/streams_mode/using_rest_api",
            "guides/streams_mode/streams_api"
          ]
        },
        {
          type: "category",
          label: "Migration",
          items: ["guides/migration/v2", "guides/migration/v3"]
        }
      ]
    }*/
  ]
};
