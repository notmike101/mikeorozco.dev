<template>
  <section class="section" id="tracegenerator">
    <h1 class="title has-text-centered">Trace Generator</h1>

    <div class="field">
      <label class="label">Input</label>
      <textarea v-model="input" class="textarea" rows="10"></textarea>
    </div>

    <div class="field">
      <label class="label">Font Size</label>
      <input
        v-model="fontSize"
        type="number"
        class="input"
        min="1"
        max="100"
        step="1"
      />
    </div>

    <div class="field">
      <pre class="output" :style="{ fontSize: fontSize + 'px' }"
        >{{ input }}
      </pre>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      fontSize: 42,
    };
  },
};
</script>

<style lang="scss" scoped>
#tracegenerator {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 52px);

  textarea {
    width: 100%;
    flex: 1;
  }

  .output {
    background-color: white;
    padding: 0;
    margin: 0;
    font-family: Trace;
    color: black;
    font-weight: bold;
    flex: 1;
    word-wrap: break-word;
    white-space: break-spaces;
  }
}

@media print {
  nav,
  h1,
  textarea,
  input,
  label {
    display: none;
  }

  div,
  section {
    margin: 0;
    padding: 0;
  }

  .output {
    display: block !important;
    width: 100%;
    height: 100%;
  }
}
</style>
