<!-- JsonLD isPartOf WebPage-Home Page,Label -->
<b:if cond='data:view.isMultipleItems'>
<script type='application/ld+json'>
{&quot;@context&quot;:&quot;https://schema.org&quot;,
&quot;@graph&quot;:[
{&quot;@type&quot;:&quot;Organization&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#organization&quot;,
&quot;name&quot;:&quot;<data:blog.title/>&quot;,
&quot;url&quot;:&quot;<data:blog.canonicalHomepageUrl/>&quot;,
&quot;address&quot;: {&quot;@type&quot;: &quot;PostalAddress&quot;,
&quot;addressLocality&quot;: &quot;Kraton,D.I.Yogyakarta,Indonesia&quot;,
&quot;streetAddress&quot;: &quot;Jalan Panembahan Mangkurat no.121B Kode Pos 55131&quot; },
&quot;email&quot;: &quot;cuantoprofit@gmail.com&quot;,
&quot;telephone&quot;: &quot;+628998188966&quot;,
&quot;sameAs&quot;:[&quot;https://www.facebook.com/username&quot;,
&quot;https://www.instagram.com/username&quot;,
&quot;https://www.youtube.com/username&quot;,
&quot;https://pinterest.com/username&quot;,
&quot;https://twitter.com/username&quot;],
&quot;logo&quot;:{&quot;@type&quot;:&quot;ImageObject&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#logo&quot;,
&quot;url&quot;:&quot;https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCKNBkjgjgxVlSUg9yZzvgTfcOPE6CH2GBMaSY96E8ZYf_7bGznH3oqCatdHXEt4wF6lPXUMk-wCpsxhRZlq44pJvTW-_BnSDOHUBCxtWuKy3srd5EkRhsIBoiDk1kQ7QFM_6PwrJOCkbyKCarhchzmOebSfqNe0f4iCQgUHtWIo3G9E1-JObXLTBfPP4r/s320/Jagoanshare.png&quot;,
&quot;width&quot;:512,
&quot;height&quot;:512,
&quot;caption&quot;:&quot;<data:blog.title/>&quot;},
&quot;image&quot;:{&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#logo&quot;}},
{&quot;@type&quot;:&quot;WebSite&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#website&quot;,
&quot;url&quot;:&quot;<data:blog.canonicalHomepageUrl/>&quot;,
&quot;name&quot;:&quot;<data:blog.title/>&quot;,
&quot;description&quot;:&quot;<data:blog.metaDescription.escaped/>&quot;,
&quot;publisher&quot;:{&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#organization&quot;},
&quot;potentialAction&quot;:{&quot;@type&quot;:&quot;SearchAction&quot;,
&quot;target&quot;:&quot;<data:blog.canonicalHomepageUrl/>search?q={search_term_string}&quot;,
&quot;query-input&quot;:&quot;required name=search_term_string&quot;}},
{&quot;@type&quot;:&quot;WebPage&quot;,
&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#webpage&quot;,
&quot;url&quot;:&quot;<data:blog.canonicalHomepageUrl/>&quot;,
&quot;inLanguage&quot;:&quot;id-ID&quot;,
&quot;name&quot;:&quot;<data:blog.title/>&quot;,
&quot;isPartOf&quot;:{&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#website&quot;},
&quot;about&quot;:{&quot;@id&quot;:&quot;<data:blog.canonicalHomepageUrl/>#organization&quot;},
&quot;description&quot;:&quot;<data:blog.metaDescription.escaped/>&quot;}]}
</script>
</b:if>    
<b:if cond='data:view.isSingleItem'>
  <meta expr:content='data:post.snippet' name='description'/>
</b:if> 
