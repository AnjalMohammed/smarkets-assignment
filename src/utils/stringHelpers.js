export const getHumanReadableString = value =>
    value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))