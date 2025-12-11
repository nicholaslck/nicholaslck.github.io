---
title: Predictive Reversible Halftoning
description: The objective of this research project was to convert color images into halftone images while ensuring reversibility. This means that the resulting black and white halftone image could be transformed back into the original color image using a deep learning model. The project was implemented using PyTorch, and extensive experiments were conducted to validate the approach. The findings and methodology of this project were published in the TVCG journal in 2023.
cover_image: /uploads/predreshalf_cover.jpg
url: https://nicholaslck.github.io/predreshalf
type: mphil_project
date: 2023-05-23
related_work_experience: ''
related_project: predictive-reversible-halftoning
---
# From Zero to Magic: Taming Reversible Halftoning with Predictive Luminance

Picture staring at a black-and-white dot matrix, your brain effortlessly conjuring the original colors. That's pure magic, right? That's the thrill that hooked me during my MPhil at CUHK on "Taming Reversible Halftoning via Predictive Luminance," published in TVCG 2023. I dove in after geeking out on classic halftoning like error diffusion and ordered dithering; Menghan Xia's prior work flipping B&W to color felt impossible yet irresistible—humans guess grayscale easy, but full color? Game on.

Menghan Xia, the original author of reversible halftoning, shared his epic fails to steer me clear of dead ends. Prof. Tien-Tsin Wong played mentor beacon, nudging me through the fog. It took me a full year from deep-learning noob to acceptance, like solo-hiking a peak while inventing the trail.​

## Tech Breakthrough: Predictor-Embedded Magic

My lead contribution? The predictor-embedded approach: split LAB's L channel (luminance) from AB (color), embedding predictions to slash stored data while keeping color fidelity sky-high. Born from ruthless trial-and-error watching what models learned in training vs. runtime capacity.

The beast? Tuning weights across a zoo of loss functions—mess it up, and halftones wouldn't even form. Most time sunk into empirical tweaks; multi-stage training and smart weighting nailed blue-noise quality against restoration accuracy. You can check the project on [Github](https://nicholaslck.github.io/predreshalf/)

## The Grind: Obsidian and Scrum Kept Me Sane

Zero DL knowledge meant a year of relentless learning. Milestones: post-submission, reviewers demanded spectrum analysis, so I stacked comparisons against priors.

Web dev habits saved the day—Obsidian for every note, personal scrum sprints to fight the "what am I even doing?" void. Look, I am not a fan of scrum, but the advice from my previous company boss did save me from this long journey. Research is 90% failures, most of the paper hide this truth. Therefore, logging your every day works systematically, mining insights, and discussing with teammates will lead to win.

## Reflections: Iterate Like It's Web Dev

Biggest lesson: zero in on tools that work, ignore shiny distractions. This honed my iteration muscle, echoing dashboard builds and design systems today—even if no direct career pivot yet. Citations roll in, proving the magic sticks.​

Demo time? Hit the [paper page](https://nicholaslck.github.io/predreshalf/). Thoughts on your halftoning hacks? Drop a comment to me.
