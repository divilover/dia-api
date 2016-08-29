module.exports = function(Admin) {
  Admin.disableRemoteMethod("create", true);
  Admin.disableRemoteMethod("upsert", true);
  Admin.disableRemoteMethod("updateAll", true);
  Admin.disableRemoteMethod("updateAttributes", true);
   
  Admin.disableRemoteMethod("find", true);
  Admin.disableRemoteMethod("findById", true);
  Admin.disableRemoteMethod("findOne", true);
   
  Admin.disableRemoteMethod("deleteById", true);
   
  Admin.disableRemoteMethod("confirm", true);
  Admin.disableRemoteMethod("count", true);
  Admin.disableRemoteMethod("exists", true);
  Admin.disableRemoteMethod("resetPassword", true);
   
  Admin.disableRemoteMethod('__count__accessTokens', false);
  Admin.disableRemoteMethod('__create__accessTokens', false);
  Admin.disableRemoteMethod('__delete__accessTokens', false);
  Admin.disableRemoteMethod('__destroyById__accessTokens', false);
  Admin.disableRemoteMethod('__findById__accessTokens', false);
  Admin.disableRemoteMethod('__get__accessTokens', false);
  Admin.disableRemoteMethod('__updateById__accessTokens', false);
};
