<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
    <div class="tile-container">
        <ui-card>
            <ui-card-content>
                <div class="tile">
                    <ui-icon :size="18">keyboard</ui-icon>
                    {{ name }}
                </div>
            </ui-card-content>
        </ui-card>
    </div>
</template>

<style scoped>
.tile-container {
    margin-bottom: 5px;
    margin-right: 5px;
}

.tile {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 0.8em;
}

.tile>* {
    margin-right: 5px;

}
</style>