jQuery.atomfeed
===============

A lightweight atom feed parser based on jQuery.

Copyright (c) 2013 steph - http://my.opera.com/steph-js/about/
Licensed under the MIT License.

Usage
-----

    jQuery.atomfeed(options);

Options:

- `url`: the feed URL (required)
- `max`: the maximum number of feed items to display (optional)
- `template`: the HTML markup or text to use as a template (optional)

Example:

    jQuery.atomfeed({
      url: 'feed.atom',
      max: 5
    });

