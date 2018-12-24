const Mixin = {
  computed: {
    reversedComputed() {
      return this.$options.filters.reversed(this.sampleText)
    },
    withLengthComputed() {
      return this.$options.filters.withLength(this.sampleText)
    }
  }
}

export default Mixin
