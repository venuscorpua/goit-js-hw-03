function getShippingCost(country){
    let delCountry;
    let price;
    switch (country) {
        case "China":{
            delCountry = country;
            price = 120;
            break;
        }
        case "Chile":{
            delCountry = country;
            price = 250;
            break;
        }
          case "Australia":{
            delCountry = country;
            price = 170;
            break;
        }
        case "Jamaica":{
                delCountry = country;
                price = 120;
                break;
        }
        
        default:{
        return "Sorry, there is no delivery to your country";    
        }

    }
    return "Shipping "+ delCountry + "to will cost " + price + " credits";
}

// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"