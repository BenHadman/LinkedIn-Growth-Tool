---
id: custom-metrics
title: Custom Metrics
description: Learn how to emit custom metrics from messages.
---

You can't build cool graphs without metrics, and [Benthos emits many][internal-metrics]. However, occasionally you might want to also emit custom metrics that track data extracted from messages being processed. In this cookbook we'll explore how to achieve this by configuring Benthos to pull download stats from Github, Dockerhub and Homebrew and emit them as gauges.
