const ItemsDetail = [
    {
      id: '',
      isValid: true,
      name: ''
    }
  ];
  
  // simulación de api call
  const getItems = (id = null) => {
    console.log('waiting for response...');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const  ItemDetail =  ItemsDetail.find( ItemDetail =>  ItemDetail.id === 1);
        console.log('Traigo item 1');
       
        if ( ItemDetail != null) resolve( ItemDetail);

        reject({
          status: 404
        });
      }, 2000);
    });
  };
  
  const myPromise = new Promise(async (resolve, reject) => {
    const  ItemDetail = await getItems('').catch(
      err => reject(err)
    );
    
    ItemDetail?.isValid ? resolve( ItemDetail) : reject('not ItemStock');
  });
  
  myPromise.then(result => console.log(result)).catch(err => console.log(err));