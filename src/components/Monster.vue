<template>
    <div class="wrapper">
        <div class="monster ">
            <div class="eye">
                <div class="eyeBall"></div>
            </div>
            <div class="mouth"></div>
        </div>
        <div class="monster blue">
            <div class="eye">
                <div class="eyeBall"></div>
            </div>
            <div class="mouth"></div>
        </div>
    </div>
</template>

<style>
    .wrapper {
        width: 150px;
        height: 100px;
        display: flex;
        align-items: center;
    }
    .monster{
        position: relative;
        width: 55px;
        height: 50px;
        border-radius: 10px;
        background-color: #e55a54;
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);
        animation: jump 0.8s linear infinite alternate;
    }
    .monster .eye{
        width: 40%;
        height: 40%;
        border-radius: 50%;
        margin: 5px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .monster .mouth{
        width: 32%;
        height: 6px;
        border-radius: 6px;
        background-color: #fff;
    }
    .monster .eye .eyeBall {
        width: 25%;
        height: 25%;
        border-radius: 50%;
        background-color: #0c4475;
        animation: eyemove 1.6s linear infinite alternate;
    }
    .monster::before,
    .monster::after{
        content: '';
        top: -10px;
        left: 50%;
        display: block;
        width: 20%;
        height: 10px;
        border-radius: 10px;
        background-color: #fff;
        position: absolute;
    }
    .monster::before{
        transform: translateX(-70%) rotate(45deg);
    }
    .monster::after{
        transform: translateX(-30%) rotate(-45deg);
    }
    .monster.blue{
        background-color: #0c4475;
        animation-delay: 0.5s;
    }
    .monster.blue .eye .eyeBall {
        background-color: #e55a54;
        animation-delay: 0.5s;
    }
    .monster.blue .mouth{
        background-color: #db4d6d;
    }
    @keyframes jump {
        50%{
            top:0;
            box-shadow: 0 5px 10px rgba(0,0,0,0.2);
        }
        100%{
            top: -15px;
            box-shadow: 0 50px 10px rgba(0,0,0,0.1);
        }
    }
    @keyframes eyemove{
        0%,
        10%{
            transform: translateX(-50%);
        }
        90%,
        100%{
            transform: translateX(50%);
        }
    }
</style>
