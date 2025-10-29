<!--<script setup lang="ts">
import FeaturesSection from './components/FeaturesSection.vue'
</script>-->

<template>
  <div class="app-container">
    <div class="logos">
	    <img src="./Logo.jpg"  alt="Arsenic Logo" width=150px>  
    </div>

    <!-- Main feature section -->
   <!-- <FeaturesSection msg="Features" /> -->
    <!-- Routers of the Application-->
	<router-view />
		
    <!-- Footer section -->
    <footer class="app-footer">
      <p>
        © {{ new Date().getFullYear() }} Ticket Management System | Powered by Vue
      </p>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logos {
  margin-top: 20px;
}

.logo {
  height: 60px;
  margin: 0 10px;
}

.app-footer {
  background-color: #f5f5f5;
  padding: 1rem 0;
  font-size: 14px;
  color: #555;
  border-top: 1px solid #ddd;
}
</style>

