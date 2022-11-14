const nametag = window.nametag
// or
import { nametag } from './nametag.web.js';

// function inputs

//      type,          host,               id,            callback,                     refresh
//      http or ws     host of nametag     Discord ID     function to recive data       how often you want to recive an update

// ws
nametag("ws", "ws://localhost:3000/ws", "1234567890", console.log, 1000)
nametag("ws", "wss://localhost:3000/ws", "1234567890", console.log, 1000)

// http
nametag("http", "http://localhost:3000/ws", "1234567890", console.log, 1000)
nametag("http", "https://localhost:3000/ws", "1234567890", console.log, 1000) 
