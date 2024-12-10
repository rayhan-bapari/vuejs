<template>
    <div class="relative flex min-h-screen flex-col justify-center space-y-12 overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div class="mx-auto w-4/12 py-8">
            <header class="mb-8 text-center">
                <h1 class="text-3xl font-bold text-gray-800">
                    Task Management App
                </h1>
            </header>

            <div class="rounded-lg bg-white p-6 shadow-md">
                <div class="mb-4 flex items-center" id="taskForm" :class="{ 'hidden': isFormHidden }">
                    <input v-model="newTask" @keyup.enter="addTask"
                        class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none" type="text"
                        placeholder="Add a new task" />
                    <button @click="addTask" class="ml-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                        Add
                    </button>
                </div>

                <div v-if="tasks.length === 0" class="text-center text-gray-500 py-4">
                    No tasks available
                </div>

                <ul v-else class="divide-y divide-gray-200">
                    <li v-for="task in tasks" :key="task.id"
                        class="flex items-center justify-between py-3 px-2 rounded-md"
                        :class="{ 'bg-green-50 border border-red-500': task.completed }">
                        <div class="flex items-center">
                            <span :class="{ 'line-through': task.completed }">{{ task.text }}</span>
                        </div>
                        <div class="flex">
                            <button @click="toggleComplete(task)" type="button"
                                class="focus:outline-none text-white bg-green-400 hover:bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                {{ task.completed ? 'Undo' : 'Complete' }}
                            </button>

                            <button @click="deleteTask(task.id)" type="button"
                                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                                Delete
                            </button>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="mt-4 text-center">
                <button @click="isFormHidden = !isFormHidden"
                    class="ml-2 mx-auto rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                    {{ isFormHidden ? 'Show Form' : 'Hide Form' }}
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const tasks = ref([])
const newTask = ref('')
const isFormHidden = ref(false)

const addTask = () => {
    if (newTask.value.trim().length < 3) {
        alert('Task must be at least 3 characters long')
        return
    }

    tasks.value.push({
        id: Date.now(),
        text: newTask.value.trim(),
        completed: false
    })

    newTask.value = ''
    saveTasks()
}

const hideForm = () => {
    document.getElementById('taskForm').classList.toggle('hidden')
}

const toggleComplete = (task) => {
    task.completed = !task.completed
    saveTasks()
}

const deleteTask = (taskId) => {
    tasks.value = tasks.value.filter(task => task.id !== taskId)
    saveTasks()
}

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value))
}

const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
        tasks.value = JSON.parse(savedTasks)
    }
}

onMounted(() => {
    loadTasks()
})
</script>

<style scoped></style>
