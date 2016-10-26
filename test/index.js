var uriParser = require('..');
var assert = require('assert');

describe('uriParser', function(){
  it('should replace one parameter', function(){
    var new_path = uriParser(
			'test.host.com/?uri=:test_uri', 
			{
				test_uri:"success"
			}
		);
    assert(new_path.indexOf("success") !== -1);
  });
	it('should delete not used parameters', function(){
    var new_path = uriParser(
			'test.host.com/?uri=:test_uri&uri2=:test_uri2', 
			{
				test_uri:"success"
			}
		);
    assert(new_path.indexOf("uri2=:test_uri2") === -1);
  });
	it('should recalculate the query character (?/&)', function(){
    var new_path = uriParser(
			'test.host.com/?uri=:test_uri&uri2=:test_uri2', 
			{
				test_uri2:"success"
			}
		);
    assert(new_path.indexOf("?") !== -1);
  });
});