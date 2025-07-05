/**
** 대표화면 페이지 js
**/

$(function(){
    $(document).on('click', '.m-main-popup-add .mm_foot .btn_popup-preview', function(){
        var $this = $(this);
        var $popupForm = $this.closest('.m-main-popup-add');

        var _popImg = $popupForm.find('.mm_form-image [type="file"]').data().files.result;
        var _popText = [];
        var $popupCon = $('.m--preview-contents');

        for (var i = 1; i <= 2; i++) {
            if(!$popupForm.find('[name="popup_text-line'+i+'"]').val()) {
                _popText[i] = '';
                continue;
            }

            _popText[i] = {
                text : $popupForm.find('[name="popup_text-line'+i+'"]').val(),
                position : {
                    x : $popupForm.find('[name="popup_text-line'+i+'-positionX"]').val(),
                    y : $popupForm.find('[name="popup_text-line'+i+'-positionY"]').val()
                },
                color : $popupForm.find('[name="popup_text-line'+i+'-color"]').val()
            }

            $popupCon.append('<p class="text_line'+[i]+'" style="position:absolute; top:'+_popText[i].position.y+'px; left:'+_popText[i].position.x+'px; color:'+_popText[i].color+'">'+_popText[i].text+'</p>');
        }

        $popupCon.find('img').attr('src', _popImg);

        mm.modal.resize();
    });
});
