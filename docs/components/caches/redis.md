---
title: redis
type: cache
status: stable
---

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the contents of:
     lib/cache/redis.go
-->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Use a Redis instance as a cache. The expiration can be set to zero or an empty
string in order to set no expiration.


<Tabs defaultValue="common" values={[
  { label: 'Common', value: 'common', },
  { label: 'Advanced', value: 'advanced', },
]}>

<TabItem value="common">

```yaml
# Common config fields, showing default values
label: ""
redis:
  url: tcp://localhost:6379
  prefix: ""
  expiration: 24h
```

</TabItem>
<TabItem value="advanced">

```yaml
# All config fields, showing default values
label: ""
redis:
  url: tcp://localhost:6379
  kind: simple
  master: ""
  tls:
    enabled: false
    skip_cert_verify: false
    enable_renegotiation: false
    root_cas: ""
    root_cas_file: ""
    client_certs: []
  prefix: ""
  expiration: 24h
  retries: 3
  retry_period: 500ms
```

</TabItem>
</Tabs>


This cache type supports setting the TTL individually per key by using the
dynamic `ttl` field of a cache processor or output in order to
override the general TTL configured at the cache resource level.

## Fields

### `url`

The URL of the target Redis server. Database is optional and is supplied as the URL path. The scheme `tcp` is equivalent to `redis`.


Type: `string`  
Default: `"tcp://localhost:6379"`  

```yaml
# Examples

url: :6397

url: localhost:6397

url: redis://localhost:6379

url: redis://:foopassword@redisplace:6379

url: redis://localhost:6379/1

url: redis://localhost:6379/1,redis://localhost:6380/1
```

### `kind`

Specifies a simple, cluster-aware, or failover-aware redis client.


Type: `string`  
Default: `"simple"`  

```yaml
# Examples

kind: simple

kind: cluster

kind: failover
```

### `master`

Name of the redis master when `kind` is `failover`


Type: `string`  
Default: `""`  

```yaml
# Examples

master: mymaster
```

### `tls`

Custom TLS settings can be used to override system defaults.

### Troubleshooting

Some cloud hosted instances of Redis (such as Azure Cache) might need some hand holding in order to establish stable connections. Unfortunately, it is often the case that TLS issues will manifest as generic error messages such as "i/o timeout". If you're using TLS and are seeing connectivity problems consider setting `enable_renegotiation` to `true`, and ensuring that the server supports at least TLS version 1.2.


Type: `object`  

### `tls.enabled`

Whether custom TLS settings are enabled.


Type: `bool`  
Default: `false`  

### `tls.skip_cert_verify`

Whether to skip server side certificate verification.


Type: `bool`  
Default: `false`  

### `tls.enable_renegotiation`

Whether to allow the remote server to repeatedly request renegotiation. Enable this option if you're seeing the error message `local error: tls: no renegotiation`.


Type: `bool`  
Default: `false`  
Requires version 3.45.0 or newer  

### `tls.root_cas`

An optional root certificate authority to use. This is a string, representing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate.


Type: `string`  
Default: `""`  

```yaml
# Examples

root_cas: |-
  -----BEGIN CERTIFICATE-----
  ...
  -----END CERTIFICATE-----
```

### `tls.root_cas_file`

An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate.


Type: `string`  
Default: `""`  

```yaml
# Examples

root_cas_file: ./root_cas.pem
```

### `tls.client_certs`

A list of client certificates to use. For each certificate either the fields `cert` and `key`, or `cert_file` and `key_file` should be specified, but not both.


Type: `array`  
Default: `[]`  

```yaml
# Examples

client_certs:
  - cert: foo
    key: bar

client_certs:
  - cert_file: ./example.pem
    key_file: ./example.key
```

### `tls.client_certs[].cert`

A plain text certificate to use.


Type: `string`  
Default: `""`  

### `tls.client_certs[].key`

A plain text certificate key to use.


Type: `string`  
Default: `""`  

### `tls.client_certs[].cert_file`

The path to a certificate to use.


Type: `string`  
Default: `""`  

### `tls.client_certs[].key_file`

The path of a certificate key to use.


Type: `string`  
Default: `""`  

### `prefix`

An optional string to prefix item keys with in order to prevent collisions with similar services.


Type: `string`  
Default: `""`  

### `expiration`

An optional period after which cached items will expire.


Type: `string`  
Default: `"24h"`  

### `retries`

The maximum number of retry attempts to make before abandoning a request.


Type: `int`  
Default: `3`  

### `retry_period`

The duration to wait between retry attempts.


Type: `string`  
Default: `"500ms"`  

