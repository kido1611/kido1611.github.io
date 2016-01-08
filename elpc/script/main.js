		jQuery(function( $ ){
			/*back to top when refresh*/
			$("html, body").animate({ scrollTop: 0 }, "slow");
			
			/*	when press top */
			$("#top-button, #header-title, #author").click(function(e) {
				$("html, body").animate({ scrollTop: 0 }, "slow");
			});
			
			/*	show or hide navigation when scroll over line follower */
			var block_position = 1;
			
			var heightBrowser = window.innerHeight
				|| document.documentElement.clientHeight
				|| document.body.clientHeight;
			var offsetLF = document.getElementById("block-2").offsetTop;
			var offsetProg = document.getElementById("block-3").offsetTop;
			var offsetJadwal = document.getElementById("block-4").offsetTop;
			var offsetReg = document.getElementById("block-5").offsetTop;
			var offsetKontak = document.getElementById("block-6").offsetTop;
			$(window).scroll(function(e) {
				if($(this).scrollTop()>=(offsetLF-70) && $(this).scrollTop() < (offsetProg-70)){
					block_position = 2;
				}else if($(this).scrollTop()>=(offsetProg-70) && $(this).scrollTop()<(offsetJadwal-70)){
					block_position = 3;
				}else if($(this).scrollTop()>=(offsetJadwal-70) && $(this).scrollTop()<(offsetReg-70)){
					block_position = 4;
				}else if($(this).scrollTop()>=(offsetReg-70) && $(this).scrollTop()<(offsetReg+180)){
					block_position = 5;
				}else if($(this).scrollTop()>=(offsetReg+180)){
					block_position = 6;
				}else{
					block_position = 1;
				}
				
				if((block_position)!=1){
					$("header#navigation nav ul li.active").removeClass("active");
					var aa = $("header#navigation nav ul li").get(block_position-2);
					aa.className="active";
				}else{
					$("header#navigation nav ul li.active").removeClass("active");
				}
				
				if($(this).scrollTop()>(120)){
					$("header#navigation").fadeIn("fast");
					document.getElementById("#top").style.overflow='auto';
				}else{
					$("header#navigation").fadeOut("fast");
					document.getElementById("#top").style.overflow='hidden';
				}
            });
			
			/*	Default hide navigation	*/
			$("header#navigation").hide();
			
			$("header#navigation nav ul li").click(function(e) {
                if(!$(this).hasClass("active")){
					$(document).off("scroll");
					var indexpos = $(this).index()+1;
					var offset = document.getElementById("block-"+(indexpos+1)).offsetTop;
					$("html, body").stop().animate({ scrollTop: offset+"px" }, "slow");
					block_position=indexpos;
				}
            });
			
			$("li#goto-lf").click(function(e) {
				var offset = document.getElementById("block-2").offsetTop;
				$("html, body").animate({ scrollTop: offset+"px" }, "slow");
				block_position=2;
			});
			$("li#goto-programming").click(function(e) {
				var offset = document.getElementById("block-3").offsetTop;
				$("html, body").animate({ scrollTop: offset+"px" }, "slow");
				block_position=3;
			});
			
			$("button#toggle-navigation").click(function(e) {
                $("header#navigation nav ul").fadeToggle("slow");
				$("div#block-window").fadeToggle("slow");
            });
			$("div#block-window").click(function(e) {
                $("header#navigation nav ul").fadeOut("slow");
				$(this).fadeOut("slow");
            });
			/*document.onkeydown=function(e){
				switch(e.keyCode){
					case 38:
						if(block_position>1)
							block_position--;
						break;
					case 40:
						if(block_position<6)
						block_position++;
						break;
				}	
				var offset = document.getElementById("block-"+block_position).offsetTop;
				$("html, body").animate({ scrollTop: offset+"px" }, "fast");

			};*/
		});