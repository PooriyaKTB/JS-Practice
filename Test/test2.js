const obje = {
    firstName: 'Pooriya',
    lastName: 'ketabi',
    birthDate: 1992,
    job: ['SE','chef']
}

const objMap = new Map(Object.entries(obje))
console.log(objMap);
console.log(objMap.get('job'));