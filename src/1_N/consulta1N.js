db.pedido.aggregate([
    {
        $lookup: {
            "localField": "cliente",
            "from": "cliente",
            "foreignField": "idCliente",
            "as": "relacion"
        }
    }
]).pretty()


/*
{ "_id" : ObjectId("60326603ac976c94f335d79c"), "idPedido" : 1, "cliente" : 1111, "precio" : 2014, "fecha" : ISODate("2020-06-29T22:00:00Z"), "relacion" : [ { "_id" : ObjectId("6032660aac976c94f335d7a3"), "idCliente" : 1111, "nombre" : "ERD", "empresa" : "motorola" } ] }
{ "_id" : ObjectId("60326603ac976c94f335d79d"), "idPedido" : 2, "cliente" : 1111, "precio" : 6352, "fecha" : ISODate("2020-08-24T22:00:00Z"), "relacion" : [ { "_id" : ObjectId("6032660aac976c94f335d7a3"), "idCliente" : 1111, "nombre" : "ERD", "empresa" : "motorola" } ] }
{ "_id" : ObjectId("60326603ac976c94f335d79e"), "idPedido" : 3, "cliente" : 1112, "precio" : 2254, "fecha" : ISODate("2021-04-13T22:00:00Z"), "relacion" : [ { "_id" : ObjectId("6032660aac976c94f335d7a4"), "idCliente" : 1112, "nombre" : "ESC", "empresa" : "sony" } ] }
{ "_id" : ObjectId("60326603ac976c94f335d79f"), "idPedido" : 4, "cliente" : 1113, "precio" : 9652, "fecha" : ISODate("2020-01-29T23:00:00Z"), "relacion" : [ { "_id" : ObjectId("6032660aac976c94f335d7a5"), "idCliente" : 1113, "nombre" : "YHG", "empresa" : "apple" } ] }
{ "_id" : ObjectId("60326603ac976c94f335d7a0"), "idPedido" : 5, "cliente" : 1114, "precio" : 2001, "fecha" : ISODate("2020-05-29T22:00:00Z"), "relacion" : [ { "_id" : ObjectId("6032660aac976c94f335d7a6"), "idCliente" : 1114, "nombre" : "BVC", "empresa" : "sony" } ] }
{ "_id" : ObjectId("60326603ac976c94f335d7a1"), "idPedido" : 6, "cliente" : 1112, "precio" : 3201, "fecha" : ISODate("2021-07-15T22:00:00Z"), "relacion" : [ { "_id" : ObjectId("6032660aac976c94f335d7a4"), "idCliente" : 1112, "nombre" : "ESC", "empresa" : "sony" } ] }
{ "_id" : ObjectId("60326603ac976c94f335d7a2"), "idPedido" : 7, "cliente" : 1115, "precio" : 4521, "fecha" : ISODate("2021-06-06T22:00:00Z"), "relacion" : [ { "_id" : ObjectId("6032660aac976c94f335d7a7"), "idCliente" : 1115, "nombre" : "XCF", "empresa" : "motorola" } ] }





*/