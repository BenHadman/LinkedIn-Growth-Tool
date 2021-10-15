---
title: What is Benthos for?
sidebar_label: About
hide_title: false
---

<div style={{textAlign: 'center'}}><img src="/img/what-is-blob.svg" /></div>

Benthos is a declarative data streaming service that solves a wide range of data engineering problems with simple, chained, stateless [processing steps][docs.processors]. It implements transaction based resiliency with back pressure, so when connecting to at-least-once sources and sinks it's able to guarantee at-least-once delivery without needing to persist messages during transit.

import ReactPlayer from 'react-player/youtube';

<div className='container margin-vert--lg'>
  <div className='row row--no-gutters'>
    <ReactPlayer
        className='col'
        height='300px'
        url='https://www.youtube.com/embed/88DSzCFV4Ng'
        controls={true}
    />
  </div>
</div>
