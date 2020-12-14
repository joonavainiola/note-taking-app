<template>
  <div class="note_container">
    <h1 class="note_heading">Edit note #{{ $route.params.noteIndex }}</h1>
    <div class="note_content">
      <form class="note_form">
        <textarea
          :placeholder="notes[$route.params.noteIndex].description"
          rows="4"
          ref="edited_note"
        >
        </textarea>
        <button @click.prevent="edit($route.params.noteIndex)" type="submit">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteInfo",
  computed: {
    notes() {
      return this.$store.state.notes;
    },
  },
  methods: {
    edit(noteIndex) {
      const noteText = this.$refs.edited_note.value;
      this.$store.commit("editNote", { noteIndex, noteText });
      this.$router.push({ name: "Notes" });
      this.$refs.edited_note.value = "";
    },
  },
};
</script>

<style>
.note_container {
  padding: 40px 20px;
  width: 100%;
  flex: 1;
  background-color: #f7f7f7;
}

.note_heading {
  margin: 0;
  color: rgb(243, 145, 161);
}

.note_content {
  width: 100%;
  margin: 0 auto;
}

.note_form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 20px auto 0;
}

.note_form textarea {
  font-family: "Courier New", Courier, monospace;
  font-size: 17px;
  outline: none;
  background-color: white;
  border: 1px solid lightgrey;
  resize: none;
  padding: 13px 15px;
  color: #333;
}

.note_form textarea::placeholder {
  color: #333;
}

.note_form button {
  margin-top: 15px;
  padding: 12px 8px;
  background: linear-gradient(rgb(111, 192, 221), rgb(143, 206, 228));
  color: white;
  font-weight: bold;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.note_form button:focus {
  outline: none;
}
</style>