import { writable } from "svelte/store";

//Objeto que puede ser modificado desde otro archivo
export const count = writable(0)