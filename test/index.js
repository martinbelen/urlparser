var uriParser = require('..');
var assert = require('assert');

describe('uriParser', function(){
  it('should replace the parameters', function(){
    var new_path = uriParser(
			'test.host.com/?uri=:test_uri', 
			{
				test_uri:"success"
			}
		);
    assert(new_path.indexOf("success") !== -1);
  });
});