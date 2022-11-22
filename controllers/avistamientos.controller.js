const Avistamiento = require("../models/avistamientos.model");

let response ={ 
                msg:"",
                exito:false
              };

exports.create= function(req,res){
    let avistamiento= new Avistamiento({
        nombre:req.body.nombre,
        especie:req.body.especie,
       descripcion:req.body.descripcion,
        vereda:req.body.vereda        
    })
    avistamiento.save(function(err){
        if (err){
            console.error(err),
            response.exito=false,
            response.msg="Error al guardar el avistamiento"
            res.json(response)
            return;
        }

        response.exito=true,
        response.msg="El avistamiento se guardó correctamente"
        res.json(response)
    })
};

exports.find =function(req,res){
    Avistamiento.find(function(err, avistamientos){
        res.json(avistamientos)
    })
}

exports.findOne = function(req,res){
    Avistamiento.findOne({_id: req.params.id}, function(err,avistamiento){
        res.json(avistamiento)
    })
}

exports.update = function (req,res){
    let avistamiento = {
        nombre: req.body.nombre,
        especie: req.body.especie,
        descripcion: req.body.descripcion,
        vereda: req.body.vereda        
    }
    Avistamiento.findByIdAndUpdate(req.params.id, {$set:avistamiento}, function(err){
            if(err){
                console.error(err),
                response.exito=false,
                response.msg="Error al modificar el avistamiento"
                res.json(response)
                return;
            }

            response.exito=true,
            response.msg="El avistamiento se modificó correctamente"
            res.json(response)
        })
}

exports.remove = function(req,res){
    Avistamiento.findByIdAndRemove({_id:req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito=false,
            response.msg= "Error al eliminar el avistamiento"
            res.json(response)
            return;
        }
        
        response.exito=true,
        response.msg="El avistamiento se eliminó correctamente"
        res.json(response)
    })
}

