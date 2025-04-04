---
# You can also start simply with 'default'
theme: ./theme
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Förderkompass – Wegweiser für Leipziger Unternehmen und Vereine
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
addons:
  - tldraw
transition: fade-out
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
colorSchema: light
fonts:
  sans: 'Geist:400,600'
  serif: 'Merriweather:400,700i'
  mono: 'Fira Code:400,600'
---

# Förderkompass

<p class="text-zinc-100">
Wegweiser für Leipziger Unternehmen und Vereine
<br>
Smart City Challenge 2025
</p>
<!-- <div @click="$slidev.nav.next" class="mt-12 py-1">
  Press Space for next page <carbon:arrow-right />
</div> -->

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/zeekrey/foerderkompass" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
layout: default
---

# Herausforderung

Die Fördermittellandschaft für Leipziger Unternehmen ist durch **Intransparenz**, fehlende zentrale Beratung und **komplexe**, **volatile** Ausschreibungen gekennzeichnet.

- 🌫️ Undurchsichtige Fördermittellandschaft für Leipziger Unternehmen.
- 🔍 Keine zentrale Beratungsstelle für Fördermöglichkeiten.
- ⏳ Unregelmäßige und volatile Förderausschreibungen.
- 🏭 Komplexe Anforderungen für verschiedene Branchen.
- 🌐 Mangel an transparenter, digitaler Förderinformation.

<!--
Here is another comment.
-->

---
transition: fade-out
layout: default
---

# Lösung

3 Stufen-Lösung um die Probleme **Undurchsichtbarkeit** und **Zugänglichkeit** zu lösen:

<v-clicks>

- **Iteration 1 - Aktuellen und hochwertigen Datenbestand erzeugen**
  - Anbindung vieler Quellen von Förderinformationen.
  - Harmonisierung der Datenlandschaft.
  - Pflegemöglichkeit durch Mitarbeitende des Amts für Wirtschaftsförderung.
- **Iteration 2 - Fördermöglichkeiten zugänglich machen**
  - Erarbeitung eines Entscheidungsbaums.
  - Nutzung des Entscheidungsbaums, um passende Förderung zu finden.
- **Iteration 3 - Individuelle Beratung durch KI**
  - Bereitstellung eines Chatbots.
  - Durch Eingabe natürlicher Sprache die passende Förderung finden.

</v-clicks>

---
transition: fade-out
layout: two-cols
class: relative
---

# Iteration 1

Aktuellen und hochwertigen Datenbestand erzeugen

- Ein hochwertiger Datenbestand ist die Grundvorraussetzung.
- Automatisierte Anbindung unterschiedlicher Förderdatenbanken wie bspw. [Förderdatenbank(BMWK)](https://www.foerderdatenbank.de/).
- Manuelle Pflege der Datenbank durch Mitarbeitende des Amts für Wirtschaftsförderung.

::right::

<tldraw class="inset-0" doc="tldraw/doc-sy_-d0Yjga3U1r1aOTNla.json"></tldraw>

---
transition: fade-out
layout: two-cols
class: relative
---

# Iteration 2

Fördermöglichkeiten zugänglich machen

- Erarbeitung eines Entscheidungsbaums.
- Nutzung des Entscheidungsbaums, um passende Förderung zu finden.
- Hilft dabei Datenlandschaft besser zu kategorisieren.
- → **Vorbereitung für KI-Einsatz**

::right::

<tldraw class="inset-0" doc="tldraw/doc-VqS_bjfYKBQ8gkoT36mMZ.json"></tldraw>

---
transition: fade-out
layout: two-cols
class: relative
---

# Iteration 3

Individuelle Beratung durch KI

- Anlernen einer Künstlichen Intelligenz (KI) auf Basis des erzeugten Datenbestands.
- Bereitstellung eines Chatbots.
- Durch Eingabe natürlicher Sprache die passende Förderung finden.

::right::

<tldraw class="inset-0" doc="tldraw/doc-k7pK4KJYBoozUcTFGIYwm.json"></tldraw>

---
layout: center
class: text-center
---

# Demo


[supa.works/foerderkompass](https://supa.works/foerderkompass)


---
transition: fade-out
layout: default
---

# Zeitplan

Start der 1. Iteration ist während der **Weiterentwicklungsphase**. Ziel ist eine homogene Datenlandschaft zu schaffen auf Basis der von Ihnen genannten Quellen.


<ul class="list-none flex border border-zinc-300 rounded-lg divide-zinc-300 divide-x space-x-4">
  <li class="list-none flex-1/4 p-0 py-2 m-0">
    <strong class="block">Iteration 1</strong>
    <span class="text-sm">Weiterentwicklungsphase (2 Monate)</span>
    </li>
  <li class="list-none flex-2/4 p-0 py-2 m-0">
    <strong class="block">Iteration 2</strong>
    <span class="text-sm">Umsetzungsphase (3 Monate)</span>
  </li>
  <li class="list-none flex-1/4 p-0 py-2 m-0">
    <strong class="block">Iteration 3</strong>
    <span class="text-sm">Umsetzungsphase (2 Monate)</span>
  </li>
</ul>

<!-- - **Iteration 1 - Aktuellen und hochwertigen Datenbestand erzeugen**
  - Anbindung vieler Quellen von Förderinformationen.
  - Harmonisierung der Datenlandschaft.
  - Pflegemöglichkeit durch Mitarbeitende des Amts für Wirtschaftsförderung.
- **Iteration 2 - Fördermöglichkeiten zugänglich machen**
  - Erarbeitung eines Entscheidungsbaums.
  - Nutzung des Entscheidungsbaums, um passende Förderung zu finden.
- **Iteration 3 - Individuelle Beratung durch KI**
  - Bereitstellung eines Chatbots.
  - Durch Eingabe natürlicher Sprache die passende Förderung finden. -->



---
layout: image-right
image: /buergergeld-screenshot.jpg
---

# Über mich

- 💼 Neugründung: Supa
- 👨🏻‍🍳 Christian Krey, 35 Jahre
- 👨🏼‍💻 Software Entwickler aus Leipzig
- 🎖️ Gewinner der Smart City Challenge 2024
- 📈 Bürgergeldrechner mit **4.000 Besuchern** pro Monat
- 🧏🏻‍♀️ Vorgaben zur Barrierefreiheit umgesetzt

<div class="abs-b pl-16">

  [Website](https://supa.works) · [GitHub](https://github.com/zeekrey) · [Buergergeld.io](https://www.buergergeld.io/)

</div>



---
layout: center
class: text-center
---

# Vielen Dank

[christian@krey.io](mailto:christian@krey.io)
