import { Router } from 'express';
import UserModel from '../../models/user.js';

const router = Router();

router.post('/login', async(req, res) => {
    const { 
        body: {
            email,
            password
        } 
    } = req;
    
    if(!email || !password){
        return res.status(400).json({message: 'faltan campos'});
    }
    const user = await UserModel.findOne({email});

    if(!user){
       return res.status(400).json({message: 'Usuario no encontrado'});
    }

    if(user.password !== password){
        return res.status(400).json({message: 'Usuario no encontrado'});
    }

    req.session.user = user;
    res.redirect('/profile');
});

router.post('/register', async(req, res) => {
    try {
        const { 
            body: {
                first_name,
                last_name,
                email, 
                age,
                password
            } 
        } = req;
    
        if(!first_name || !last_name || !email || !age || !password){
            return res.status(400).json({message: 'faltan campos'});
        }
        const user = await UserModel.create({
            first_name,
            last_name,
            email, 
            age,
            password
        })
        //res.status(201).json(user);
        res.redirect('/login')
    } catch (error) {
        res.status(400).json({message: 'Correo Duplicado'});        
    }
    
    });
router.get('/logout', (req, res) => {
        req.session.destroy(error => {
          if (!error) {
            res.redirect('/login')
          } else {
            res.send({status: 'Logout Error', body: error })
          }
        })
})

export default router;