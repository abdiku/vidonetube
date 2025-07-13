<!-- Start SEO Smart Link -->
<script type='text/javascript'>
function smartLink(){
    this.keywdHref = new Object();
    this.add = function(keyword, href){
        if(keyword.substr(0,1) != &quot; &quot;){keyword = &quot; &quot; + keyword;}
        this.keywdHref[keyword] =  href;
    }
    this.createAnchor = function(){
        var objs = document.getElementsByTagName(&quot;div&quot;);
        for(var i=0; i&lt;objs.length; i++){
            var obj = objs[i];
            if(obj.className.indexOf(&quot;post-body&quot;)&gt;-1){
                var content = obj.innerHTML;
                for(var keyword in this.keywdHref){
                    var href = this.keywdHref[keyword];
                    var newstr = content.replace(keyword, &quot;&lt;a href=&#39;&quot;+href+&quot;&#39;&gt;&quot;+keyword+&quot;&lt;/a&gt;&quot;, &quot;gi&quot;);
                    obj.innerHTML = newstr;
                    content = newstr;
                }
            }
        }
    }
    this.startScript = function(){
        var onLoad = window.onload;
        window.onload = function(){
            if(onLoad){onLoad();}
            setTimeout(&quot;f.createAnchor()&quot;, 100);
        }
    }
}
</script>
<script type='text/javascript'>
var f = new smartLink();
f.add(quot;Bloggerquot;, quot;https://vidonetube.blogspot.com/quot;);
f.add(quot;Wordpressquot;, quot;https://vidonetube.blogspot.com/quot;);
f.add(quot;AIquot;, quot;https://vidonetube.blogspot.com/quot;);
f.startScript();
</script>
<!-- End  SEO Smart Link  -->
<!-- Start script seo image otomatis -->    
<script type='text/javascript'>
//<![CDATA[
$(document).ready(function() {
  $('img').each(function(){
        var $img = $(this);
        var filename = $img.attr('src')
        $img.attr('alt', filename.substring((filename.lastIndexOf('/'))+1, filename.lastIndexOf('.')));
  });
});
//]]>
</script>

<script type='text/javascript'>
//<![CDATA[
$(document).ready(function() {
  $('img').each(function(){
        var $img = $(this);
        var filename = $img.attr('src')
        $img.attr('title', filename.substring((filename.lastIndexOf('/'))+1, filename.lastIndexOf('.')));
  });
});
//]]>
</script>
<!-- End script seo image otomatis -->

<script>
// Ganti dengan URL halaman safelink kamu
const safelinkPage = &quot;https://vidonetube.blogspot.com/p/open-door.html?url=&quot;;

// Domain whitelist (link yang tidak diubah)
const whitelist = [&quot;vidonetube.blogspot.com&quot;, &quot;www.vidonetube.blogspot.com&quot;, &quot;https://saweria.co/Kusrahman&quot;, &quot;https://trakteer.id/kusrahman/tip&quot;, &quot;https://www.buymeacoffee.com/Kusrahman&quot;, &quot;https://paypal.me/SSidik810&quot;, &quot;youtube.com&quot;];

function isWhitelisted(url) {
  return whitelist.some(domain =&gt; url.includes(domain));
}

// Base64 encoder (simple)
function base64Encode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
    function(match, p1) {
      return String.fromCharCode(&#39;0x&#39; + p1);
  }));
}

document.addEventListener(&quot;DOMContentLoaded&quot;, function() {
  const anchors = document.querySelectorAll(&quot;article a[href^=&#39;http&#39;]&quot;);
  anchors.forEach(function(a) {
    const href = a.getAttribute(&quot;href&quot;);
    if (!isWhitelisted(href)) {
      const encoded = base64Encode(href);
      a.setAttribute(&quot;href&quot;, safelinkPage + encoded);
      a.setAttribute(&quot;rel&quot;, &quot;nofollow noopener noreferrer&quot;);
      a.setAttribute(&quot;target&quot;, &quot;_blank&quot;);
    }
  });
});
</script>
    
<!-- Start LazyLoad YouTube modiv -->
<script>
//<![CDATA[
/*! llyv.js v0.1.0 */
!function() {
  "use strict";
  var v = document.querySelectorAll(".llyv");
  for (var i = 0; i < v.length; i++) {
    var btn = document.createElement("div");
    btn.className = "llyv-play-btn";
    v[i].appendChild(btn);

    var img = document.createElement("img");
    img.src = "https://img.youtube.com/vi/" + v[i].dataset.id + "/hqdefault.jpg";
    v[i].appendChild(img);

    v[i].addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.id + "?rel=0&showinfo=0&autoplay=1");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      for (; this.firstChild;) this.removeChild(this.firstChild);
      this.appendChild(iframe);
    });
  }
}();
//]]>
</script>
<!-- End LazyLoad YouTube modiv -->

