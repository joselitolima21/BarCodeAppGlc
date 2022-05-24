import { AES, enc } from 'crypto-js';

export default function decrypt(text) { 
      try {
            console.log(process.env.SECRET_CRYPTO)
            var en = AES.decrypt(text, process.env.SECRET_CRYPTO);
            return en.toString(enc.Utf8)
      } catch {
            return 'erro'
      }
}