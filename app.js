// export method index,store,update dan destroy dari folder Controller/FruitController
const { index, store, update, destroy } = require('./Controller/FruitsController.js');

const main = () => {
    console.log("Method Index - Menampilkan List Buah");
    index();
    console.log("\nMethod Store - Menambahkan Buah Pisang");
    store("Pisang");
    index();
    console.log("\nMethod Update - Mengubah Data 0 Menjadi Buah Kelapa");
    update(0,"Kelapa");
    index();
    console.log('\nMethod Destroy - Menghapus Data 0');
    destroy(0);
    index();
}

main();