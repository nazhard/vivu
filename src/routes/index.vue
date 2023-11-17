<script setup>
const name = ref('')

const router = useRouter()
function go() {
  if (name.value) {
    router.push(`/hi/${encodeURIComponent(name.value)}`)
  }
}
</script>

<template>
  <div>
    <div i-carbon-flash-filled inline-block text-4xl />
    <p>
      <a rel="noreferrer" href="https://github.com/nazhard/vivu" target="_blank">
        Vivu - Simple Starter
      </a>
    </p>
    <p>
      <em text-sm op75>Simple Template Fully Designed for Flexibility</em>
    </p>

    <div py-4 />
    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
      type="text"
      v-bind="$attrs"
      p="x-4 y-2"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      w-250px text-center bg-transparent
    />

    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go">
        Go
      </button>
    </div>
  </div>
</template>