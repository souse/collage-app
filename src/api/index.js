const NODE_ENV = process.env.NODE_ENV

let baseURI = 'http://127.0.0.1:5000'

if (NODE_ENV !== 'development') {
  baseURI = '';
}

export default baseURI;