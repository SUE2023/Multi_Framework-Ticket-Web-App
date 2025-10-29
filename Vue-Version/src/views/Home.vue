<script setup lang="ts">
import FeaturesSection from '../components/FeaturesSection.vue'
</script>

<template>
  <div class="hero">
    <div class="circle small"></div>
    <div class="circle medium"></div>
    <div class="circle large"></div>

    <h1>Welcome to Ticket System</h1>
    <p>
      Simplify your customer support with a fast, reliable ticket
      management system.
    </p>

    <nav>
      <router-link class="Login-link" to="/login">Login</router-link>
      <span> | </span>
      <router-link class="GetStarted-link" to="/get-started">Get Started</router-link>
    </nav>

    <!-- FeaturesSection -->
    <FeaturesSection msg="Features" />
  </div>
</template>

<style scoped>
.hero {
  padding: 3rem 1rem;
}
.circle.small { width: 40px; height: 40px; border-radius: 50%; background: #e5e7eb; display:inline-block }
.circle.medium { width: 80px; height: 80px; border-radius: 50%; background: #d1d5db; display:inline-block }
.circle.large { width: 140px; height: 140px; border-radius: 50%; background: #9ca3af; display:inline-block }
.Login-link, .GetStarted-link { margin: 0 8px; color: #3490dc; text-decoration:none }
</style>
