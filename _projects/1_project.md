---
layout: page
title: Topic 1 - Crumpling behavior of 2D sheets
img: assets/img/project/topic1/2.png
importance: 1
category: work
related_publications: true
---

Our research aims to establish a physics-based, simulation-driven understanding of how nanoscale interactions, geometry, and microstructural imperfections govern the crumpling of graphene and related 2D sheet macromolecules. Using atomistically informed coarse-grained molecular dynamics (CG-MD), we quantify how initially flat sheets evolve into hierarchical, sphere-like crumpled architectures through coupled mechanisms of edge bending, self-adhesion-driven folding, and final-stage compression. Across graphene sheets, nanoribbons, and polymer-grafted graphene, our work reveals robust power-law scaling laws linking key structural metrics (e.g., radius of gyration and hydrodynamic/viscosity radii) to controllable design variables such as sheet size, adhesion strength, aspect ratio, defect topology, and grafting density. These results provide a predictive framework for tailoring packing efficiency (via fractal descriptors), mechanical heterogeneity, and compaction resistance—enabling rational design of crumpled graphene-based matter for functional nanocomposites, coatings, and energy-related applications.

### Highlights from our published work
<ul>
  <li>
    Universal crumpling regimes: Identified three crumpling regimes dominated by edge bending, self-adhesion, and further compression, offering a mechanistic “map” of crumpling pathways.
  </li>
  <li>
      Scaling and packing efficiency: Predicted fractal-like packing behavior and demonstrated size-/adhesion-dependent scaling relations for structural radii.
  </li>
  <li>
    Self-adhesion as a primary control knob: Showed that adhesion can dominate crumpling energetics and strongly modulate folding motifs and final packing efficiency.
  </li>
  <li>
    Defect engineering of crumpled graphene: Revealed how reconstructed vacancy defects and Stone–Wales defects weaken self-adhesion, alter scaling behavior, increase stress/curvature heterogeneity, and promote glass-like internal structures—leading to higher resistance to compaction.
  </li>
  <li>
    Geometry and functionalization effects: Established aspect-ratio-dependent crumpling modes in graphene nanoribbons and demonstrated how polymer grafting density suppresses self-adhesion/self-folding while reducing mechanical heterogeneity in crumpled polymer-grafted graphene sheets.
  </li>
</ul>

Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
