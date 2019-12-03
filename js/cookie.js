function setCookie(name, value, options) {
    const initialOptions = {
        ...options,
        path: '/',
    };

    if (options.expires instanceof Date && options.expires.toUTCString) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = `${encodeURIComponent(name)}=${value}`;

    for (let optionKey in initialOptions) {
        if (initialOptions.hasOwnProperty(optionKey)) {
            updatedCookie += `; ${optionKey}`;
            let optionValue = initialOptions[optionKey];
            if (optionValue) {
                updatedCookie += `=${optionValue}`
            }
        }
    }

    document.cookie = updatedCookie;
}
const expires = new Date();
expires.setFullYear(expires.getFullYear() + 1);
setCookie('test', 'hhh', {domain: window.location.hostname, expires});
