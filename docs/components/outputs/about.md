---
title: Outputs
sidebar_label: About
---

An output is a sink where we wish to send our consumed data after applying an optional array of [processors][processors]. Only one output is configured at the root of a Benthos config. However, the output can be a [broker][output.broker] which combines multiple outputs under a chosen brokering pattern, or a [switch][output.switch] which is used to multiplex against different outputs.
