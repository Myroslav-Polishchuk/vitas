function createDatePublication(dateString) {
    const date = new Date(dateString);
    return `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}.${("0" + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}`
}

function createImgSrc(src, isCategory) {
    if (isCategory) {
        return src;
    } else if (src.indexOf('http') > -1) {
        return src;
    } else if (src.indexOf('localhost') < 0) {
        return `https://testback.fun${src}`;
    }
    return src;
}

function createAuthorInitials(author) {
    if (!author) {
        return '';
    }

    const firstName = author.firstName ? `${author.firstName.charAt(0)}.` : '';
    const thirdName = author.thirdName ? `${author.thirdName.charAt(0)}.`: '';
    const secondName = author.secondName ? author.secondName : '';

    return `${firstName} ${thirdName} ${secondName}`;
}

export {createDatePublication, createImgSrc, createAuthorInitials};
export default {createDatePublication, createImgSrc, createAuthorInitials};