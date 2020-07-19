'use strict';
import { HttpRequest } from "./httpRequest";
const  Rijndael = require('rijndael-js');

/*
    const plainText = Buffer.from('Here is my plain text', 'utf8');
    const encrypted = Buffer.from(this.cipher.encrypt(plainText, 128));
    const decrypted = Buffer.from(this.cipher.decrypt(encrypted, 128));

    console.log(plainText.toString('utf8'));
    console.log(encrypted.toString('utf8'));
    console.log(decrypted.toString('utf8'));
    console.log('Done');
 */

export class Km200 extends HttpRequest {
  private key = '';

  private keyBuffer = Buffer.from(this.key, 'hex');
  private cipher = new Rijndael(this.keyBuffer,'ecb');
  private options = {
    headers: {
      'Content-type': 'application/json',
      'User-Agent': 'TeleHeater/2.2.3'
    }
  };

  constructor(host: string, port: number) {
    super(host, port);
  }

  private decrypt(body: any): string {
    const enc = new Buffer(body, 'base64');
    const plaintext = Buffer.from(this.cipher.decrypt(enc, 128));

    //console.log(body.toString());
    //console.log(enc.toString('ascii'));
    //console.log(plaintext.toString());
    return plaintext.toString();
  }

  public getKM200b(command: string): Promise<any> {
    return this.get(command, this.options)
      .then((body) => {
        return this.decrypt(body);
      })
  }
/*
   public getVersion(): Promise<number | null> {
    return this.get('version.cgi').then((data) => {
      if (data === null) return null;
      //const version = parseFloat(data.version._text);
      const version = 0.0;
      return version;
    });
  }
*/
}
