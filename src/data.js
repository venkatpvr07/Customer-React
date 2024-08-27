const data = [
    {
      "id": 0,
      "name": "Mike Johnsons",
      "email": "mikej@abc.com",
      "password": "mikej"
    },
    {
      "id": 1,
      "name": "Cindy Smiths",
      "email": "cinds@abc.com",
      "password": "cinds"
    },
    {
      "id": 2,
      "name": "Julio Martins",
      "email": "julim@abc.com",
      "password": "julim"
    }
  ]


export function getAllCustomers(){
    return data;
}

export function get(id) {
    let result = null;
    for( let item of data){
        if(item.id === id){
            result = item;
        }
    }
  return result;
}

export function deleteById(id) {
  let arrayIndex = getArrayIndexForId(id);
  if( arrayIndex >= 0 && arrayIndex < data.length){
    data.splice(arrayIndex,1);
  }
}

export function post(item) {
  let nextid = getNextId();
  console.log("nextid: " + nextid);
  item.id = nextid;
  data[data.length] = item;
}

export function put(id, item) {
  for( let i = 0; i < data.length; i++){
    if(data[i].id === id){
      data[i] = item;
      return;
    }
  }
}

function getArrayIndexForId(id){
  for( let i = 0; i < data.length; i++){
    if(data[i].id === id){
      return i;
    }
  }
  return -1;  
}


function getNextId(){
  let maxid = 0;
  for( let item of data){
    maxid = (item.id > maxid)?item.id:maxid;
  }  
  return maxid + 1;
}
