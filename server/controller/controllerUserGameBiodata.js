var UserGameBiodata = require('../model/modelUserGameBiodata');

//parsing data dan simpan data ke collection userGameBiodata
exports.create = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ messahe: 'data tidak boleh kosong!!' });
    return;
  }

  const userGameBiodata = new UserGameBiodata({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save user game biodata in the database
  userGameBiodata
    .save(userGameBiodata)
    .then((data) => {
      //res.send(data);
      res.redirect('/addUser');
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'ada kesalahan saat menyimpan data user gamebiodata',
      });
    });
};

//mencari dan menampulkan userGameBiodata
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    UserGameBiodata.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `user dengan id ${id} tidak ditemukan ` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: ` ada kesalahan saat mengambil id ${id}`,
        });
      });
  } else {
    UserGameBiodata.find()
      .then((userGameBiodata) => {
        res.send(userGameBiodata);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || 'ada kesalahan ketika mengambil dan menampilkan data' });
      });
  }
};

//update userGameBiodata berdasarkan id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'data yang akan di update tidak boleh kososng' });
  }
  const id = req.params.id;
  UserGameBiodata.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `tidak bisa mengupdate data ${id}. data id ini tidak ditemukan` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: 'error Update user Information' });
    });
};

//delete userGameBiodata berdasarkan id
exports.delete = (req, res) => {
  const id = req.params.id;

  UserGameBiodata.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `tidak bisa menghapus id ${id} id tidak ditemukan` });
      } else {
        res.send({
          message: `user berhasil dihapus`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `tidak bisa menghapus user dengan id ${id}`,
      });
    });
};
