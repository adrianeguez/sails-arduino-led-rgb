/**
 * ArduinoController
 *
 * @description :: Server-side logic for managing arduinoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  cambiarColor: function (req, res) {
    var parametros = req.allParams();
    sails.config.johnny.led.color({
      red: Number(parametros.red),
      blue: Number(parametros.blue),
      green: Number(parametros.green)
    });
    return res.ok({
      respuesta:"Se actualizo el led"
    });
  }
};
