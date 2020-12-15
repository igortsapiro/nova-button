<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <button class="btn btn-default btn-primary mt-2"
                    :disabled="isDisabled"
                    @click.prevent="click()">{{ field.title ? field.title : 'Update' }}</button>
        </template>
    </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova';
import {clickButton} from '../mixins/clickButton';

export default {
    mixins: [FormField, HandlesValidationErrors, clickButton],

    props: ['resourceName', 'resourceId', 'field'],

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value
        },
    },
}
</script>
