import { writable } from 'svelte/store'

export const items = writable([
    { name: "Kake", done: false },
    { name: "Proteins", done: false },
    { name: "Eggs", done: false }
]);

export const add = (item) => {
    items.update((items) => [item, ...items]);
}

export const remove = (item) => {
    items.update((items) => items.filter(i => i != item))
}