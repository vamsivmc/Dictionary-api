
const request = require('request');
const headers = require('../config');

describe("Tests for Dictionary API's", () => {
  	it('Create Dictionary with Authorization Header', () => {
		request({
			method: 'POST',
			url: 'https://dictionary.iachieved.it/dictionary',
			headers: headers.headersWithAuth,
			body: "{}"
			}, function (error, response, body) {
				expect(response.statusCode).toBe(201);
		});
	});

	it('Create Dictionary with Unauthrozied', () => {
		request({
			method: 'POST',
			url: 'https://dictionary.iachieved.it/dictionary',
			headers: headers.headersWithOutAuth,
			body: "{}"
			}, function (error, response, body) {
				expect(response.statusCode).toBe(401);
		});
	});

	it('To check response body not null', () => {
		request({
			method: 'POST',
			url: 'https://dictionary.iachieved.it/dictionary',
			headers: headers.headersWithAuth,
			body: "{}"
			}, function (error, response, body) {
				expect(response.body).not.toEqual({});
		});
	});  
   
})

describe('Tests for Create Or Update Key Value', () => {
	it('Test for Creating Key value for a id', () => {
		  let id ='3f2876dc-02b4-49eb-96ac-d8468b5900ac';
		  let key = 'sampleKey';
	  request({
		  method: 'POST',
		  url: 'https://dictionary.iachieved.it/dictionary/'+id+'/keys/'+key+'?id='+id+'&key='+key,
		  headers: headers.headersWithAuth,
		  body: "{'value':'1223'}"
		  }, function (error, response, body) {
			  expect(response.statusCode).toBe(200);
	  });
  });

  it('Test for Creating key with a wrong id', () => {
	let id ='d8468b5900ac';
	let key = 'sampleKey';
	  request({
		  method: 'POST',
		  url: 'https://dictionary.iachieved.it/dictionary/'+id+'/keys/'+key+'?id='+id+'&key='+key,
		  headers: headers.headersWithAuth,
		  body: "{'value':'1223'}"
		  }, function (error, response, body) {
			  expect(response.statusCode).toBe(200);
	  });
  });

  it('Test for Passing without body value', () => {
	let id ='3f2876dc-02b4-49eb-96ac-d8468b5900ac';
	let key = 'sampleKey1';
	  request({
		  method: 'POST',
		  url: 'https://dictionary.iachieved.it/dictionary'+id+'/keys/'+key+'?id='+id+'&key='+key,
		  headers: headers.headersWithAuth,
		  body: "{}"
		  }, function (error, response, body) {
			  expect(body).toEqual('<h1>Not Found</h1>');
	  });
  });		  
})

describe('Tests for Delete Dictionary API', () => {
	it('Delete Dictionary with Authorization Header', () => {
		var id ='3f2876dc-02b4-49eb-96ac-d8468b5900ac';
	  request({
		  method: 'DELETE',
		  url: 'https://dictionary.iachieved.it/dictionary/'+id+'?'+'id='+id,
		  headers: headers.headersWithAuth,
		  body: "{}"
		  }, function (error, response, body) {
			  expect(response.statusCode).toBe(204);
	  });
  });

  it('Delete Dictionary with Unauthrozied', () => {
	  var id ='1233444';
	  request({
		  method: 'DELETE',
		  url: 'https://dictionary.iachieved.it/dictionary'+id+'?'+'id='+id,
		  headers: headers.headersWithOutAuth,
		  body: "{}"
		  }, function (error, response, body) {
			  expect(response.statusCode).toBe(401);
	  });
  });

  it('Test for Passing Wrong Id ', () => {
	  var id ='1233444';
	  request({
		  method: 'DELETE',
		  url: 'https://dictionary.iachieved.it/dictionary'+id+'?'+'id='+id,
		  headers: headers.headersWithAuth,
		  body: "{}"
		  }, function (error, response, body) {
			  expect(response.statusCode).toBe(404);
	  });
  });
  
  it('Test for not passing id', () => {
	  request({
		  method: 'DELETE',
		  url: 'https://dictionary.iachieved.it/dictionary',
		  headers: headers.headersWithAuth,
		  body: "{}"
		  }, function (error, response, body) {
			  expect(response.statusCode).toBe(404);
	  });
  });
		  
 
})
