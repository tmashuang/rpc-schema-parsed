import fs from 'fs';

const readData = async () => {
  let json
  fs.readFile('src/mm-rpc.json', 'utf-8', (err, data) => {
    if (err) {
      throw err
    }

    json = JSON.parse(data.toString())

    json.methods.forEach(methods => {
      console.log(methods.name)
      methods.params.forEach(params => {
        console.log(params.schema)
      })
      console.log('------------------------------------------------------------------------------------------------------------------')
    });
  })
}

await readData()