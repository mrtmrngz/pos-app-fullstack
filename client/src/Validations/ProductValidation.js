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

export const productValidation = (categories) => yup.object().shape({
    title: yup.string().required("Product Name field is required."),
    imageUrl: yup.string(),
    price: yup.number()
        .positive("Please enter a positive value")
        .required("Product price field is required."),
    categoryId: yup.string()
        .oneOf(categories.map(category => category.key), "Please select a valid category")
        .required("Category field is required."),
    color: yup.string()
}).colorImage('image-or-color', 'Enter an image URL or choose a color!', function (values) {
    const { imageUrl, color } = values;
    return !(imageUrl === '' && color === '');
});