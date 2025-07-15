<b:comment><!-- Title start --></b:comment>
<b:if cond='data:view.isPost'>
    <title><data:blog.pageName/> - <data:blog.title/></title> <b:comment><!-- title post --></b:comment>
<b:elseif cond='data:view.isPage'/>
    <title><data:blog.pageName/> - VidoneTube | AI - Wordpress - Blogger</title> <b:comment><!-- title page --></b:comment>
<b:elseif cond='data:view.isHomepage'/>
    <!-- Start https://www.vidonetube.blogspot.com: AI - Wordpress - Blogger -->
<b:if cond='data:blog.url == data:blog.homepageUrl'>
<b:if cond='data:blog.url == &quot;https://vidonetube.blogspot.com/&quot;'>
<title><data:blog.pageTitle/></title>
<meta content='share a collection of video tutorials on wordpress, hosting, AI, blogger and affiliate info - for beginners to monetize blogs' name='description'/>
<meta content='tutorial, Blogger, WordPress, AI, plugin, hosting, video' name='keywords'/> </b:if>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<title><data:blog.pageName/> - <data:blog.title/></title>
<meta expr:content='data:blog.pageName + &quot;, &quot; + data:blog.title + &quot;, &quot; + data:blog.pageName' name='Description'/>
<meta expr:content='data:blog.pageName + &quot;, &quot; + data:blog.title + &quot;, &quot; + data:blog.pageName' name='Keywords'/>
</b:if>
<b:if cond='data:blog.url == data:blog.homepageUrl'> <title><data:blog.pageTitle/></title> <meta content='Sshare a collection of video tutorials on wordpress, hosting, AI, blogger and affiliate info - for beginners to monetize blogs.' name='DESCRIPTION'/> <meta content='tutorial, Blogger, WordPress, AI, plugin, hosting, video' name='KEYWORDS'/> </b:if> <b:if cond='data:blog.pageType == &quot;item&quot;'> <title><data:blog.pageName/> | <data:blog.title/></title> <meta expr:content='data:blog.pageName + &quot;, share a collection of video tutorials on wordpress, hosting, AI, blogger and affiliate info - for beginners to monetize blogs.&quot;' name='description'/> <meta expr:content='data:blog.pageName + &quot;, tutorial, Blogger, WordPress, AI, plugin, hosting, video, produk afiliasi,marketing&quot;' name='keywords'/> </b:if>
<meta content='1 days' name='revisit'/>
<meta content='1 days' name='revisit-after'/>
<meta content='document' name='resource-type'/>
<meta content='all' name='audience'/>
<meta content='general' name='rating'/>
<meta content='all' name='robots'/>
<meta content='index, follow' name='robots'/>
<meta content='nama anda' name='author'/>
<meta content='id' name='language'/>
<meta content='indonesia' name='country'/>
<meta content='Yogyakarta' name='geo.placename'/>
<meta content='blogger' name='generator'/>
<meta content='true' name='MSSmartTagsPreventParsing'/>
<meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
<meta content='IE=8' http-equiv='X-UA-Compatible'/>
<link expr:href='data:blog.url' rel='canonical'/>
<!-- Meta Robot -->
<b:if cond='data:view.isSearch or data:view.isArchive'>
    <meta content='noindex, noarchive' name='robots'/>
</b:if>  
<b:else/>
<title><data:blog.pageName/> ~ <data:blog.title/></title>
</b:if>
<!-- End https://www.vidonetube.blogspot.com: AI - Wordpress - Blogger --> <b:comment><!-- title homepage --></b:comment>
<b:elseif cond='data:view.isArchive'/>
    <title><data:blog.pageName/> - VidoneTube | AI - Wordpress - Blogger</title> <b:comment><!-- title archive --></b:comment>
<b:elseif cond='data:view.isLabelSearch'/>
    <title><data:blog.pageName/> - VidoneTube | AI - Wordpress - Blogger</title> <b:comment><!-- title label --></b:comment>
<b:elseif cond='data:view.search.query'/>
    <title><data:blog.pageName/> - <data:blog.title/></title> <b:comment><!-- title search --></b:comment>
<b:elseif cond='data:view.isError'/>
    <title>404 : <data:messages.theresNothingHere/></title> <b:comment><!-- title error --></b:comment>
<b:elseif cond='data:view.isMultipleItems and data:blog.pageName == &quot;&quot;'/>
    <title><data:messages.showAll/> - <data:blog.title/></title> <b:comment><!-- title all post --></b:comment>
<b:else/>
    <title><data:blog.pageName/></title> <b:comment><!-- default title --></b:comment>
</b:if>
<b:comment><!-- Title end --></b:comment>
