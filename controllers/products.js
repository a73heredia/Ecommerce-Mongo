import ProductModel from '../models/product.js';

class ProductController {
    static async create(req, res) {
        const data = req.body;
        const result = await ProductModel.create(data);
        res.status(201).send(result);
    }

    static async get(req, res) {
        const result = await ProductModel.find();
        res.status(201).send(result);
    }

    static async getById(req, res) {
        const id = req.params.id
        console.log(id)
        const result = await ProductModel.findById(id)
        if (!result) {
          return res.status(404).end()
        }
        res.status(200).json(result)
      }

    static async updateById(req, res) {
        const { params: { id }, body } = req
        await ProductModel.updateOne({ _id: id }, { $set: body })
        res.status(204).end()
    }

    static async deleteById(req, res) {
        const { params: { id } } = req
        await ProductModel.deleteOne({ _id: id })
        res.status(204).end()
      }
}

export default ProductController;
