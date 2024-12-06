<!-- <template>
    <div>
        <h1>
            {{ title }}
            {{ data.title }}
        </h1>

        <p>
            Today is: {{ date }}
            Today is: {{ data.date }}
        </p>

        <h4>
            You've: {{ data.tasks.length }} tasks

            <span>
                Completed: {{ data.tasks.filter(task => task.completed).length }}
            </span>

            <span>
                Pending: {{ data.tasks.filter(task => !task.completed).length }}
            </span>
        </h4>
    </div>
</template>

<script setup>
conts title = 'Hello Vue 3';
const date = new Date().toDateString();

const data = {
    title: 'Hello Vue 3',
    date: new Date().toDateString(),
    tasks: [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false }
    ]
};
</script>

<style scoped></style> -->


<template>
    <Binding />
</template>

<script setup>
import Binding from './class/Binding.vue';
</script>

<style scoped></style>
