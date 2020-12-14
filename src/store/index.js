import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        notes: []
    },
    getters: {

    },
    mutations: {
        SET_NOTES(state, notes) {
            state.notes = notes;
        },
        addNote(state, newNote) {
            state.notes.push({ id: state.notes.length + 1, description: newNote })
        },
        editNote(state, { noteIndex, noteText }) {
            const note = state.notes.find((note, index) => index === Number(noteIndex));
            note.description = noteText;
        },
        deleteNote(state, noteIndex) {
            state.notes.splice(noteIndex, 1);
        }
    },
    actions: {
        getNotes({ commit }) {
            axios.get("https://api.mocki.io/v1/a3a951c4")
                .then(res => {
                    commit('SET_NOTES', res.data);
                });
        }
    },
    modules: {
    }
})
