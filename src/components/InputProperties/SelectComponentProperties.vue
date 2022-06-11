<template>
    <div>
        <h2>Select Properties</h2>
        <div class="fields">
            <h4>Standard</h4>
            <div>
                <ui-textfield :type="1" fullwidth>Label</ui-textfield>
            </div>
             <h4>Validering</h4>
            <div>
                <ui-form-field>
                    <ui-checkbox></ui-checkbox>
                    <label>Skal udfyldes</label>
                </ui-form-field>
            </div>
            <h4>Liste værdier</h4>
            <div>
                
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.fields {
    padding: 1rem;
}

.fields > div {
    margin-bottom: 10px;
}

.fields > h4 {
    margin: 1rem 0;
}
</style>