export default (func, ...args) => {

    return new Promise((resolve, reject) => {
        let callback = (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        };
        args.push(callback);
        func.apply(func, args);
    });

};
