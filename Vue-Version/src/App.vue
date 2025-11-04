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
  max-width: 1440px;
  margin: 0 auto;
}

.logos {
  margin-top: 20px;
}

.logo {
  height: 60px;
  margin: 0 10px;
}

.app-footer {
  background-color: #20232a;
  padding: 1rem 0;
  font-size: 14px;
  color: #61dafb;
  border-top: 1px solid #ddd;
  width:100%;
  position: fixed;
  bottom:0;
}
</style>

