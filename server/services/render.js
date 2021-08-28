//render setiap halaman yang telah dibuat

exports.dashboardRoutes = (req, res) => {
  //mendapatkan request ke /api/users
  res.render('./superadmin/dashboard', { userGameBiodata: 'Dede Nurrahman' }); //sumber halaman
};

exports.addUsersRoutes = (req, res) => {
  res.render('./superadmin/addUser');
};

exports.updateUsersRoutes = (req, res) => {
  res.render('./superadmin/updateUser');
};

exports.mainRoutes = (req, res) => {
  res.render('main');
};

exports.loginRoutes = (req, res) => {
  res.render('login');
};

exports.gameRoutes = (req, res) => {
  res.render('game');
};
