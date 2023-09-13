
export const products = [ 
    {id: 1, name: 'Ena Protein', tipo:'Isolate & Concentrate', size:'899g', price: 12000, additionalDetails:"Per scoop(20g): 22grs of Protein", stock: 50, description: 'Proteina premium ENA sabor Cookies & Cream', imageUrl: 'https://www.farmacialeloir.com.ar/img/articulos/ena_whey_protein_true_made.jpg'},
    {id: 2, name: 'Star Nutrition Protein', tipo:'Isolate', size:'899g', price: 11.500, additionalDetails:"Per scoop(20g): 27grs of Protein", stock: 40, description: 'Premium Whey Protein Sabor Chocolate Star Nutrition', imageUrl: 'https://images.fravega.com/f1000/4357527431022240346dddd077c1300e.jpg'},
    {id: 3, name: 'Optimum Nutrition Protein ', tipo: 'Isolate', size:'899g', price: 25000, additionalDetails:"Per scoop(20g): 25grs of Protein", stock: 15, description: 'Prmium Optimum Nutrition proteina gran sabor double rich chocolate 24g proteina ', imageUrl: 'https://media.revistagq.com/photos/63dcd3c0f184f7f95f6c9bef/master/w_1600%2Cc_limit/71c0GpPsmUL._AC_SL1500_.jpg'},
    {id: 4, name: 'Sascha Fitness Protein', tipo:'Isolate', size:'899g', price: 24000, additionalDetails:"Per scoop(20g): 20grs of Protein", stock: 51, description: 'Proteina Sascha maxima calidad sabor chcolate 25g proteina', imageUrl: 'https://m.media-amazon.com/images/I/41r5mf86+eL.jpg'},
    {id: 5, name: 'Syntha-6 Protein', tipo:'Isolate', size:'1.82kg', price: 95000, additionalDetails:"Per scoop(20g): 24grs of Protein", stock: 35, description: 'BSN, Aislado Syntha-6, bebida en polvo de proteína, helado de vainilla, (1,82 kg)', imageUrl: 'https://s3.images-iherb.com/bsn/bsn07610/y/27.jpg'}
]

export const MockFetch = () => new Promise((res, rej) => {
    if (condition) {
        setTimeout(() => {
            res(products);
        }, 3000);
    } else {
        rej(new Error("Ha ocurrido un error"));
    }
});