function getClass(classname,ranger){
	ranger=ranger?ranger:document;
	if(document.getElementsByClassName){
		return ranger.getElementsByClassName(classname);
	}else{
		var newarr=[];
		var all=ranger.getElementsByClassName('*');
		 for(var i=0;i<all.length;i++){
		 	if(checkClass(all[i].className,classname)){   
		 		//当前元素是否包含传进来的类名
		 		//         当前元素的类名，传进来的类名
		 		newarrr.push(all[i]);
		 	}
		 }
		 return newarr;
	}
}
function checkClass(className,classname){
	var arr=className.split('');  
	//当前元素的类名拆分
	for(var i=0;i<arr.length;i++){   //遍历
		if(arr[i]==classname){       //存在返回true，不存在false
			return true;
		}
	}
	return false;
}
//$获取指定元素
//$(select)
//select  字符串，类似选择器
function $(select,ranger){
    if(typeof select=='string'){
        ranger=ranger?ranger:document;
        var first=select.charAt(0);
        if(first=='.'){
            return getClass(select.substring(1));
        }else if(first=='#'){
            return document.getElementById(select.substring(1));
        }else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
            return ranger.getElementsByTagName(select);
        }
    }else if(typeof select=='function'){
        window.addEventListener('load',select);
    }

}
//正则  创建一个正则对象   方法-test  满足方法，true 不满足，false
///^[a-z][a-z1-6]{0,7}$/.test(select);
 //第一位字符  第二位  出现次数，最少0次，最多7次