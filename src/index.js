import fs from 'fs';
import $RefParser from "@apidevtools/json-schema-ref-parser";
import { rpc } from "./rpc.js";

const schemaParse = async () => {
  const a = await rpc()
  try {
    const schema = await $RefParser.dereference(a)
    const json = JSON.stringify(schema)
    fs.writeFile('src/mm-rpc.json', json, err => {
      if (err) {
        throw err
      }
    })
    return schema
  } catch (error) {
    console.log(error)
  }
}

const main = async () => {
  const schema = await schemaParse()
  console.log(schema.methods.forEach(method => {
    console.log(method.name)
    method.params.forEach(param => {
      console.log(param.schema)
    })
  }));
}

await schemaParse()