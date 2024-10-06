const prodotti = [
    { "nome": 'T-shirt', "prezzo": 30, "inStock": true },
    { "nome": 'Pantaloni', "prezzo": 120, "inStock": false },
    { "nome": 'Scarpe', "prezzo": 80, "inStock": true },
    { "nome": 'Giacca', "prezzo": 200, "inStock": true },
    { "nome": 'Cappello', "prezzo": 25, "inStock": false } 
];

const nomiProdottiePrezziFormattati = prodotti.map(prodotto => `${prodotto.nome}:€${prodotto.prezzo.toFixed(2)}`);
console.log(nomiProdottiePrezziFormattati);

const descrizioneProdotti = prodotti.map(prodotto => ({
    nome : prodotto.nome,
    descrizione : prodotto.inStock ? "Prodotto disponibile" : "Prodotto non disponibile"
}));
console.log(descrizioneProdotti);

const prodottiScontati = prodotti.map(prodotto => ({
    nome: prodotto.nome,
    prezzo: prodotto.prezzo > 100 ? prodotto.prezzo * 0.80 : prodotto.prezzo
}));
console.log(prodottiScontati);

const sommaPrezzi = prodottiScontati.reduce((somma, prodotto) => somma + prodotto.prezzo, 0);
console.log(sommaPrezzi);

const prodottiOrdinati = [...prodotti].sort((a,b) => b.prezzo - a.prezzo);
console.log(prodottiOrdinati);

const prodottiInStock = prodotti.filter(prodotto => prodotto.inStock);
const prodottiOutStock = prodotti.filter(prodotto => !prodotto.inStock);
console.log("Prodotti in stock: ", prodottiInStock);
console.log("Prodotti out of stock:", prodottiOutStock);