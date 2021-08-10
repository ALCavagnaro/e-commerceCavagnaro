// mock
const ItemsStock = [
    {
      id: '',
      isValid: true,
      name: ''
    }
  ];
  
  // simulación de api call
  const getItem = (id = null) => {
    console.log('waiting for response...');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const ItemStock = ItemsStock.find(ItemStock => ItemStock.id === id);
       
        if (ItemStock != null) resolve(ItemStock);

        reject({
          status: 404
        });
      }, 2000);
    });
  };
  
  const myPromise = new Promise(async (resolve, reject) => {
    const ItemStock = await getItem('').catch(
      err => reject(err)
    );
    
    ItemStock?.isValid ? resolve(ItemStock) : reject('not ItemStock');
  });
  
  myPromise.then(result => console.log(result)).catch(err => console.log(err));
  