
    /* DOCS GENERAL */ /* DOCS QUERY */ /* DOCS BODY*/

    /* ENDPOINT ID */ (self/* RESOURCE PARAM *//* QUERY PARAM *//* BODY PARAM */) {
        return new Promise(function (resolve, reject) {
            self.request(self, /* METHOD */, /* RESOURCE PATH *//* CONFIG */)
                .then(function(response) {
                    resolve(response);
                })
                .catch(function(error) {
                    reject(error);
                });
        });
    }
    