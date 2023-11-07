const $ = (selector, el = document) => el.querySelector(selector);

const leftColumn = $('.left-column');
const mainColumn = $('.main-column');
const rightColumn = $('.right-column');

const leftSidebarTemplate = $('#left-sidebar-template');
const mainColumnTemplate = $('#main-column-template');
const rightSidebarTemplate = $('#right-sidebar-template');

const productTileTemplate = $('#product-tile-template');
const newProductTile = data => {
    const el = document.importNode(productTileTemplate.content, true);
    $('.cover-image', el).setAttribute('src', data.imageUrl);
    $('.product-name', el).textContent = data.productName;
    $('.price-credits__text', el).textContent = data.price;
    if (data.isInInventory) {
        $('.price-credits', el).classList.add('hidden');
        $('.owned-label', el).classList.remove('hidden');
    } else if (data.isDisplayOnly) {
        $('.price-credits', el).classList.add('hidden');
        $('.displayonly-label', el).classList.remove('hidden');
    }
    if (data.isInInventory || data.isDisplayOnly) {
        $('.cart-button', el).classList.add('hidden');
    }
    if (data.isAP) {
        $('.ap-badge', el).classList.remove('hidden');
    }
    if (data.isVIP) {
        $('.vip-badge', el).classList.remove('hidden');
    }
    return el;
}

const productDataList = [
    {
        imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/207435/top-00.png',
        productName: 'G- XXXTENTACION (F)',
        price: 523,
    },
    {
        imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/207435/top-01.png',
        productName: `!! Tattoo's RLL V2`,
        price: 663,
        isAP: true,
        isVIP: true,
    },
    {
        imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/207435/top-02.png',
        productName: 'A. Tentacion R. Hoodie!',
        price: 631,
        isDisplayOnly: true,
        isVIP: true,
    },
    {
        imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/207435/top-03.png',
        productName: '¿ Nike Fit RLL',
        price: 529,
        isInInventory: true,
    },
    {
        imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/207435/top-04.png',
        productName: 'J l Raquel TXL',
        price: 474,
    },
    {
        imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/207435/top-05.png',
        productName: 'K|KL*HotSummerDress',
        price: 631,
    },
    {
        imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/207435/top-06.png',
        productName: 'Wrapped Lemon RLL',
        price: 579,
    },
    {
        imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/207435/top-07.png',
        productName: 'Oversized Crewneck',
        price: 474,
        isAP: true,
    },
    {
        imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/207435/top-08.png',
        productName: '~nau~ Vivian perfect',
        price: 568,
    },
    {
        imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/207435/top-09.png',
        productName: 'L! Oh b!tch,  please :)',
        price: 579,
        isVIP: true,
    },
];

leftColumn.appendChild(leftSidebarTemplate.content);
rightColumn.appendChild(rightSidebarTemplate.content);
mainColumn.appendChild(mainColumnTemplate.content);

// not available until main column is rendered
const shopList = $('.shop-list');

for (let productData of [...productDataList, ...productDataList]) {
    shopList.appendChild(newProductTile(productData));
}
