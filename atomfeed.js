/**
 * A lightweight atom feed parser.
 * @author: steph - http://my.opera.com/steph-js/about/
 * @version: 1.0.0 (9-10-2013)
 * @license: http://www.opensource.org/licenses/mit-license.php The MIT License
 * Documentation and examples at http://pages.github.com/
 */
(function($){
  $.fn.atomfeed = function(options){
    var settings = $.extend({
      url: null,
      max: 10,
      template: '<dt>{updated}</dt><dd><a href="{link.href}">{title}</a></dd>'
    }, options);

    if(settings['url']){
      var target = $(this);
      var ret = '';

      $.ajax({
        url: settings['url'],
        type: 'GET',
        dataType: 'xml',
      }).success(function(data){
        $(data).find('entry').each(function(i){
          if(i < settings['max']){
            var $this = $(this);
            ret += settings['template'].replace(/\{[^{}]+\}/g, function(s){
              s = s.substring(1, s.length - 1);
              if(s.indexOf('.') == -1){
                return $this.find(s).text();
              }
              else{
                s = s.split('.');
                return $this.find(s[0]).attr(s[1]);
              }
            });
          }
        });
        target.html(ret);
      });
    }

    return $(this);
  };
})(jQuery);
