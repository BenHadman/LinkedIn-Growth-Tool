---
title: Ad Creation
description: Creating an Ad and linking to your campaigns
---

Using LIGE you can quickly create multiple ads with variations in ad copy/ creative without having to navigate through each campaign in the Campaign Manager and duplicate ads.

The structure of the LinkedIn API makes the process quite convoluted but this article will cover the various aspects involved.

## Direct Sponsored Content

Direct Sponsored Content is a social post to the feed which is invisible to users in an 'organic' feed, users will only see the post unless they have been targeted by ads.
On thier own DSC's are effectively useless until they have been linked to an ad campaign in a seperate step, once this have been completed the post is served.

## LISponCon Funtion

This function enables you to create many DSC's simply by calling a spreadsheet function =LISponCon(variable). The variable can be adjusted to pass dynamic data into the copy of the post.
For example in an ABM use-case you may want to apss a company name into the ad copy for personalisation.

### Setup

You will need to configure the copy in AppScript
_In the future we may utilise a sidebar on the spreadsheet to edit the copy here rather than delving into appscript_
