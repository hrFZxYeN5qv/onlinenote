var state;
    var createState = function() {
        /* data from server is stored in 'state' object */
        /* try password 00000000 */
        state = new ClientState(
            "/qqqqwwww",
            "U2FsdGVkX1+yKo0QA8rLmtUvsMK8byJFFWJGMofuz6M57QrUzWJ2uW2pK/Dqa++1Wv9hA5WRZES6r5BkiN+54whnnzIvENAc0zP8cuXfmiZAIZ9tO2IlxpOljXYilcRBPdIhTauoz/QdKYzNVdMY7+A2kNNaieE9n/PxJVl51OeBr9nPABxSxg6H9bI6znFb59DDqO/wa2HG4WnFPXNQIg==",
            false,2,2);
    }