export const required = (textError = 'Обязательное поле') => value => (value ? undefined : textError);
