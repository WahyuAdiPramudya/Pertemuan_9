// import datafruit dari folder data/datafurit.js
const fruits = require('../data/datafruit.js');

// membuat function index untuk menampilkan list data fruit
const index = () => {
    for (let data of fruits) {
        console.log(data);
    }
}

// membuat function store untuk menambahkan data
const store = (data) => {
    fruits.push(data);
}

// membuat function update untuk mengubah data
const update = (position, name) => {
    fruits[position] = name;
}

// membuat function destroy untuk menghapus data
const destroy = (position) => {
    fruits.splice(position, 1);
}

// export method index,store,update dan destroy
module.exports =  {index,store,update,destroy};