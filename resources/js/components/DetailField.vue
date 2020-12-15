<template>
    <panel-item :field="field">
        <template slot="value">
            <button class="btn btn-default btn-primary"
                    :disabled="isDisabled"
                    @click.prevent="click()">{{ field.title ? field.title : 'Update' }}</button>
        </template>
    </panel-item>
</template>

<script>
import {clickButton} from '../mixins/clickButton';

export default {
    mixins: [clickButton],

    props: ['resource', 'resourceName', 'resourceId', 'field'],
}
</script>
