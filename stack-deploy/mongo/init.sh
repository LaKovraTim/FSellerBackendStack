set -e

mongo <<EOF
use admin;
db.auth('$MONGO_INITDB_ROOT_USERNAME', '$MONGO_INITDB_ROOT_PASSWORD');
use $CAPILLARY_MONGODB_DB; 
db.createUser({
  user:  '$CAPILLARY_MONGODB_USERNAME',
  pwd: '$CAPILLARY_MONGODB_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: '$CAPILLARY_MONGODB_DB'
  }]
});

db.workOrder.drop();
db.workOrder.insertMany([
{
    "sellerId" : "100",
    "commerceCode": "100",
    "purchaseOrder" : NumberInt(224499),
    "creationDate" : "2020-09-22T12:59:00",
    "deliveryDate" : "2020-09-28T00:00:00",
    "comment" : null,
    "status" : "PENDIENTE",
    "deliveredDate" : null,
    "cancellationDate" : null,
    "products" : [ 
        {
            "sku" : "YYRWW23",
            "description" : "Pantalón L",
            "cantidad" : NumberInt(1)
        }, 
        {
            "sku" : "ZAPO74894",
            "description" : "Zapatos Negros",
            "cantidad" : NumberInt(1)
        }
    ],
    "customer" : {
        "firstName" : "Peter",
        "secondName" : "Pan",
        "contact" : {
            "phone" : "+56912456987",
            "email" : "lakovratim@yopmail.com"
        },
        "address" : {
            "street" : "Av. nunca jamas",
            "number" : "1234",
            "type" : "CASA",
            "city" : "Santiago",
            "comuna" : "Pudahuel",
            "region" : "R.M",
            "location" : {
                "lat" : -33.4351538,
                "lon" : -70.8527904
            },
            "refers" : null
        },
        "receiver" : {
            "firstName" : "Wendy",
            "secondName" : "Darling"
        }
    }
},
{
    "sellerId" : "100",
    "commerceCode": "200",
    "purchaseOrder" : NumberInt(112233),
    "creationDate" : "2020-09-24T10:59:00",
    "deliveryDate" : "2020-09-30T00:00:00",
    "comment" : "Dejar en conserjeria",
    "status" : "PENDIENTE",
    "deliveredDate" : null,
    "cancellationDate" : null,
    "products" : [ 
        {
            "sku" : "HUYE10JJ",
            "description" : "Polera XL",
            "cantidad" : NumberInt(2)
        }
    ],
    "customer" : {
        "firstName" : "Jhon",
        "secondName" : "Doe",
        "contact" : {
            "phone" : "+5698451212",
            "email" : "lakovratim@yopmail.com"
        },
        "address" : {
            "street" : "Calle uno",
            "number" : "3719-C",
            "type" : "CASA",
            "city" : "Santiago",
            "comuna" : "Isla de Maipo",
            "region" : "R.M",
            "location" : {
                "lat" : -33.7438855,
                "lon" : -70.9207357
            },
            "refers" : "Frente al supermercado Tottus"
        },
        "receiver" : {
            "firstName" : null,
            "secondName" : null
        }
    }
},
{
    "sellerId" : "100",
    "commerceCode": "200",
    "purchaseOrder" : NumberInt(556677),
    "creationDate" : "2020-09-25T15:30:00",
    "deliveryDate" : "2020-10-01T00:00:00",
    "comment" : null,
    "status" : "CANCELADA",
    "deliveredDate" : null,
    "cancellationDate" : "2020-09-26T08:10:00",
    "products" : [ 
        {
            "sku" : "SMA56SAM",
            "description" : "Smart TV Samsung",
            "cantidad" : NumberInt(1)
        }
    ],
    "customer" : {
        "firstName" : "Andres",
        "secondName" : "Lobos Zapata",
        "contact" : {
            "phone" : "+5693355214",
            "email" : "lakovratim@yopmail.com"
        },
        "address" : {
            "street" : "Los arandanos",
            "number" : "701",
            "type" : "Depto",
            "city" : "Santiago",
            "comuna" : "La Reina",
            "region" : "R.M",
            "location" : {
                "lat" : -33.4476713,
                "lon" : -70.5665612
            },
            "refers" : "Entre calle uno y dos"
        },
        "receiver" : {
            "firstName" : "Ignacia",
            "secondName" : "Fuentes"
        }
    }
},
{
    "sellerId" : "100",
    "commerceCode": "300",
    "purchaseOrder" : NumberInt(889901),
    "creationDate" : "2020-09-25T17:48:00",
    "deliveryDate" : "2020-10-01T00:00:00",
    "comment" : "Pago contra entrega",
    "status" : "PENDIENTE",
    "deliveredDate" : null,
    "cancellationDate" : null,
    "products" : [ 
        {
            "sku" : "DAW898GF",
            "description" : "REFRIGERADOR LG 3200",
            "cantidad" : NumberInt(1)
        }
    ],
    "customer" : {
        "firstName" : "Max",
        "secondName" : "Martinez",
        "contact" : {
            "phone" : "+56987884978",
            "email" : "lakovratim@yopmail.com"
        },
        "address" : {
            "street" : "Los Flamencos III",
            "number" : "101",
            "type" : "Casa",
            "city" : "Santiago",
            "comuna" : "Cerro Navia",
            "region" : "R.M",
            "location" : {
                "lat" : -33.4321509,
                "lon" : -70.7304092
            },
            "refers" : "Frente a portón blanco, casa color azul"
        },
        "receiver" : {
            "firstName" : "Florencia",
            "secondName" : "Contreras"
        }
    }
},
{
    "sellerId" : "100",
    "commerceCode": "300",
    "purchaseOrder" : NumberInt(770099),
    "creationDate" : "2020-09-26T17:48:00",
    "deliveryDate" : "2020-10-01T00:00:00",
    "comment" : null,
    "status" : "PENDIENTE",
    "cashOnDelivery": false,
    "total": NumberInt(0),
    "deliveredDate" : null,
    "cancellationDate" : null,
    "products" : [ 
        {
            "sku" : "DAW898GF",
            "description" : "REFRIGERADOR LG 3200",
            "cantidad" : NumberInt(1)
        }
    ],
    "customer" : {
        "firstName" : "Mauricio",
        "secondName" : "Vargas",
        "contact" : {
            "phone" : "+569984421",
            "email" : "lakovratim@yopmail.com"
        },
        "address" : {
            "street" : "Los Ciruelos",
            "number" : "601",
            "type" : "Casa",
            "city" : "Santiago",
            "comuna" : "Las Condes",
            "region" : "R.M",
            "location" : {
                "lat" : -33.4077023,
                "lon" : -70.6025086
            },
            "refers" : "Entre calle vista hermosa y buena vista"
        },
        "receiver" : {
            "firstName" : "Sofia",
            "secondName" : "Vargas"
        }
    }
}
])
EOF
