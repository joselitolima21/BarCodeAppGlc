import { AES, enc } from 'crypto-js';

export default function decrypt(text) { 
      var en = AES.decrypt(text, "Secret Passphrase");
      return en.toString(enc.Utf8)
}