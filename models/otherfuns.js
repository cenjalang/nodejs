module.exports={      
    fun2:function(res){      
        console.log('fun2');  
        res.write("你好,我是fun2");    
    },      
    fun3:function(res){      
        console.log('fun3'); 
        res.write("你好,我是fun3");     
    }   
}      
/*
function  controller(req,res){      
    //res.write("发送");      
    console.log('call');       
    res.end("");      
}      

module.exports  =  controller;    //只支持一个函数    
*/