'use strict';

describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('returns the score', function(){
    expect(frame.score).toEqual(0);
  });

  it('returns the pins', function(){
    expect(frame.pins).toEqual(10);
  });

  it('returns the number of pins after the first roll', function(){
    frame.firstRoll(2)
    expect(frame.pins).toEqual(8);
  });

  it('returns the number of pins after the second roll', function(){
    frame.firstRoll(2)
    frame.secondRoll(3)
    expect(frame.pins).toEqual(5);
  });

  it('returns the frame score', function(){
    frame.firstRoll(2)
    frame.secondRoll(3)
    expect(frame.pins).toEqual(5);
  });


});
