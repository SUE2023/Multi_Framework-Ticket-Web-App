<script setup lang="ts">
import { ref } from 'vue'
import "./FeaturesSection.css";

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

	<section className="features">
      <div className="feature-box">
        <h3>Track Tickets Easily</h3>
        <p>Manage all customer issues in one place.</p>
      </div>
      <div className="feature-box">
        <h3>Collaborate Seamlessly</h3>
        <p>Empower your team to solve customer problems faster.</p>
      </div>
      <div className="feature-box">
        <h3>Analytics & Insights</h3>
        <p>Understand performance through detailed reports.</p>
      </div>
    </section>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
