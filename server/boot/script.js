module.exports = function(app) {

  var Admin = app.models.Admin;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  Admin.create({
    email: 'admin@admin.com', password: 'G67cRG6e@'
  }, function(err, user) {
    if (err) {
      return;
    }
    console.log('User created!');
  });

};