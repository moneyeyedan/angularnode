module.exports = function(app) {
    app.dataSources.mysqlds.autoupdate ('apk', function(err) {
      if (err) throw err;
  
      app.models.apk.create([], function(err, apk) {
        if (err) throw err;
  
        console.log('Models created: \n', apk);
      });
    });
  
  };