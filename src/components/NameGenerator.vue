<template>
  <div class="name-generator">
    <div class="input-section">
      <input 
        v-model="inputName" 
        type="text" 
        placeholder="Enter a name"
        class="name-input"
      >
      <button 
        @click="handleGenerate" 
        class="generate-btn"
        :style="buttonStyle"
      >
        Generate
      </button>
    </div>
    
    <div v-if="generatedText" class="result-section">
      <p class="generated-text">{{ generatedText }}</p>
    </div>

    <div v-if="generatedHistory.length" class="history-section">
      <h3>Generated History</h3>
      <div class="history-items">
        <div v-for="(item, index) in generatedHistory" :key="index" class="history-item">
          <p class="history-text">{{ item.generated_text }}</p>
          <div class="history-meta">
            <span class="history-name">Name: {{ item.name }}</span>
            <span class="history-time">{{ formatTime(item.timestamp) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { generateText, getGeneratedContent } from '../utils/nameReplacer';

export default {
  name: 'NameGenerator',
  setup() {
    const inputName = ref('');
    const generatedText = ref('');
    const generatedHistory = ref([]);

    const handleGenerate = async () => {
      if (inputName.value.trim()) {
        generatedText.value = await generateText(inputName.value.trim());
        // Refresh history after generating new content
        loadHistory();
      }
    };

    const loadHistory = async () => {
      generatedHistory.value = await getGeneratedContent();
    };

    const formatTime = (timestamp) => {
      return new Date(timestamp).toLocaleString();
    };

    const buttonStyle = {
      backgroundColor: '#5c1b34',
      color: '#fff0b3',
      fontFamily: 'Alfa Slab One, cursive'
    };

    // Load history when component mounts
    onMounted(() => {
      loadHistory();
    });

    return {
      inputName,
      generatedText,
      generatedHistory,
      handleGenerate,
      buttonStyle,
      formatTime
    };
  }
};
</script>

<style scoped>
.name-generator {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
}

.input-section {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.name-input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid #f05a94;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
}

.generate-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: opacity 0.2s;
}

.generate-btn:hover {
  opacity: 0.9;
}

.result-section {
  padding: 1rem;
  background-color: #fff0b3;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.generated-text {
  margin: 0;
  font-size: 1.2rem;
  color: #5c1b34;
  font-family: 'Lato', sans-serif;
}

.history-section {
  margin-top: 2rem;
}

.history-section h3 {
  color: #5c1b34;
  font-family: 'Alfa Slab One', cursive;
  margin-bottom: 1rem;
}

.history-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.history-item {
  padding: 1rem;
  background-color: #fff0b3;
  border-radius: 4px;
}

.history-text {
  margin: 0 0 0.5rem 0;
  color: #5c1b34;
  font-family: 'Lato', sans-serif;
}

.history-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #5c1b34;
  opacity: 0.8;
}

.history-name {
  font-weight: bold;
}
</style>
