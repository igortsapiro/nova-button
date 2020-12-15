export const clickButton = {
    data() {
        return {
            isDisabled: false,
        }
    },
    methods: {
        click() {
            this.isDisabled = true;
            let isException = false;

            let params = {};
            if (this.field.queryFields) {
                this.field.queryFields.forEach((param) => {
                    this.$parent.$children.forEach((value, index) => {
                        if (value.$props.field.attribute === param) {
                            if (!value._data.value && !value._data.selectedResource.value) {
                                this.$toasted.show(param + ' field is required', { type: 'error' });
                                isException = true;
                            } else {
                                params[param] = !value._data.selectedResource ? value._data.value : value._data.selectedResource.value;
                            }
                        }
                    });
                });
            }
            if (isException) {
                this.isDisabled = false;
                return false;
            }
            Nova.request().post(this.field.url, {
                params: params
            }).then(response => {
                if (this.field.updatedFields) {
                    this.field.updatedFields.forEach((value) => {
                        this.$parent.$children.forEach((child) => {
                            if (child.$props.field.attribute === value) {
                                child._data.value = response.data[value];
                            }
                        });
                    })
                }
                this.$toasted.show('Information was updated successfully!', { type: 'success' });
            }).catch(error => {
                this.$toasted.show('Error: ' + error.response.data, { type: 'error' });
            });

            this.isDisabled = false;
        }
    }
};
