$(function(){
  $('.tag').on('click',function(e){
    let v= $('#message').val();
    let selin = $('#message').prop('selectionStart');
    let selout = $('#message').prop('selectionEnd');
    let befStr="{"+$(this).val()+"}";
    let aftStr="{/"+$(this).val()+"}";
    let v1=v.substr(0,selin);
    let v2=v.substr(selin,selout-selin);
    let v3=v.substr(selout);
    $('#message')
      .val(v1+befStr+v2+aftStr+v3)
      .prop({
        "selectionStart":selin+befStr.length,
        "selectionEnd":selin+befStr.length+v2.length
        })
      .trigger("focus");
  });
}); 
