<template>
  <div class="col-xs-12">
    <header>
      <h1>default section:</h1>
      <slot></slot>
      <h2>custom section 1:</h2>
      <slot name="custom1"></slot>
      <h2>custom section 2:</h2>
      <div class="text-danger">
        <slot name="custom2"></slot>
      </div>
      <h2>custom section 3:</h2>
      <slot name="custom3"></slot>
    </header>
  </div>
</template>

<script>
</script>

<style>

</style>
