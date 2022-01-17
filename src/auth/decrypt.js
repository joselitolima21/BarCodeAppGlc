import { AES, enc } from 'crypto-js';

export default function decrypt(text) { 
      console.log(process.env.TOKEN)
      var en = AES.decrypt(text, process.env.SECRET_CRYPTO);
      return en.toString(enc.Utf8)
}