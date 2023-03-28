import mongoose from "mongoose";

export const init = async () =>  {
    try {
        const URI = 'mongodb+srv://cristianalejandroheredia:aleh1971@cluster0.qtpeto6.mongodb.net/ecommerce?retryWrites=true&w=majority';
        await mongoose.connect(URI);
        console.log('Database Connected');
    } catch (error) {
        console.log(error.message);
    }
}

