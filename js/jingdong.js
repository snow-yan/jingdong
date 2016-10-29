window.onload=function(){
	//	懒加载
	var aa=jQuery.noConflict();
   	aa("img").lazyload({
   		threshold:200,
   		event:"scroll",
   		effect:"fadeIn",
   	});
   	console.log(aa("img"));
	// banner轮播
	var banner=$(".bannermiddle")[0];
	var img=$(".banner-pic")
	var cir=$(".circle")
	var left=$(".banner-zuo")[0];
	var right=$(".banner-you")[0];
	var width=parseInt(getStyle(banner,"width"))	
	var n=0;
	var t=setInterval(con,2000)
	function con(){
		n++;
		if(n>=img.length){
			n=0;
		}
		for(var i=0;i<img.length;i++){
			animate(img[i],{display:"none"},600)
			animate(img[i],{opacity:0},600)			    
            cir[i].style.background=" #3E3E3E";
		}  
		img[n].style.display="block"; 
		animate(img[n],{opacity:1},600)
		cir[n].style.background="#B61B1F" 
		
		img[n].onmouseover=function(){
		    clearInterval(t);
		    

		}
		img[n].onmouseout=function(){
			t=setInterval(con,2000)
			
		    
		}
		banner.onmouseover=function(){
			right.style.display="block"
		    left.style.display="block"
		}
		banner.onmouseout=function(){
			right.style.display="none"
		    left.style.display="none"
		}
	}
	for(var j=0;j<cir.length;j++){
		cir[j].index=j;		
		cir[j].onmouseover=function(){
			for(var i=0;i<cir.length;i++){
				animate(img[i],{display:"none"},600)
		    animate(img[i],{opacity:0},600)
            cir[i].style.background=" #3E3E3E";
			} 
			img[this.index].style.display="block";
			animate(img[this.index],{display:"block"},600)  
			animate(img[this.index],{opacity:1},600)
			cir[this.index].style.background="#B61B1F"
			n=this.index;
	    }
             
	}


	right.onclick=function(){
	
	    con();
	}
	left.onclick=function(){
		n--;
		if(n<0){
			n=img.length-1;
		}
		for(var i=0;i<img.length;i++){	
			animate(img[i],{display:"none"},600)
		    animate(img[i],{opacity:0},600)
            cir[i].style.background=" #3E3E3E";
		}  
		img[n].style.display="block"; 
		animate(img[n],{opacity:1},600)
		cir[n].style.background="#B61B1F"
		// n=this.index;	
	}

	$(".banner-left-left")[0].onmouseover=function(){
		alert(1);
	}
	// 十二楼轮播左,右
	function build(obj){
		var obj=obj;
		var box=$(".life-left-top")[obj];
		var pic=$(".xiaomi",box);
	    var round=$(".round",box);
	    var zuo=$(".beautiful-left")[obj];
	    var you=$(".beautiful-right")[obj];    
		var now=0;
		var following=0;
		var flag=true;
		var kuan=parseInt(getStyle(box,"width"))
		var time=setInterval(move,2000)
		function move(){
			  following=now+1;
	          if(following>=pic.length){
	            following=0;
	          }
	          pic[following].style.left=kuan+"px"
	          animate(pic[now],{left:-kuan},600,Tween.Linear);
	          round[now].style.backgroundColor="#3E3E3E"
	          animate(pic[following],{left:0},600,Tween.Linear);          
	          round[following].style.backgroundColor="#B61B1F"     
	          now=following;
			 
			}         
	        box.onmouseover=function(){
			     clearInterval(time);
			     you.style.display="block"
			 	 zuo.style.display="block"

			}
			box.onmouseout=function(){
					time=setInterval(move,2000)
					you.style.display="none"
			 	 	zuo.style.display="none"
			}
		

		you.onclick=function(){			
			flag=false;
		    move();
		}
		zuo.onclick=function(){			
			flag=false;
			 following=now-1;
	         if(following<0){
	          following=pic.length-1;
	         }
	         pic[following].style.left=-kuan+"px"
	         animate(pic[now],{left:kuan},600,Tween.Linear)
	         animate(pic[following],{left:0},600,Tween.Linear)
	         round[now].style.backgroundColor="#3E3E3E"
	         round[following].style.backgroundColor="#B61B1F"
	         now=following;
		}
		for(var j=0;j<round.length;j++){
			round[j].index=j;
			round[j].onmouseover=function(){
			 
				if(this.index<now){
					
					if(!flag){
						return;
					}
					flag=false;
					pic[this.index].style.left=-kuan+"px"
					animate(pic[now],{left:kuan},600,Tween.Linear);    				       
				}else if(this.index>now){
				if(!flag){
						return;
					}	
					flag=false;			
					pic[this.index].style.left=kuan+"px"					
				    animate(pic[now],{left:-kuan},600,Tween.Linear);

				    }   
				    	 round[now].style.backgroundColor="#3E3E3E";    
						 round[this.index].style.backgroundColor="#B61B1F" 
						 animate(pic[this.index],{left:0},600,Tween.Linear,function(){flag=true});         
						 now=this.index;
						 following=this.index;
	          }
			
		}
		
	}
	build(0)
	build(1)
	





// 左侧楼层跳转
	var left_hidden=$(".build-floor")[0];

	var hidden=$(".floor-build")
	
	var first=$(".floor-build-first")[0]
	var now;
	var build=$(".one-building")[0]
	var first_bul=build.offsetTop
	var qua=$(".quality-life")[0].offsetTop
	var sale=$(".sale")[0].offsetTop
	var two_building=$(".two-building")
	var	first_word=$(".floor-build-word-f")[0]
	var	two_word=$(".floor-build-word")
	var first_hidden=$(".floor-build-first-hidden-f")[0]
	var two_hidden=$(".floor-build-first-hidden")

	for(var i=0;i<two_building.length;i++){
		two_building[i].h=two_building[i].offsetTop
	}

	window.onscroll=function(){
			var obj=document.body.scrollTop?document.body:document.documentElement;
			var t=obj.scrollTop;
	    		if(t>=qua){			    				    			
		                left_hidden.style.display="block"
		         	

		          }
		          if(t<qua){			    				    			
		                left_hidden.style.display="none"
		          }

		          if(t>=sale){	

		                left_hidden.style.display="none"
		          }
		         for(var i=0;i<two_building.length;i++){
		         	if(t>=two_building[i].h-200){
		         		first.style.color="#625351"
		         		for(var j=0;j<hidden.length;j++){		    
		         			hidden[j].style.color="#625351"		         			
		         		}
		         			hidden[i].style.color="#C81623"

		         	}
		         }
		         first.onmouseover=function(){
		         	first.style.backgroundColor="#C81623"
		         	first.style.color="#fff"
		         	first_word.style.display="none"
		         	first_hidden.style.display="block"


		         }
		          first.onmouseout=function(){
		         	first.style.backgroundColor="#fff"
		         	first.style.color="#625351"
		         	first_word.style.display="block"
		         	first_hidden.style.display="none"
		         }
		         first.onclick=function(){
		         	animate(document.documentElement,{scrollTop:first_bul},500)
		         	animate(document.body,{scrollTop:first_bul},500)
		         

		         			
		         }
		         for( var i=0;i<hidden.length;i++){
		         	hidden[i].index=i;	
		         	hidden[i].onclick=function(){
		         		for(var i=0;i<two_building.length;i++){
		         			animate(document.documentElement,{scrollTop:two_building[this.index].h},500)
		         			now=this.index;
		         			animate(document.body,{scrollTop:two_building[this.index].h},500)
		         			now=this.index;

		         		}
		         	}
         			hidden[i].onmouseover=function(){
		         		hidden[this.index].style.color="#fff"
         				hidden[this.index].style.backgroundColor="#C81623"
         				two_word[this.index].style.display="none"
         				two_hidden[this.index].style.display="block"
         				now=this.index;
         				
         			}
         			hidden[i].onmouseout=function(){
         				hidden[this.index].style.color="#625351"
         				hidden[this.index].style.backgroundColor="#fff"
         				two_word[this.index].style.display="block"
         				two_hidden[this.index].style.display="none"
         				now=this.index;
         			}
		         }
		}


		    // 今日推荐
		    var bao=$(".baohidden")[0];
		    var today=$(".tody-hidden")[0];
		    var today_xiao=$(".today");
		    var width_kuan=today_xiao[0].offsetWidth;
		    var left_zuo=$(".baohidden-left")[0]
			var right_you=$(".baohidden-right")[0]
			
			bao.onmouseover=function(){
				left_zuo.style.display="block"
				right_you.style.display="block"
			}			
			bao.onmouseout=function(){
				left_zuo.style.display="none"
				right_you.style.display="none"
			}			
			right_you.onclick=function(){
			  animate(today,{left:-width_kuan},600,function(){
		    	 	var first=getFirst(today);
		    	 	today.appendChild(first);
		    	 	today.style.left=0+"px"
		    	 })
		    
			}
			left_zuo.onclick=function(){
				var last=getLast(today);
		    	var first=getFirst(today);
		    	insertBefore(last,first)
		    	 today.style.left=-width_kuan+"px"
	            animate(today,{left:0},600)


			}	
		    
		    // 七 八 九楼
		    function eight(obj){
		    	var obj=obj;
		    	var mom=$(".mom")[obj];
			    var mom_hidden=$(".mom-hidden")[obj];
			    var kuan_width=$(".mom-hidden-one")[obj].offsetWidth			    
			    var mom_left=$(".mom-left")[obj]
			    var mom_right=$(".mom-right")[obj]	
			   var n=0;
			   var m=0;	
			    var circle_mom=$(".circle-mom",mom)			   
			    function move(){			 
			    	m=n+1;
			    	if(m>=circle_mom.length){
			    		m=0;
			    	}
			    	circle_mom[n].style.background="#3E3E3E"			    	
					circle_mom[m].style.background="#B61B1F"
					n=m;		    	
			    	animate(mom_hidden,{left:-kuan_width},800,function(){
			    		var First=getFirst(mom_hidden)
			    		mom_hidden.appendChild(First)
			            mom_hidden.style.left=0+"px"			    		
			    			
			    	})			    	
			  }	
			   var time=setInterval(move,4000)
			   mom.onmouseover=function(){
			   	animate(mom_left,{width:29},400)
			   	animate(mom_right,{width:29},400)
			   	clearInterval(time)
			   }
			    mom.onmouseout=function(){
			   	animate(mom_left,{width:0},400)
			   	animate(mom_right,{width:0},400)
			   	time=setInterval(move,4000)			   	

			   }
			   var circle_mom=$(".circle-mom",mom)
			 
			    mom_right.onclick=function(){
			    	move();
			    }	
			   
			     mom_left.onclick=function(){
			     	
			    	m=n-1;
			    	if(m<0){
			    		m=circle_mom.length-1;
			    	}
			    	circle_mom[n].style.background="#3E3E3E"			    	
					circle_mom[m].style.background="#B61B1F"
			    	n=m;
		    		var first=getFirst(mom_hidden)
		    		var last=getLast(mom_hidden)
		    		insertBefore(last,first)
		    		mom_hidden.style.left=-kuan_width+"px"
		    		animate(mom_hidden,{left:0},600)

			    }	    	    
		    }
		    eight(0);
		    eight(1);
		    eight(2);
		    eight(3);
		    eight(4);




		    var banner_hidden=$(".banner-left-hidden")
		    var banner_left=$(".banner-left-left")
		    var left_nav=$(".left-nav")		   
		    for(var i=0;i<banner_left.length;i++){
		 		hover(banner_left[i],function(){
					var ul=$(".banner-left-hidden",this);
					for(var i=0;i<ul.length;i++){
						ul[i].style.display="block";											
					}
				},function(){
					var ul=$(".banner-left-hidden",this);
					for(var i=0;i<ul.length;i++){
						ul[i].style.display="none";
					}
				})
	 	
			}	
			// 选项卡
			function onebuilding(obj,n){
				var one_building=obj
				var best_pro=$(".best-pro")[n]
				var one_top=$(".one-top-right-word",one_building);
				var hidden_kuang=$(".hidden-kuang",one_building)
				// console.log(hidden_kuang)
				var best_hidden=$(".best-pro-hidden",best_pro);
				var clothes_bot=$(".clothes-bot")				
				var obj=$(".top-top")  
			     for(var i=0;i<one_top.length;i++){
			            one_top[i].index=i; 
			            one_top[i].onmouseover=function(){
			            for(var j=0;j< best_hidden.length;j++){
			            	hidden_kuang[j].style.display="none"
			            best_hidden[j].className="best-pro-hidden"
			            clothes_bot[j].className="clothes-bot"
			          }
			          	hidden_kuang[this.index].style.display="block"
			           best_hidden[this.index].className="best-pro-hidden best-pro-hidden-first";
			         	clothes_bot[this.index].className="clothes-bot clothes-bot-first"
			           
			         }           
			    }
			}
			onebuilding($(".one-building")[0],0)		
			onebuilding($(".two-building")[1],1)
			onebuilding($(".two-building")[2],2)
			onebuilding($(".two-building")[3],3)
			onebuilding($(".two-building")[9],4)



				
			
			function twobuilding(n,m){
				var two_building=$(".two-building")[n];
				var beayty_pro=$(".beauty-pro")[m];	
				var hidden_kuang=$(".hidden-kuang",two_building)
											
				var beauty_hidden=$(".beauty-hidden",beayty_pro);
				var one_right=$(".one-top-right-word",two_building)
				for(var i=0;i<one_right.length;i++){
					one_right[i].index=i;
					one_right[i].onmouseover=function(){
						for(var j=0;j<beauty_hidden.length;j++){
			            	hidden_kuang[j].style.display="none"							
							beauty_hidden[j].className="beauty-hidden"

						}
			          	hidden_kuang[this.index].style.display="block"						
							beauty_hidden[this.index].className="beauty-hidden beauty-hidden-first"

					}
				}
			}
			twobuilding(0,0);
			twobuilding(4,1);
			twobuilding(5,2);
			twobuilding(6,3);
			twobuilding(7,4);
			twobuilding(8,5);





			

			// 隐藏
			var head_right_hidden=$(".head-right-hidden")[0];
			var head_right_hidden_first=$(".head-right-hidden-first")[0];
			var head_right_hidden_two=$(".head-right-hidden-two")[0];
			head_right_hidden.onmouseover=function(){
				head_right_hidden_first.style.display="block"
				 head_right_hidden_two.style.display="block"
			}
			head_right_hidden.onmouseout=function(){
				head_right_hidden_first.style.display="none"
				 head_right_hidden_two.style.display="none"

			}

			function hiddenDao(n,obj,abc){
				var head_right_hiddeno=n;
				var head_right_hidden_firsto=obj;
				var head_right_hidden_t=abc;
				head_right_hiddeno.onmouseover=function(){
					head_right_hidden_firsto.style.display="block"
					 head_right_hidden_t.style.display="block"
				}
				head_right_hiddeno.onmouseout=function(){
					head_right_hidden_firsto.style.display="none"
					 head_right_hidden_t.style.display="none"

				}
			}
			
			hiddenDao($(".head-right-hidden")[1],$(".head-right-hidden-first")[1],$(".head-right-hidden-t")[0])
			hiddenDao($(".head-right-hidden")[2],$(".head-right-hidden-first-first")[0],$(".head-right-hidden-er")[0])
			hiddenDao($(".head-right-hidden")[3],$(".head-right-hidden-first-first")[1],$(".head-right-hidden-buy")[0])
			hiddenDao($(".head-right-hidden")[4],$(".head-right-hidden-first")[2],$(".head-right-hidden-wzdh")[0])
			hiddenDao($(".shopping-cart")[0],$(".shopping-jidden-top")[0],$(".shopping-hidden")[0])
			hiddenDao($(".head-left")[0],$(".head-left-hidden-top")[0],$(".head-left-hidden")[0])

			// lunbo
		function phoneFive(obj,n,aa,left,right,img,cir){
			var  phone_left_top=obj
			var bao_phone=aa;			
			var best_left=left;
			var best_right=right;		
			var bao_width=bao_phone.offsetWidth
			var bao_img=img;				
			var bao_cir=cir;
			var flag=true;
			var m=0;
			var mext=0;		
			phone_left_top.onmouseover=function(){
				best_right.style.display="block"
				best_left.style.display="block"

			}
			phone_left_top.onmouseout=function(){
				best_right.style.display="none"
				best_left.style.display="none"

			}
			best_right.onclick=function(){
				if(flag==false){
					return;
				}
				flag=false;
				 mext=m+1;
		          if(mext>=bao_img.length){
		            mext=0;
		          }
		          bao_img[mext].style.left=bao_width+"px";
		          animate(bao_img[m],{left:-bao_width},600);
		          animate(bao_img[mext],{left:0},600,function(){flag=true})
		          bao_cir[m].style.backgroundColor="#3E3E3E"
		          bao_cir[mext].style.backgroundColor="#B61B1F"     
		          m=mext;
			}
			best_left.onclick=function(){
				if(flag==false){
					return;
				}
				flag=false;
				 mext=m-1;
		          if(mext<0){
		            mext=bao_img.length-1;
		          }
		          bao_img[mext].style.left=-bao_width+"px";
		          animate(bao_img[m],{left:bao_width},600);
		          animate(bao_img[mext],{left:0},600,function(){flag=true})
		           bao_cir[m].style.backgroundColor="#3E3E3E"
		          bao_cir[mext].style.backgroundColor="#B61B1F"        
		          m=mext;
			}
			

				
		}
		phoneFive($(".baobeauty-hidden")[0],0,$(".baobeauty-hidden")[0],$(".beautyt-left-left")[0],$(".beautyt-right-right")[0],$(".baobeauty",$(".baobeauty-hidden")[0]),$(".circle-beauty",$(".baobeauty-hidden")[0]));
		phoneFive($(".best-hidden-first")[0],0,$(".best-lunbo-second")[0],$(".best-left-lunbo")[0],$(".best-right-lunbo")[0],$(".best-lunbo-img",$(".best-hidden-first")[0]),$(".circle-best",$(".best-hidden-first")[0]));
		var obj=$(".phone-left-top")
		for(var i=0;i<obj.length;i++){
			phoneFive($(".phone-left-top")[i],i,$(".bao_phone")[i],$(".best-left-left")[i],$('.best-right-right')[i],$(".bao-phone-img",$(".phone-left-top")[i]),$(".circle-mom",$(".phone-left-top")[i]));
		}	




		// 天天特价
		var sale_m=$(".sale-m")
		var sale_border=$(".sale-m-border")
		var sale_pic=$(".salem-pic")		
		for(var i=0;i<sale_pic.length;i++){
			sale_pic[i].index=i;			
			sale_pic[i].onmouseover=function(){
				animate(sale_pic[this.index],{left:-12},500)

			}
			sale_pic[i].onmouseout=function(){
				animate(sale_pic[this.index],{left:10},500)

			}

		}

		var salem_pic=$(".salem-left-pic")[0];
			salem_pic.onmouseover=function(){
			animate(salem_pic,{left:25},500)
			}
			salem_pic.onmouseout=function(){
				animate(salem_pic,{left:35},500)
			}
			// 返回顶部
			var returntop=$(".returntop")[0];
			returntop.onclick=function(){
				// animate(document.body,{scrollTop:0},400)
		  //       animate(document.documentElement,{scrollTop:0},600)
				  document.body.scrollTop=0;
				  document.documentElement.scrollTop=0;
			}


			// 猜你喜欢
			var qx=$(".qing")[0];
			var like=$(".like")[0];			
			hover(like,function(){
				qx.style.left="0";	
				animate(qx,{left:844})
			},function(){						
				return;
			})

			// 绝对定位
			var small=$(".smallkid")
			var floor_right=$(".floor-right-right")
			var smalltwo=$(".smallkidtwo")
			var jdhy=$(".jdhy")
			var andthree=$(".andthree")
			for(var i=0;i<floor_right.length;i++){
				floor_right[i].index=i;
				floor_right[i].onmouseover=function(){
					for(var i=0;i<floor_right.length;i++){					
						small[i].style.display="block"
						smalltwo[i].style.display="none"					

					}
						small[this.index].style.display="none"
						smalltwo[this.index].style.display="block"
						andthree[this.index].style.background="#C81623"
						jdhy[this.index].style.background="#C81623"
						animate(jdhy[this.index],{right:35},400)						

					
				}
				floor_right[i].onmouseout=function(){
						small[this.index].style.display="block"					
						smalltwo[this.index].style.display="none"
						andthree[this.index].style.background="#7A6E6E"
						animate(jdhy[this.index],{right:-60},400)
						jdhy[this.index].style.background="#7A6E6E"


				}
			}


			// 天天特价上下节点轮播			
			// var sale_right=$(".sale-right")[0];
			// var saleul=$(".saleul")[0];		
			// var saleli=$("li",sale_right)
			// var ulhei=saleli[0].offsetHeight;
			// console.log(sale_right,saleul,ulhei,saleli)
			// var t1=setInterval(sal,500)
			// function sal(){
			// 	animate(saleul,{top:-ulhei},800,function(){
			// 		var first=getFirst(saleul)
			// 		saleul.appendChild(first)
			// 		saleul.style.top="0";
			// 	})
			// }


			
	}


		 
