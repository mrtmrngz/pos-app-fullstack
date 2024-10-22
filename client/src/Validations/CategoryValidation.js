import * as yup from 'yup'

yup.addMethod(yup.object, 'colorImage', function (fieldName, message) {
    return this.test(fieldName, message, function (value) {
        const { createError } = this;
        const { imageUrl, color } = value;

        if (!imageUrl && !color) {
            return createError({ path: 'imageUrl', message });
        }

        return true;
    });
});

export const categoryValidation = yup.object().shape({
    title: yup.string().required("Category Name field is required."),
    imageUrl: yup.string(),
    color: yup.string()
}).colorImage('image-or-color', 'Enter an image URL or choose a color!', function (values) {
    const { imageUrl, color } = values;
    return !(imageUrl === '' && color === '');
});