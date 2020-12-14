<template>
  <div class="notes_container">
    <h1 class="notes_heading">My notes</h1>
    <p>
      You can edit (
      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      ) and delete (
      <i class="fa fa-trash-o" aria-hidden="true"></i>
      ) your notes!
    </p>
    <div class="notes_content" v-if="notes.length > 0">
      <div
        class="notes_note"
        v-for="(note, index) in notes"
        v-bind:key="note.id"
      >
        <h3 class="notes_header">Note #{{ index + 1 }}</h3>
        <div class="pin">
          <div class="pin_hole"></div>
          <div class="pin_line"></div>
          <div class="pin_head"></div>
        </div>
        <div class="notes_buttons">
          <router-link
            class="notes_edit"
            :to="{ name: 'NoteInfo', params: { noteIndex: index } }"
          >
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </router-link>
          <i
            @click.prevent="del(index)"
            class="fa fa-trash-o"
            aria-hidden="true"
          ></i>
        </div>
        <div class="notes_textbox">
          <p class="notes_text">{{ note.description }}</p>
        </div>
      </div>
    </div>
    <div class="notes_content" v-else>
      <p>You don't have any notes!</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Notes",
  computed: {
    notes() {
      return this.$store.state.notes;
    },
  },
  methods: {
    del(noteIndex) {
      this.$store.commit("deleteNote", noteIndex);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap");

.notes_container {
  padding: 40px 20px;
  width: 100%;
  background-color: #f7f7f7;
}

.notes_content {
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px auto;
}

.notes_heading {
  margin: 0;
  color: rgb(243, 145, 161);
}

.notes_note {
  position: relative;
  box-sizing: border-box;
  text-decoration: none;
  width: 280px;
  height: 240px;
  padding: 10px 15px;
  background-color: lightblue;
  text-align: center;
  margin: 30px 20px;
  box-shadow: 0px 16px 10px -5px rgb(163, 163, 163),
    inset 0 40px 20px -7px rgba(0, 0, 0, 0.07);
  transition: 0.3s;
}

.notes_note:hover {
  box-shadow: 0px 10px 10px -5px rgb(163, 163, 163),
    inset 0 40px 20px -7px rgba(0, 0, 0, 0.09);
}

.notes_note:nth-child(4n + 1) {
  transform: rotate(5deg);
  background-color: rgb(255, 255, 183);
}

.notes_note:nth-child(4n + 2) {
  transform: rotate(-7deg);
  background-color: pink;
}

.notes_note:nth-child(4n + 3) {
  transform: rotate(0deg);
  background-color: lightgreen;
}

.notes_note:nth-child(4n + 4) {
  transform: rotate(-10deg);
  background-color: rgb(143, 206, 228);
}

.notes_header {
  margin: 0;
  text-align: left;
  color: #333;
}

.notes_textbox {
  height: 90%;
  padding-top: 10px;
}

.notes_text {
  text-align: left;
  font-family: "Sue Ellen Francisco", cursive;
  font-size: 28px;
  margin: 0;
  padding: 5px 0;
  color: #0324b9;
  transform: rotate(2deg);
  width: 100%;
  height: 160px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.notes_buttons {
  position: absolute;
  right: 18px;
  top: 10px;
  display: flex;
  align-items: center;
}

.notes_edit {
  margin-top: 4px;
}

.notes_buttons i {
  color: #333333;
  margin-left: 10px;
  transition: transform 0.3s;
}

.notes_buttons i:hover {
  transform: scale(1.2);
}

.pin {
  position: absolute;
  top: -8px;
  left: 48%;
  width: 36px;
  display: flex;
  align-items: center;
  transform: rotate(-45deg);
  z-index: 2;
}

.pin_hole {
  min-width: 4px;
  max-width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #4d4d4d;
  z-index: -1;
}

.pin_line {
  margin-left: -2px;
  height: 2px;
  width: 100%;
  background: linear-gradient(#636363, #dadada);
}

.pin_head {
  min-width: 22px;
  max-width: 22px;
  height: 22px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 75% 35%,
    rgb(255, 175, 175) 3%,
    rgb(158, 1, 1) 50%,
    rgb(255, 133, 133) 100%
  );
}
</style>