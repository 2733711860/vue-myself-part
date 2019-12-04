var searchInput = {
	searchToggle:function(obj, evt){
		var container = $(obj).closest('.search-wrapper');
		//弹出搜索框
		if(!container.hasClass('active')){
			  container.addClass('active');
			  evt.preventDefault();
		}
	},
	closeSearchToggle:function(obj, evt){
		var container = $(obj).closest('.search-wrapper');
		//关闭搜索框
		if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
			  container.removeClass('active');
			  // clear input
			  container.find('.search-input').val('');
			  // clear and hide result container when we press close
			  container.find('.result-container').fadeOut(100, function(){$(this).empty();});
		}
	}
};
export default searchInput;
