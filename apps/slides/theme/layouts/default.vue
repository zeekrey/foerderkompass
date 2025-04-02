<template>
  <div class="slidev-layout default relative">
    <div class="my-auto">
      <slot />
    </div>
    <div
      class="-z-10 inset-0 absolute bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    ></div>
  </div>
</template>
