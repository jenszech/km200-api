'use strict';
import fetch from 'node-fetch';

export class HttpRequest {
  public port: number = 80;
  public host: string = '0.0.0.0';
  private url: string = '';

  constructor(host: string, port: number) {
    this.host = host;
    this.port = port;
  }

  public checkContentType(contentType: string | null): boolean {
    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError('Oops, we haven`t got JSON!');
    }
    return true;
  }

  private fetchData(endpoint: string, options: object): Promise<any> {
    const url = 'http://' + this.host + ':' + this.port + this.url + endpoint;
    return fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        this.checkContentType(response.headers.get('content-type'));
        return response.text();
      })
      .catch((error: Error) => {
        throw error; /* <-- rethrow the error so consumer can still catch it */
      });
  }

  public get(endpoint: string, options: object): Promise<any> {
    return this.fetchData(endpoint, options).then((response) => {
      return response;
    });
  }
}
