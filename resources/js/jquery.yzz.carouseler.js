$.fn.yzzCarouseler = function(options) {
				var defaults = {
					$this: $(this),
					count: 1, //轮播图片开始下标
					carouselImgWidth: '100%', //轮播图片大小
					carouselImgHeight: '276px',
					carouselTime: 2000, //轮播时间间隔，毫秒
					timer: null,
					titleLength: 20, //标题最大长度
					imgSrcDatas: [
						'https://img5.bcyimg.com/editor/flag/178kp/d61413e00df811e7af33bb1ba4eb68f9.jpg',
						'https://img9.bcyimg.com/editor/flag/178ke/36dd9a40057311e7b21711514281e411.jpg',
						'https://img9.bcyimg.com/editor/flag/4bo1/3b0c7f6019d611e7b105f17bd6d992f6.jpg',
						'https://img5.bcyimg.com/editor/flag/c04cc/efdf9ce0969d11e6bbe1e997da522b55.jpg'
					],
					imgTitleDatas: [
						'标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一标题一',
						'标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二标题二',
						'标题三标题三标题三标题三标题三标题三标题三标题三标题三标题三标题三标题三标题三',
						'标题四标题四标题四标题四标题四标题四标题四标题四标题四标题四标题四标题四标题四'
					],
					getTitle: function(title) {
						if(title != null && title.length >= settings.titleLength) {
							return title.substring(0, settings.titleLength) + '...';
						}

						return title;
					},
					turnCarouselImg: function() {
						var $carouselImg = settings.$this.find('.yzz-carousel-imgs-div img');
						var $carouselTitle = settings.$this.find('.yzz-carousel-title-div');
						var length = settings.imgSrcDatas.length;
						var index = settings.count % length;
						$carouselImg.attr('src', settings.imgSrcDatas[index]);
						$carouselTitle.html(settings.getTitle(settings.imgTitleDatas[index]));
						settings.count++;
						settings.$this.find('.yzz-carousel-round-a').css('color', '#fff');
						settings.$this.find('.yzz-carousel-round-a').eq(index).css('color', 'red');
					}
				};
				//将一个空对象做为第一个参数
				var settings = $.extend({}, defaults, options);

				// 在每个调用该插件的元素中执行以下代码
				return $(this).each(function() {
					settings.$this.empty(); //先清空原来的内容	

					//显示轮播图片
					var imgHtml = '<div class="yzz-carousel-imgs-main-div"><div class="yzz-carousel-imgs-div" style="z-index: 1;width: ' + settings.carouselImgWidth + ';height:' + settings.carouselImgHeight + ';">';
					imgHtml += '<img src="' + settings.imgSrcDatas[0] + '" />';
					imgHtml += '</div>';

					var title = '<div class="yzz-carousel-title-div">' + settings.getTitle(settings.imgTitleDatas[0]) + '</div><div class="yzz-carousel-title-background-div"></div>';
					imgHtml += title;

					var round = '';
					imgHtml += '<div class="yzz-carousel-round-div" style="z-index: 2;">'
					for(var i = 0; i < settings.imgSrcDatas.length; i++) {
						round += '<a href="javascript:void(0);" class="yzz-carousel-round-a">●</a>';
					}
					imgHtml += round + '</div></div>';
					settings.$this.append(imgHtml);

					//标题样式
					settings.$this.find('.yzz-carousel-title-background-div').css({ 'background-color': '#000', 'width': '100%', 'height': '50px', 'opacity': '0.5', 'position': 'relative', 'top': '-69px', 'z-index': '1' });
					settings.$this.find('.yzz-carousel-title-div').css({ 'color': '#fff', 'font-size': '14px', 'font-weight': 'bold', 'position': 'relative', 'top': '-40px', 'left': '5px', 'z-index': '2' });

					//圆点样式
					settings.$this.find('.yzz-carousel-round-div').css({ 'float': 'right' });
					settings.$this.find('.yzz-carousel-round-a').css({ 'text-decoration': 'none', 'color': '#fff', 'position': 'relative', 'top': '-113px', 'left': '-40px', 'margin-right': '5px', 'z-index': '3' });
					settings.$this.find('.yzz-carousel-round-a').eq(0).css('color', 'red');
					//轮播图片大小
					settings.$this.find('.yzz-carousel-imgs-div').css('overflow', 'hidden');
					settings.$this.find('.yzz-carousel-imgs-div img').css({ 'width': '100%', 'height': '100%' });

					settings.$this.find('.yzz-carousel-round-a').on('click', function() {
						var index = $(this).index();
						settings.count = index;
						settings.$this.find('.yzz-carousel-imgs-div img').attr('src', settings.imgSrcDatas[index]);
						settings.$this.find('.yzz-carousel-round-a').css('color', '#fff');
						settings.$this.find('.yzz-carousel-round-a').eq(index).css('color', 'red');
						
						settings.$this.find('.yzz-carousel-title-div').html(settings.getTitle(settings.imgTitleDatas[index]));
					});

					//开启定时器
					timer = setInterval(settings.turnCarouselImg, settings.carouselTime);

					//鼠标悬浮在上则清除定时器
					settings.$this.find('.yzz-carousel-imgs-main-div').mouseover(function() {
						clearInterval(timer);
					});
					//鼠标离开则重启定时器
					settings.$this.find('.yzz-carousel-imgs-main-div').mouseout(function() {
						timer = setInterval(settings.turnCarouselImg, settings.carouselTime);
					});
				});
			}