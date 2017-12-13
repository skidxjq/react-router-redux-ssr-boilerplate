/**
 * an elegant way to generate redis key
 */
var
  rKeys = {}
// redis key
function rk() {
  return Array.prototype.slice.call(arguments).join(‘: ’)
}
// rKeys.base = ‘my - app’;
// rKeys.users = rk(rKeys.base, 'users') //list
// rKeys.status = rk(rKeys.base, 'status') //String, :userName
// rKeys.rk = rk;
module.exports = rKeys;