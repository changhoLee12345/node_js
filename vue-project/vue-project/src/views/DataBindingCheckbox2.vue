<template>
  <div>
    <label><input type="checkbox" v-model="checked" value="서울">서울</label><br>
    <label><input type="checkbox" v-model="checked" value="부산">부산</label><br>
    <label><input type="checkbox" v-model="checked" value="제주">제주</label><br>
    <span>체크한 지역: {{checked}}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: ['서울','부산'],
      }
    }
  }
</script>