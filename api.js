function api(app) {
    const fs = require("fs");
    app.get("/api/main", function (request, response) {
        fs.readFile("results/ref.txt", "utf8", function(err, reflines) {
            reflines = reflines + '';
            var refs = reflines.split("\n")
            fs.readFile("results/pred.txt", "utf8", function(err, predlines) {
                predlines = predlines + '';
                var preds = predlines.split("\n")
                response.json({ preds: preds, refs: refs });
            });
        });
    });
};

module.exports = api;
