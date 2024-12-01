function fetchdata(){
    return new Promise((resolve,reject)=>{
        // let data ={ id:1,name:"alice",city:"GZB"};
        const data = [
            {name: 'John', score: 50},
            {name: 'Alice', score: 65},
            {name: 'Max', score: 88},
            {name: 'charlie', score: 35},
            {name: 'baltiu', score: 95},
          ];
        setTimeout(()=>{
            resolve(data);
        },3000);


    });
}

fetchdata()
      .then((data)=>{
        console.log(data);
      })
      .catch((err)=>{
        console.log(err);
      })