db.departamento.aggregate([
    {
    $lookup: {
        "localField": "departamento",
        "from": "trabajador",
        "foreignField": "horas.cod_Dept",
        "as": "empleados"
    },

}]).pretty()
 /*{
        "_id" : ObjectId("6033f72a3f76b4f1d5a1c4d4"),
        "departamento" : "001",
        "nombre" : "sanidad",
        "precioH" : 9,
        "empleados" : [
                {
                        "_id" : ObjectId("6033f7303f76b4f1d5a1c4d8"),
                        "trabajador" : "001",
                        "nombre" : "ERF",
                        "horas" : [
                                {
                                        "cod_Dept" : "004",
                                        "horasA" : 3
                                },
                                {
                                        "cod_Dept" : "001",
                                        "horas" : 5
                                }
                        ]
                },
                {
                        "_id" : ObjectId("6033f7303f76b4f1d5a1c4d9"),
                        "trabajador" : "002",
                        "nombre" : "EQS",
                        "horas" : {
                                "cod_Dept" : "001",
                                "horasA" : 10
                        }
                }
        ]
}
{
        "_id" : ObjectId("6033f72a3f76b4f1d5a1c4d5"),
        "departamento" : "002",
        "nombre" : "mantenimiento",
        "precioH" : 12,
        "empleados" : [
                {
                        "_id" : ObjectId("6033f7303f76b4f1d5a1c4da"),
                        "trabajador" : "003",
                        "nombre" : "TGF",
                        "horas" : {
                                "cod_Dept" : "002",
                                "horasA" : 10
                        }
                }
        ]
}
{
        "_id" : ObjectId("6033f72a3f76b4f1d5a1c4d6"),
        "departamento" : "003",
        "nombre" : "administracion",
        "precioH" : 10,
        "empleados" : [
                {
                        "_id" : ObjectId("6033f7303f76b4f1d5a1c4db"),
                        "trabajador" : "004",
                        "nombre" : "BCV",
                        "horas" : [
                                {
                                        "cod_Dept" : "003",
                                        "horasA" : 3
                                },
                                {
                                        "cod_Dept" : "004",
                                        "horas" : 5
                                }
                        ]
                }
        ]
}
{
        "_id" : ObjectId("6033f72a3f76b4f1d5a1c4d7"),
        "departamento" : "004",
        "nombre" : "cuentas",
        "precioH" : 9,
        "empleados" : [
                {
                        "_id" : ObjectId("6033f7303f76b4f1d5a1c4d8"),
                        "trabajador" : "001",
                        "nombre" : "ERF",
                        "horas" : [
                                {
                                        "cod_Dept" : "004",
                                        "horasA" : 3
                                },
                                {
                                        "cod_Dept" : "001",
                                        "horas" : 5
                                }
                        ]
                },
                {
                        "_id" : ObjectId("6033f7303f76b4f1d5a1c4db"),
                        "trabajador" : "004",
                        "nombre" : "BCV",
                        "horas" : [
                                {
                                        "cod_Dept" : "003",
                                        "horasA" : 3
                                },
                                {
                                        "cod_Dept" : "004",
                                        "horas" : 5
                                }
                        ]
                }
        ]
}*/



db.trabajador.aggregate([
    {$unwind:"$horas"},
    {
        $lookup: {
            "localField": "horas.cod_Dept",
            "from": "departamento",
            "foreignField": "departamento",
            "as": "esquema"
        }},
]).pretty()

/*{
        "_id" : ObjectId("6033f7303f76b4f1d5a1c4d8"),
        "trabajador" : "001",
        "nombre" : "ERF",
        "horas" : {
                "cod_Dept" : "004",
                "horasA" : 3
        },
        "esquema" : [
                {
                        "_id" : ObjectId("6033f72a3f76b4f1d5a1c4d7"),
                        "departamento" : "004",
                        "nombre" : "cuentas",
                        "precioH" : 9
                }
        ]
}
{
        "_id" : ObjectId("6033f7303f76b4f1d5a1c4d8"),
        "trabajador" : "001",
        "nombre" : "ERF",
        "horas" : {
                "cod_Dept" : "001",
                "horas" : 5
        },
        "esquema" : [
                {
                        "_id" : ObjectId("6033f72a3f76b4f1d5a1c4d4"),
                        "departamento" : "001",
                        "nombre" : "sanidad",
                        "precioH" : 9
                }
        ]
}
{
        "_id" : ObjectId("6033f7303f76b4f1d5a1c4d9"),
        "trabajador" : "002",
        "nombre" : "EQS",
        "horas" : {
                "cod_Dept" : "001",
                "horasA" : 10
        },
        "esquema" : [
                {
                        "_id" : ObjectId("6033f72a3f76b4f1d5a1c4d4"),
                        "departamento" : "001",
                        "nombre" : "sanidad",
                        "precioH" : 9
                }
        ]
}
{
        "_id" : ObjectId("6033f7303f76b4f1d5a1c4da"),
        "trabajador" : "003",
        "nombre" : "TGF",
        "horas" : {
                "cod_Dept" : "002",
                "horasA" : 10
        },
        "esquema" : [
                {
                        "_id" : ObjectId("6033f72a3f76b4f1d5a1c4d5"),
                        "departamento" : "002",
                        "nombre" : "mantenimiento",
                        "precioH" : 12
                }
        ]
}
{
        "_id" : ObjectId("6033f7303f76b4f1d5a1c4db"),
        "trabajador" : "004",
        "nombre" : "BCV",
        "horas" : {
                "cod_Dept" : "003",
                "horasA" : 3
        },
        "esquema" : [
                {
                        "_id" : ObjectId("6033f72a3f76b4f1d5a1c4d6"),
                        "departamento" : "003",
                        "nombre" : "administracion",
                        "precioH" : 10
                }
        ]
}
{
        "_id" : ObjectId("6033f7303f76b4f1d5a1c4db"),
        "trabajador" : "004",
        "nombre" : "BCV",
        "horas" : {
                "cod_Dept" : "004",
                "horas" : 5
        },
        "esquema" : [
                {
                        "_id" : ObjectId("6033f72a3f76b4f1d5a1c4d7"),
                        "departamento" : "004",
                        "nombre" : "cuentas",
                        "precioH" : 9
                }
        ]
}*/





/*si estas dentro de un array [{aaa:aa},{bbb:bb},{ccc:cc}], se usa el $arrayElemAt: para acceder. la 
sintaxis es $arrayElemAt: [campo,0]*/