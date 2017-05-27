/**
 * 上传预览
 * @author 杨志钊
 * @date 2017-04-06
 * @param {Object} options
 */

$.fn.yzzUploadPreviewer = function(options) {
	var defaults = {
		files: null, //声明文件数组
		deleteFileIndexs: null, //预览时取消上传的文件下标
		imgSelectorSrc: 'http://www.easyicon.net/api/resizeApi.php?id=1145631&size=96', //文件选择器的背景图片
		$this: $(this), //当前jQuery对象
		dealWithFileSelected: function() { //选择文件后进行处理
			settings.files = settings.$this.find('input[type=file]').prop('files'); //获取所有选择的文件
			settings.deleteFileIndexs = Array(); //声明一个空数组，存放预览时取消上传的文件下标

			var urls = Array(); //声明一个空数组，存放被处理后可被img标签应用的URI
			$.each(settings.files, function(index, file) {
				var url = settings.getObjectURL(file); //处理文件的绝对路径，处理后返回可被img标签应用的URI
				urls[index] = url;
			});

			var imgHtml = '';
			$.each(urls, function(index, url) { //组装img标签，显示于页面
				imgHtml += '<div class="single-preview-img-div"><img src="' + url + '"/><a href="javascript:void(0);" class="yzz-delete-preview-file-a" id="' + index + '">&#10005</a></div>';
			});

			var $imgPreviewDiv = settings.$this.find('#yzz-preview-img-div'); //放置img标签的位置
			$imgPreviewDiv.empty(); //先清空上次的img标签
			$imgPreviewDiv.html(imgHtml);
		},
		submitFormData: function() { //提交事件

			//没有选择图片或者所有选择的图片已被取消，则提示且中断程序
			if(settings.files == null | (settings.files != null && settings.files.length == settings.deleteFileIndexs.length)) {
				alert('请先选择图片');
				return;
			}

			var formData = new FormData(); //创建FormData对象
			$.each(settings.files, function(index, file) {
				if(!settings.contains(settings.deleteFileIndexs, index)) {
					formData.append('file', settings.files[index]); //添加没有被取消的文件
				}
			});

			//异步请求上传文件
			$.ajax({
				type: 'post',
				url: 'http://localhost:8080/ssm/upload/test4',
				data: formData,
				processData: false, //jq的ajax会默认将传入的参数修改成键值对的形式，这种形式对于string合适，但对于上传的文件就不合适，设置processdata：false不要对data参数进行序列化处理，默认为true
				contentType: false, // 不要设置Content-Type请求头，因为文件数据是以 multipart/form-data 来编码
				cache: false,
				success: function(callbackData) {
					alert(JSON.stringify(callbackData)); //回调数据
					settings.$this.find('input[type=file]').val(''); //清空file input组件的值
					settings.$this.find('#yzz-preview-img-div').empty(); //清空预览的img标签
				},
				error:function(){
					alert('服务器出错');
				}
			});
		},
		deletePreviewFile: function(index) {
			settings.deleteFileIndexs.push(index); //添加取消的文件下标
			settings.$this.find('.single-preview-img-div').eq(index).hide(); //隐藏要取消的文件所对应的img标签
		},
		getObjectURL: function(file) { //把file input的文件路径转化为img标签可解析的URI
			var url = null;
			if(window.createObjectURL != undefined) { // basic
				url = window.createObjectURL(file);
			} else if(window.URL != undefined) { // mozilla(firefox)
				url = window.URL.createObjectURL(file);
			} else if(window.webkitURL != undefined) { // webkit or chrome
				url = window.webkitURL.createObjectURL(file);
			}
			return url;
		},
		contains: function(arr, obj) {
			var i = arr.length;
			while(i--) {
				if(arr[i].toString() === obj.toString()) {
					return true;
				}
			}
			return false;
		}
	};
	//将一个空对象做为第一个参数
	var settings = $.extend({}, defaults, options);

	// 在每个调用该插件的元素中执行以下代码
	return $(this).each(function() {
		settings.$this.empty();

		var html = '<div id="yzz-preview-img-main-div"><div id="yzz-preview-img-div"></div><img id="yzz-preview-img-img" src="' + settings.imgSelectorSrc + '"/></div>'
		var fileInput = '<input multiple="multiple" type="file" style="display: none;" />';
		var submitButton = '<button id="yzz-upload-file-button" type="button">上传</button>';

		settings.$this.append(html + fileInput); //添加显示预览图片的标签及file input标签
		settings.$this.find('#yzz-preview-img-main-div').after(submitButton); //添加上传按钮

		//监听文件选择器背景图片的点击事件，点击它就是点击file input文件选择器
		settings.$this.find('#yzz-preview-img-main-div #yzz-preview-img-img').on('click', function() {
			settings.$this.find('input[type=file]').click();
		});

		//监听file input选择器的change事件
		settings.$this.find('input[type=file]').on('change', function() {
			settings.dealWithFileSelected();

			//监听取消图片的点击事件
			settings.$this.find('.yzz-delete-preview-file-a').on('click', function() {
				var index = $(this).attr('id'); //其ID值就是取消的文件的对应下标
				settings.deletePreviewFile(index);
			});
		});

		//监听上传按钮事件
		settings.$this.find('button[type=button]').on('click', function() {
			settings.submitFormData();
		});

	});
}