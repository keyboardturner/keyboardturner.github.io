---
layout: default
---

# Artwork Gallery

This is a work in progress. I will attempt to update and keep my portfolio here.

{% capture gallery_content %}
<div class="gallery">
	<a href="/pages/gallery/nonami_bard.md">Nonami - Bard / Rogue<img src="/assets/images/nonami_bard/FullRender_CombineSigned.png" alt="Nonami - Bard / Rogue"></a>
	<!-- <img src="/assets/images/berlin-1.jpg" alt="Artwork 1"> -->
	<!-- <img src="/assets/images/berlin-2.jpg" alt="Artwork 2"> -->
	<!-- <img src="/assets/images/berlin-3.jpg" alt="Artwork 3"> -->
	<!-- <img src="/assets/images/charlestonchews.jfif" alt="Artwork 4"> -->
	<!-- Add more images as needed -->
</div>
{% endcapture %}

{{ gallery_content | markdownify }}
