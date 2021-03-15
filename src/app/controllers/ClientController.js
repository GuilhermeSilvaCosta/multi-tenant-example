import ClientModel from '../models/Client';

class ClienteController {

  async store(req, res) {
    const { tenant } = req.headers;

    const Client = ClientModel(tenant);

    await Client.create(req.body)
    
    res.status(204).json();
  }

}

export default new ClienteController();