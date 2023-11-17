<template>
  <nav mt-6 inline-flex gap-2 text-xl>
    <RouterLink to="/">
      <div icon-btn i-carbon-flash-filled />
    </RouterLink>
    <RouterLink to="/about">
      <div icon-btn i-carbon:align-box-middle-left />
    </RouterLink>

    <a
      i-carbon-logo-github icon-btn
      rel="noreferrer"
      href="https://github.com/nazhard/vivu"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>