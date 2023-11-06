<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-btn>
        <router-link to="/AboutMe">{{title1}}</router-link>
      </q-btn>
      <q-btn>
        <router-link to="/EducationDetails">{{title2}}</router-link>
      </q-btn>
      <q-btn>
        <router-link to="/MyTechnicalSkillSet">{{title3}}</router-link>
      </q-btn>
      <q-btn>
        <router-link to="/MyHobbies">{{title4}}</router-link>
      </q-btn>

    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title1: {
      type: String,
      required: true
    },

    title2: {
      type: String,
      required:true
    },

    title3: {
      type: String,
      required:true
    },

    title4: {
      type: String,
      required:true
    }
    
    
  }
})
</script>
