---
layout: default
---

# Artwork Gallery

Image gallery here

{% capture gallery_content %}
<div class="gallery">
    <img src="/assets/images/berlin-1.jpg" alt="Artwork 1">
    <img src="/assets/images/berlin-2.jpg" alt="Artwork 2">
    <img src="/assets/images/berlin-3.jpg" alt="Artwork 3">
    <img src="/assets/images/charlestonchews.jfif" alt="Artwork 4">
    <!-- Add more images as needed -->
</div>
{% endcapture %}

{{ gallery_content | markdownify }}
