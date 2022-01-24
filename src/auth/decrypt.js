import { AES, enc } from 'crypto-js';

export default function decrypt(text) { 
      try {
            var en = AES.decrypt(text, process.env.SECRET_CRYPTO);
            return en.toString(enc.Utf8)
      } catch {
            return 'erro'
      }
}