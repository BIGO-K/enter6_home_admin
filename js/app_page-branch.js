/**
** 브랜드 관리
**/

$(function() {

	var $category = $('.m-branch-brand-category');
	var $cateTitle = $category.children('h5');
	var $cateFoot = $category.find('.m--category-foot');

	// 순서변경
    $cateFoot.find('.mm_btn').on('click', function(__e) {

        var $this = $(this);
		var $cateList = $category.find('.m--category-list ul');
		var datas = $category.data('m.category') || { clones: null, sortables:[] };

		if ($this.hasClass('btn_sort-change')) {
            $category.addClass('__category-list-sortable');
			$cateTitle.html('<span>순서 변경</span>');

            $cateList.each(function(__i) {

                datas.sortables[__i] = Sortable.create($cateList[__i], { forceFallback: true });

            });
			datas.clone = $cateList.first().clone(true);// 취소용 복제
			$category.data('m.category', datas);
        }
		else {
            // 편집취소
            if ($this.hasClass('btn_sort-cancel')) {
                $cateList.first().replaceWith(datas.clone);
            }
            // 편집적용
            else if ($this.hasClass('btn_sort-apply')) {
                //
            }

            $cateTitle.html('<span>브랜드 카테고리 순서 (브랜드 안내)</span>');
            $category.removeClass('__category-list-sortable').removeData('m.category');

			$.each(datas.sortables, function(__index, __value) {

				__value.destroy();

			});
			datas.sortables = [];

        }

    });
});
