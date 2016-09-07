function groupBy(collection, property) {
    var i = 0, val, index,
        values = [], result = {};
    for (; i < collection.length; i++) {
        val = collection[i][property];
        index = values.indexOf(val);
        console.log(collection[i].type)
        if (collection[i].type != 'Citywise') {continue;}
        if (index > -1)
            result[val].push(collection[i]);console.log(result[val])
        else {
            values.push(val);
            result[val] = [collection[i]];
        }
    }
    return result;
}

var images = [{"title":"phuket_01.jpg","caption":"bridge under the cliff","url":"https://c3.staticflickr.com/3/2477/5711306298_8768ff85de_n.jpg","cityName":"Phuket","type":"Overview","id":1,"createdAt":"0000-00-00 00:00:00","updatedAt":null},{"title":"krabi_01.jpg","caption":"assorted kebabs in the streets of krabi","url":"https://c4.staticflickr.com/8/7209/6910696523_6e63f0e025_b.jpg","cityName":"Krabi","type":"Overview","id":2,"createdAt":"0000-00-00 00:00:00","updatedAt":null},{"title":"Doi Maesalong","caption":"Doi Maesalong","url":"http://www.pictures-thailand.com/Thailand/DoiMaesalong.JPG","cityName":"Northern Thailand","type":"Citywise","id":3,"createdAt":null,"updatedAt":null},{"title":"Wat Phra Kaew","caption":"Wat Phra Kaew","url":"http://www.pictures-thailand.com/Thailand/WatPhraKaewBangkok.JPG","cityName":"Bangkok","type":"Citywise","id":4,"createdAt":null,"updatedAt":null},{"title":"Kaew Ne pha","caption":"Kaew NE pha","url":"http://www.pictures-thailand.com/Thailand/WatPhraKaewBangkokd.JPG","cityName":"Bangkok","type":"Citywise","id":5,"createdAt":null,"updatedAt":null}];

var a = groupBy(images, "cityName")



for(key in a){
    // The key is key
    // The value is obj[key]
    console.log(key)
    console.log("--")
    console.log(a[key])
    console.log("--")
}
