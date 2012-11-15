$MOD('frame.url_for', {
    'avatar': function(userid){ return '/avatar/' + userid },
    'board': function(boardname){ return '#!board?boardname=' + boardname},
    'board_i': function(index, boardname){
        return '#!board?boardname=' + boardname + '&&index=' + index;
    },
    'user': function(userid){ return '#!user?userid=' + userid},
    'img' : function(path){ return 'img/' + path },
    'post': function(filename, boardname){
        return '#!flow?filename=' + filename + '&&boardname='
            + boardname;
    },
    'topic' : function(filename, boardname){
        return '#!topic?filename=' + filename + '&&boardname=' + boardname;
    },
})
