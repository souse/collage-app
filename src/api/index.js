const NODE_ENV = process.env.NODE_ENV

let baseURI = 'http://hutong.activity.test.shbaoyuantech.com';

if (NODE_ENV !== 'development') {
  baseURI = 'http://hutong.activity.test.shbaoyuantech.com';
}

export default baseURI;