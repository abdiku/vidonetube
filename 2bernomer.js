<!-- Load jQuery  -->
<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'/>

<!-- No. 1 Start  Script NoFollow -->
<script type='text/javascript'>
//<![CDATA[
jQuery(function($) {
  $('a').each(function() {
    var a = $(this).attr('href');
    if (typeof a != 'undefined' && a !== "" && (a.indexOf('http://') !== -1 || a.indexOf('https://') !== -1) && a.indexOf(window.location.hostname) === -1) {
      $(this).attr("rel", "nofollow");
    }
  });
});
//]]>
</script>
<!-- No. 1 End  Script NoFollow -->

<!-- No. 2 Start ALT Tag Otomatis -->
<script type='text/javascript'>
//<![CDATA[
jQuery(function($) {
  $('img').each(function() {
    var $img = $(this);
    var filename = $img.attr('src');
    if (filename) {
      $img.attr('alt', filename.substring(filename.lastIndexOf('/') + 1, filename.lastIndexOf('.')));
    }
  });
});
//]]>
</script>
<!-- No. 2 End ALT Tag Otomatis -->

<!-- No. 3 Start Open New Tab Otomatis -->
<script type='text/javascript'>
//<![CDATA[
jQuery(function($) {
  $('a').each(function() {
    var href = $(this).attr('href');
    if (typeof href != 'undefined' && href !== "" && (href.indexOf('http://') !== -1 || href.indexOf('https://') !== -1) && href.indexOf(window.location.hostname) === -1) {
      $(this).attr("target", "_blank");
    }
  });
});
//]]>
</script>
<!-- No. 3 End Open New Tab Otomatis -->

<!-- No. 4 Start Speed Up Loading Blog -->
<script src='https://script-lazyload.googlecode.com/svn/trunk/lazyload.js' type='text/javascript'/>
<script type='text/javascript'>
//<![CDATA[
jQuery(function($) {
  $('img').lazyload({
    placeholder: "http://2.bp.blogspot.com/-sJ-tZahntLI/T9coeqmdqMI/AAAAAAAADUQ/ztxIT1Fht4g/s1600/grey.png",
    effect: "fadeIn",
    threshold: 100
  });
});
//]]>
</script>
<!-- No. 4 End Speed Up Loading Blog -->
