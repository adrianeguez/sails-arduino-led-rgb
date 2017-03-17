/**
 * ArduinoController
 *
 * @description :: Server-side logic for managing arduinoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  cambiarColor: function (req, res) {
    var parametros = req.allParams();
    console.log(parametros);
    console.log(parametros.red);
    console.log(parametros.blue);
    console.log(parametros.green);
    sails.config.johnny.led.color({
      red: Number(parametros.red),
      blue: Number(parametros.blue),
      green: Number(parametros.green)
    });

    return res.ok();
  }
};
