<template>
  <div class="sidebar">
    <router-link class="logo" to="/">
      <h1>Note-taking app</h1>
    </router-link>
    <form class="add">
      <textarea placeholder="Write a note!" rows="4" ref="new_note"></textarea>
      <button @click.prevent="addNote()" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    addNote() {
      const txt = this.$refs.new_note.value;
      this.$store.commit("addNote", txt);
      if (this.$route.name != "Notes") {
        this.$router.push({ name: "Notes" });
      }
      this.$refs.new_note.value = "";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sue+Ellen+Francisco&display=swap");

.logo {
  text-decoration: none;
}

.sidebar {
  max-width: 350px;
  width: 100%;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightgrey;
  /* border-right: 1px solid #d8d8d8; */
}

.sidebar h1 {
  font-family: "Sue Ellen Francisco", cursive;
  font-size: 40px;
  color: #0324b9;
  margin: 5px 0 0 0;
  font-weight: lighter;
  text-transform: uppercase;
  transform: rotate(2deg);
}

.add {
  max-width: 250px;
  width: 100%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
}

.add textarea {
  font-family: "Courier New", Courier, monospace;
  font-size: 17px;
  outline: none;
  background-color: #fafafa;
  border: 1px solid lightgrey;
  resize: none;
  padding: 13px 15px;
  color: #333;
}

.add textarea::placeholder {
  color: #333;
}

.add button {
  margin-top: 15px;
  padding: 12px 8px;
  background: linear-gradient(rgb(243, 145, 161), rgb(250, 175, 189));
  color: white;
  font-weight: bold;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.add button:focus {
  outline: none;
}

@media only screen and (max-width: 900px) {
  .sidebar {
    max-width: 100%;
    margin: 0 auto;
    border: none;
    border-bottom: 1px solid lightgrey;
  }
}
</style>