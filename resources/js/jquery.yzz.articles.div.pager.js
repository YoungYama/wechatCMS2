/**
 * 分页器
 * @author 杨志钊
 * @date 2017-03-23
 * @param {Object} options
 */

/*类微信图文列表开始*/
$.fn.yzzArticlesDivPager = function(options) {
	var defaults = {
		datas: [ //启动编辑点击事件必须带class：yzz-edit、启动删除点击事件必须带class：yzz-delete
			['1fghdrg3erfewrg', '2017-04-02', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '1111标题标题标题', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>', [
				['1111标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>'],
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>']
			], '<a href="javascript:void(0);" class="yzz-edit">编辑</a>', '<a href="javascript:void(0);" class="yzz-delete">删除</a>'],
			['2fghdrg3erfewrg', '2017-04-02', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '标题标题标题', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>', [
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>'],
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>'],
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>']
			], '<a href="javascript:void(0);" class="yzz-edit">编辑</a>', '<a href="javascript:void(0);" class="yzz-delete">删除</a>'],
			['2fghdrg3erfewrg', '2017-04-02', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '标题标题标题', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>', [
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>']
			], '<a href="javascript:void(0);" class="yzz-edit">编辑</a>', '<a href="javascript:void(0);" class="yzz-delete">删除</a>'],
			['2fghdrg3erfewrg', '2017-04-02', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '标题标题标题', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>', [
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>'],
			], '<a href="javascript:void(0);" class="yzz-edit">编辑</a>', '<a href="javascript:void(0);" class="yzz-delete">删除</a>'],
			['2fghdrg3erfewrg', '2017-04-02', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '标题标题标题', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>', [
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>'],
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>'],
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>']
			], '<a href="javascript:void(0);" class="yzz-edit">编辑</a>', '<a href="javascript:void(0);" class="yzz-delete">删除</a>'],
			['2fghdrg3erfewrg', '2017-04-02', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '标题标题标题', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>', [
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>'],
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>']
			], '<a href="javascript:void(0);" class="yzz-edit">编辑</a>', '<a href="javascript:void(0);" class="yzz-delete">删除</a>'],
			['2fghdrg3erfewrg', '2017-04-02', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '标题标题标题', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>', [
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>'],
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>'],
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>']
			], '<a href="javascript:void(0);" class="yzz-edit">编辑</a>', '<a href="javascript:void(0);" class="yzz-delete">删除</a>'],
			['2fghdrg3erfewrg', '2017-04-02', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '标题标题标题', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>', [
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>'],
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>']
			], '<a href="javascript:void(0);" class="yzz-edit">编辑</a>', '<a href="javascript:void(0);" class="yzz-delete">删除</a>'],
			['2fghdrg3erfewrg', '2017-04-02', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '标题标题标题', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>', [
				['标题标题标题', 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg', '<a href="javascript: void(0);" class="yzz-pre-view">预览文章</a>']
			], '<a href="javascript:void(0);" class="yzz-edit">编辑</a>', '<a href="javascript:void(0);" class="yzz-delete">删除</a>']
		],
		page: {
			'currentPage': 1,
			'pageSize': 10,
			'totalPage': 4,
			'totalRecord': 35
		},
		pageAmount: 10, //页大小间隔量，一定要和第一次的pageSize值一样
		addInsertButton: true,
		addDeleteButton: true,
		chooseAllButton: true,
		isOnlyChooseOne: false, //是否开启只能选取一项的功能
		$this: $(this),
		fooTitleLength: 10, //父标题最大长度
		childTitleLength: 7, //子标题最大长度
		noDatasImgTip: 'http://ww2.sinaimg.cn/mw690/0060tXcFgw1f06d5ziejaj30o016otfp.jpg',
		showPager: true,
		firstPage: function() {
			alert('firstPage');
		},
		previousPage: function() {
			alert('previousPage');
		},
		nextPage: function() {
			alert('nextPage');
		},
		endPage: function() {
			alert('endPage');
		},
		setPageSize: function(pageSize) {
			alert('setPageSize:' + pageSize);
		},
		setCurrentPage: function(currentPage) {
			alert('setCurrentPage:' + currentPage);
		},
		editRecord: function(id) {
			alert('editRecord:' + id);
		},
		deleteRecord: function(id) {
			alert('deleteRecord:' + id);
		},
		insertRecord: function() {
			alert('insertRecord');
		},
		deleteBatch: function(values) {
			alert('deleteBatch:' + values);
		}
	};
	//将一个空对象做为第一个参数
	var settings = $.extend({}, defaults, options);

	// 在每个调用该插件的元素中执行以下代码
	return $(this).each(function() {
		settings.$this.empty(); //先清空原来的内容

		if(settings.datas.length > 0) {

			//是否增加全选按钮
			if(settings.chooseAllButton) {
				var chooseAllButton = '<button class="yzz-button yzz-choose-all-button">全选</button>';
				settings.$this.append(chooseAllButton);
				var $chooseAllButton = settings.$this.find('.yzz-choose-all-button');
				$chooseAllButton.attr('id', 'no');
				$chooseAllButton.click(function() {
					var $checkboxs = settings.$this.find('.yzz-checkbox-input');
					var $main = settings.$this.find('.yzz-single-articles-main-div');
					if($(this).attr('id') == 'no') {
						$(this).attr('id', 'yes');
						$checkboxs.prop('checked', true);
						$main.attr('id', 'yes');
						$main.find('.yzz-single-articles-all-backgroud-div').show();
						$main.find('.yzz-pre-view').show();
					} else {
						$(this).attr('id', 'no');
						$checkboxs.prop('checked', false);
						$main.attr('id', 'no');
						$main.find('.yzz-single-articles-all-backgroud-div').hide();
						$main.find('.yzz-pre-view').hide();
					}

				});
			}

			//是否增加添加按钮
			if(settings.addInsertButton) {
				var insertButton = '<button class="yzz-button yzz-insert-button">添加</button>';
				settings.$this.append(insertButton);
				settings.$this.find('.yzz-insert-button').click(function() {
					settings.insertRecord();
				});
			}

			//是否添加批量删除按钮
			if(settings.addDeleteButton) {
				var deleteButton = '<button class="yzz-button yzz-delete-button">删除</button>';
				settings.$this.append(deleteButton);
				settings.$this.find('.yzz-delete-button').click(function() {
					var $checkboxs = settings.$this.find('input[type=checkbox]');
					var values = '';
					$checkboxs.each(function(i) {
						if($(this).prop('checked')) {
							values += $(this).val() + ',';
						}
					});
					if(values.length > 0) {
						values = values.substring(0, values.length - 1);
						settings.deleteBatch(values);
					} else {
						alert('请先选择操作项');
					}

				});
			}

			settings.$this.find('.yzz-button').eq(0).css('margin-left', '10px');
		}

		//组装列表数据
		var html = '<div class="yzz-rectangles-articles-div">';
		var article = '';
		var count = 0;
		if(settings.datas.length <= 0) {
			settings.showPager = false;
			settings.$this.html('<div><img width="100%" src="' + settings.noDatasImgTip + '"  /></div>');
		} else {
			for(var i in settings.datas) { //组装HTML列表
				for(var j in settings.datas[i]) {
					count++;

					switch(parseInt(j)) {
						case 0:
							article += '<div class="yzz-single-articles-main-div"><div class="yzz-checkbox-div"><input type="checkbox" id="yzz-checkbox-input" class="yzz-checkbox-input"  value ="' + settings.datas[i][j] + '"><label class="yzz-checkbox-label" style="border: 1px solid gainsboro;"></label><span>更新于';
							break;
						case 1:
							article += settings.datas[i][j] +
								'</span></div><div class="yzz-single-articles-do-div"><div class="yzz-single-articles-div"  style="background-image: url(';
							break;
						case 2:
							article += settings.datas[i][j] + ');"><div class="yzz-single-articles-title-div"><a href="javascript: void(0);">';
							break;
						case 3:
							article += settings.datas[i][j] + '</a></div><div class="yzz-single-articles-title-background-div"></div><div class="yzz-single-articles-background-div yzz-single-articles-all-backgroud-div"></div>';
							break;
						case 4:
							article += settings.datas[i][j] + '</div></div>';
							break;
						case 5:
							var childArticles = settings.datas[i][j]; //子列表
							if(childArticles.length > 0) {
								article += '<div class="yzz-single-articles-child-list-div">';
								for(var n = 0; n < childArticles.length; n++) {
									for(var m = 0; m < childArticles[n].length; m++) {
										var temp = '';
										switch(parseInt(m)) {
											case 0:
												temp = '<div class="yzz-single-articles-child-div"><div class="yzz-single-articles-child-do-div"><div class="yzz-single-articles-title-div"><a href="javascript: void(0);">' + childArticles[n][m];
												article += temp;
												break;
											case 1:
												temp = '</a></div><div class="yzz-single-articles-title-img-div" style="background-image: url(' + childArticles[n][m];
												article += temp;
												break;
											case 2:
												temp = ');"></div></div><div class="yzz-single-articles-child-do-backgroud-div yzz-single-articles-all-backgroud-div"></div>' + childArticles[n][m];
												article += temp + '</div>';
												break;
										}
									}
								}
								article += '</div>';
							}

							break;
						case 6:
							article += '<div class="yzz-single-articles-bottom-div">' + settings.datas[i][j];
							break;
						case 7:
							article += settings.datas[i][j] + '</div></div>';
							break;
					}

				}
			}
		}
		html += article + '</div>';
		settings.$this.append(html);

		settings.$this.css({
			'width': settings.$this.find('.yzz-rectangles-articles-div').width(),
			'margin': 'auto'
		});

		if(settings.datas.length > 0) {

			//判断在添加批量删除按钮后是否有添加全选复选框
			if(settings.addDeleteButton) {
				if(settings.$this.find('.yzz-rectangles-articles-div input[type=checkbox]').eq(0).length <= 0) {
					alert('请先设置全选复选框');
					return;
				}
			}

			//瀑布流样式
			settings.$this.find('.yzz-rectangles-articles-div').masonry({
				itemSelector: '.yzz-rectangles-articles-div .yzz-single-articles-main-div',
				columnWidth: 10
			});

			//设置下标
			for(var i = 0; i < count; i++) {
				settings.$this.find('.yzz-checkbox-label').eq(i).attr('id', i);
			}

			settings.$this.find('.yzz-single-articles-main-div').attr('id', 'no');
			//复选框事件
			settings.$this.find('.yzz-checkbox-label').click(function() {
				var $checkboxs = settings.$this.find('.yzz-checkbox-input');
				var index = $(this).attr('id');
				$checkboxs.eq(index).click();
				var $main = settings.$this.find('.yzz-single-articles-main-div');

				if(settings.isOnlyChooseOne) { //启动单选
					$checkboxs.prop('checked', false);
					$main.attr('id', 'no');
					$main.find('.yzz-single-articles-all-backgroud-div').hide();
					$main.find('.yzz-pre-view').hide();

					$checkboxs.eq(index).prop('checked', true);
					$main.eq(index).attr('id', 'yes');
					$main.eq(index).find('.yzz-single-articles-all-backgroud-div').show();
					$main.eq(index).find('.yzz-pre-view').show();
				} else {
					if($checkboxs.eq(index).prop('checked')) {
						$main.eq(index).attr('id', 'yes');
						$main.eq(index).find('.yzz-single-articles-all-backgroud-div').show();
						$main.eq(index).find('.yzz-pre-view').show();
					} else {
						$main.eq(index).attr('id', 'no');
						$main.eq(index).find('.yzz-single-articles-all-backgroud-div').hide();
						$main.eq(index).find('.yzz-pre-view').hide();
					}
				}

			});

			//鼠标悬浮事件，背景显示隐藏事件
			settings.$this.find('.yzz-single-articles-do-div').mouseover(function() {
				$(this).find('.yzz-single-articles-all-backgroud-div').show();
				$(this).find('.yzz-pre-view').show();
			});
			settings.$this.find('.yzz-single-articles-do-div').mouseout(function() {
				var $main = $(this).parent();
				if($main.attr('id') == 'no') {
					$(this).find('.yzz-single-articles-all-backgroud-div').hide();
					$(this).find('.yzz-pre-view').hide();
				}
			});
			settings.$this.find('.yzz-single-articles-child-div').mouseover(function() {
				$(this).find('.yzz-single-articles-all-backgroud-div').show();
				$(this).find('.yzz-pre-view').show();
			});
			settings.$this.find('.yzz-single-articles-child-div').mouseout(function() {
				var $main = $(this).parent().parent();
				if($main.attr('id') == 'no') {
					$(this).find('.yzz-single-articles-all-backgroud-div').hide();
					$(this).find('.yzz-pre-view').hide();
				}
			});

			//限定标题长度
			var $fooTitles = settings.$this.find('.yzz-single-articles-title-div a'); //父标题
			$fooTitles.each(function() {
				var title = $(this).text();
				if(title.length > settings.fooTitleLength) {
					$(this).text(title.substring(0, settings.fooTitleLength) + '...');
				}
			});
			var $childTitles = settings.$this.find('.yzz-single-articles-title-div a'); //子标题
			$childTitles.each(function() {
				var title = $(this).text();
				if(title.length > settings.childTitleLength) {
					$(this).text(title.substring(0, settings.childTitleLength) + '...');
				}
			});

			if(settings.showPager) {
				//添加分页器
				var pagingPlugin = '<div class="yzz-paging-plugin-pager"><div class="yzz-page-total-record"><span>合计：</span><span>10</span><span>条</span></div><div class="yzz-page-size"><span>每页显示条数：</span><select><option value="10" selected="selected">10</option><option value="20">20</option></select></div><div class="yzz-page-turn"><a href="javascript:void(0);" class="firstPage">首页</a><a href="javascript:void(0);" class="previousPage">上一页</a><a href="javascript:void(0);" class="nextPage">下一页</a><a href="javascript:void(0);" class="endPage">尾页</a><div class="yzz-goto-page-div"><span>到第</span><select><option value="1" selected="selected">1</option><option value="2">2</option></select><span>页</span></div><div><span>第</span><span>1</span><span>/</span><span>2</span><span>页</span></div></div></div>';
				settings.$this.find('.yzz-rectangles-articles-div').after(pagingPlugin);
				settings.$this.find('.yzz-paging-plugin-pager').css('padding', '0px 0px 10px 10px');
				//设置页面列表相关分页数据
				settings.$this.find('.yzz-page-total-record span').eq(1).html(settings.page['totalRecord']);
				var options = '';
				var size = null;

				for(var i = 1; i <= Math.ceil(settings.page['totalRecord'] / settings.pageAmount); i++) {
					size = i * settings.pageAmount;
					if(size == settings.page['pageSize']) {
						options += '<option value="' + size + '" selected="selected">' + size + '</option>';
					} else {
						options += '<option value="' + size + '">' + size + '</option>';
					}
				}
				settings.$this.find('.yzz-page-size select').html(options);

				options = '';
				for(var i = 1; i <= settings.page['totalPage']; i++) {
					if(i == settings.page['currentPage']) {
						options += '<option value="' + i + '" selected="selected">' + i + '</option>';
					} else {
						options += '<option value="' + i + '">' + i + '</option>';
					}
				}
				settings.$this.find('.yzz-page-turn .yzz-goto-page-div select').html(options);
				settings.$this.find('.yzz-page-turn div').eq(1).find('span').eq(1).html(settings.page['currentPage']);
				settings.$this.find('.yzz-page-turn div').eq(1).find('span').eq(3).html(settings.page['totalPage']);

				//设置事件
				//设置每页显示条数事件
				settings.$this.find('.yzz-page-size select').change(function() {
					settings.setPageSize(settings.$this.find('.yzz-page-size select').val());
				});
				//设置页面跳转事件
				settings.$this.find('.yzz-goto-page-div select').change(function() {
					settings.setCurrentPage(settings.$this.find('.yzz-goto-page-div select').val());
				});
				if(settings.page['currentPage'] == 1) {
					settings.$this.find('.yzz-page-turn .firstPage').css({
						'cursor': 'not-allowed',
						'color': '#444'
					});
					settings.$this.find('.yzz-page-turn .previousPage').css({
						'cursor': 'not-allowed',
						'color': '#444'
					});
					//绑定下一页事件
					settings.$this.find('.yzz-page-turn .nextPage').bind('click', function() {
						settings.nextPage();
					});
					//绑定尾页事件
					settings.$this.find('.yzz-page-turn .endPage').bind('click', function() {
						settings.endPage();
					});
				} else if(settings.page['currentPage'] > 1 && settings.page['currentPage'] < settings.page['totalPage']) {
					//绑定首页事件
					settings.$this.find('.yzz-page-turn .firstPage').bind('click', function() {
						settings.firstPage();
					});
					//绑定上一页事件
					settings.$this.find('.yzz-page-turn .previousPage').bind('click', function() {
						settings.previousPage();
					});
					//绑定下一页事件
					settings.$this.find('.yzz-page-turn .nextPage').bind('click', function() {
						settings.nextPage();
					});
					//绑定尾页事件
					settings.$this.find('.yzz-page-turn .endPage').bind('click', function() {
						settings.endPage();
					});
				} else if(settings.page['currentPage'] == settings.page['totalPage']) {
					//绑定首页事件
					settings.$this.find('.yzz-page-turn .firstPage').bind('click', function() {
						settings.firstPage();
					});
					//绑定上一页事件
					settings.$this.find('.yzz-page-turn .previousPage').bind('click', function() {
						settings.previousPage();
					});
					settings.$this.find('.yzz-page-turn .nextPage').css({
						'cursor': 'not-allowed',
						'color': '#444'
					});
					settings.$this.find('.yzz-page-turn .endPage').css({
						'cursor': 'not-allowed',
						'color': '#444'
					});
				}

				//设置编辑事件
				if(settings.$this.find('.yzz-edit').length > 0) {
					settings.$this.find('.yzz-edit').each(function(index) {
						$(this).click(function() {
							settings.editRecord(settings.$this.find('input[type=checkbox]').eq(index).val());
						});
					});
				}
				//设置删除事件
				if(settings.$this.find('.yzz-delete').length > 0) {
					settings.$this.find('.yzz-delete').each(function(index) {
						$(this).click(function() {
							settings.deleteRecord(settings.$this.find('input[type=checkbox]').eq(index).val());
						});
					});
				}
			}
		}

	});
}
/*类微信图文列表结束*/