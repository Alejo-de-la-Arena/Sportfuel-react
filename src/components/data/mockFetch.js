
export const products = [ 
    {id: 'Ena Protein', name: 'Ena Protein', type:'Isolate & Concentrate', size:'899g', price: 12000, additionalDetails:"Per scoop(20g): 22grs of Protein", stock: 50, description: 'Proteina premium ENA sabor Cookies & Cream', imageUrl: 'https://www.farmacialeloir.com.ar/img/articulos/ena_whey_protein_true_made.jpg'},
    {id: 'Star Nutrition Protein', name: 'Star Nutrition Protein', type:'Isolate', size:'899g', price: 11.500, additionalDetails:"Per scoop(20g): 27grs of Protein", stock: 40, description: 'Premium Whey Protein Sabor Chocolate Star Nutrition', imageUrl: 'https://images.fravega.com/f1000/4357527431022240346dddd077c1300e.jpg'},
    {id: 'Optimun Nutrition Protein', name: 'Optimum Nutrition Protein ', type: 'Isolate', size:'899g', price: 25000, additionalDetails:"Per scoop(20g): 25grs of Protein", stock: 15, description: 'Prmium Optimum Nutrition proteina gran sabor double rich chocolate 24g proteina ', imageUrl: 'https://media.revistagq.com/photos/63dcd3c0f184f7f95f6c9bef/master/w_1600%2Cc_limit/71c0GpPsmUL._AC_SL1500_.jpg'},
    {id: 'Sascha Fitness Protein', name: 'Sascha Fitness Protein', type:'Isolate', size:'899g', price: 24000, additionalDetails:"Per scoop(20g): 20grs of Protein", stock: 51, description: 'Proteina Sascha maxima calidad sabor chcolate 25g proteina', imageUrl: 'https://m.media-amazon.com/images/I/41r5mf86+eL.jpg'},
    {id: 'Syntha-6 Protein', name: 'Syntha-6 Protein', type:'Isolate', size:'1.82kg', price: 95000, additionalDetails:"Per scoop(20g): 24grs of Protein", stock: 35, description: 'BSN, Aislado Syntha-6, bebida en polvo de proteína, helado de vainilla, (1,82 kg)', imageUrl: 'https://s3.images-iherb.com/bsn/bsn07610/y/27.jpg'}
]

// export const creatine = [
//     {id: '6', name: '',  tipo: '', size: '', price: '', additionalDetails:'', stock: 50, description: '', imageUrl: ''   },
//     {id: '7', name: '', tipo: '', size: '', price: '', additionalDetails:'', stock: 50, description: '', imageUrl: ''     },
//     {id: '8', name: '', tipo: '', size: '', price: '', additionalDetails:'', stock: 50, description: '', imageUrl: ''     },
//     {id: '9', name: '', tipo: '', size: '', price: '', additionalDetails:'', stock: 50, description: '', imageUrl: ''     },
//     {id: '10', name: '', tipo: '', size: '', price: '', additionalDetails:'', stock: 50, description: '', imageUrl: ''    }
// ] 


export const mFetch  = (pid) =>  new Promise((res,rej) => { 
        setTimeout(()=>{
            res(pid  ? products.find(product => product.id === pid) : products)
        }, 1000)
}) 