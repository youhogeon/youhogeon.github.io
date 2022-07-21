<template>
    <svg class="logo max-w-5xl w-5/6 lg:w-3/4" viewBox="0 0 400 55" aria-hidden="true">
        <text x="1" y="95%">Y</text>
        <text x="36" y="95%">o</text>
        <text x="75" y="95%">u</text>
        <text x="135" y="95%">H</text>
        <text x="180" y="95%">o</text>
        <text x="235" y="95%">G</text>
        <text x="282" y="95%">e</text>
        <text x="321" y="95%">o</text>
        <text x="361" y="95%">n</text>
    </svg>
</template>

<style scoped>
    @layer logo {
        .logo text {
            font-family: 'Fredoka One', cursive;
            font-size: 65px;
            fill: transparent;
            stroke-dasharray: 326px;
            animation: stroke 0.7s linear;
            animation-fill-mode: forwards;
        }

        .logo text:nth-child(1) { animation-delay: 0s; }
        .logo text:nth-child(2) { animation-delay: 0.3s; }
        .logo text:nth-child(3) { animation-delay: 0.5s; }
        .logo text:nth-child(4) { animation-delay: 1.0s; }
        .logo text:nth-child(5) { animation-delay: 1.5s; }
        .logo text:nth-child(6) { animation-delay: 1.8s; }
        .logo text:nth-child(7) { animation-delay: 2.2s; }
        .logo text:nth-child(8) { animation-delay: 2.5s; }
        .logo text:nth-child(9) { animation-delay: 2.8s; }

        @keyframes stroke {
            0% { stroke: #ffc20d; stroke-width: 3px; stroke-dashoffset: 326px; stroke-position: inside; }
            70% { fill: transparent; stroke-opacity: 1;  }
            98% { stroke: #ffc20d; stroke-width: 3px; }
            100% { fill: #ffc20d; stroke-dashoffset: 0px; }
        }
    }
</style>