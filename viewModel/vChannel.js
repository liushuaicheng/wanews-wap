(function(gg,$){
    gg.viewModel('vChannel',['channel',function(channel){
        var that=this;
        return {
            getContent:function(param,resolve,reject){
                channel.getData({newsAuthToken:sessionStorage.getItem('newsAuthToken'),id:param.id,since:param.since},function(res){
                    resolve(res);
                },reject);
            },
            getLists:function(param,resolve,reject){
                channel.getList({newsAuthToken:sessionStorage.getItem('newsAuthToken')},function(res){
                    resolve(res);
                },reject);
            },
            getDynamicDetails:function(param,resolve,reject){
                channel.getDynamicDetail({newsAuthToken:sessionStorage.getItem('newsAuthToken'),id:param.id},function(res){
                    resolve(res);
                },reject);
            },
            getStaticDetails:function(param,resolve,reject){
                channel.getStaticDetail({newsAuthToken:sessionStorage.getItem('newsAuthToken'),id:param.id},function(res){
                    resolve(res);
                },reject);
            },
            getActions:function(param,resolve,reject){
                channel.getAction({newsAuthToken:sessionStorage.getItem('newsAuthToken'),id:param.id,actionType:param.actionType,objectType:param.objectType,num:param.num},function(res){
                    resolve(res);
                },reject);
            },
            getTagLists:function(param,resolve,reject){
                channel.getTagList({newsAuthToken:sessionStorage.getItem('newsAuthToken')},function(res){
                    resolve(res);
                },reject);
            },
            getSearchInfos:function(param,resolve,reject){
                channel.getSearchInfo({newsAuthToken:sessionStorage.getItem('newsAuthToken')},function(res){
                    resolve(res);
                },reject);
            },
            getTopics:function(param,resolve,reject){
                channel.getTopic({newsAuthToken:sessionStorage.getItem('newsAuthToken'),id:param.id},function(res){
                    resolve(res);
                },reject);
            },
            getComments:function(param,resolve,reject){
                channel.getComment({newsAuthToken:sessionStorage.getItem('newsAuthToken'),id:param.id},function(res){
                    resolve(res);
                },reject);
            },
            getCommentDetails:function(param,resolve,reject){
                channel.getCommentDetail({newsAuthToken:sessionStorage.getItem('newsAuthToken'),id:param.id},function(res){
                    resolve(res);
                },reject);
            },
            getImages:function(param,resolve,reject){
                channel.getImage({newsAuthToken:sessionStorage.getItem('newsAuthToken'),id:param.id},function(res){
                    resolve(res);
                },reject);
            }

        }
    }]);
})(window.gg,jQuery);