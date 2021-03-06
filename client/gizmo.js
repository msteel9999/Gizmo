Meteor.subscribe("products");

Template.carouselSlides.helpers({
    productItems: function () {
        return Products.find({}).fetch();
    }
});

function getProducts(){
    return [
        {
            productImageSource:"/products/BBQGuitarSpatula.jpg",
            productName:"BBQ Rocks Guitar Spatula",
            productDetail:"Bring a rock concert thrill to your barbecue grill!",
            productLink: "http://www.amazon.co.uk/gp/product/B00IWNS0AY/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B00IWNS0AY&linkCode=as2&tag=gizmo0a-21&linkId=VOXUSZW4QQFE3E3H",
            productDescription: ""
        },
        {
            productImageSource: "/products/BluetoothSpeaker.jpg",
            productName: "Anker A7908 Portable Bluetooth 4.0 Speaker",
            productDetail: "A very good portable speaker with exceptional battery life",
            productLink: "http://www.amazon.co.uk/gp/product/B00GZC35YK/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B00GZC35YK&linkCode=as2&tag=gizmo0a-21&linkId=NPFQ2PORV5NQMDOZ",
            productDescription: ""
        },
        {
            productImageSource: "/products/LEDTShirt.jpg",
            productName: "Sound Activated LED T-Shirt",
            productDetail: "T-Shirt lights up and reacts to various sound levels with adjustable sensitivity",
            productLink: "http://www.amazon.co.uk/gp/product/B0088P12T2/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B0088P12T2&linkCode=as2&tag=gizmo0a-21&linkId=DDEHW4JYJGEEW7TE",
            productDescription: ""
        },
        {
            productImageSource: "/products/R2D2USBCharger.jpg",
            productName: "Star Wars R2D2 USB Hub",
            productDetail: "Chirps, squeals, and bleeps when you plug things in",
            productLink: "http://www.amazon.co.uk/gp/product/B001782N4A/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B001782N4A&linkCode=as2&tag=gizmo0a-21&linkId=55YDPTHH2OBVYBPB",
            productDescription: "Channel the force to charge your devices."
        },
        {
            productImageSource: "/products/Roku.jpg",
            productName: "Roku Streaming Stick",
            productDetail: "Stream online to your TV",
            productLink: "http://www.amazon.co.uk/gp/product/B00K71I68K/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B00K71I68K&linkCode=as2&tag=gizmo0a-21&linkId=A4NSCECEAOZFQWJF",
            productDescription: "Turn any tv into a smart tv. View youtube videos, listen to music on spotify or watch on demand movies"
        },
        {
            productImageSource: "/products/SolarPhoneCharger.jpg",
            productName: "Solar Phone Charger",
            productDetail: "Charge your phone anywhere",
            productLink: "http://www.amazon.co.uk/gp/product/B00LUGU1OI/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B00LUGU1OI&linkCode=as2&tag=gizmo0a-21&linkId=FDCWIZEXJODEBX6S",
            productDescription: "Perfect for camping trips. Water proof so works fine in the rain. Only $14. "
        },
        {
            productImageSource: "/products/Tracker.jpg",
            productName: "Wallet Trakr",
            productDetail: "Never lose your wallet again",
            productLink: "http://www.amazon.co.uk/gp/product/B00MFUBA02/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B00MFUBA02&linkCode=as2&tag=gizmo0a-21&linkId=NYW2ZMTIDUVU4DUZ",
            productDescription: "Let's you track your wallet or keys using your phone. No need to charge."
        }
    ];
}

Template.productFeaturettes.helpers({
    productItems: function () {
        return Products.find({}).fetch();
    }
});

UI.registerHelper('addIndex', function (all) {
    return _.map(all, function(val, index) {
        return {index: index, value: val};
    });
});

UI.registerHelper('isOdd', function(index){
    return index % 2
        == 1;
});

UI.registerHelper('isFirst', function(index){
    return index == 0;
});