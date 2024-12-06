<template>
    <div class="card-container">
        <img class="round" :src="data[0].picture.large" alt="user" />
        <h3>
            {{ data[0].name.first }}
            {{ data[0].name.last }}
        </h3>
        <h6>
            {{ data[0].email }}
        </h6>
        <p>
            {{ data[0].location.city }},
            {{ data[0].location.country }}
        </p>
        <p>
            <strong>DOB:</strong> {{ dob }}
        </p>
        <button class="primary">
            Follow
        </button>
    </div>
</template>

<script setup>
import data from '../data/user';

const dob = new Date(data[0].dob.date).toDateString();

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
    box-sizing: border-box;
}

body {
    background-color: #28223F;
    font-family: Montserrat, sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    min-height: 100vh;
    margin: 0;
}

h3 {
    margin: 10px 0;
}

h6 {
    margin: 5px 0;
    text-transform: uppercase;
}

p {
    font-size: 14px;
    line-height: 21px;
}

.card-container {
    background-color: #231E39;
    border-radius: 5px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    color: #B3B8CD;
    padding: 30px;
    position: relative;
    width: 350px;
    max-width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.card-container .round {
    border: 1px solid #03BFCB;
    border-radius: 50%;
    padding: 7px;
}

button.primary {
    background-color: #03BFCB;
    border: 1px solid #03BFCB;
    border-radius: 3px;
    color: #231E39;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    padding: 10px 25px;
}

button.primary.ghost {
    background-color: transparent;
    color: #02899C;
}

.skills {
    background-color: #1F1A36;
    text-align: left;
    padding: 15px;
    margin-top: 30px;
}

.skills ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.skills ul li {
    border: 1px solid #2D2747;
    border-radius: 2px;
    display: inline-block;
    font-size: 12px;
    margin: 0 7px 7px 0;
    padding: 7px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}
</style>
