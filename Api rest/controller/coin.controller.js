const { Coin } = require("../model/coin.model");
const coinController = {};

coinController.getCoin = async (req, res) => {
  const response = await Coin.findAll()
    .then((data) => {
      const res = { error: false, data: data };
      return res;
    })
    .catch((error) => {
      const res = { error: true, message: error };
      return res;
    });
  res.json(response);
};

coinController.createCoin = async (req, res) => {
  try {
    const modelData = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
    };
    const response = await Coin.create(modelData)
      .then((data) => {
        const res = { error: false, data: data, message: "Coin Create" };
        return res;
      })
      .catch((e) => {
        if (
          e.name == "SequelizeUniqueConstraintError" ||
          e.name == "SequelizeValidationError"
        ) {
          return { error: true, message: e.errors.map((err) => err.message) };
        } else {
          return { error: true, message: e };
        }
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

coinController.getByIdCoin = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Coin.findAll({
      where: { id: id },
    })
      .then((data) => {
        const res = { error: false, data: data };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

coinController.updateCoin = async (req, res) => {
  try {
    const { id } = req.params;
    let modelData = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price,
    };

    const response = await Coin.update(modelData, {
      where: { id: id },
    })
      .then((data) => {
        const res = { error: false, data: data, message: "Coin Update" };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

coinController.deleteCoin = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Coin.destroy({
      where: { id: id },
    })
      .then((data) => {
        const res = { error: false, data: data, message: "Deleted Successful" };
        return res;
      })
      .catch((error) => {
        const res = { error: true, message: error };
        return res;
      });
    res.json(response);
  } catch (e) {
    console.log(e);
  }
};

module.exports = coinController;
