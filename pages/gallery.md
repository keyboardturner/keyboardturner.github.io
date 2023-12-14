---
layout: default
---

# Artwork Gallery

Content of your gallery goes here.

{% capture gallery_content %}
<div class="gallery">
    <img src="/assets/images/artwork1.jpg" alt="Artwork 1">
    <img src="/assets/images/artwork2.jpg" alt="Artwork 2">
    <!-- Add more images as needed -->
</div>
{% endcapture %}

{{ gallery_content | markdownify }}
