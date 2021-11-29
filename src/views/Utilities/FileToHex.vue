<template>
  <section class="section" id="filetohex">
    <h1 class="title has-text-centered">File To Hex Converter</h1>

    <div class="field">
      <label class="label">Hex Format</label>
      <template v-for="(format, index) in formats">
        <div class="control" :key="index">
          <label class="radio">
            <input
              type="radio"
              name="hexFormat"
              :value="format"
              v-model="prepend"
              :key="index"
            />
            {{ format }}
          </label>
        </div>
      </template>
    </div>

    <div class="field">
      <label class="label">File</label>
      <div class="control">
        <input
          class="input"
          type="file"
          name="file"
          required
          @change="selectedFile"
          ref="file"
        />
      </div>
    </div>
    <textarea
      v-model="hex"
      readonly
      placeholder="File content converted to hex..."
    ></textarea>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fileContent: '',
      prepend: '\\x',
      formats: ['\\x', '0x', ''],
      hex: null,
    };
  },
  watch: {
    prepend() {
      this.hex = this.fileToHex(this.file);
    },
    fileContent() {
      this.hex = this.fileToHex(this.file);
    },
  },
  methods: {
    fileToHex() {
      return this.fileContent
        .split('')
        .map(
          (char) =>
            this.prepend +
            char
              .charCodeAt(0)
              .toString(16)
              .padStart(2, '0')
        )
        .join('');
    },
    selectedFile() {
      const { files } = this.$refs.file;

      if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = () => {
          this.fileContent = reader.result;
        };

        reader.readAsText(file);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  height: 100%;
  min-height: 500px;
}
</style>
