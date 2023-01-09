const ServicesModel = require("../../../models/ServicesModel");
function serviceController() {
    return {
        register: (req, res) => {
            const myServcies = {
                washroom: "true",
                sepearateSection: "true",
                ac: "true",
                parking: "true"
            }
            const myObj = new ServicesModel({
                serviceName: "Jans wedding hall",
                servicesList: myServcies
            })

            myObj.save().then((result) => {
                console.log(result);
            }).catch(err => {
                console.log(err);
            })
            return res.json({ message: 'hello from the server' })
        }
    }
}

module.exports = serviceController;